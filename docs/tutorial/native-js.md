## 概述
Native.js技术，简称NJS，是一种将手机操作系统的原生对象转义，映射为JS对象，在JS里编写原生代码的技术。
如果说Node.js把js扩展到服务器世界，那么Native.js则把js扩展到手机App的原生世界。
HTML/JS/Css全部语法只有7万多，而原生语法有几十万，Native.js大幅提升了HTML5的能力。
NJS突破了浏览器的功能限制，也不再需要像Hybrid那样由原生语言开发插件才能补足浏览器欠缺的功能。
NJS编写的代码，最终需要在HBuilder里打包发行为App安装包，或者在支持Native.js技术的浏览器里运行。目前Native.js技术不能在普通手机浏览器里直接运行。

- NJS大幅扩展了HTML5的能力范围，原本只有原生或Hybrid App的原生插件才能实现的功能如今可以使用JS实现。
- NJS大幅提升了App开发效率，将iOS、Android、Web的3个工程师组队才能完成的App，变为1个web工程师就搞定。
- NJS不再需要配置原生开发和编译环境，调试、打包均在HBuilder里进行。没有mac和xcode一样可以开发iOS应用。
- 如果不熟悉原生API也没关系，我们汇总了很多NJS的代码示例，复制粘贴就可以用。[http://ask.dcloud.net.cn/article/114](http://ask.dcloud.net.cn/article/114)

再次强调，Native.js不是一个js库，不需要下载引入到页面的script中，也不像nodejs那样有单独的运行环境，Native.js的运行环境是集成在5+runtime里的，使用HBuilder打包的app或流应用都可以直接使用Native.js。

## 注意事项：
Uni-app不支持Native.js执行UI相关操作的API调用及webview相关API调用。将失效无法正常使用。Uni-app不推荐使用Native.js

### 技术要求
由于NJS是直接调用Native API，需要对Native API有一定了解，知道所需要的功能调用了哪些原生API，能看懂原生代码并参考原生代码修改为JS代码。
否则只能直接copy别人写好的NJS代码。

## 开始使用
### 判断平台
Native API具有平台依赖性，所以需要通过以下方式判断当前的运行平台：
``` javascript
function judgePlatform(){
	switch ( plus.os.name ) {
		case "Android":
		// Android平台: plus.android.*
		break;
		case "iOS":
		// iOS平台: plus.ios.*
		break;
		default:
		// 其它平台
		break;
	}
}
```

### 类型转换
在NJS中调用Native API或从Native API返回数据到NJS时会自动转换数据类型。
#### 类型转换表
| 类型      |    Objective-C | Java  | JavaScript  |
| :-------- | --------:| :--: | :--: |
| 基本数据  | byte/short/int/long/float/double/... |  byte/short/int/long/float/double/...   |  Number  |
| 字符      |    char            |  char      |  String  |
| 字符串    |    NSString/@""    | String/""  |  String  |
|  数组     |  @[1,2,3]/NSArray  | new XXX[]  |  InstanceObject |
|   类      |  @interface        |  class     |  ClassObject    |
| 对象（实例）| *                |  *         |  InstanceObject |
| 空对象    |  nil               |  null      |  null           |
|  其它     |  Protocol          |  Interface |  Object(JSON)   |

### 其他转换
- Android原生应用的主Activity对象 转为plus.android.runtimeMainActivity()
Android的主Activity对象是启动应用时自动创建的，不是代码创建，此时通过plus.android.runtimeMainActivity()方法获取该Activity对象
- Objective-C方法冒号剔除
[pos setPositionX:(int)x Y:(int)y;]  转为 pos.setPositionXY(x,y);
OC语法中方法的定义格式为:
“(返回值类型) 函数名: (参数1类型) 形参1 参数2名称: (参数2类型) 形参2”
方法的完整名称为: “函数名:参数2名称:”。
如:“（void）setPositionX:(int)x Y:(int)y;”，方法的完整名称为“setPositionX:Y:”，调用时语法为：“[pos setPositionX:x Y:y];”。
在JS语法中函数名称不能包含“:”字符，所以OC对象的方法名映射成NJS对象方法名时将其中的“:”字符自动删除，上面方法名映射为“setPositionXY”，在NJS调用的语法为：“pos.setPositionXY(x,y);”。
- 文件路径转换
Web开发里使用的image/1.png是该web工程的相对路径，而原生API中经常需要使用绝对路径，比如/sdcard/apptest/image/1.png，此时使用这个扩展方法来完成转换：plus.io.convertLocalFileSystemURL("image/1.png")

### 概念
#### 类对象
由于JavaScript中本身没有类的概念，为了使用Native API层的类，在NJS中引入了类对象（ClassObject）的概念，用于对Native中的类进行操作，如创建类的实例对象、访问类的静态属性、调用类的静态方法等。其原型如下：
``` javascript
Interface ClassObject {
    function Object plusGetAttribute( String name );
    function void plusSetAttribute( String name, Object value );
}
```

**获取类对象**
在iOS平台我们可以通过plus.ios.importClass(name)方法导入类对象，参数name为类的名称；在Android平台我们可以通过plus.android.importClass(name)方法导入类对象，其参数name为类的名称，必须包含完整的命名空间。

**示例：**
``` javascript
// iOS平台导入NSNotificationCenter类
var NSNotificationCenter = plus.ios.importClass("NSNotificationCenter");

// Android平台导入Intent类
var Intent = plus.android.importClass("android.content.Intent");
```
获取类对象后，可以通过类对象“.”操作符获取类的静态常量属性、调用类的静态方法，类的静态非常量属性需通过plusGetAttribute、plusSetAttribute方法操作。

#### 实例对象
在JavaScript中，所有对象都是Object，为了操作Native层类的实例对象，在NJS中引入了实例对象（InstanceObject）的概念，用于对Native中的对象进行操作，如操作对象的属性、调用对象的方法等。其原型如下：
``` javascript
Interface InstanceObject {
    function Object plusGetAttribute( String name );
    function void plusSetAttribute( String name, Object value );
}
```
**获取实例对象**
有两种方式获取类的实例对象，一种是调用Native API返回值获取，另一种是通过new操作符来创建导入的类对象的实例，如下：
``` javascript
// iOS平台导入NSDictionary类
var NSDictionary = plus.ios.importClass("NSDictionary");
// 创建NSDictionary的实例对象
var ns = new NSDictionary();

// Android平台导入Intent类
var Intent = plus.android.importClass("android.content.Intent");
// 创建Intent的实例对象
var intent = new Intent();
```
获取实例对象后，可以通过实例对象“.”操作符获取对象的常量属性、调用对象的成员方法，实例对象的非常量属性则需通过plusGetAttribute、plusSetAttribute方法操作。

#### 操作对象的属性方法
- 常量属性
获取对象后就可以通过“.”操作符获取对象的常量属性，如果是类对象则获取的是类的静态常量属性，如果是实例对象则获取的是对象的成员常量属性。

- 非常量属性
如果Native层对象的属性值在原生环境下被更改，此时使用“.”操作符获取到对应NJS对象的属性值就可能不是实时的属性值，而是该Native层对象被映射为NJS对象那一刻的属性值。
为获取获取Native层对象的实时属性值，需调用NJS对象的plusGetAttribute(name)方法，参数name为属性的名称，返回值为属性的值。调用NJS对象的plusSetAttribute(name,value)方法设置Native层对象的非常量属性值，参数name为属性的名称，value为要设置新的属性值。
`注意：使用plusGetAttribute(name)方法也可以获取Native层对象的常量属性值，但不如直接使用“.”操作符来获取性能高。`

- 方法
获取对象后可以通过“.”操作符直接调用Native层方法，如果是类对象调用的是Native层类的静态方法，如果是实例对象调用的是Native层对象的成员方法。
`注意：在iOS平台由于JS语法的原因，Objective-C方法名称中的“:”字符转成NJS对象的方法名称后将会被忽略，因此在NJS中调用的方法名需去掉所有“：”字符。`

- 类的继承
Objective-C和Java中类如果存在继承自基类，在NJS中对应的对象会根据继承关系递归将所有基类的公有方法一一换成NJS对象的方法，所有基类的公有属性也可以通过其plusGetAttribute、plusSetAttribute方法访问。

### 开始写NJS
使用NJS调用Native API非常简单，基本步骤如下：
1. 导入要使用到的类；
2. 创建类的实例对象（或者调用类的静态方法创建）；
3. 调用实例对象的方法；

以下例子使用NJS调用iOS和Android的原生弹出提示框（类似但不同于js的alert）。

#### Android
以下代码在Android平台展示调用Native API显示系统提示框。
首先是Android原生 Java代码，用于比对参考：
``` java
import android.app.AlertDialog;
//...
// 创建提示框构造对象，Builder是AlertDialog的内部类。参数this指代Android的主Activity对象，该对象启动应用时自动生成
AlertDialog.Builder dlg = new AlertDialog.Builder(this);
// 设置提示框标题
dlg.setTitle("自定义标题");
// 设置提示框内容
dlg.setMessage("使用NJS的原生弹出框，可自定义弹出框的标题、按钮");
// 设置提示框按钮
dlg.setPositiveButton("确定(或者其他字符)", null);
// 显示提示框
dlg.show();
//...
```
Native.js代码：
``` javascript
/**
 * 在Android平台通过NJS显示系统提示框
 */
function njsAlertForAndroid(){
	// 导入AlertDialog类
	var AlertDialog = plus.android.importClass("android.app.AlertDialog");
	// 创建提示框构造对象，构造函数需要提供程序全局环境对象，通过plus.android.runtimeMainActivity()方法获取
	var dlg = new AlertDialog.Builder(plus.android.runtimeMainActivity());
	// 设置提示框标题
	dlg.setTitle("自定义标题");
	// 设置提示框内容
	dlg.setMessage("使用NJS的原生弹出框，可自定义弹出框的标题、按钮");
	// 设置提示框按钮
	dlg.setPositiveButton("确定(或者其他字符)",null);
	// 显示提示框
	dlg.show();
}
//...
```
`注意：NJS代码中创建提示框构造对象要求传入程序全局环境对象，可通过plus.android.runtimeMainActivity()方法获取应用的主Activity对象，它是HTML5+应用运行期自动创建的程序全局环境对象。`

Android设备上运行效果图：
![Android Native.js示例运行效果图](http://www.dcloud.io/docs/a/njs/android_alert.png)
`注意：其实HTML5+规范已经封装过原生提示框消息API：plus.ui.alert( message, alertCB, title, buttonCapture)。此处NJS的示例仅为了开发者方便理解，实际使用时调用plus.ui.alert更简单，性能也更高。**

#### iOS
以下代码在iOS平台展示调用Native API显示系统提示对话框。
iOS原生Objective-C代码，用于比对参考：
``` objc
#import <UIKit/UIKit.h>
//...
// 创建UIAlertView类的实例对象
UIAlertView *view = [UIAlertView alloc];
// 设置提示对话上的内容
[view initWithTitle:@"自定义标题" // 提示框标题
    message:@"使用NJS的原生弹出框，可自定义弹出框的标题、按钮" // 提示框上显示的内容
    delegate:nil // 点击提示框后的通知代理对象，nil类似js的null，意为不设置
    cancelButtonTitle:@"确定(或者其他字符)" // 提示框上取消按钮的文字
    otherButtonTitles:nil]; // 提示框上其它按钮的文字，设置为nil表示不显示
// 调用show方法显示提示对话框，在OC中使用[]语法调用对象的方法
[view show];
//...
```
Native.js代码：
``` javascript
/**
 * 在iOS平台通过NJS显示系统提示框
 */
function njsAlertForiOS(){
	// 导入UIAlertView类
	var UIAlertView = plus.ios.importClass("UIAlertView");
	// 创建UIAlertView类的实例对象
	var view = new UIAlertView();
	// 设置提示对话上的内容
	view.initWithTitlemessagedelegatecancelButtonTitleotherButtonTitles("自定义标题" // 提示框标题
	    , "使用NJS的原生弹出框，可自定义弹出框的标题、按钮" // 提示框上显示的内容
	    , null // 操作提示框后的通知代理对象，暂不设置
	    , "确定(或者其他字符)" // 提示框上取消按钮的文字
	    , null ); // 提示框上其它按钮的文字，设置为null表示不显示
	// 调用show方法显示提示对话框，在JS中使用()语法调用对象的方法
	view.show();
}
//...
```
`注意：在OC语法中方法的定义格式为:
“(返回值类型) 函数名: (参数1类型) 形参1 参数2名称: (参数2类型) 形参2”
方法的完整名称为: “函数名:参数2名称:”。
如:“（void）setPositionX:(int)x Y:(int)y;”，方法的完整名称为“setPositionX:Y:”
调用时语法为：“[pos setPositionX:x Y:y];”。
在JS语法中函数名称不能包含“:”字符，所以OC对象的方法名映射成NJS对象方法名时将其中的“:”字符自动删除，上面方法名映射为“setPositionXY”，在NJS调用的语法为：“pos.setPositionXY(x,y);”。`
iOS设备上运行效果图：
![iOS Native.js示例运行效果图](http://www.dcloud.io/docs/a/njs/ios_alert.png)
`注意：其实HTML5+规范已经封装过原生提示框消息API：plus.ui.alert( message, alertCB, title, buttonCapture)。此处NJS的示例仅为了开发者方便理解，实际使用时调用plus.ui.alert更简单、性能也更高。

在HBuilder自带的Hello H5+模板应用中“Native.JS”（plus/njs.html）页面有完整的源代码，可真机运行查看效果。

## 常用API
### API on Android
为了能更好的理解NJS调用Java Native API，我们在Android平台用Java实现以下测试类，将在会后面API说明中的示例来调用。
文件NjsHello.java代码如下：
``` java
package io.dcloud;

// 定义类NjsHello
public class NjsHello {
	// 静态常量
	public static final int CTYPE = 1;
	// 静态变量
	public static int count;
	// 成员常量
	public final String BIRTHDAY = "2013-01-13";
	// 成员变量
	String name; //定义属性name
	NjsHelloEvent observer;
	public void updateName( String newname ) { //定义方法updateName
		name = newname;
	}
	public void setEventObserver( NjsHelloEvent newobserver ) {
		observer = newobserver;
	}
	public void test() { //定义方法test
		System.out.printf( "My name is: %s", name );
		observer.onEventInvoked( name );
	}
	public static void testCount() {
		System.out.printf( "Static count is:%d", count );
	}
	static{  // 初始化类的静态变量
		NjsHello.count = 0;
	}
}
```
文件NjsHelloEvent.java代码如下：
``` java
package io.dcloud;

// 定义接口NjsHelloEvent
public interface NjsHelloEvent {
	public void onEventInvoked( String name );
}
```
`注：此NjsHello示例仅为了说明原生代码与NJS代码之间的映射关系，以下示例代码无法直接在HBuilder里真机运行，必须在以后HBuilder开放自定义打包后方可把NjsHello类打入app并被NJS调用。实际使用中，这种需要并非必要，大多数情况可以通过直接写NJS代码调用操作系统API，而无需由原生语言二次封装类供JS调用。`

#### plus.android.importClass
导入Java类对象，方法原型如下：
``` js
ClassObject plus.android.importClass( String classname );
```
导入类对象后，就可以通过“.”操作符直接调用对象（类对象/实例对象）的常量和方法。
classname：要导入的Java类名，必须是完整的命名空间（使用"."分割），如果指定的类名不存在，则导入类失败，返回null。

`注意：导入类对象可以方便的使用“.”操作符来调用对象的属性和方法，但也会消耗较多的系统资源。因此导入过多的类对象会影响性能，此时可以使用“高级API”中提供的方法在不导入类对象的情况下调用Native API。`

**示例：**
1. 导入类对象
Java代码：
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建对象的实例
    NjsHello hello = new NjsHello();
    //...
}
//...
}
```
NJS代码：
``` js
// 导入测试类NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 创建NjsHello的实例对象
var hello = new NjsHello();
// ...
```

#### ClassObject
调用plus.android.importClass()方法导入类并返回ClassObject类对象，通过该类对象，可以创建类的实例对象。在Java中类的静态方法会转换成NJS类对象的方法，可通过类对象的“.”操作符调用；类的静态常量会转换为NJS类对象的属性，可通过类对象的“.”操作符访问；类的静态属性则需通过NJS类对象的plusGetAttribute、plusSetAttribute方法操作。
**示例：**
1. 导入类后获取类的静态常量属性
Java代码：
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 获取类的静态常量属性
    int type = NjsHello.CTYPE;
    System.out.printf( "NjsHello Final's value: %d", type );  // 输出“NjsHello Final's value: 1”
    //...
}
//...
}
```
NJS代码：
``` javascript
// 导入测试类NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 获取类的静态常量属性
var type = NjsHello.CTYPE;
console.log( "NjsHello Final's value: "+type ); // 输出“NjsHello Final's value: 1”
// ...
```

