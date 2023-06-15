
本文旨在帮助 uts 插件开发者和使用者，快速了解在MAC环境真机运行时 CocoaPods 的安装方法，以及 CocoaPods 使用过程中常见错误处理

> 此功能 HBuilder X 3.8.5+ 版本支持

## CocoaPods install

CocoaPods安装

正常安装 CocoaPods 需要在终端执行下述命令

```
sudo gem install cocoapods
```

- 如果执行之后报下面的错误

```
ERROR:  Error installing cocoapods:
        The last version of activesupport (>= 5.0, < 8) to support your Ruby & RubyGems was 6.1.7.3. Try installing it with `gem install activesupport -v 6.1.7.3` and then running the current command again
        activesupport requires Ruby version >= 2.7.0. The current ruby version is 2.6.10.210.
```
说明缺少activesupport插件，在终端执行以下命令

```
sudo gem install activesupport -v 6.1.7.3
```
安装成功后再次执行 sudo gem install cocoapods 安装 CocoaPods.


- 如果执行命令之后报错，说明需要升级 gem 和 ruby

```
Building native extensions. This could take a while...
ERROR: Error installing cocoapods:
ERROR: Failed to build gem native extension.
current directory: /Library/Ruby/Gems/2.6.0/gems/ffi-1.15.5/ext/ffi c
/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/bin/ruby-I/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0-r./siteconf20230612-9566-nht0td.rbextconf.rb
mkmf.rb can't find header files for ruby at /System/Library/Frameworks/Ruby.framework/Versions/2.6/us/lib/ruby/include/ruby.h
You might have to install separate package for the ruby development environment, ruby-dev or ruby-devel for example.
extconf failed, exit code 1
Gem files will remain installed in /Library/Ruby/Gems/2.6.0/gems/ffi-1.15.5 for inspection.
Results logged to /Library/Ruby/Gems/2.6.0/extensions/universal-darwin-22/2.6.0/ffi-1.15.5/gem make.out
```

下面是升级 Gem 和 Ruby 的方法

### 升级 Gem

Gem 是管理 Ruby 标准包,如果 Gem 版本过低可能造成无法安装 CocoaPods,升级 Gem 使用下述命令

```
gem -v  //查看当前gem版本
sudo gem update --system　  //升级gem
```

### 升级 Ruby

MacOS 会自带 Ruby，但可能系统的Ruby版本过低，导致无法安装 CocoaPods, 可通过以下方式更新 Ruby

- 如果没有安装 Homebrew，可以先在终端中输入以下命令安装 Homebrew：

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Ruby 的升级有以下两种常见的方式，可任选其中一种：

#### 通过 RVM 升级 Ruby

- 安装 RVM：在终端中输入以下命令安装 RVM：

```
curl -sSL https://get.rvm.io | bash -s stable
```

这个命令会从 RVM 官网下载安装脚本并运行。安装完成后，需要在终端中执行以下命令以便让 RVM 生效：

```
source ~/.rvm/scripts/rvm
```

- 查看 rvm 版本

```
rvm -v
```

- 查看可安装的 ruby 版本列表

```
rvm list known
```

- 安装指定 ruby 版本（eg:安装 ruby 3.0.0版本）

```
rvm install ruby-3.0.0
```

- 切换 Ruby 使用版本（eg:指定使用3.0.0版本）

```
rvm use ruby-3.0.0
```

#### 通过 Homebrew 升级 Ruby

在终端执行如下命令

```
 brew install ruby
```

安装完成后，ruby 默认使用的是系统自带的版本

- 查看版本号

```
ruby -v
```
- 查看 ruby 安装路径

```
 which ruby
```
- 配置环境变量

```
 echo 'export PATH="/opt/homebrew/opt/ruby/bin:$PATH"' >> ~/.zshrc
```
- 配置完成后重启终端，再次查看 Ruby 版本号，校验是否为安装的 Ruby版本


### 安装 CocoaPods

升级完 Gem 和 Ruby 后，在终端输入如下命令，

```
sudo gem install cocoapods
```
这会耗费一段时间，完成后可查看 cocoapods 的版本号

```
pod --version
```
也可以查看 pod 的安装位置

```
which pod
```

在 cocoapods 安装完后需要更新一次本地 repo 仓库，在终端执行

```
pod repo update
```
这将耗费较长时间，请耐心等待。

至此 CocoaPods 已经安装完成，可以尝试 Search 下一 pod 库：

```
pod search Alamofire
```


## pod依赖库使用过程中常见错误及处理方式说明

### MAC 环境真机运行 uts 插件时未安装 CocoaPods

错误信息：uni_module [xxxx](iOS)存在pod三方依赖库，请先安装 CocoaPods！
说明：出现此错误是因为当前环境没有安装 CocoaPods
处理方法： 请参照上述章节描述的方式安装 CocoaPods 工具。

### 指定的 pod 库在本地 repo 仓库找不到索引

错误信息：CocoaPods could not find compatible versions for pod "xxx"
报错示例：

```ts
'Analyzing dependencies\n' +
    '[!] CocoaPods could not find compatible versions for pod "HandyJSON":\n' +
    '  In Podfile:\n' +
    '    HandyJSON (= 2.0.2)\n' +
    '\n' +
    'None of your spec sources contain a spec satisfying the dependency: `HandyJSON (= 2.0.2)`.\n' +
    '\n' +
    'You have either:\n' +
    ' * out-of-date source repos which you can update with `pod repo update` or with `pod install --repo-update`.\n' +
    ' * mistyped the name or version.\n' +
    ' * not added the source repo that hosts the Podspec to your Podfile.\n',
```

说明：出现此错误是因为执行 pod install 时在本地 repo 仓库未找到对应的库索引。
处理方法：

- 请首先确保配置的 pod 库 name 正确，配置的 version 不高于 pod 库发行的最高版本号， 未使用私有仓库 pod 库。
- 真机运行时在终端手动执行 pod repo update 命令。(说明：由于pod repo update 较为耗时，为了保证编译速度，避免无必要的 pod repo update, 插件内部只执行了 pod install),
- 云打包时请重新打包，或者联系管理员。

### pod库下载失败

错误信息示例：

- 示例一

```ts
'[!] Error installing Alamofire\n' +
'[!] /usr/bin/git clone https://github.com/Alamofire/Alamofire.git /var/folders/9h/2znqhy813g932mrj_c9f781w0000gn/T/d20230614-22451-49mc32 --template= --single-branch --depth 1 --branch 5.7.1\n' +
'\n' +
"Cloning into '/var/folders/9h/2znqhy813g932mrj_c9f781w0000gn/T/d20230614-22451-49mc32'...\n" +
"fatal: unable to access 'https://github.com/Alamofire/Alamofire.git/': error:02FFF03C:system library:func(4095):Operation timed out\n",
```

- 示例二

```ts
"[!] CDN: trunk URL couldn't be downloaded: https://cdn.cocoapods.org/all_pods_versions_8_e_e.txt Response: Couldn't resolve host name\n",
```

- 示例三

```ts
'[!] CDN: trunk Repo update failed - 75 error(s):'
```

说明： 出现此类错误是因为网络超时、不能正常访问 github、或者需要翻墙。

处理方式：
- 真机运行：检查您的网络，确保网络顺畅，且可以正常访问github，某些pod库的下载可能需要翻墙。在网络不好时，请多试几次。
- 云打包：请重新打包，或者联系管理员。