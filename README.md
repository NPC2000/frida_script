# frida_script

node版本要升级一下
```
sudo npm install n -g
sudo n stable
hash -r
```

运行make安装<br>
每次用时先运行npm run watch然后改代码改index.ts文件,运行时运行命令frida -U -f 包名 --no-pause -l _agent.js

新版的frida可以直接运行ts文件
包名可以用adb shell dumpsys window | grep mCurrentFocus查看最前端的app

1. dump.so.py 运行:python .\dump_so.py libsgmainso-6.5.75.so
2. java/findClass.ts 有一些dex会延迟加载，这样无论在什么时候进行hook
3. encryption.ts java层自吐加密算法
4. one_instance.ts hook一个类的实例化时候
5. stringBuilder.ts 和JsonObject.ts 两个类，对有时候没有思路hook一下有奇效
6. so_method.ts 输出所有 so 的方法
7. all_java.ts 输出所有 java 的方法，包括隐藏的，真正解决一代壳加载的问题