2. 导入类后调用类的静态方法
Java代码：
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 调用类的静态方法
    NjsHello.testCount();
    //...
}
//...
}
```
NJS代码：
``` javascript
// 导入测试类NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 调用类的静态方法
NjsHello.testCount();
// ...
```

##### ClassObject.plusGetAttribute
获取类对象的静态属性值，方法原型如下：
``` javascript
Object classobject.plusGetAttribute( String name );
```

导入类对象后，就可以调用其plusGetAttribute方法获取类的静态属性值。
- name：要获取的静态属性名称，如果指定的属性名称不存在，则获取属性失败，返回null。

`注意：如果导入的类对象中存在“plusGetAttribute”同名的静态方法，则必须通过plus.android.invoke()方法调用。`

示例：
1. 导入类后获取类的静态属性值
Java代码：
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 获取类的静态属性
    int count = NjsHello.count;
    System.out.printf( "NjsHello Static's value: %d", count );  // 输出“NjsHello Static's value: 0”
    //...
}
//...
}
```
NJS代码：
``` javascript
// 导入测试类NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 获取类的静态属性
var count = NjsHello.plusGetAttribute( "count" );
console.log( "NjsHello Static's value: "+count ); // 输出“NjsHello Static's value: 0”
// ...
```

##### ClassObject.plusSetAttribute
设置类对象的静态属性值，方法原型如下：
``` java
void classobject.plusSetAttribute( String name, Object value );
```

