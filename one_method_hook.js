var class_loader = "ms.bd.o.k";
var target_method = 'b';

(function () {
    let Color = {
        RESET: "\x1b[39;49;00m",
        Black: "0;01",
        Blue: "4;01",
        Cyan: "6;01",
        Gray: "7;11",
        "Green": "2;01",
        Purple: "5;01",
        Red: "1;01",
        Yellow: "3;01"
    };
    let LightColor = {
        RESET: "\x1b[39;49;00m",
        Black: "0;11",
        Blue: "4;11",
        Cyan: "6;11",
        Gray: "7;01",
        "Green": "2;11",
        Purple: "5;11",
        Red: "1;11",
        Yellow: "3;11"
    };
    var colorPrefix = '\x1b[3', colorSuffix = 'm'
    for (let c in Color) {
        if (c == "RESET") continue;
        console[c] = function (message) {
            console.log(colorPrefix + Color[c] + colorSuffix + message + Color.RESET);
        }
        console["Light" + c] = function (message) {
            console.log(colorPrefix + LightColor[c] + colorSuffix + message + Color.RESET);
        }
    }
})();

function getRealClassName(obj) {
    const objClass = Java.use("java.lang.Object").getClass.apply(obj);
    return Java.use("java.lang.Class").getName.apply(objClass)
}

function main() {
    console.Blue("start");
    Java.perform(function () {
        Java.enumerateClassLoaders({
            onMatch: function (loader) {
                try {
                    if (loader.findClass(class_loader)) {
                        console.Blue("Successfully found loader")
                        Java.classFactory.loader = loader;
                        console.Blue("Switch Classloader Successfully ! ")
                    }
                } catch (e) {
                }
            },
            onComplete: function () {
            }
        });
        Java.enumerateLoadedClasses({
            onMatch: function (class_name) {
                //输出所有类
                // console.log(className)
                if (class_name.toString().toLowerCase() === class_loader.toLowerCase()) {
                    try {
                        var hook = Java.use(class_loader);
                        var overloads = hook[target_method].overloads;
                        for (var i = 0; i < overloads.length; i++) {
                            overloads[i].implementation = function () {
                                var retval = this[target_method].apply(this, arguments);

                                //输出函数参数
                                for (var j = 0; j < arguments.length; j++) {
                                    console.Blue(arguments[j])
                                }
                                console.Green("retval:" + retval);

                                // console.log('a1: ' + arguments[0]);
                                // console.log('a2: ' + arguments[1]);
                                // console.log('a3: ' + arguments[2]);
                                // console.log('a4: ' + arguments[3]);
                                // var arg5 = arguments[4];
                                // Java.openClassFile("/data/local/tmp/r0gson.dex").load();
                                // const gson = Java.use('com.r0ysue.gson.Gson');
                                // console.log('a5: ' + gson.$new().toJson(arg5));
                                // console.log('retval: ' + gson.$new().toJson(retval));
                                return retval;
                            }

                        }
                    } catch (e) {
                        console.Red(e)
                    }
                }
            }, onComplete: function () {
            }
        })

    })
}

setTimeout(main, 0)


var isLite = false;
var ByPassTracerPid = function () {
    var fgetsPtr = Module.findExportByName("libc.so", "fgets");
    var fgets = new NativeFunction(fgetsPtr, 'pointer', ['pointer', 'int', 'pointer']);
    Interceptor.replace(fgetsPtr, new NativeCallback(function (buffer, size, fp) {
        var retval = fgets(buffer, size, fp);
        var bufstr = Memory.readUtf8String(buffer);
        if (bufstr.indexOf("TracerPid:") > -1) {
            Memory.writeUtf8String(buffer, "TracerPid:\t0");
            // console.log("tracerpid replaced: " + Memory.readUtf8String(buffer));
        }
        return retval;
    }, 'pointer', ['pointer', 'int', 'pointer']));
};
