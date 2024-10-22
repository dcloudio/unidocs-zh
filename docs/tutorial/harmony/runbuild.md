# 运行和发行

## 证书签名配置指南@signature

[待补充]

## 权限配置指南@permission

[待补充]

## 更多配置指南@moreconfig

项目的根目录下有一个 `harmony-configs` 目录，每当执行跟鸿蒙相关的操作时，HX 都会检查这个目录，如果目录不存在则会自动创建。该目录中初始会存在几个常用的配置文件。

在执行运行或者发行到鸿蒙的操作过程中，HX 会根据内置模板生成一个鸿蒙工程目录（一般在 `unpackage` 目录下游），然后把 `harmony-configs` 目录下的所有内容都原样覆盖过去，
然后再调用鸿蒙的工具链进行编译打包等操作。

所以，`harmony-configs` 目录中的所有文件最终都会原样进入鸿蒙工程目录参与项目构建，所有需要对鸿蒙工程的定制化配置都可以写在这个目录下（注意：在 `manifest.json` 的【鸿蒙配置】中设置的选项将具有更高的优先级）。

关于 `harmony-configs` 目录的使用要遵守鸿蒙的技术规范，具体可参考 [鸿蒙官方文档](https://developer.huawei.com/consumer/cn/doc/harmonyos-guides-V5/application-configuration-file-stage-V5)