导入类对象后，就可以调用其plusSetAttribute方法设置类的静态属性值。
- name：要设置的静态属性名称，如果指定的属性名称不存在，则设置属性失败，返回null。
- value：要设置的属性值，其类型必须与Native层类对象的静态属性区配，否则设置操作不生效，将保留以前的值。

`注意：如果导入的类对象中存在“plusSetAttribute”同名的静态方法，则必须通过plus.android.invoke()方法调用。`

示例：
1. 导入类后设置类的静态属性值
Java代码：
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 设置类的静态属性值
    NjsHello.count = 2;
    System.out.printf( "NjsHello Static's value: %d", NjsHello.count );  // 输出“NjsHello Static's value: 2”
    //...
}
//...
}
```
NJS代码：
``` javascript
// 导入测试类NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 设置类的静态属性值
NjsHello.plusSetAttribute( "count", 2 );
console.log( "NjsHello Static's value: "+NjsHello.plusGetAttribute( "count" ) ); // 输出“NjsHello Static's value: 2”
// ...
```

#### InstanceObject
NJS中实例对象与Java中的对象对应，调用plus.android.importClass()方法导入类后，通过new操作符可创建该类的实例对象，或直接调用plus.android.newObject方法创建类的实例对象，也可通过调用Native API返回实例对象。在Java中对象的方法会转换成NJS实例对象的方法，可通过实例对象的“.”操作符调用；对象的常量属性会转换NJS实例对象的属性，可通过实例对象的“.”操作符访问。对象的非常量属性则必须通过NJS实例对象的plusGetAttribute、plusSetAttribute方法操作。
示例：
1. 导入类创建实例对象，调用对象的方法
Java代码：
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建NjsHello的实例对象
    NjsHello hello = new NjsHello();
    // 调用对象的方法
    hello.updateName( "Tester" );
    //...
}
//...
}
```
NJS代码：
``` javascript
// 导入测试类NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 创建NjsHello的实例对象
var hello = new NjsHello();
// 调用对象的方法
hello.updateName( "Tester" );
// ...
```

2. 导入类创建实例对象，获取对象的常量属性
Java代码：
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建NjsHello的实例对象
    NjsHello hello = new NjsHello();
    // 访问对象的常量属性
    String birthday = hello.BIRTHDAY;
    System.out.printf( "NjsHello Object Final's value: %s", birthday );  // 输出“NjsHello Object Final's value: 2013-01-13”
    //...
}
//...
}
```
NJS代码：
``` javascript
// 导入测试类NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 创建NjsHello的实例对象
var hello = new NjsHello();
// 访问对象的常量属性
var birthday = hello.BIRTHDAY;
console.log( "NjsHello Object Final's value: "+birthday ); // 输出“NjsHello Object Final's value: 2013-01-13”
// ...
```

##### InstanceObject.plusGetAttribute
获取实例对象的属性值，方法原型如下：
``` javascript
Object instancebject.plusGetAttribute( String name );
```
获取实例对象后，就可以调用其plusGetAttribute方法获取对象的属性值。
name：要获取对象的属性名称，如果指定的属性名称不存在，则获取属性失败，返回null。

`注意：如果实例对象中存在“plusGetAttribute”同名的方法，则必须通过plus.android.invoke()方法调用。`

示例：
1. 导入类创建实例对象，获取对象的属性值
Java代码：
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建对象的实例
    NjsHello hello = new NjsHello();
    hello.updateName( "Tester" );
    // 获取其name属性值
    String name = hello.name;
    System.out.printf( "NjsHello Object's name: %s", name );  // 输出“NjsHello Object's name: Tester”
    //...
}
//...
}
```
NJS代码：
``` javascript
// 导入测试类NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 创建对象的实例
var hello = new NjsHello();
hello.updateName( "Tester" );
// 获取其name属性值
var name = hello.plusGetAttribute( "name" );
console.log( "NjsHello Object's name: "+name );  // 输出“NjsHello Object's name: Tester”
// ...
```

##### InstanceObject.plusSetAttribute
设置类对象的静态属性值，方法原型如下：
``` javascript
void instanceobject.plusSetAttribute( String name, Object value );
```
导入类对象后，就可以调用其plusSetAttribute方法设置类的静态属性值。
- name：要设置的静态属性名称，如果指定的属性名称不存在，则设置属性失败，返回null。
- value：要设置的属性值，其类型必须与Native层类对象的静态属性区配，否则设置操作不生效，将保留以前的值。

`注意：如果导入的类对象中存在“plusSetAttribute”同名的静态方法，则必须通过plus.android.invoke()方法调用。`

