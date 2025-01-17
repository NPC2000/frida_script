//@ts-nocheck
import {inline_hook,_inline_hook} from "./so/inlinehook.js"
import {hook_func} from "./so/hook_func.js"
import { so_method } from "./so/so_method.js"

import {trace} from "./java/trace.js"
import {trace_change} from './java/trace_change.js'
import {all_so} from "./so/all_so.js"
import {so_info} from "./so/so_info.js"
import {scan} from "./so/scan.js"
import { init_array } from "./so/init_array.js"
// import { hook_string } from "./java/stringBuilder.js"
import { hook_file } from "./java/file.js"
import {findClass} from './java/findClass.js'
import {all_java} from './java/all_java.js'
Java.perform(function () {
// import { one_instance } from "./java/one_instance.js"
// import { encryption } from "./java/encryption.js"
// import { findClass } from "./java/findClass.js"
// import {anti_InMemoryDexClassLoader} from './java/anti_InMemoryDexClassLoader';

// native层
// so_method('libnative-lib.so')
// setTimeout(all_so,5000)
// so_info('libsscronet.so')
// inline_hook('libOnLoad.so',0x9E0)
// init_array()
// scan()
// all_so()
// hook_func('libc.so','openat')

//java
// trace_change()
trace("com.appsflyer.internal.AFe1fSDK",'AFInAppEventParameterName')
// trace("com.appsflyer.internal.AFe1fSDK")

// setTimeout(trace,3000,'com.alibaba.minilibc.android.MtopMethodJniBridge')
// all_java('com.alibaba.minilibc.android.MtopMethodJniBridge')
// setTimeout(all_java,5000)
// findClass('com.alibaba.minilibc.android.MtopMethodJniBridge')

// hook_file()
// trace('com.alibaba.wireless.security.open.SecException')
// trace('com.uc.crashsdk.JNIBridge')
// trace('dalvik.system.BaseDexClassLoader')

// setTimeout(trace,1000,'com.appsflyer.internal.AFa1xSDK$AFa1wSDK','values')
// hook_hashmap()
// trace('java.util.HashMap','put')
// trace('java.lang.ClassLoader','findClass')
// trace('ava.lang.reflect.Method','invoke')
// hook_string()
// encryption()
// anti_InMemoryDexClassLoader()
})