示例：
1. 导入类创建实例对象，设置对象的属性值
Java代码：
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建对象的实例
    NjsHello hello = new NjsHello();
    // 设置其name属性值
    hello.name = "Tester";
    System.out.printf( "NjsHello Object's name: %s", hello.name );  // 输出“NjsHello Object's name: Tester”
    //...
}
//...
}
```
NJS代码：
``` javascript
// 导入测试类NjsHello
var Hello = plus.android.importClass("NjsHello");
// 创建对象的实例
var hello = new NjsHello();
// 设置其name属性值
hello.plusSetAttribute( "name", "Tester" );
console.log( "NjsHello Object's name: "+hello.plusGetAttribute("name") ); // 输出“NjsHello Object's name: Tester”
// ...
```

#### plus.android.implements
在Java中可以通过定义新类并实现Interface的接口，并创建出新类对象作为其它接口的参数，在NJS中则可快速创建对应的Interface对象，方法原型如下：
Object plus.android.implements( String name, Object obj );

此方法创建Native层中Java的接口实现对象，作为调用其它Native API的参数。
- name：接口的名称，必须是完整的命名空间（使用"."分割），如果不存在此接口，则创建接口实现对象失败，返回null。
- obj：JSON对象类型，接口实现方法的定义，JSON对象中key值为接口方法的名称；value值为Function，方法参数必须与接口中方法定义的参数区配。

示例：
1. Test类中实现接口NjsHelloEvent的方法，并调用NjsHello对象的test方法触发接口中函数的运行。
Java代码：
``` java
import io.dcloud.NjsHello;
import io.dcloud.NjsHelloEvent;
//...
// Test类实现NjsHelloEvent接口
public class Test implements NjsHelloEvent {
public static void main( String args[] ) {
    // 创建对象的实例
    NjsHello hello = new NjsHello();
    // 调用updateName方法
    hello.updateName( "Tester" );
    // 设置监听对象
    hello.setEventObserver( this );
    // 调用test方法，触发接口事件
    hello.test(); // 触发onEventInvoked函数运行
    //...
}
// 实现接口NjsHelloEvent的onEventInvoked方法
@Override
public void onEventInvoked( String name ) {
	System.out.printf( "Invoked Object's name is: %s", name );
}
//...
}
```
NJS代码：
``` javascript
// 导入测试类NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 实现接口“NjsHelloEvent”对象
var hevent = plus.android.implements( "io.dcloud.NjsHelloEvent", {
    "onEventInvoked":function( name ){
        console.log( "Invoked Object’s name: "+name ); // 输出“Invoked Object’s name: Tester”
    }
} );
// 创建对象的实例
var hello = new NjsHello();
// 调用updateName方法
hello.updateName( "Tester" );
// 设置监听对象
hello.setEventObserver( hevent );
// 调用test方法，触发代理事件
hello.test(); // 触发上面定义的匿名函数运行
// ...
```

#### plus.android.runtimeMainActivity
获取运行期环境主Activity实例对象，方法原型如下：
``` javascript
InstanceObject plus.android.runtimeMainActivity();
```
此方法将获取程序的主Activity的实例对象，它是Html5+运行期环境主组件，用于处理与用户交互的各种事件，也是应用程序全局环境android.app.Activity的实现对象。android.app.Activity是一个特殊的类，需要在原生开发环境中注册后才能使用，所以使用new操作符创建对象无实际意义。

示例：
1. 调用Activity的startActivity方法来拨打电话
Java代码：
``` java
import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
//...
// 获取主Activity对象的实例
Activity main = context;
// 创建Intent
Uri uri = Uri.parse("tel:10086");
Intent call = new Intent("android.intent.action.CALL",uri);
// 调用startActivity方法拨打电话
main.startActivity(call);
//...
```
NJS代码：
``` javascript
// 导入Activity、Intent类
var Intent = plus.android.importClass("android.content.Intent");
var Uri = plus.android.importClass("android.net.Uri");
// 获取主Activity对象的实例
var main = plus.android.runtimeMainActivity();
// 创建Intent
var uri = Uri.parse("tel:10086");
var call = new Intent("android.intent.action.CALL",uri);
// 调用startActivity方法拨打电话
main.startActivity( call );
// ...
```

#### plus.android.currentWebview
获取当前Webview窗口对象的native层实例对象，方法原型如下：
``` javascript
InstanceObject plus.android.currentWebview();
```
Android平台完整Java类名为android.webkit.Webview，完整API请参考Android开发文档[android.webkit.Webview](http://developer.android.com/reference/android/webkit/WebView.html)。

示例：
1. 调用Webview的loadUrl方法跳转页面
Java代码：
``` java
import android.webkit.Webview;
//...
// 获取Webview对象
Webview wv = this;
// 跳转页面
wv.loadUrl("http://www.dcloud.io/");
//...
```
NJS代码：
``` javascript
// 导入Webview类
var Webview = plus.android.importClass("android.webkit.Webview");
// 当前Webview对象的实例
var wv = plus.android.currentWebview();
// 跳转页面
wv.loadUrl("http://www.dcloud.io/");
// ...
```
**完整API文档参考：[HTML5+ API - Native.js for Android](http://www.html5plus.org/doc/zh_cn/android.html)**

### API on iOS
为了能更好的理解NJS调用Objective-C Native API，我们在iOS平台用Objective-C实现以下测试类，将会在后面API说明中的示例来调用。
头文件njshello.h代码如下：
``` objc
// 定义协议
@protocol NjsHelloEvent <NSObject>
@required
-(void) onEventInvoked:(NSString*)name;
@end
// -------------------------------------------------------------
// 定义类NjsHello
@interface NjsHello : NSObject {
    NSString *_name;
    id<NjsHelloEvent > _delegate;
}
@property (nonatomic,retain) NSString *name;
@property (nonatomic,retain) id delegate;
-(void)updateName:(NSString*)newname;
-(void)setEventObserver:(id<NjsHelloEvent >)delegate;
-(void)test;
+(void)testCount;
@end
```

实现文件njshello.m源代码如下：
``` objc
#import "njshello.h"
// 实现类NjsHello
@implementation NjsHello
@synthesize name=_name;
-(void)updateName:(NSString*)newname{
    _name = [newname copy];
}
-(void)setEventObserver:(id<NjsHelloEvent >)delegate{
    _delegate = delegate;
}
-(void)test{
    NSLog(@"My name is: %@",_name);
    [[self delegate]onEventInvoked:name];
}
-(void)dealloc{
    [_name release];
    [supper dealloc];
}
+(void)testCount{
	NSLog( @"Static test count" );
}
@end
```

#### plus.ios.importClass
导入Objective-C类对象，方法原型如下：
``` javascript
ClassObject plus.ios.importClass( String classname );
```
导入类对象后，就可以通过“.”操作符直接调用对象（类对象/实例对象）的常量和方法。通过“.”操作符号调用方法时，不需要使用“:”来分割方法名。
- classname：要导入的Objective-C类名，如果指定的类名不存在，则导入类失败，返回null。

`注意：导入类对象可以方便的使用“.”操作符来调用对象的属性和方法，但也会消耗较多的系统资源。因此导入过多的类对象会影响性能，此时可以使用“高级API”中提供的方法在不导入类对象的情况下调用Native API。`
示例：
1. 导入类并创建实例对象
Objective-C代码：
``` objc
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // 创建对象的实例
    NjsHello* hello = [[NjsHello alloc] init];
    // ...
}
// ...
```
NJS代码：
``` javascript
// 导入测试类NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// 创建对象的实例
var hello = new NjsHello();
// ...
```

#### ClassObject 
调用plus.ios.importClass()方法导入类并返回ClassObject类对象，通过该类对象，可以创建类的实例对象。在Objective-C中类的静态方法会转换成NJS类对象的方法，可通过类对象的“.”操作符调用；

`注意：由于Objective-C中类没有静态变量，而是通过定义全局变量来实现，目前NJS中无法访问全局变量的值。对于全局常量，在NJS中也无法访问，对于原类型常量可在文档中找到其具体的值，在JS代码中直接赋值；对于非原类型常量目前还无法访问。`

示例：
1. 导入类后调用类的静态方法
Objective-C代码：
``` objc
#import "njshello.h"
// ...
int main( int argc, char *argv[] )
{
    // 调用类的静态方法
    [NjsHello testCount];
    // ...
}
// ...
```
NJS代码：
``` javascript
// 导入测试类NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// 调用类的静态方法
NjsHello.testCount();
// ...
```

#### InstanceObject 
NJS中实例对象与Objective-C中的对象对应，调用plus.ios.importClass()方法导入类后，通过new操作符可创建该类的实例对象，或直接调用plus.ios.newObject方法创建类的实例对象，也可通过调用Native API返回实例对象。在Objective-C中对象的方法会转换成NJS实例对象的方法，可通过实例对象的“.”操作符调用；对象的属性则必须通过NJS实例对象的plusGetAttribute、plusSetAttribute方法操作。

示例：
1. 导入类创建实例对象，调用对象的方法
Objective-C代码：
``` objc
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // 创建对象的实例
    NjsHello* hello = [[NjsHello alloc] init];
    // ...
}
// ...
```
NJS代码：
``` javascript
// 导入测试类NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// 创建对象的实例
var hello = new NjsHello();
// ...
```

##### InstanceObject.plusGetAttribute
获取实例对象的属性值，方法原型如下：
``` javascript
Object instancebject.plusGetAttribute( String name );
```
获取实例对象后，就可以调用其plusGetAttribute方法获取对象的属性值。
- name：要获取对象的属性名称，如果指定的属性名称不存在，则获取属性失败，返回null。

`注意：如果实例对象中存在“plusGetAttribute”同名的方法，则只能通过plus.ios.invoke()方法调用。`

示例：
1. 导入类创建实例对象，获取对象的属性值
Objective-C代码：
``` objc
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // 创建对象的实例
    NjsHello* hello = [[NjsHello alloc] init];
    [hello updateName:@"Tester"];
    // 获取其name属性值
    NSString* name = hello.name;
    NSLog(@"NjsHello Object's name: %@",name);  // 输出“NjsHello Object's name: Tester”
    // ...
}
```
NJS代码：
``` javascript
// 导入测试类NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// 创建对象的实例
var hello = new NjsHello();
hello.updateName( "Tester" );
// 获取其name属性值
var name = hello.plusGetAttribute( "name" );
console.log( "NjsHello Object’s name: "+name );  // 输出“NjsHello Object’s name: Tester”
// ...
```

##### InstanceObject.plusSetAttribute
设置类对象的静态属性值，方法原型如下：
``` javascript
void instanceobject.plusSetAttribute( String name, Object value );
```
导入类对象后，就可以调用其plusSetAttribute方法设置类的静态属性值。
- name：要设置的静态属性名称，如果指定的属性名称不存在，则设置属性失败，返回null。
- value：要设置的属性值，其类型必须与Native层类对象的静态属性区配，否则设置操作不生效，将保留以前的值。

`注意：如果导入的类对象中存在“plusSetAttribute”同名的静态方法，则只能通过plus.android.invoke()方法调用。`

示例：
1. 导入类创建实例对象，设置对象的属性值
Java代码：
``` java
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // 创建对象的实例
    NjsHello* hello = [[NjsHello alloc] init];
    // 设置其name属性值
    hello.name = @"Tester";
    NSLog(@"NjsHello Object's name: %@",hello.name);  // 输出“NjsHello Object's name: Tester”
    // ...
}
//...
```
NJS代码：
``` javascript
// 导入测试类NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// 创建对象的实例
var hello = new NjsHello();
// 设置其name属性值
hello.plusSetAttribute( "name", "Tester" );
console.log( "NjsHello Object’s name: "+hello.plusGetAttribute("name") ); // 输出“NjsHello Object’s name: Tester”
// ...
```

#### plus.ios.implements
在Objective-C中可以通过定义新类并实现Protocol的协议，并创建出新类对象作为代理对象，在NJS中则可实现协议快速创建代理对象，方法原型如下：
``` javascript
Object plus.ios.implements( String name, Object obj );
```
此方法返回一个NJS实例对象，映射到Native层中的代理对象，其父类为“NSObject”，并且实现obj中指定的协议方法。通常作为调用其它Native API的参数。
- name：协议的名称，也可以是自定的字符串名称用于定义一个代理。
- obj：JSON对象类型，代理实现方法的定义，JSON对象中key值为协议中定义的方法名称，必须保留方法名称中的“：”字符；value值为Function，方法参数必须与协议中定义方法的参数区配。

示例：
1. 实现一个代理，并调用test方法触发调用代理的方法
Objective-C代码：
``` objc
#import "njshello.h"
// 定义代理类NjsDelegate
@interface NjsDelegate: NSObject<NjsHelloEvent> {
    -(void) onEventInvoked:(NSString*)name;
}
@end
// -------------------------------------------------------------
// 实现代理类NjsDelegate
@implementation NjsDelegate
-(void) onEventInvoked:(NSString*)name{
    NSLog(@"Invoked Object's name:%@",name);  // 输出“Invoked Object’s name: Tester”
}
@end
// -------------------------------------------------------------
// 主函数
int main( int argc, char *argv[] )
{
    // 创建对象的实例
    NjsHello* hello = [[NjsHello alloc] init];
    // 调用updateName方法
    [hello updateName:@"Tester"];
    // 创建代理对象
    NjsDelegate* delegate = [[NjsDelegate alloc] init];
    // 设置监听对象
    [hello setEventObserver:delegate];
    // 调用test方法，触发代理事件
    [hello test];  // 触发上面代理对象定义的onEventInvoked运行
    // ...
}
```
在NJS中不需要创建新的类对象，调用plus.ios.implements实现协议接口即可创建出代理对象，代码如下：
``` javascript
// 导入测试类NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// 实现协议“NjsHelloEvent”的代理
var hevent = plus.ios.implements( "NjsHelloEvent", {
    "onEventInvoked:":function( name ){
        console.log( "Invoked Object’s name: "+name ); // 输出“Invoked Object’s name: Tester”
    }
} );
// 调用updateName方法
hello.updateName( "Tester" );
// 设置监听对象
hello.setEventObserver( hevent );
// 调用test方法，触发代理事件
hello.test(); // 触发上面代理对象定义的匿名函数运行
// ...
```

#### plus.ios.deleteObject
释放NJS中实例对象中映射的Native对象，方法原型如下：
``` javascript
void plus.ios.deleteObject( Object obj );
```
NJS中所有的实例对象（InstanceObject）都可以通过此方法释放，会将Native层的对象使用的资源进行释放。
- obj：要释放的实例对象，如果obj对象不是有效的实例对象，则不执行对象的是否资源操作。

`注意：此方法是可选的，如果不调用此方法释放实例对象，则在页面关闭时会自动释放所有对象；若对象占用较多的系统资源，则在业务逻辑处理完成时应该主动调用此方法释放资源，以提到程序的运行效率。`

示例：
1. 创建实例对象使用完成后，显式操作销毁对象
Objective-C代码：
``` objc
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // 创建对象的实例
    NjsHello* hello = [[NjsHello alloc] init];
    // 调用updateName方法
    [hello updateName:@"Tester"];
    // ...
    // 使用完后销毁对象的实例
    [hello release];
}
```
NJS代码：
``` javascript
// 导入测试类NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// 创建对象的实例
var hello = new NjsHello();
// 调用updateName方法
hello.updateName( "Tester" );
// ...
// 使用完后销毁对象的实例
plus.ios.deleteObject( hello );
```

#### plus.ios.currentWebview
获取当前Webview窗口对象的native层UIWebview实例对象，方法原型如下：
``` javascript
InstanceObject plus.ios.currentWebview();
```
UIWebview对象的API请参考Apple开发文档[UIWebview](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIWebView_Class/)

示例：
1. 创建实例对象使用完成后，显式操作销毁对象
Objective-C代码：
``` objc
// 获取当前Webview对象的实例
UIWebview* wv=self;
// 创建请求对象
NSURLRequest *req = [NSURLRequest requestWithURL:[NSURL URLWithString:@"http://www.dcloud.io/"]];
// 跳转页面
[web loadRequest:req];
// 释放对象
// 系统自动回收
// ...
```
NJS代码：
``` javascript
// 导入UIWebview、NSURLRequest、NSURL类
var Webview = plus.ios.importClass("UIWebview");
var NSURLRequest = plus.ios.import('NSURLRequest');
var NSURL = plus.ios.import('NSURL');
// 获取当前Webview对象的实例
var wv = plus.ios.currentWebview();
// 创建请求对象
var req = NSURLRequest.requestWithURL(NSURL.URLWithString('http://www.dcloud.io/'));
// 跳转页面
plus.ios.invoke(wv,"loadRequest:",req);
// 释放对象(可选)
plus.ios.deleteObject(req);
plus.ios.deleteObject(wv);
// ...
```
**完整API文档参考：[HTML5+ API - Native.js for iOS](http://www.html5plus.org/doc/zh_cn/ios.html)**

## 完整业务演示
### Android
在Android手机桌面上创建快捷方式图标，这是原本只有原生程序才能实现的功能。即使使用Hybrid方案，也需要原生工程师来配合写插件。
下面我们演示如何直接使用js在Android手机桌面创建快捷方式，在HelloH5+应用中Native.JS页面中“Shortcut (Android)”可以查看运行效果。
这段代码是使用原生Java实现的创建快捷方式的代码，用于参考比对：
``` java
import android.app.Activity;
import android.content.Intent;
import android.graphics.BitmapFactory;
import android.graphics.Bitmap;
// 创建桌面快捷方式
void createShortcut(){
	// 获取主Activity
	Activity main = this;
	// 创建快捷方式意图
	Intent shortcut = new Intent("com.android.launcher.action.INSTALL_SHORTCUT");
	// 设置快捷方式的名称
	shortcut.putExtra(Intent.EXTRA_SHORTCUT_NAME, "HelloH5+");
	// 设置不可重复创建
	shortcut.putExtra("duplicate",false);
	// 设置快捷方式图标
	Bitmap bitmap = BitmapFactory.decodeFile("/sdcard/icon.png");
	shortcut.putExtra(Intent.EXTRA_SHORTCUT_ICON, bitmap);
	// 设置快捷方式启动执行动作
	Intent action = new Intent(Intent.ACTION_MAIN);
	action.setComponent( main.getComponentName() );
	shortcut.putExtra( Intent.EXTRA_SHORTCUT_INTENT, action );
	// 广播创建快捷方式
	main.sendBroadcast(shortcut);
}
```

使用NJS实现时首先导入需要使用到的android.content.Intent、android.graphics.BitmapFactory类，按照Java代码中的方法对应转换成JavaScript代码。
其中快捷方式图标是通过解析本地png文件进行设置，在JavaScript中需要使用plus.io.* API转换成本地路径传递给Native API，完整代码如下：
``` javascript
var Intent=null,BitmapFactory=null;
var main=null;
document.addEventListener( "plusready", function() {//"plusready"事件触发时执行plus对象的方法
	// ...
	if ( plus.os.name == "Android" ) {
		// 导入要用到的类对象
		Intent = plus.android.importClass("android.content.Intent");
		BitmapFactory = plus.android.importClass("android.graphics.BitmapFactory");
		// 获取主Activity
		main = plus.android.runtimeMainActivity();
	}
}, false);
/**
 * 创建桌面快捷方式
 */
function createShortcut(){
	// 创建快捷方式意图
	var shortcut = new Intent("com.android.launcher.action.INSTALL_SHORTCUT");
	// 设置快捷方式的名称
	shortcut.putExtra(Intent.EXTRA_SHORTCUT_NAME, "测试快捷方式");
	// 设置不可重复创建
	shortcut.putExtra("duplicate",false);
	// 设置快捷方式图标
	var iconPath = plus.io.convertLocalFileSystemURL("/icon.png"); // 将相对路径资源转换成系统绝对路径
	var bitmap = BitmapFactory.decodeFile(iconPath);
	shortcut.putExtra(Intent.EXTRA_SHORTCUT_ICON,bitmap);
	// 设置快捷方式启动执行动作
	var action = new Intent(Intent.ACTION_MAIN);
	action.setClassName(main.getPackageName(), 'io.dcloud.PandoraEntry');
	shortcut.putExtra(Intent.EXTRA_SHORTCUT_INTENT,action);
	// 广播创建快捷方式
	main.sendBroadcast(shortcut);
	console.log( "桌面快捷方式已创建完成！" );
}
```

注意：提交到云平台打包时需要添加Android权限才能在桌面创建快捷方式，在HBuilder工程中双击应用的“manifest.json”文件，切换到“代码视图”中在plus->distribute->google->permissions节点下添加权限数据：
``` xml
"google": {
	// ...
	"permissions": [
"<uses-permission android:name=\"com.android.launcher.permission.INSTALL_SHORTCUT\"/>"
	]
}
```
如下图所示：

![manifest.json中Android权限 permissions](http://www.dcloud.io/docs/a/njs/android_permissions.png)

### iOS
在iOS手机上登录game center，一个游戏中心服务，这是原本只有原生程序才能实现的功能。即使使用Hybrid方案，也需要原生工程师来配合写插件。
下面我们演示如何直接使用js在iOS手机上登录game center，在HelloH5+应用中Native.JS页面中的“Game Center (iOS)”可以查看运行效果。
注意手机未开通game center则无法登陆，请先点击iOS自带的game center进行配置。
这段代码是使用原生Objective-C实现的登录game center的代码，用于参考比对。原生Objective-C代码的头文件Test.h中代码如下：
``` objc
@interface Test: NSObject
// 游戏玩家登录状态监听函数
- (void)authenticationChanged:(NSNotification*)notification;
// 获取游戏玩家状态信息
- (void)playerInformation:(GKPlayer *)player;
// 登录到游戏中心
- (void)loginGamecenter;
// 停止监听登录游戏状态变化
- (void)logoutGamecenter;
@end

实现文件Test.m中代码如下：
@implementation Test
// 游戏玩家登录状态监听函数
- (void)authenticationChanged:(NSNotification*)notification
{
    // 获取游戏玩家共享实例对象
    GKLocalPlayer *player = notification.object;
    if ( player.isAuthenticated ) {
        // 玩家已登录认证，获取玩家信息
        [self playerInformation:player];
    } else {
        // 玩家未登录认证，提示用户登录
        NSLog(@"请登录！");
    }
    // 释放使用的对象
    [player release];
}
// 获取游戏玩家状态信息
- (void)playerInformation:(GKPlayer *)player
{
    // 获取游戏玩家的名称
    NSLog(@"Name: %@",player.displayName);
}

// 登录到游戏中心
- (void)loginGamecenter
{
    // 监听用户登录状态变更事件
    NSNotificationCenter *nc = [NSNotificationCenter defaultCenter];
    [nc addObserver:self
           selector:@selector(authenticationChanged)
               name:@"GKPlayerAuthenticationDidChangeNotificationName"
             object:nil];
    // 获取游戏玩家共享实例对象
    GKLocalPlayer *localplayer = [GKLocalPlayer localPlayer];
    // 判断游戏玩家是否已经登录认证
    if ( localplayer.isAuthenticated ) {
        // 玩家已登录认证，获取玩家信息
        [self playerInformation:localplayer];
    } else {
        // 玩家未登录认证，发起认证请求
        [localplayer authenticateWithCompletionHandler:nil];
        NSLog(@"登录中...");
    }
	// 释放使用的对象
    [localplayer release];
    [nc release];
}

// 停止监听登录游戏状态变化
- (void)logoutGamecenter
{
    // 取消监听用户登录状态变化
    NSNotificationCenter *nc = [NSNotificationCenter defaultCenter];
    [nc removeObserver:self
                  name:@"GKPlayerAuthenticationDidChangeNotificationName"
                object:nil];
	// 释放使用的对象
    [nc release];
}
@end
```
使用NJS实现时可以按照Objective-C代码中的方法对应转换成JavaScript代码，最关键的代码是loginGamecenter方法中对用户登录状态的监听，需调用NSNotificationCenter对象的“addObserver:selector:name:object”方法，
1. addObserver:后要求传入一个实例对象用于查找selector参数中指定的方法，在Objective-C中通常将对象自身（self）传入，但在NJS中没有此概念，因此需使用plus.ios.implements方法来创建一个新的对象：
var delegate = plus.ios.implements("NSObject",{"authenticationChanged:":authenticationChanged});
第一个参数“NSObject”表示对象的类型，第二个参数中的JSON对象表明对象拥有的方法，“authenticationChanged”方法是delegate对象的方法。
2. selector:后要传入一个类函数指针，在Objective-C中通过“@selector”指令可选择函数指针，在NJS中则需使用plus.ios.newObject方法来创建一个函数对象：
plus.ios.newObject("@selector","authenticationChanged:")
第一个参数需固定值为“@selector”，表示创建的是类函数指针对象，第二个参数。
在"plusready"事件中导入GKLocalPlayer和NSNotificationCenter类，并调用登录方法longinGamecenter()。

完整JavaScript代码如下：
``` js
// 处理"plusready"事件
var bLogin=false;
document.addEventListener( "plusready", function() {
	// ...
	if ( plus.os.name == "iOS" ) {
		GKLocalPlayer  = plus.ios.importClass("GKLocalPlayer");
		NSNotificationCenter = plus.ios.importClass("NSNotificationCenter");
		longinGamecenter();
	} else {
		alert("欢迎您");
		bLogin = true;
		setTimeout( function(){
			plus.ui.toast( "此平台不支持Game Center功能！" );
		}, 500 );
	}
}, false);

var GKLocalPlayer=null,NSNotificationCenter=null;
var delegate=null;

// 游戏玩家登录状态监听函数
function authenticationChanged( notification ){
	// 获取游戏玩家共享实例对象
	var player = notification.plusGetAttribute("object");
	if ( player.plusGetAttribute("isAuthenticated") ) {
		// 玩家已登录认证，获取玩家信息
		playerInformation(player);
		bLogin = true;
	} else {
		// 玩家未登录认证，提示用户登录
		alert("请登录");
        bLogin = false;
	}
	// 释放使用的对象
	plus.ios.deleteObject(player);
}

// 获取游戏玩家状态信息
function playerInformation( player ){
	var name = player.plusGetAttribute("displayName");
	alert( name+" 已登录！" );
}

// 登录到游戏中心
function longinGamecenter(){
	if ( bLogin ){
		return;
	}
    // 监听用户登录状态变更事件
    var nc = NSNotificationCenter.defaultCenter();
    delegate = plus.ios.implements("NSObject",{"authenticationChanged:":authenticationChanged});
    nc.addObserverselectornameobject(delegate,
    	plus.ios.newObject("@selector","authenticationChanged:"),
    	"GKPlayerAuthenticationDidChangeNotificationName",
    	null);
    // 获取游戏玩家共享实例对象
    var localplayer = GKLocalPlayer.localPlayer();
    // 判断游戏玩家是否已经登录认证
    if ( localplayer.isAuthenticated() ) {	// localplayer.plusGetAttribute("isAuthenticated")
        // 玩家已登录认证，获取玩家信息
        playerInformation( localplayer );
        bLogin = true;
    } else {
        // 玩家未登录认证，发起认证请求
        localplayer.authenticateWithCompletionHandler(null);
        alert( "登录中..." );
    }
    // 释放使用的对象
	plus.ios.deleteObject(localplayer);
	plus.ios.deleteObject(nc);
}

// 停止监听登录游戏状态变化
function stopGamecenterObserver()
{
    // 取消监听用户登录状态变化
    var nc = NSNotificationCenter.defaultCenter();
    nc.removeObservernameobject(delegate,"GKPlayerAuthenticationDidChangeNotificationName",null);
    plus.ios.deleteObject(nc);
    plus.ios.deleteObject(delegate);
    delegate = null;
}
```
**注意**
1. 提交到云平台打包时需要添加Game Center API的系统库（framework）才能正确调用，在HBuilder工程中双击应用的“manifest.json”文件，切换到“代码视图”中在plus->distribute->apple->frameworks节点下添加要引用的系统Framework：
``` xml
"apple": {
	"devices": "universal",
	"frameworks": [
		"GameKit.framework"
	]
}
```
，如下图所示：
![HBuilder frameworks](http://www.dcloud.io/docs/a/njs/ios_frameworks.png)
2. 正式发布提交到AppStore时，在配置苹果开发者网站上配置App ID需要选中“Game Center”服务：
![Game Center](http://www.dcloud.io/docs/a/njs/ios_gamecenter.png)

##开发注意和建议用途
Native.js的运行性能仍然不比纯原生应用；JS与Native之间的数据交换效率并不如在js内部的数据交换效率；基于如上原因，有几点开发建议：
- 以标准web 代码为主，当遇到web能力不足的时候，调用Native.js。
- 以标准web 代码为主，当遇到web性能不足的时候，需要分析，
if ((原生进行运算的效率-js与原生通讯的损耗)>纯web的效率){
使用Native.js
}else{
还应该使用纯js
		}
- 应避免把程序设计为在短时间内并发触发Native.js代码

##调试
使用safari和chrome的控制台调试HBuilder的5+App时，一样可以调试NJS对象，即可以在浏览器控制台中查看各种原生对象的属性和方法，如下图所示，57行设了断点，watch了Intent对象，并在右边展开了该对象的所有属性方法：
![Chrome Debug](http://www.dcloud.io/docs/a/njs/chrome_debug.png)
关于如何在浏览器控制台调试HBuilder的5+App，请参考HBuilder的5+App开发入门教程。

##开发资源
iOS 官方在线文档：[https://developer.apple.com/library/ios/navigation/](https://developer.apple.com/library/ios/navigation/)
Android 官方在线文档：[https://developer.android.com/reference/packages.html](https://developer.android.com/reference/packages.html)
演讲视频：[http://v.youku.com/v_show/id_XNzYzNTcwNDI4.html](http://v.youku.com/v_show/id_XNzYzNTcwNDI4.html)

##高级API
有前述的常用API，已经可以完成各项业务开发。此处补充的高级API，是在熟悉NJS后，为了提升性能而使用的API。高级API无法直接用“.”操作符使用原生对象的方法，在debug时也无法watch原生对象，但高级API性能高于常规API。
虽然导入类对象（plus.android.importClass和plus.ios.importClass）后，可以方便的通过“.”操作符来访问对象的常量、调用对象的方法，但导入类对象也需要消耗较多的系统资源，所以在实际开发时应该尽可能的减少导入类对象，以提高程序效率。可以参考以下依据进行判断：
1. 如导入的类特别复杂，继承自很多基类，方法和属性特别多则考虑不导入类；
2. 对导入类是否需要频繁操作，若导入类仅是为了实例化，并作为调用其它API的参数，则不应该导入类；
3. 在同一页面中是否导入了很多类？如果导入太多则需要考虑减少导入类的数目。

如果我们不导入类对象则无法通过new操作符实例化类对象，这时可通过plus.ios.newObject()、plus.android.newObject()方法来创建实例对象，如下：
``` javascript
// iOS平台创建NSDictionary的实例对象
var ns = plus.ios.newObject( "NSDictionary" );

// Android平台创建Intent的实例对象
var intent = plus.android.newObject( "android.content.Intent" );
```

### API on Android
#### plus.android.newObject
不导入类对象直接创建类的实例对象，方法原型如下：
``` javascript
InstanceObject plus.android.newObject( String classname, Object...args );
```
此方法对Native层中对类进行实例化操作，创建一个类的实体并返回NJS层的实例对象。相比导入类对象后使用new操作符创建对象效率要高。
- classname：要创建实例对象的类名，类名必须是完整的命名空间，使用“.”分隔符（如“android.app.AlertDialog”），如果需要创建内部类对象需要使用“$”分割符（如“android.app.AlertDialog$Builder”）。如果指定的类名不存在，则创建对象失败，返回null。
- args：调用类构造函数的参数，其类型和数目必须与Native层Java类构造函数区配，否则无法创建类对象，将返回null。

**注意**：由于没有导入类对象，所以通过此方法创建的实例对象无法通过“.”操作符直接调用对象的方法，而必须使用plus.android.invoke方法来调用。

示例：
1. 不导入类创建实例对象
Java代码：
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建对象的实例
    NjsHello hello = new NjsHello();
    //...
}
//...
}
```
NJS代码：
``` javascript
// 不调用plus.android.importClass("io.dcloud.NjsHello")导入类NjsHello
// 创建对象的实例
var hello = plus.android.newObject( "io.dcloud.NjsHello" );
// ...
```

#### plus.android.getAttribute
不导入类对象，则无法通过类对象并访问类的静态属性，需调用以下方法获取类的静态属性值，方法原型如下：
``` javascript
Object plus.android.getAttribute( String|Object obj, String name );
```
此方法也可以获取类对象或实例对象的属性值，如果是类对象获取的则是类的静态属性，如果是实例对象则获取的是对象的非静态属性。
- obj：若是String类型，表示要获取静态属性值的类名，类名必须是完整的命名空间（使用"."分割）；若是ClassObject类型，表示要获取静态属性的类对象；若是InstanceObject类型，表示要获取属性值的实例对象。
- name：要获取的属性名称，如果指定的属性名称不存在，则获取属性失败，返回null。

**注意**：同样导入类对象后也可以调用此方法，obj参数类型为ClassObject时，其作用与ClassObject.plusSetAttribute方法一致。obj参数类型为InstanceObject时，其作用与InstanceObject.plusSetAttribute方法一致。

示例：
1. 不导入类对象获取类的静态常量属性
Java代码：
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 获取类的静态常量属性
    int type = NjsHello.CTYPE;
    System.out.printf( "NjsHello Final's value: %d", type );  // 输出“NjsHello Final's value: 1”
    // 获取类的静态属性
    int count = NjsHello.count;
    System.out.printf( "NjsHello Static's value: %d", count );  // 输出“NjsHello Static's value: 0”
    //...
}
//...
}
```
NJS代码：
``` javascript
// 不调用plus.android.importClass("io.dcloud.NjsHello")导入类NjsHello
// 访问类的静态常量属性
var type = plus.android.getAttribute( "io.dcloud.NjsHello", "CTYPE" );
console.log( "NjsHello Final's value: "+type ); // 输出“NjsHello Final's value: 1”
// ...
```
2. 不导入类对象，创建实例对象，并获取其name属性值
Java代码：
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建对象的实例
    NjsHello hello = new NjsHello();
    // 获取其name属性值
    String name = hello.name;
    System.out.printf( "NjsHello Object's name: %s", name );  // 输出“NjsHello Object's name: Tester”
    //...
}
//...
}
```
NJS代码：
``` javascript
// 不调用plus.android.importClass("io.dcloud.NjsHello")导入类NjsHello
// 创建对象的实例
var hello = plus.android.newObject( "io.dcloud.NjsHello" );
// 获取其name属性值
var name = plus.android.getAttribute( hello, "name" );
console.log( "NjsHello Object's name: "+name );  // 输出“NjsHello Object's name: Tester”
// ...
```

#### plus.android.setAttribute
若没有导入类对象，则无法通过类对象设置类的静态属性值，需调用以下方法设置类的静态属性值，方法原型如下：
``` javascript
void plus.android.setAttribute( String|Object obj, String name, Object value );
```
此方法也可以设置类对象或实例对象的属性值，如果是类对象设置的则是类的静态属性，如果是实例对象则设置的是对象的非静态属性。
- obj：若是String类型，表示要设置静态属性值的类名，类名必须是完整的命名空间（使用"."分割）；若是ClassObject类型，表示要设置静态属性的类对象；若是InstanceObject类型，表示要设置属性值的实例对象。
- name：要设置的属性名称，如果指定的属性名称不存在，则设置属性失败，返回null。
- value：要设置的属性值，其类型必须与Native层obj对象的属性区配，否则设置操作不生效，将保留以前的值。

**注意**：同样导入类对象后也可以调用此方法，obj参数类型为ClassObject时，其作用与ClassObject.plusSetAttribute方法一致。obj参数类型为InstanceObject时，其作用与InstanceObject.plusSetAttribute方法一致。

示例：
1. 不导入类对象设置类的静态属性值
Java代码：
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 设置类的静态属性值
    NjsHello.count = 2;
    System.out.printf( "NjsHello Static's value: %d", NjsHello.count );  // 输出“NjsHello Static's value: 2”
    //...
}
//...
}
```
NJS代码：
``` javascript
// 不调用plus.android.importClass("io.dcloud.NjsHello")导入类NjsHello
// 设置类的静态属性值
plus.android.setAttribute( "io.dcloud.NjsHello", "count", 2 );
console.log( "NjsHello Static's value: "+plus.android.getAttribute("io.dcloud.NjsHello","count") ); // 输出“NjsHello Static's value: 2”
// ...
```
2. 导入类对象，创建实例对象，并设置其name属性值
Java代码：
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建对象的实例
    NjsHello hello = new NjsHello();
    // 设置其name属性值
    hello.name = "Tester";
    System.out.printf( "NjsHello Object's name: %s", hello.name );  // 输出“NjsHello Object's name: Tester”
    //...
}
//...
}
```
NJS代码：
``` javascript
// 不调用plus.android.importClass("io.dcloud.NjsHello")导入类NjsHello
// 创建对象的实例
var hello = plus.android.newObject( "io.dcloud.NjsHello" );
// 设置其name属性值
plus.android.setAttribute( hello, "name", "Tester" );
console.log( "NjsHello Object's name: "+hello.plusGetAttribute("name") ); // 输出“NjsHello Object's name: Tester”
// ...
```

#### plus.android.invoke
若没有导入类对象，则无法通过实例对象的“.”操作符调用其成员方法，需通过以下方法调用实例对象的成员方法，方法原型如下：
``` javascript
Object plus.android.invoke( String|Object obj, String name, Object... args );
```
此方法也可以调用类对象或实例对象的方法，如果是类对象则调用的是类的静态方法，如果是实例对象则调用的是对象的普通成员方法。函数返回值是调用Native层方法运行后的返回值，Native对象的方法无返回值则返回undefined。
- obj：若是String类型，表示要调用静态方法的类名，类名必须包含完整的包名；若是ClassObject类型，表示要调用静态方法的类对象；若是InstanceObject类型，表示要调用成员方法的实例对象。
- name：要调用的方法名称，如果指定的方法不存在，则调用方法失败，返回值为null。
- args：调用方法的参数，其类型和数目必须与Native层对象方法的函数区配，否则无法调用对象的方法，将返回null。

**注意**：同样导入类对象后也可以调用此方法，其作用与通过类对象或实例对象的“.”操作符调用方法作用一致。

示例：
1．不导入类对象，调用类的静态方法
Java代码：
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 调用类的静态方法
    NjsHello.testCount();
    //...
}
//...
}
```
NJS代码：
``` javascript
// 不调用plus.android.importClass("io.dcloud.NjsHello")导入类NjsHello
// 调用类的静态方法
plus.android.invoke( "io.dcloud.NjsHello", "testCount" );
// ...
```

2. 不导入类对象，创建实例对象，并调用其updateNmae方法
Java代码：
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建对象的实例
    NjsHello hello = new NjsHello();
    // 调用updateName方法
    hello.updateName( "Tester" );
    System.out.printf( "NjsHello Object's name: %s", name );  // 输出“NjsHello Object's name: Tester”
    //...
}
//...
}
```
NJS代码：
``` javascript
// 不调用plus.android.importClass("io.dcloud.NjsHello")导入类NjsHello
// 创建对象的实例
var hello = plus.android.newObject( "io.dcloud.NjsHello" );
// 调用updateName方法
plus.android.invoke( hello, "updateName", "Tester" );
console.log( "NjsHello Object's name: "+hello.getAttribute("name") ); // 输出“NjsHello Object's name: Tester”
// ...
```
**完整API文档参考：[HTML5+ API - Native.js for Android](http://www.html5plus.org/doc/zh_cn/android.html)**

### API on iOS
#### plus.ios.newObject
不导入类对象直接创建类的实例对象，方法原型如下：
``` java
InstanceObject plus.ios.newObject( String classname, Object..args );
```
此方法会在Native层中对类进行实例化操作，创建一个类的实体并返回NJS层的类实例对象。相比导入类对象后使用new操作符创建对象效率要高。
- classname：要创建实例对象的类名，如果指定的类名不存在，则创建对象失败，返回null。
- args：调用类构造函数的参数，其类型和数目必须与Native层对象构造函数区配，否则无法创建类对象，将返回null。

**注意**：由于没有导入类对象，所以通过此方法创建的实例对象无法通过“.”操作符直接调用对象的方法，而必须使用plus.ios.invoke方法来调用。classname参数值为“@selector”表示需要创建一个函数指针对象，与Objective-C中的@selector指令功能相似，args参数为函数的名称，此时函数的名称需要包含“：”字符。

示例：
1. 不导入类创建实例对象
Objective-C代码：
``` objc
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // 创建对象的实例
    NjsHello* hello = [[NjsHello alloc] init];
    // ...
}
```
NJS代码：
``` javascript
// 未导入“NjsHello”类
// 创建对象的实例
var hello = plus.ios.newObject( "NjsHello" );
// ...
```

#### plus.ios.invoke
若没有导入类对象，则无法通过实例对象的“.”操作符调用其成员方法，需通过以下方法调用实例对象的成员方法，方法原型如下：
``` javascript
Object plus.ios.invoke( String|Object obj, String name, Object... args );
```
此方法也可以调用类对象或实例对象的方法，如果是类对象则调用的是类的静态方法，如果是实例对象则调用的是对象的普通成员方法。函数返回值是调用Native层方法运行后的返回值，Native对象的方法无返回值则返回undefined。
- obj：若是String类型，表示要调用静态方法的类名，类名必须包含完整的包名；若是ClassObject类型，表示要调用静态方法的类对象；若是InstanceObject类型，表示要调用成员方法的实例对象。
- name：要调用的方法名称，必须保留方法名称中的“：”字符，如果指定的方法不存在，则调用方法失败，返回值为null。
- args：调用方法的参数，其类型和数目必须与Native层对象方法的函数区配，否则无法调用对象的方法，将返回null。

**注意**：同样导入类对象后也可以调用此方法，其作用与通过类对象或实例对象的“.”操作符调用方法作用一致。

示例：
1. 不导入类创建实例对象，并调用updateName方法
Objective-C代码：
``` objc
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // 创建对象的实例
    NjsHello* hello = [[NjsHello alloc] init];
    // 调用updateName方法
    [hello updateName:@"Tester"];
    NSLog(@"NjsHello Object's name: %@",hello.name);  // 输出“NjsHello Object's name: Tester”
    // ...
}
```
NJS代码：
``` javascript
// 未导入“NjsHello”类
// 创建对象的实例
var hello = plus.ios.newObject( "NjsHello" );
// 调用updateName方法
plus.ios.invoke( hello, "updateName", "Tester" );
console.log( "NjsHello Object's name: "+hello.getAttribute("name") ); // 输出“NjsHello Object's name: Tester”
// ...
```
**完整API文档参考：[HTML5+ API - Native.js for iOS](http://www.html5plus.org/doc/zh_cn/ios.html)**


## 性能优化
### 调整代码结构优化
前面章节中我们介绍如何通过NJS调用Native API来显示系统提示框，在真机运行时会发现第一次调用时会有0.5s左右的延时，再次调用则不会延时。这是因为NJS中导入类对象操作会花费较长的时间，再次调用时由于类对象已经导入过，会能很快执行完毕。因此可以调整代码结构进行优化，在页面打开后触发的“plusready”事件中进行类对象的导入操作，从而避免第一次调用的延时。

Android平台调整NJS代码结构如下：
``` javascript
// 保存Android导入对象和全局环境对象
var AlertDialog=null,mainActivity=null;
// H5+事件处理
document.addEventListener("plusready",function(){
	switch ( plus.os.name ) {
		case "Android":
		// 程序全局环境对象，内部自动导入Activity类
		mainActivity = plus.android.runtimeMainActivity();
		// 导入AlertDialog类
		AlertDialog = plus.android.importClass("android.app.AlertDialog");
		break;
		default:
		break;
	}
},false);
//...
/**
 * 在Android平台通过NJS显示系统提示框
 */
function njsAlertForAndroid(){
	// 创建提示框构造对象，构造函数需要提供程序全局环境对象，通过plus.android.runtimeMainActivity()方法获取
	var dlg = new AlertDialog.Builder(mainActivity);
	// 设置提示框标题
	dlg.setTitle("自定义标题");
	// 设置提示框内容
	dlg.setMessage("使用NJS的原生弹出框，可自定义弹出框的标题、按钮");
	// 设置提示框按钮
	dlg.setPositiveButton("确定(或者其他字符)",null);
	// 显示提示框
	dlg.show();
}
//...
```
iOS平台调整NJS代码结构如下：
``` javascript
// 保存iOS平台导入的类对象
var UIAlertView=null;
// H5+事件处理
document.addEventListener("plusready",function(){
	switch ( plus.os.name ) {
		case "iOS":
		// 导入UIAlertView类
		UIAlertView = plus.ios.importClass("UIAlertView");
		break;
		default:
		break;
	}
},false);
//...
/**
 * 在iOS平台通过NJS显示系统提示框
 */
function njsAlertForiOS(){
	// 创建UIAlertView类的实例对象
	var view = new UIAlertView();
	// 设置提示对话上的内容
	view.initWithTitlemessagedelegatecancelButtonTitleotherButtonTitles("自定义标题" // 提示框标题
		, "使用NJS的原生弹出框，可自定义弹出框的标题、按钮" // 提示框上显示的内容
		, null // 操作提示框后的通知代理对象，暂不设置
		, "确定(或者其他字符)" // 提示框上取消按钮的文字
		, null ); // 提示框上其它按钮的文字，设置为null表示不显示
	// 调用show方法显示提示对话框
	view.show();
}
//...
```

### 使用高级API优化
前面章节中我们提到导入类对象会消耗较多的系统资源，导入过多的类对象会影响性能。在高级API中提供一组接口可以在不导入类对象的情况下调用Native API，从而提升代码运行性能。

Android平台使用高级API优化代码如下：
``` javascript
// 保存Android导入对象和全局环境对象
var mainActivity=null;
// H5+事件处理
document.addEventListener("plusready",function(){
	switch ( plus.os.name ) {
		case "Android":
		// 程序全局环境对象，内部自动导入Activity类
		mainActivity = plus.android.runtimeMainActivity();
		break;
		default:
		break;
	}
},false);
//...
/**
 * 在Android平台通过NJS显示系统提示框
 */
function njsAlertForAndroid(){
	// 由于Builder类是android.app.AlertDialog类的内部类，这里需要使用$符号分割
	var dlg = plus.android.newObject("android.app.AlertDialog$Builder",mainActivity);
	// 设置提示框标题
	plus.android.invoke(dlg,"setTitle","自定义标题");
	// 设置提示框内容
	plus.android.invoke(dlg,"setMessage","使用NJS的原生弹出框，可自定义弹出框的标题、按钮");
	// 设置提示框按钮
	plus.android.invoke(dlg,"setPositiveButton","确定(或者其他字符)",null);
	// 显示提示框
	plus.android.invoke(dlg,"show");
}
//...
```

iOS平台使用高级API优化代码如下：
``` javascript
/**
 * 在iOS平台通过NJS显示系统提示框
 */
function njsAlertForiOS(){
	// 创建UIAlertView类的实例对象
	var view = plus.ios.newObject("UIAlertView");
	// 设置提示对话上的内容，这里的方法名称中必须包含':'字符
	plus.ios.invoke(view,"initWithTitle:message:delegate:cancelButtonTitle:otherButtonTitles:"
	    ,"自定义标题" // 提示框标题
	    , "使用NJS的原生弹出框，可自定义弹出框的标题、按钮" // 提示框上显示的内容
	    , null // 操作提示框后的通知代理对象，暂不设置
	    , "确定(或者其他字符)" // 提示框上取消按钮的文字
	    , null ); // 提示框上其它按钮的文字，设置为null表示不显示
	// 调用show方法显示提示对话框，在JS中使用()语法调用对象的方法
	plus.ios.invoke(view,"show");
}
//...
```
