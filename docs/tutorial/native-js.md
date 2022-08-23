## 概述
## Overview
Native.js技术，简称NJS，是一种将手机操作系统的原生对象转义，映射为JS对象，在JS里编写原生代码的技术。
Native.js technology, or NJS for short, is a technology for escaping the native objects of the mobile phone operating system, mapping them to JS objects, and writing native code in JS.
如果说Node.js把js扩展到服务器世界，那么Native.js则把js扩展到手机App的原生世界。
If Node.js extends js to the server world, then Native.js extends js to the native world of mobile apps.
HTML/JS/Css全部语法只有7万多，而原生语法有几十万，Native.js大幅提升了HTML5的能力。
There are only more than 70,000 HTML/JS/Css grammars, and hundreds of thousands of native grammars. Native.js has greatly improved the capabilities of HTML5.
NJS突破了浏览器的功能限制，也不再需要像Hybrid那样由原生语言开发插件才能补足浏览器欠缺的功能。
NJS breaks through the functional limitations of browsers, and no longer requires plug-ins developed in native languages like Hybrid to make up for the lack of browser functions.
NJS编写的代码，最终需要在HBuilder里打包发行为App安装包，或者在支持Native.js技术的浏览器里运行。目前Native.js技术不能在普通手机浏览器里直接运行。
The code written by NJS needs to be packaged and released as an App installation package in HBuilder, or run in a browser that supports Native.js technology. At present, Native.js technology cannot run directly in ordinary mobile phone browsers.

- NJS大幅扩展了HTML5的能力范围，原本只有原生或Hybrid App的原生插件才能实现的功能如今可以使用JS实现。
- NJS greatly expands the capabilities of HTML5, and functions that were originally only available in native or native plugins of Hybrid App can now be implemented using JS.
- NJS大幅提升了App开发效率，将iOS、Android、Web的3个工程师组队才能完成的App，变为1个web工程师就搞定。
- NJS has greatly improved the efficiency of App development. The App that can be completed by a team of three engineers of iOS, Android, and Web can be completed by one web engineer.
- NJS不再需要配置原生开发和编译环境，调试、打包均在HBuilder里进行。没有mac和xcode一样可以开发iOS应用。
- NJS no longer needs to configure the native development and compilation environment, debugging and packaging are all carried out in HBuilder. No mac can develop iOS apps like xcode.
- 如果不熟悉原生API也没关系，我们汇总了很多NJS的代码示例，复制粘贴就可以用。[http://ask.dcloud.net.cn/article/114](http://ask.dcloud.net.cn/article/114)
- If you are not familiar with the native API, it does not matter, we have compiled a lot of NJS code examples, copy and paste can be used. [http://ask.dcloud.net.cn/article/114](http://ask.dcloud.net.cn/article/114)

再次强调，Native.js不是一个js库，不需要下载引入到页面的script中，也不像nodejs那样有单独的运行环境，Native.js的运行环境是集成在5+runtime里的，使用HBuilder打包的app或流应用都可以直接使用Native.js。
Again, Native.js is not a js library. It does not need to download scripts introduced into the page, nor does it have a separate running environment like nodejs. The running environment of Native.js is integrated in 5+runtime and packaged with HBuilder. Your app or streaming app can use Native.js directly.

## 注意事项：
## Precautions:
Uni-app不支Native.js执行UI相关操作的API调用及webview相关API调用。将失效无法正常使用。Uni-app不推荐使用Native.js
Uni-app does not support Native.js API calls for UI-related operations and webview-related API calls. will be invalid and cannot be used normally. Native.js is deprecated for Uni-app

### 技术要求
### skills requirement
由于NJS是直接调用Native API，需要对Native API有一定了解，知道所需要的功能调用了哪些原生API，能看懂原生代码并参考原生代码修改为JS代码。
Since NJS directly calls the Native API, you need to have a certain understanding of the Native API, know which native APIs are called by the required functions, and be able to understand the native code and refer to the native code to modify it into JS code.
否则只能直接copy别人写好的NJS代码。
Otherwise, you can only directly copy the NJS code written by others.

## 开始使用
## start using
### 判断平台
### Judgment Platform
Native API具有平台依赖性，所以需要通过以下方式判断当前的运行平台：
Native API is platform-dependent, so the current running platform needs to be judged in the following ways:
``` javascript
function judgePlatform(){
	switch ( plus.os.name ) {
		case "Android":
		// Android平台: plus.android.*
		// Android platform: plus.android.*
		break;
		case "iOS":
		// iOS平台: plus.ios.*
		// iOS platform: plus.ios.*
		break;
		default:
		// 其它平台
		// other platforms
		break;
	}
}
```

### 类型转换
### Type conversion
在NJS中调用Native API或从Native API返回数据到NJS时会自动转换数据类型。
Data types are automatically converted when calling the Native API in NJS or returning data from the Native API to NJS.
#### 类型转换表
#### Type conversion table
| 类型      |    Objective-C | Java  | JavaScript  |
| Types | Objective-C | Java | JavaScript |
| :-------- | --------:| :--: | :--: |
| 基本数据  | byte/short/int/long/float/double/... |  byte/short/int/long/float/double/...   |  Number  |
| basic data | byte/short/int/long/float/double/... | byte/short/int/long/float/double/... | Number |
| 字符      |    char            |  char      |  String  |
| char | char | char | String |
| 字符串    |    NSString/@""    | String/""  |  String  |
| String | NSString/@"" | String/"" | String |
|  数组     |  @[1,2,3]/NSArray  | new XXX[]  |  InstanceObject |
| Array | @[1,2,3]/NSArray | new XXX[] | InstanceObject |
|   类      |  @interface        |  class     |  ClassObject    |
| class | @interface | class | ClassObject |
| 对象（实例）| *                |  *         |  InstanceObject |
| Object (Instance) | * | * | InstanceObject |
| 空对象    |  nil               |  null      |  null           |
| empty object | nil | null | null |
|  其它     |  Protocol          |  Interface |  Object(JSON)   |
| Others | Protocol | Interface | Object(JSON) |

### 其他转换
### Other conversions
- Android原生应用的主Activity对象 转为plus.android.runtimeMainActivity()
- The main Activity object of the Android native application is converted to plus.android.runtimeMainActivity()
Android的主Activity对象是启动应用时自动创建的，不是代码创建，此时通过plus.android.runtimeMainActivity()方法获取该Activity对象
The main Activity object of Android is automatically created when the application is started, not created by code. At this time, the Activity object is obtained through the plus.android.runtimeMainActivity() method.
- Objective-C方法冒号剔除
- Objective-C method colon removal
[pos setPositionX:(int)x Y:(int)y;]  转为 pos.setPositionXY(x,y);
[pos setPositionX:(int)x Y:(int)y;] to pos.setPositionXY(x,y);
OC语法中方法的定义格式为:
The definition format of a method in OC syntax is:
“(返回值类型) 函数名: (参数1类型) 形参1 参数2名称: (参数2类型) 形参2”
"(return value type) function name: (parameter 1 type) formal parameter 1 parameter 2 name: (parameter 2 type) formal parameter 2"
方法的完整名称为: “函数名:参数2名称:”。
The full name of the method is: "function name: parameter 2 name:".
如:“（void）setPositionX:(int)x Y:(int)y;”，方法的完整名称为“setPositionX:Y:”，调用时语法为：“[pos setPositionX:x Y:y];”。
For example: "(void)setPositionX:(int)x Y:(int)y;", the full name of the method is "setPositionX:Y:", and the syntax is: "[pos setPositionX:x Y:y];" .
在JS语法中函数名称不能包含“:”字符，所以OC对象的方法名映射成NJS对象方法名时将其中的“:”字符自动删除，上面方法名映射为“setPositionXY”，在NJS调用的语法为：“pos.setPositionXY(x,y);”。
In the JS syntax, the function name cannot contain the ":" character, so when the method name of the OC object is mapped to the method name of the NJS object, the ":" character is automatically deleted. The above method name is mapped to "setPositionXY". The syntax of the NJS call is: "pos.setPositionXY(x,y);".
- 文件路径转换
- file path conversion
Web开发里使用的image/1.png是该web工程的相对路径，而原生API中经常需要使用绝对路径，比如/sdcard/apptest/image/1.png，此时使用这个扩展方法来完成转换：plus.io.convertLocalFileSystemURL("image/1.png")
The image/1.png used in web development is the relative path of the web project, and the native API often needs to use an absolute path, such as /sdcard/apptest/image/1.png, at this time use this extension method to complete the conversion: plus.io.convertLocalFileSystemURL("image/1.png")

### 概念
### concept
#### 类对象
#### class object
由于JavaScript中本身没有类的概念，为了使用Native API层的类，在NJS中引入了类对象（ClassObject）的概念，用于对Native中的类进行操作，如创建类的实例对象、访问类的静态属性、调用类的静态方法等。其原型如下：
Since there is no concept of class in JavaScript, in order to use the class of the Native API layer, the concept of class object (ClassObject) is introduced in NJS, which is used to operate the class in Native, such as creating an instance object of a class, accessing the class object. Static properties, calling static methods of a class, etc. Its prototype is as follows:
``` javascript
Interface ClassObject {
    function Object plusGetAttribute( String name );
    function void plusSetAttribute( String name, Object value );
}
```

**获取类对象**
**Get class object**
在iOS平台我们可以通过plus.ios.importClass(name)方法导入类对象，参数name为类的名称；在Android平台我们可以通过plus.android.importClass(name)方法导入类对象，其参数name为类的名称，必须包含完整的命名空间。
On the iOS platform, we can import the class object through the plus.ios.importClass(name) method, and the parameter name is the name of the class; on the Android platform, we can import the class object through the plus.android.importClass(name) method, and the parameter name is the class , which must contain the full namespace.

**示例：**
**Example:**
``` javascript
// iOS平台导入NSNotificationCenter类
// Import NSNotificationCenter class for iOS platform
var NSNotificationCenter = plus.ios.importClass("NSNotificationCenter");

// Android平台导入Intent类
// The Android platform imports the Intent class
var Intent = plus.android.importClass("android.content.Intent");
```
获取类对象后，可以通过类对象“.”操作符获取类的静态常量属性、调用类的静态方法，类的静态非常量属性需通过plusGetAttribute、plusSetAttribute方法操作。
After obtaining the class object, you can obtain the static constant attribute of the class and call the static method of the class through the class object "." operator. The static non-constant attribute of the class needs to be operated through the plusGetAttribute and plusSetAttribute methods.

#### 实例对象
#### instance object
在JavaScript中，所有对象都是Object，为了操作Native层类的实例对象，在NJS中引入了实例对象（InstanceObject）的概念，用于对Native中的对象进行操作，如操作对象的属性、调用对象的方法等。其原型如下：
In JavaScript, all objects are Objects. In order to operate the instance objects of the Native layer class, the concept of instance objects (InstanceObject) is introduced in NJS, which is used to operate objects in Native, such as operating the properties of objects, calling objects method etc. Its prototype is as follows:
``` javascript
Interface InstanceObject {
    function Object plusGetAttribute( String name );
    function void plusSetAttribute( String name, Object value );
}
```
**获取实例对象**
**Get instance object**
有两种方式获取类的实例对象，一种是调用Native API返回值获取，另一种是通过new操作符来创建导入的类对象的实例，如下：
There are two ways to obtain the instance object of the class, one is to call the Native API to return the value, and the other is to create an instance of the imported class object through the new operator, as follows:
``` javascript
// iOS平台导入NSDictionary类
// Import NSDictionary class for iOS platform
var NSDictionary = plus.ios.importClass("NSDictionary");
// 创建NSDictionary的实例对象
// Create an instance object of NSDictionary
var ns = new NSDictionary();

// Android平台导入Intent类
// The Android platform imports the Intent class
var Intent = plus.android.importClass("android.content.Intent");
// 创建Intent的实例对象
// Create an instance object of the Intent
var intent = new Intent();
```
获取实例对象后，可以通过实例对象“.”操作符获取对象的常量属性、调用对象的成员方法，实例对象的非常量属性则需通过plusGetAttribute、plusSetAttribute方法操作。
After obtaining the instance object, you can use the instance object "." operator to obtain the constant attribute of the object and call the member method of the object. The non-const attribute of the instance object needs to be operated through the plusGetAttribute and plusSetAttribute methods.

#### 操作对象的属性方法
#### Attribute methods of operation objects
- 常量属性
- constant properties
获取对象后就可以通过“.”操作符获取对象的常量属性，如果是类对象则获取的是类的静态常量属性，如果是实例对象则获取的是对象的成员常量属性。
After obtaining the object, you can obtain the constant attribute of the object through the "." operator. If it is a class object, it will obtain the static constant attribute of the class. If it is an instance object, it will obtain the member constant attribute of the object.

- 非常量属性
- Non-constant properties
如果Native层对象的属性值在原生环境下被更改，此时使用“.”操作符获取到对应NJS对象的属性值就可能不是实时的属性值，而是该Native层对象被映射为NJS对象那一刻的属性值。
If the attribute value of the native layer object is changed in the native environment, the attribute value of the corresponding NJS object obtained by using the "." operator may not be the real-time attribute value, but the native layer object is mapped to the NJS object. A moment's attribute value.
为获取获取Native层对象的实时属性值，需调用NJS对象的plusGetAttribute(name)方法，参数name为属性的名称，返回值为属性的值。调用NJS对象的plusSetAttribute(name,value)方法设置Native层对象的非常量属性值，参数name为属性的名称，value为要设置新的属性值。
In order to obtain the real-time attribute value of the native layer object, you need to call the plusGetAttribute(name) method of the NJS object, the parameter name is the name of the attribute, and the return value is the value of the attribute. Call the plusSetAttribute(name, value) method of the NJS object to set the non-constant attribute value of the Native layer object. The parameter name is the name of the attribute, and the value is the new attribute value to be set.
`注意：使用plusGetAttribute(name)方法也可以获取Native层对象的常量属性值，但不如直接使用“.”操作符来获取性能高。`
`Note: You can also use the plusGetAttribute(name) method to obtain the constant attribute value of the Native layer object, but it is not as efficient as directly using the "." operator to obtain the value. `

- 方法
- method
获取对象后可以通过“.”操作符直接调用Native层方法，如果是类对象调用的是Native层类的静态方法，如果是实例对象调用的是Native层对象的成员方法。
After obtaining the object, you can directly call the native layer method through the "." operator. If it is a class object, it calls the static method of the native layer class, and if it is an instance object, it calls the member method of the native layer object.
`注意：在iOS平台由于JS语法的原因，Objective-C方法名称中的“:”字符转成NJS对象的方法名称后将会被忽略，因此在NJS中调用的方法名需去掉所有“：”字符。`
`Note: Due to the JS syntax on the iOS platform, the ":" character in the Objective-C method name will be ignored after it is converted into the method name of the NJS object, so the method name called in NJS needs to remove all ":" character. `

- 类的继承
- class inheritance
Objective-C和Java中类如果存在继承自基类，在NJS中对应的对象会根据继承关系递归将所有基类的公有方法一一换成NJS对象的方法，所有基类的公有属性也可以通过其plusGetAttribute、plusSetAttribute方法访问。
If there is a class in Objective-C and Java that inherits from the base class, the corresponding object in NJS will recursively replace all the public methods of the base class with the methods of the NJS object one by one according to the inheritance relationship, and all the public properties of the base class can also be passed through Its plusGetAttribute, plusSetAttribute method access.

### 开始写NJS
### Start writing NJS
使用NJS调用Native API非常简单，基本步骤如下：
Using NJS to call Native API is very simple, the basic steps are as follows:
1. 导入要使用到的类；
1. Import the class to be used;
2. 创建类的实例对象（或者调用类的静态方法创建）；
2. Create an instance object of the class (or call the static method of the class to create);
3. 调用实例对象的方法；
3. Call the method of the instance object;

以下例子使用NJS调用iOS和Android的原生弹出提示框（类似但不同于js的alert）。
The following example uses NJS to call iOS and Android's native popup prompts (similar to but different from js's alert).

#### Android
以下代码在Android平台展示调用Native API显示系统提示框。
The following code displays the system prompt box by calling the Native API on the Android platform.
首先是Android原生 Java代码，用于比对参考：
The first is the Android native Java code for comparison reference:
``` java
import android.app.AlertDialog;
//...
// 创建提示框构造对象，Builder是AlertDialog的内部类。参数this指代Android的主Activity对象，该对象启动应用时自动生成
// Create a prompt box construction object, Builder is the inner class of AlertDialog. The parameter this refers to the main Activity object of Android, which is automatically generated when the application is started.
AlertDialog.Builder dlg = new AlertDialog.Builder(this);
// 设置提示框标题
// set the prompt box title
dlg.setTitle("自定义标题");
dlg.setTitle("custom title");
// 设置提示框内容
// set the prompt box content
dlg.setMessage("使用NJS的原生弹出框，可自定义弹出框的标题、按钮");
dlg.setMessage("Using NJS's native popup box, you can customize the title and button of the popup box");
// 设置提示框按钮
// set the prompt box button
dlg.setPositiveButton("确定(或者其他字符)", null);
dlg.setPositiveButton("OK (or other character)", null);
// 显示提示框
// show tooltip
dlg.show();
//...
```
Native.js代码：
Native.js code:
``` javascript
/**
 * 在Android平台通过NJS显示系统提示框
 * Display system prompt box through NJS on Android platform
 */
function njsAlertForAndroid(){
	// 导入AlertDialog类
	// Import the AlertDialog class
	var AlertDialog = plus.android.importClass("android.app.AlertDialog");
	// 创建提示框构造对象，构造函数需要提供程序全局环境对象，通过plus.android.runtimeMainActivity()方法获取
	// Create a prompt box construction object. The constructor needs to provide the global environment object of the program, which is obtained through the plus.android.runtimeMainActivity() method
	var dlg = new AlertDialog.Builder(plus.android.runtimeMainActivity());
	// 设置提示框标题
	// set the prompt box title
	dlg.setTitle("自定义标题");
	dlg.setTitle("custom title");
	// 设置提示框内容
	// set the prompt box content
	dlg.setMessage("使用NJS的原生弹出框，可自定义弹出框的标题、按钮");
	dlg.setMessage("Using NJS's native popup box, you can customize the title and button of the popup box");
	// 设置提示框按钮
	// set the prompt box button
	dlg.setPositiveButton("确定(或者其他字符)",null);
	dlg.setPositiveButton("OK (or other characters)",null);
	// 显示提示框
	// show tooltip
	dlg.show();
}
//...
```
`注意：NJS代码中创建提示框构造对象要求传入程序全局环境对象，可通过plus.android.runtimeMainActivity()方法获取应用的主Activity对象，它是HTML5+应用运行期自动创建的程序全局环境对象。`
`Note: Creating a prompt box construction object in the NJS code requires passing in the program global environment object. You can obtain the main Activity object of the application through the plus.android.runtimeMainActivity() method, which is the program global environment object automatically created during the HTML5+ application runtime. `

Android设备上运行效果图：
Running renderings on Android devices:
![Android Native.js示例运行效果图](http://www.dcloud.io/docs/a/njs/android_alert.png)
![Android Native.js example running renderings](http://www.dcloud.io/docs/a/njs/android_alert.png)
`注意：其实HTML5+规范已经封装过原生提示框消息API：plus.ui.alert( message, alertCB, title, buttonCapture)。此处NJS的示例仅为了开发者方便理解，实际使用时调用plus.ui.alert更简单，性能也更高。**
`Note: In fact, the HTML5+ specification has encapsulated the native prompt box message API: plus.ui.alert( message, alertCB, title, buttonCapture). The example of NJS here is only for the convenience of developers to understand. In actual use, calling plus.ui.alert is simpler and has higher performance. **

#### iOS
以下代码在iOS平台展示调用Native API显示系统提示对话框。
The following code shows calling the Native API to display the system prompt dialog box on the iOS platform.
iOS原生Objective-C代码，用于比对参考：
iOS native Objective-C code for comparison reference:
``` objc
#import <UIKit/UIKit.h>
//...
// 创建UIAlertView类的实例对象
// Create an instance object of the UIAlertView class
UIAlertView *view = [UIAlertView alloc];
// 设置提示对话上的内容
// Set the content on the prompt dialog
[view initWithTitle:@"自定义标题" // 提示框标题
[view initWithTitle:@"custom title" // prompt box title
    message:@"使用NJS的原生弹出框，可自定义弹出框的标题、按钮" // 提示框上显示的内容
    message:@"Using the native pop-up box of NJS, you can customize the title and button of the pop-up box" // The content displayed on the prompt box
    delegate:nil // 点击提示框后的通知代理对象，nil类似js的null，意为不设置
    delegate:nil // The notification proxy object after clicking the prompt box, nil is similar to the null of js, which means not set
    cancelButtonTitle:@"确定(或者其他字符)" // 提示框上取消按钮的文字
    cancelButtonTitle:@"OK (or other characters)" // The text of the cancel button on the prompt box
    otherButtonTitles:nil]; // 提示框上其它按钮的文字，设置为nil表示不显示
    otherButtonTitles:nil]; // The text of other buttons on the prompt box, set to nil means not displayed
// 调用show方法显示提示对话框，在OC中使用[]语法调用对象的方法
// Call the show method to display the prompt dialog, and use the [] syntax to call the method of the object in OC
[view show];
//...
```
Native.js代码：
Native.js code:
``` javascript
/**
 * 在iOS平台通过NJS显示系统提示框
 * Display system prompt box through NJS on iOS platform
 */
function njsAlertForiOS(){
	// 导入UIAlertView类
	// Import UIAlertView class
	var UIAlertView = plus.ios.importClass("UIAlertView");
	// 创建UIAlertView类的实例对象
	// Create an instance object of the UIAlertView class
	var view = new UIAlertView();
	// 设置提示对话上的内容
	// Set the content on the prompt dialog
	view.initWithTitlemessagedelegatecancelButtonTitleotherButtonTitles("自定义标题" // 提示框标题
	view.initWithTitlemessagedelegatecancelButtonTitleotherButtonTitles("Custom Title" //Title of the prompt box
	    , "使用NJS的原生弹出框，可自定义弹出框的标题、按钮" // 提示框上显示的内容
	    , "Using the native popup box of NJS, you can customize the title and button of the popup box" // The content displayed on the prompt box
	    , null // 操作提示框后的通知代理对象，暂不设置
	    , null // The notification proxy object after the operation prompt box, not set yet
	    , "确定(或者其他字符)" // 提示框上取消按钮的文字
	    , "OK (or other characters)" // text of the cancel button on the tooltip
	    , null ); // 提示框上其它按钮的文字，设置为null表示不显示
	    , null ); // The text of other buttons on the prompt box, set to null means not displayed
	// 调用show方法显示提示对话框，在JS中使用()语法调用对象的方法
	// Call the show method to display the prompt dialog, and use the () syntax to call the method of the object in JS
	view.show();
}
//...
```
`注意：在OC语法中方法的定义格式为:
`Note: The definition format of methods in OC syntax is:
“(返回值类型) 函数名: (参数1类型) 形参1 参数2名称: (参数2类型) 形参2”
"(return value type) function name: (parameter 1 type) formal parameter 1 parameter 2 name: (parameter 2 type) formal parameter 2"
方法的完整名称为: “函数名:参数2名称:”。
The full name of the method is: "function name: parameter 2 name:".
如:“（void）setPositionX:(int)x Y:(int)y;”，方法的完整名称为“setPositionX:Y:”
For example: "(void)setPositionX:(int)x Y:(int)y;", the full name of the method is "setPositionX:Y:"
调用时语法为：“[pos setPositionX:x Y:y];”。
The syntax for calling is: "[pos setPositionX:x Y:y];".
在JS语法中函数名称不能包含“:”字符，所以OC对象的方法名映射成NJS对象方法名时将其中的“:”字符自动删除，上面方法名映射为“setPositionXY”，在NJS调用的语法为：“pos.setPositionXY(x,y);”。`
In the JS syntax, the function name cannot contain the ":" character, so when the method name of the OC object is mapped to the method name of the NJS object, the ":" character is automatically deleted. The above method name is mapped to "setPositionXY". The syntax of the NJS call is: "pos.setPositionXY(x,y);". `
iOS设备上运行效果图：
Running renderings on iOS devices:
![iOS Native.js示例运行效果图](http://www.dcloud.io/docs/a/njs/ios_alert.png)
![iOS Native.js example running renderings](http://www.dcloud.io/docs/a/njs/ios_alert.png)
`注意：其实HTML5+规范已经封装过原生提示框消息API：plus.ui.alert( message, alertCB, title, buttonCapture)。此处NJS的示例仅为了开发者方便理解，实际使用时调用plus.ui.alert更简单、性能也更高。
`Note: In fact, the HTML5+ specification has encapsulated the native prompt box message API: plus.ui.alert( message, alertCB, title, buttonCapture). The example of NJS here is only for the convenience of developers to understand. In actual use, calling plus.ui.alert is simpler and has higher performance.

在HBuilder自带的Hello H5+模板应用中“Native.JS”（plus/njs.html）页面有完整的源代码，可真机运行查看效果。
The "Native.JS" (plus/njs.html) page in the Hello H5+ template application that comes with HBuilder has complete source code, which can be run on a real machine to view the effect.

## 常用API
## Common API
### API on Android
为了能更好的理解NJS调用Java Native API，我们在Android平台用Java实现以下测试类，将在会后面API说明中的示例来调用。
In order to better understand how NJS calls the Java Native API, we implement the following test classes in Java on the Android platform, which will be called with the examples in the API description later in the session.
文件NjsHello.java代码如下：
The code of the file NjsHello.java is as follows:
``` java
package io.dcloud;

// 定义类NjsHello
// Define class NjsHello
public class NjsHello {
	// 静态常量
	// static constant
	public static final int CTYPE = 1;
	// 静态变量
	// static variable
	public static int count;
	// 成员常量
	// member constant
	public final String BIRTHDAY = "2013-01-13";
	// 成员变量
	// Member variables
	String name; //定义属性name
	NjsHelloEvent observer;
	public void updateName( String newname ) { //定义方法updateName
	public void updateName( String newname ) { //Define method updateName
		name = newname;
	}
	public void setEventObserver( NjsHelloEvent newobserver ) {
		observer = newobserver;
	}
	public void test() { //定义方法test
	public void test() { //Define method test
		System.out.printf( "My name is: %s", name );
		observer.onEventInvoked( name );
	}
	public static void testCount() {
		System.out.printf( "Static count is:%d", count );
	}
	static{  // 初始化类的静态变量
	static{ // initialize the static variables of the class
		NjsHello.count = 0;
	}
}
```
文件NjsHelloEvent.java代码如下：
The code of the file NjsHelloEvent.java is as follows:
``` java
package io.dcloud;

// 定义接口NjsHelloEvent
// Define the interface NjsHelloEvent
public interface NjsHelloEvent {
	public void onEventInvoked( String name );
}
```
`注：此NjsHello示例仅为了说明原生代码与NJS代码之间的映射关系，以下示例代码无法直接在HBuilder里真机运行，必须在以后HBuilder开放自定义打包后方可把NjsHello类打入app并被NJS调用。实际使用中，这种需要并非必要，大多数情况可以通过直接写NJS代码调用操作系统API，而无需由原生语言二次封装类供JS调用。`
`Note: This NjsHello example is only to illustrate the mapping relationship between native code and NJS code. The following sample code cannot be directly run in HBuilder on a real machine. The NjsHello class must be opened and packaged in HBuilder later. NJS calls. In actual use, this need is not necessary. In most cases, the operating system API can be called directly by writing NJS code, without the need for secondary encapsulation classes in the native language for JS to call. `

#### plus.android.importClass
导入Java类对象，方法原型如下：
Import the Java class object, the method prototype is as follows:
``` js
ClassObject plus.android.importClass( String classname );
```
导入类对象后，就可以通过“.”操作符直接调用对象（类对象/实例对象）的常量和方法。
After importing a class object, you can directly call the constants and methods of the object (class object/instance object) through the "." operator.
classname：要导入的Java类名，必须是完整的命名空间（使用"."分割），如果指定的类名不存在，则导入类失败，返回null。
classname: The name of the Java class to be imported, which must be a complete namespace (separated by "."). If the specified class name does not exist, the import of the class fails and null is returned.

`注意：导入类对象可以方便的使用“.”操作符来调用对象的属性和方法，但也会消耗较多的系统资源。因此导入过多的类对象会影响性能，此时可以使用“高级API”中提供的方法在不导入类对象的情况下调用Native API。`
`Note: Importing a class object can easily use the "." operator to call the properties and methods of the object, but it will also consume more system resources. Therefore, importing too many class objects will affect performance. In this case, you can use the methods provided in "Advanced API" to call the Native API without importing class objects. `

**示例：**
**Example:**
1. 导入类对象
1. Import the class object
Java代码：
Java code:
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建对象的实例
    // create an instance of the object
    NjsHello hello = new NjsHello();
    //...
}
//...
}
```
NJS代码：
NJS code:
``` js
// 导入测试类NjsHello
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 创建NjsHello的实例对象
// Create an instance object of NjsHello
var hello = new NjsHello();
// ...
```

#### ClassObject
调用plus.android.importClass()方法导入类并返回ClassObject类对象，通过该类对象，可以创建类的实例对象。在Java中类的静态方法会转换成NJS类对象的方法，可通过类对象的“.”操作符调用；类的静态常量会转换为NJS类对象的属性，可通过类对象的“.”操作符访问；类的静态属性则需通过NJS类对象的plusGetAttribute、plusSetAttribute方法操作。
Call the plus.android.importClass() method to import the class and return the ClassObject class object, through which an instance object of the class can be created. In Java, the static method of the class will be converted into the method of the NJS class object, which can be called by the "." operator of the class object; the static constant of the class will be converted into the attribute of the NJS class object, which can be operated by the "." operator of the class object Character access; the static attributes of the class need to be operated through the plusGetAttribute and plusSetAttribute methods of the NJS class object.
**示例：**
**Example:**
1. 导入类后获取类的静态常量属性
1. After importing the class, get the static constant property of the class
Java代码：
Java code:
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 获取类的静态常量属性
    // Get the static constant property of the class
    int type = NjsHello.CTYPE;
		// 输出“NjsHello Final's value: 1”
		// print“NjsHello Final's value: 1”
    System.out.printf( "NjsHello Final's value: %d", type );
    //...
}
//...
}
```
NJS代码：
NJS code:
``` javascript
// 导入测试类NjsHello
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 获取类的静态常量属性
// Get the static constant property of the class
var type = NjsHello.CTYPE;
// 输出“NjsHello Final's value: 1”
// print“NjsHello Final's value: 1”
console.log( "NjsHello Final's value: "+type );
// ...
```

2. 导入类后调用类的静态方法
2. After importing the class, call the static method of the class
Java代码：
Java code:
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 调用类的静态方法
    // call the static method of the class
    NjsHello.testCount();
    //...
}
//...
}
```
NJS代码：
NJS code:
``` javascript
// 导入测试类NjsHello
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 调用类的静态方法
// call the static method of the class
NjsHello.testCount();
// ...
```

##### ClassObject.plusGetAttribute
获取类对象的静态属性值，方法原型如下：
Get the static property value of the class object, the method prototype is as follows:
``` javascript
Object classobject.plusGetAttribute( String name );
```

导入类对象后，就可以调用其plusGetAttribute方法获取类的静态属性值。
After importing the class object, you can call its plusGetAttribute method to obtain the static attribute value of the class.
- name：要获取的静态属性名称，如果指定的属性名称不存在，则获取属性失败，返回null。
- name: The name of the static property to be acquired. If the specified property name does not exist, the property acquisition fails and null is returned.

`注意：如果导入的类对象中存在“plusGetAttribute”同名的静态方法，则必须通过plus.android.invoke()方法调用。`
`Note: If there is a static method with the same name as "plusGetAttribute" in the imported class object, it must be called through the plus.android.invoke() method. `

示例：
Example:
1. 导入类后获取类的静态属性值
1. After importing the class, get the static property value of the class
Java代码：
Java code:
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 获取类的静态属性
    // Get the static properties of the class
    int count = NjsHello.count;
		// 输出“NjsHello Static's value: 0”
		// print“NjsHello Static's value: 0”
    System.out.printf( "NjsHello Static's value: %d", count );  
    //...
}
//...
}
```
NJS代码：
NJS code:
``` javascript
// 导入测试类NjsHello
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 获取类的静态属性
// Get the static properties of the class
var count = NjsHello.plusGetAttribute( "count" );
// 输出“NjsHello Static's value: 0”
// print“NjsHello Static's value: 0”
console.log( "NjsHello Static's value: "+count ); 
// ...
```

##### ClassObject.plusSetAttribute
设置类对象的静态属性值，方法原型如下：
Set the static property value of the class object, the method prototype is as follows:
``` java
void classobject.plusSetAttribute( String name, Object value );
```

导入类对象后，就可以调用其plusSetAttribute方法设置类的静态属性值。
After importing the class object, you can call its plusSetAttribute method to set the static attribute value of the class.
- name：要设置的静态属性名称，如果指定的属性名称不存在，则设置属性失败，返回null。
- name: The name of the static property to be set. If the specified property name does not exist, setting the property fails and returns null.
- value：要设置的属性值，其类型必须与Native层类对象的静态属性区配，否则设置操作不生效，将保留以前的值。
- value: The attribute value to be set, its type must be matched with the static attribute of the Native layer class object, otherwise the setting operation will not take effect and the previous value will be retained.

`注意：如果导入的类对象中存在“plusSetAttribute”同名的静态方法，则必须通过plus.android.invoke()方法调用。`
`Note: If there is a static method with the same name as "plusSetAttribute" in the imported class object, it must be called through the plus.android.invoke() method. `

示例：
Example:
1. 导入类后设置类的静态属性值
1. Set the static property value of the class after importing the class
Java代码：
Java code:
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 设置类的静态属性值
    // Set the static property value of the class
    NjsHello.count = 2;
		// 输出“NjsHello Static's value: 2”
		// print“NjsHello Static's value: 2”
    System.out.printf( "NjsHello Static's value: %d", NjsHello.count );
    //...
}
//...
}
```
NJS代码：
NJS code:
``` javascript
// 导入测试类NjsHello
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 设置类的静态属性值
// Set the static property value of the class
NjsHello.plusSetAttribute( "count", 2 );
// 输出“NjsHello Static's value: 2”
// print“NjsHello Static's value: 2”
console.log( "NjsHello Static's value: "+NjsHello.plusGetAttribute( "count" ) );
// ...
```

#### InstanceObject
NJS中实例对象与Java中的对象对应，调用plus.android.importClass()方法导入类后，通过new操作符可创建该类的实例对象，或直接调用plus.android.newObject方法创建类的实例对象，也可通过调用Native API返回实例对象。在Java中对象的方法会转换成NJS实例对象的方法，可通过实例对象的“.”操作符调用；对象的常量属性会转换NJS实例对象的属性，可通过实例对象的“.”操作符访问。对象的非常量属性则必须通过NJS实例对象的plusGetAttribute、plusSetAttribute方法操作。
Instance objects in NJS correspond to objects in Java. After calling the plus.android.importClass() method to import a class, you can create an instance object of the class through the new operator, or directly call the plus.android.newObject method to create an instance object of the class , you can also return an instance object by calling the Native API. In Java, the method of the object will be converted into the method of the NJS instance object, which can be called by the "." operator of the instance object; the constant property of the object will be converted to the property of the NJS instance object, which can be accessed by the "." operator of the instance object . The non-constant attribute of the object must be operated through the plusGetAttribute and plusSetAttribute methods of the NJS instance object.
示例：
Example:
1. 导入类创建实例对象，调用对象的方法
1. Import the class to create an instance object and call the method of the object
Java代码：
Java code:
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建NjsHello的实例对象
    // Create an instance object of NjsHello
    NjsHello hello = new NjsHello();
    // 调用对象的方法
    // call the object's method
    hello.updateName( "Tester" );
    //...
}
//...
}
```
NJS代码：
NJS code:
``` javascript
// 导入测试类NjsHello
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 创建NjsHello的实例对象
// Create an instance object of NjsHello
var hello = new NjsHello();
// 调用对象的方法
// call the object's method
hello.updateName( "Tester" );
// ...
```

2. 导入类创建实例对象，获取对象的常量属性
2. Import the class to create an instance object and get the constant properties of the object
Java代码：
Java code:
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建NjsHello的实例对象
    // Create an instance object of NjsHello
    NjsHello hello = new NjsHello();
    // 访问对象的常量属性
    // access the constant property of the object
    String birthday = hello.BIRTHDAY;
		// 输出“NjsHello Object Final's value: 2013-01-13”
		// print“NjsHello Object Final's value: 2013-01-13”
    System.out.printf( "NjsHello Object Final's value: %s", birthday );
    //...
}
//...
}
```
NJS代码：
NJS code:
``` javascript
// 导入测试类NjsHello
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 创建NjsHello的实例对象
// Create an instance object of NjsHello
var hello = new NjsHello();
// 访问对象的常量属性
// access the constant property of the object
var birthday = hello.BIRTHDAY;
// 输出“NjsHello Object Final's value: 2013-01-13”
// print“NjsHello Object Final's value: 2013-01-13”
console.log( "NjsHello Object Final's value: "+birthday );
// ...
```

##### InstanceObject.plusGetAttribute
获取实例对象的属性值，方法原型如下：
Get the attribute value of the instance object, the method prototype is as follows:
``` javascript
Object instancebject.plusGetAttribute( String name );
```
获取实例对象后，就可以调用其plusGetAttribute方法获取对象的属性值。
After obtaining the instance object, you can call its plusGetAttribute method to obtain the attribute value of the object.
name：要获取对象的属性名称，如果指定的属性名称不存在，则获取属性失败，返回null。
name: To get the property name of the object, if the specified property name does not exist, the property acquisition fails and null is returned.

`注意：如果实例对象中存在“plusGetAttribute”同名的方法，则必须通过plus.android.invoke()方法调用。`
`Note: If there is a method with the same name as "plusGetAttribute" in the instance object, it must be called through the plus.android.invoke() method. `

示例：
Example:
1. 导入类创建实例对象，获取对象的属性值
1. Import the class to create an instance object and get the attribute value of the object
Java代码：
Java code:
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建对象的实例
    // create an instance of the object
    NjsHello hello = new NjsHello();
    hello.updateName( "Tester" );
    // 获取其name属性值
    // Get the value of its name property
    String name = hello.name;
		// 输出“NjsHello Object's name: Tester”
		// print“NjsHello Object's name: Tester”
    System.out.printf( "NjsHello Object's name: %s", name );
    //...
}
//...
}
```
NJS代码：
NJS code:
``` javascript
// 导入测试类NjsHello
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 创建对象的实例
// create an instance of the object
var hello = new NjsHello();
hello.updateName( "Tester" );
// 获取其name属性值
// Get the value of its name property
var name = hello.plusGetAttribute( "name" );
// 输出“NjsHello Object's name: Tester”
// print“NjsHello Object's name: Tester”
console.log( "NjsHello Object's name: "+name );
// ...
```

##### InstanceObject.plusSetAttribute
设置类对象的静态属性值，方法原型如下：
Set the static property value of the class object, the method prototype is as follows:
``` javascript
void instanceobject.plusSetAttribute( String name, Object value );
```
导入类对象后，就可以调用其plusSetAttribute方法设置类的静态属性值。
After importing the class object, you can call its plusSetAttribute method to set the static attribute value of the class.
- name：要设置的静态属性名称，如果指定的属性名称不存在，则设置属性失败，返回null。
- name: The name of the static property to be set. If the specified property name does not exist, setting the property fails and returns null.
- value：要设置的属性值，其类型必须与Native层类对象的静态属性区配，否则设置操作不生效，将保留以前的值。
- value: The attribute value to be set, its type must be matched with the static attribute of the Native layer class object, otherwise the setting operation will not take effect and the previous value will be retained.

`注意：如果导入的类对象中存在“plusSetAttribute”同名的静态方法，则必须通过plus.android.invoke()方法调用。`
`Note: If there is a static method with the same name as "plusSetAttribute" in the imported class object, it must be called through the plus.android.invoke() method. `

示例：
Example:
1. 导入类创建实例对象，设置对象的属性值
1. Import the class to create an instance object and set the property value of the object
Java代码：
Java code:
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建对象的实例
    // create an instance of the object
    NjsHello hello = new NjsHello();
    // 设置其name属性值
    // Set the value of its name property
    hello.name = "Tester";
		// 输出“NjsHello Object's name: Tester”
		// print“NjsHello Object's name: Tester”
    System.out.printf( "NjsHello Object's name: %s", hello.name );
    //...
}
//...
}
```
NJS代码：
NJS code:
``` javascript
// 导入测试类NjsHello
// Import the test class NjsHello
var Hello = plus.android.importClass("NjsHello");
// 创建对象的实例
// create an instance of the object
var hello = new NjsHello();
// 设置其name属性值
// Set the value of its name property
hello.plusSetAttribute( "name", "Tester" );
// 输出“NjsHello Object's name: Tester”
// print“NjsHello Object's name: Tester”
console.log( "NjsHello Object's name: "+hello.plusGetAttribute("name") );
// ...
```

#### plus.android.implements
在Java中可以通过定义新类并实现Interface的接口，并创建出新类对象作为其它接口的参数，在NJS中则可快速创建对应的Interface对象，方法原型如下：
Object plus.android.implements( String name, Object obj );

此方法创建Native层中Java的接口实现对象，作为调用其它Native API的参数。
This method creates a Java interface implementation object in the Native layer as a parameter for calling other Native APIs.
- name：接口的名称，必须是完整的命名空间（使用"."分割），如果不存在此接口，则创建接口实现对象失败，返回null。
- name: The name of the interface, which must be a complete namespace (separated by "."). If the interface does not exist, the creation of the interface implementation object fails and null is returned.
- obj：JSON对象类型，接口实现方法的定义，JSON对象中key值为接口方法的名称；value值为Function，方法参数必须与接口中方法定义的参数区配。
- obj: JSON object type, the definition of the interface implementation method, the key value in the JSON object is the name of the interface method; the value value is Function, and the method parameters must be matched with the parameters defined by the method in the interface.

示例：
Example:
1. Test类中实现接口NjsHelloEvent的方法，并调用NjsHello对象的test方法触发接口中函数的运行。
1. Implement the method of the interface NjsHelloEvent in the Test class, and call the test method of the NjsHello object to trigger the running of the function in the interface.
Java代码：
Java code:
``` java
import io.dcloud.NjsHello;
import io.dcloud.NjsHelloEvent;
//...
// Test类实现NjsHelloEvent接口
// Test class implements NjsHelloEvent interface
public class Test implements NjsHelloEvent {
public static void main( String args[] ) {
    // 创建对象的实例
    // create an instance of the object
    NjsHello hello = new NjsHello();
    // 调用updateName方法
    // call the updateName method
    hello.updateName( "Tester" );
    // 设置监听对象
    // set the listener object
    hello.setEventObserver( this );
    // 调用test方法，触发接口事件
    // Call the test method to trigger the interface event
    hello.test(); // 触发onEventInvoked函数运行
    hello.test(); // Trigger the onEventInvoked function to run
    //...
}
// 实现接口NjsHelloEvent的onEventInvoked方法
// Implement the onEventInvoked method of the interface NjsHelloEvent
@Override
public void onEventInvoked( String name ) {
	System.out.printf( "Invoked Object's name is: %s", name );
}
//...
}
```
NJS代码：
NJS code:
``` javascript
// 导入测试类NjsHello
// Import the test class NjsHello
var NjsHello = plus.android.importClass("io.dcloud.NjsHello");
// 实现接口“NjsHelloEvent”对象
// Implement the interface "NjsHelloEvent" object
var hevent = plus.android.implements( "io.dcloud.NjsHelloEvent", {
    "onEventInvoked":function( name ){
        console.log( "Invoked Object’s name: "+name ); // 输出“Invoked Object’s name: Tester”
    }
} );
// 创建对象的实例
// create an instance of the object
var hello = new NjsHello();
// 调用updateName方法
// call the updateName method
hello.updateName( "Tester" );
// 设置监听对象
// set the listener object
hello.setEventObserver( hevent );
// 调用test方法，触发代理事件
// Call the test method to trigger the delegate event
hello.test(); // 触发上面定义的匿名函数运行
hello.test(); // trigger the anonymous function defined above to run
// ...
```

#### plus.android.runtimeMainActivity
获取运行期环境主Activity实例对象，方法原型如下：
Get the main Activity instance object of the runtime environment. The method prototype is as follows:
``` javascript
InstanceObject plus.android.runtimeMainActivity();
```
此方法将获取程序的主Activity的实例对象，它是Html5+运行期环境主组件，用于处理与用户交互的各种事件，也是应用程序全局环境android.app.Activity的实现对象。android.app.Activity是一个特殊的类，需要在原生开发环境中注册后才能使用，所以使用new操作符创建对象无实际意义。
This method will obtain the instance object of the main Activity of the program, which is the main component of the Html5+ runtime environment, used to process various events that interact with the user, and is also the implementation object of the application global environment android.app.Activity. android.app.Activity is a special class that needs to be registered in the native development environment before it can be used, so it is meaningless to use the new operator to create objects.

示例：
Example:
1. 调用Activity的startActivity方法来拨打电话
1. Call the Activity's startActivity method to make a call
Java代码：
Java code:
``` java
import android.app.Activity;
import android.content.Intent;
import android.net.Uri;
//...
// 获取主Activity对象的实例
// Get an instance of the main Activity object
Activity main = context;
// 创建Intent
// create Intent
Uri uri = Uri.parse("tel:10086");
Intent call = new Intent("android.intent.action.CALL",uri);
// 调用startActivity方法拨打电话
// Call the startActivity method to make a call
main.startActivity(call);
//...
```
NJS代码：
NJS code:
``` javascript
// 导入Activity、Intent类
// Import Activity, Intent classes
var Intent = plus.android.importClass("android.content.Intent");
var Uri = plus.android.importClass("android.net.Uri");
// 获取主Activity对象的实例
// Get an instance of the main Activity object
var main = plus.android.runtimeMainActivity();
// 创建Intent
// create Intent
var uri = Uri.parse("tel:10086");
var call = new Intent("android.intent.action.CALL",uri);
// 调用startActivity方法拨打电话
// Call the startActivity method to make a call
main.startActivity( call );
// ...
```

#### plus.android.currentWebview
获取当前Webview窗口对象的native层实例对象，方法原型如下：
Get the native layer instance object of the current Webview window object. The method prototype is as follows:
``` javascript
InstanceObject plus.android.currentWebview();
```
Android平台完整Java类名为android.webkit.Webview，完整API请参考Android开发文档[android.webkit.Webview](http://developer.android.com/reference/android/webkit/WebView.html)。
The complete Java class name of the Android platform is android.webkit.Webview. For the complete API, please refer to the Android development document [android.webkit.Webview](http://developer.android.com/reference/android/webkit/WebView.html).

示例：
Example:
1. 调用Webview的loadUrl方法跳转页面
1. Call the loadUrl method of Webview to jump to the page
Java代码：
Java code:
``` java
import android.webkit.Webview;
//...
// 获取Webview对象
// Get the Webview object
Webview wv = this;
// 跳转页面
// jump to the page
wv.loadUrl("http://www.dcloud.io/");
//...
```
NJS代码：
NJS code:
``` javascript
// 导入Webview类
// Import the Webview class
var Webview = plus.android.importClass("android.webkit.Webview");
// 当前Webview对象的实例
// Instance of the current Webview object
var wv = plus.android.currentWebview();
// 跳转页面
// jump to the page
wv.loadUrl("http://www.dcloud.io/");
// ...
```
**完整API文档参考：[HTML5+ API - Native.js for Android](http://www.html5plus.org/doc/zh_cn/android.html)**
**Complete API documentation reference: [HTML5+ API - Native.js for Android](http://www.html5plus.org/doc/zh_cn/android.html)**

### API on iOS
为了能更好的理解NJS调用Objective-C Native API，我们在iOS平台用Objective-C实现以下测试类，将会在后面API说明中的示例来调用。
In order to better understand NJS calling Objective-C Native API, we use Objective-C to implement the following test classes on the iOS platform, which will be called in the following examples in the API description.
头文件njshello.h代码如下：
The code of the header file njshello.h is as follows:
``` objc
// 定义协议
// define the protocol
@protocol NjsHelloEvent <NSObject>
@required
-(void) onEventInvoked:(NSString*)name;
@end
// -------------------------------------------------------------
// 定义类NjsHello
// Define class NjsHello
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
The source code of the implementation file njshello.m is as follows:
``` objc
#import "njshello.h"
// 实现类NjsHello
// Implement class NjsHello
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
Import the Objective-C class object, the method prototype is as follows:
``` javascript
ClassObject plus.ios.importClass( String classname );
```
导入类对象后，就可以通过“.”操作符直接调用对象（类对象/实例对象）的常量和方法。通过“.”操作符号调用方法时，不需要使用“:”来分割方法名。
After importing a class object, you can directly call the constants and methods of the object (class object/instance object) through the "." operator. When calling a method with the "." operator, there is no need to use ":" to separate the method name.
- classname：要导入的Objective-C类名，如果指定的类名不存在，则导入类失败，返回null。
- classname: The name of the Objective-C class to be imported. If the specified class name does not exist, the import of the class fails and null is returned.

`注意：导入类对象可以方便的使用“.”操作符来调用对象的属性和方法，但也会消耗较多的系统资源。因此导入过多的类对象会影响性能，此时可以使用“高级API”中提供的方法在不导入类对象的情况下调用Native API。`
`Note: Importing a class object can easily use the "." operator to call the properties and methods of the object, but it will also consume more system resources. Therefore, importing too many class objects will affect performance. In this case, you can use the methods provided in "Advanced API" to call the Native API without importing class objects. `
示例：
Example:
1. 导入类并创建实例对象
1. Import the class and create an instance object
Objective-C代码：
Objective-C code:
``` objc
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // 创建对象的实例
    // create an instance of the object
    NjsHello* hello = [[NjsHello alloc] init];
    // ...
}
// ...
```
NJS代码：
NJS code:
``` javascript
// 导入测试类NjsHello
// Import the test class NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// 创建对象的实例
// create an instance of the object
var hello = new NjsHello();
// ...
```

#### ClassObject 
调用plus.ios.importClass()方法导入类并返回ClassObject类对象，通过该类对象，可以创建类的实例对象。在Objective-C中类的静态方法会转换成NJS类对象的方法，可通过类对象的“.”操作符调用；
Call the plus.ios.importClass() method to import the class and return the ClassObject class object, through which an instance object of the class can be created. In Objective-C, the static method of the class will be converted into the method of the NJS class object, which can be called by the "." operator of the class object;

`注意：由于Objective-C中类没有静态变量，而是通过定义全局变量来实现，目前NJS中无法访问全局变量的值。对于全局常量，在NJS中也无法访问，对于原类型常量可在文档中找到其具体的值，在JS代码中直接赋值；对于非原类型常量目前还无法访问。`
`Note: Since classes in Objective-C do not have static variables, they are implemented by defining global variables. Currently, the value of global variables cannot be accessed in NJS. For global constants, it is also inaccessible in NJS. For primitive type constants, you can find its specific value in the document and assign it directly in the JS code; for non-primitive type constants, it is currently inaccessible. `

示例：
Example:
1. 导入类后调用类的静态方法
1. After importing the class, call the static method of the class
Objective-C代码：
Objective-C code:
``` objc
#import "njshello.h"
// ...
int main( int argc, char *argv[] )
{
    // 调用类的静态方法
    // call the static method of the class
    [NjsHello testCount];
    // ...
}
// ...
```
NJS代码：
NJS code:
``` javascript
// 导入测试类NjsHello
// Import the test class NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// 调用类的静态方法
// call the static method of the class
NjsHello.testCount();
// ...
```

#### InstanceObject 
NJS中实例对象与Objective-C中的对象对应，调用plus.ios.importClass()方法导入类后，通过new操作符可创建该类的实例对象，或直接调用plus.ios.newObject方法创建类的实例对象，也可通过调用Native API返回实例对象。在Objective-C中对象的方法会转换成NJS实例对象的方法，可通过实例对象的“.”操作符调用；对象的属性则必须通过NJS实例对象的plusGetAttribute、plusSetAttribute方法操作。
The instance object in NJS corresponds to the object in Objective-C. After calling the plus.ios.importClass() method to import the class, the new operator can be used to create an instance object of the class, or the plus.ios.newObject method can be called directly to create the class The instance object can also be returned by calling the Native API. In Objective-C, the method of the object will be converted into the method of the NJS instance object, which can be called through the "." operator of the instance object; the attributes of the object must be operated through the plusGetAttribute and plusSetAttribute methods of the NJS instance object.

示例：
Example:
1. 导入类创建实例对象，调用对象的方法
1. Import the class to create an instance object and call the method of the object
Objective-C代码：
Objective-C code:
``` objc
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // 创建对象的实例
    // create an instance of the object
    NjsHello* hello = [[NjsHello alloc] init];
    // ...
}
// ...
```
NJS代码：
NJS code:
``` javascript
// 导入测试类NjsHello
// Import the test class NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// 创建对象的实例
// create an instance of the object
var hello = new NjsHello();
// ...
```

##### InstanceObject.plusGetAttribute
获取实例对象的属性值，方法原型如下：
Get the attribute value of the instance object, the method prototype is as follows:
``` javascript
Object instancebject.plusGetAttribute( String name );
```
获取实例对象后，就可以调用其plusGetAttribute方法获取对象的属性值。
After obtaining the instance object, you can call its plusGetAttribute method to obtain the attribute value of the object.
- name：要获取对象的属性名称，如果指定的属性名称不存在，则获取属性失败，返回null。
- name: To get the property name of the object, if the specified property name does not exist, it fails to get the property and returns null.

`注意：如果实例对象中存在“plusGetAttribute”同名的方法，则只能通过plus.ios.invoke()方法调用。`
`Note: If there is a method with the same name as "plusGetAttribute" in the instance object, it can only be called through the plus.ios.invoke() method. `

示例：
Example:
1. 导入类创建实例对象，获取对象的属性值
1. Import the class to create an instance object and get the attribute value of the object
Objective-C代码：
Objective-C code:
```objc
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // 创建对象的实例
    // create an instance of the object
    NjsHello* hello = [[NjsHello alloc] init];
    [hello updateName:@"Tester"];
    // 获取其name属性值
    // Get the value of its name property
    NSString* name = hello.name;
		// 输出“NjsHello Object's name: Tester”
		// print“NjsHello Object's name: Tester”
    NSLog(@"NjsHello Object's name: %@",name);
    // ...
}
```
NJS代码：
NJS code:
``` javascript
// 导入测试类NjsHello
// Import the test class NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// 创建对象的实例
// create an instance of the object
var hello = new NjsHello();
hello.updateName( "Tester" );
// 获取其name属性值
// Get the value of its name property
var name = hello.plusGetAttribute( "name" );
// 输出“NjsHello Object’s name: Tester”
// print“NjsHello Object’s name: Tester”
console.log( "NjsHello Object’s name: "+name );
// ...
```

##### InstanceObject.plusSetAttribute
设置类对象的静态属性值，方法原型如下：
Set the static property value of the class object, the method prototype is as follows:
``` javascript
void instanceobject.plusSetAttribute( String name, Object value );
```
导入类对象后，就可以调用其plusSetAttribute方法设置类的静态属性值。
After importing the class object, you can call its plusSetAttribute method to set the static attribute value of the class.
- name：要设置的静态属性名称，如果指定的属性名称不存在，则设置属性失败，返回null。
- name: The name of the static property to be set. If the specified property name does not exist, setting the property fails and returns null.
- value：要设置的属性值，其类型必须与Native层类对象的静态属性区配，否则设置操作不生效，将保留以前的值。
- value: The attribute value to be set, its type must be matched with the static attribute of the Native layer class object, otherwise the setting operation will not take effect and the previous value will be retained.

`注意：如果导入的类对象中存在“plusSetAttribute”同名的静态方法，则只能通过plus.android.invoke()方法调用。`
`Note: If there is a static method with the same name as "plusSetAttribute" in the imported class object, it can only be called through the plus.android.invoke() method. `

示例：
Example:
1. 导入类创建实例对象，设置对象的属性值
1. Import the class to create an instance object and set the property value of the object
Java代码：
Java code:
``` java
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // 创建对象的实例
    // create an instance of the object
    NjsHello* hello = [[NjsHello alloc] init];
    // 设置其name属性值
    // Set the value of its name property
    hello.name = @"Tester";
		// 输出“NjsHello Object's name: Tester”
		// print“NjsHello Object's name: Tester”
    NSLog(@"NjsHello Object's name: %@",hello.name); 
    // ...
}
//...
```
NJS代码：
NJS code:
``` javascript
// 导入测试类NjsHello
// Import the test class NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// 创建对象的实例
// create an instance of the object
var hello = new NjsHello();
// 设置其name属性值
// Set the value of its name property
hello.plusSetAttribute( "name", "Tester" );
// 输出“NjsHello Object's name: Tester”
// print“NjsHello Object's name: Tester”
console.log( "NjsHello Object’s name: "+hello.plusGetAttribute("name") );
// ...
```

#### plus.ios.implements
在Objective-C中可以通过定义新类并实现Protocol的协议，并创建出新类对象作为代理对象，在NJS中则可实现协议快速创建代理对象，方法原型如下：
In Objective-C, you can define a new class and implement the Protocol protocol, and create a new class object as a proxy object. In NJS, you can quickly create a proxy object by implementing the protocol. The method prototype is as follows:
``` javascript
Object plus.ios.implements( String name, Object obj );
```
此方法返回一个NJS实例对象，映射到Native层中的代理对象，其父类为“NSObject”，并且实现obj中指定的协议方法。通常作为调用其它Native API的参数。
This method returns an NJS instance object, which is mapped to the proxy object in the Native layer, whose parent class is "NSObject", and implements the protocol method specified in obj. Usually used as a parameter to call other Native APIs.
- name：协议的名称，也可以是自定的字符串名称用于定义一个代理。
- name: The name of the protocol, which can also be a custom string name used to define a proxy.
- obj：JSON对象类型，代理实现方法的定义，JSON对象中key值为协议中定义的方法名称，必须保留方法名称中的“：”字符；value值为Function，方法参数必须与协议中定义方法的参数区配。
- obj: JSON object type, the definition of the proxy implementation method, the key value in the JSON object is the method name defined in the protocol, and the ":" character in the method name must be reserved; the value value is Function, and the method parameters must be the same as the method defined in the protocol. parameter area configuration.

示例：
Example:
1. 实现一个代理，并调用test方法触发调用代理的方法
1. Implement an agent and call the test method to trigger the method of calling the agent
Objective-C代码：
Objective-C code:
``` objc
#import "njshello.h"
// 定义代理类NjsDelegate
// Define the proxy class NjsDelegate
@interface NjsDelegate: NSObject<NjsHelloEvent> {
    -(void) onEventInvoked:(NSString*)name;
}
@end
// -------------------------------------------------------------
// 实现代理类NjsDelegate
// Implement the proxy class NjsDelegate
@implementation NjsDelegate
-(void) onEventInvoked:(NSString*)name{
    NSLog(@"Invoked Object's name:%@",name);  // 输出“Invoked Object’s name: Tester”
}
@end
// -------------------------------------------------------------
// 主函数
// main function
int main( int argc, char *argv[] )
{
    // 创建对象的实例
    // create an instance of the object
    NjsHello* hello = [[NjsHello alloc] init];
    // 调用updateName方法
    // call the updateName method
    [hello updateName:@"Tester"];
    // 创建代理对象
    // create proxy object
    NjsDelegate* delegate = [[NjsDelegate alloc] init];
    // 设置监听对象
    // set the listener object
    [hello setEventObserver:delegate];
    // 调用test方法，触发代理事件
    // Call the test method to trigger the delegate event
    [hello test];  // 触发上面代理对象定义的onEventInvoked运行
    [hello test]; // Trigger the onEventInvoked defined by the proxy object above to run
    // ...
}
```
在NJS中不需要创建新的类对象，调用plus.ios.implements实现协议接口即可创建出代理对象，代码如下：
There is no need to create a new class object in NJS, and a proxy object can be created by calling plus.ios.implements to implement the protocol interface. The code is as follows:
``` javascript
// 导入测试类NjsHello
// Import the test class NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// 实现协议“NjsHelloEvent”的代理
// Proxy implementing protocol "NjsHelloEvent"
var hevent = plus.ios.implements( "NjsHelloEvent", {
    "onEventInvoked:":function( name ){
        console.log( "Invoked Object’s name: "+name ); // 输出“Invoked Object’s name: Tester”
    }
} );
// 调用updateName方法
// call the updateName method
hello.updateName( "Tester" );
// 设置监听对象
// set the listener object
hello.setEventObserver( hevent );
// 调用test方法，触发代理事件
// Call the test method to trigger the delegate event
hello.test(); // 触发上面代理对象定义的匿名函数运行
hello.test(); // Trigger the anonymous function defined by the proxy object above to run
// ...
```

#### plus.ios.deleteObject
释放NJS中实例对象中映射的Native对象，方法原型如下：
Release the Native object mapped in the instance object in NJS. The method prototype is as follows:
``` javascript
void plus.ios.deleteObject( Object obj );
```
NJS中所有的实例对象（InstanceObject）都可以通过此方法释放，会将Native层的对象使用的资源进行释放。
All instance objects (InstanceObject) in NJS can be released through this method, which will release the resources used by the objects in the Native layer.
- obj：要释放的实例对象，如果obj对象不是有效的实例对象，则不执行对象的是否资源操作。
- obj: The instance object to be released. If the obj object is not a valid instance object, the resource operation of the object is not performed.

`注意：此方法是可选的，如果不调用此方法释放实例对象，则在页面关闭时会自动释放所有对象；若对象占用较多的系统资源，则在业务逻辑处理完成时应该主动调用此方法释放资源，以提到程序的运行效率。`
`Note: This method is optional. If you do not call this method to release the instance object, all objects will be released automatically when the page is closed; if the object occupies a lot of system resources, this method should be actively called when the business logic processing is completed. The method releases resources to mention the efficiency of the program. `

示例：
Example:
1. 创建实例对象使用完成后，显式操作销毁对象
1. After the instance object is created and used, the object is destroyed by explicit operation
Objective-C代码：
Objective-C code:
``` objc
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // 创建对象的实例
    // create an instance of the object
    NjsHello* hello = [[NjsHello alloc] init];
    // 调用updateName方法
    // call the updateName method
    [hello updateName:@"Tester"];
    // ...
    // 使用完后销毁对象的实例
    // Destroy the instance of the object after use
    [hello release];
}
```
NJS代码：
NJS code:
``` javascript
// 导入测试类NjsHello
// Import the test class NjsHello
var NjsHello = plus.ios.importClass("NjsHello");
// 创建对象的实例
// create an instance of the object
var hello = new NjsHello();
// 调用updateName方法
// call the updateName method
hello.updateName( "Tester" );
// ...
// 使用完后销毁对象的实例
// Destroy the instance of the object after use
plus.ios.deleteObject( hello );
```

#### plus.ios.currentWebview
获取当前Webview窗口对象的native层UIWebview实例对象，方法原型如下：
Get the native layer UIWebview instance object of the current Webview window object. The method prototype is as follows:
``` javascript
InstanceObject plus.ios.currentWebview();
```
UIWebview对象的API请参考Apple开发文档[UIWebview](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIWebView_Class/)
For the API of the UIWebview object, please refer to the Apple development documentation [UIWebview](https://developer.apple.com/library/ios/documentation/UIKit/Reference/UIWebView_Class/)

示例：
Example:
1. 创建实例对象使用完成后，显式操作销毁对象
1. After the instance object is created and used, the object is destroyed by explicit operation
Objective-C代码：
Objective-C code:
``` objc
// 获取当前Webview对象的实例
// Get an instance of the current Webview object
UIWebview* wv=self;
// 创建请求对象
// create request object
NSURLRequest *req = [NSURLRequest requestWithURL:[NSURL URLWithString:@"http://www.dcloud.io/"]];
// 跳转页面
// jump to the page
[web loadRequest:req];
// 释放对象
// release the object
// 系统自动回收
// ...
```
NJS代码：
NJS code:
``` javascript
// 导入UIWebview、NSURLRequest、NSURL类
// Import UIWebview, NSURLRequest, NSURL classes
var Webview = plus.ios.importClass("UIWebview");
var NSURLRequest = plus.ios.import('NSURLRequest');
var NSURL = plus.ios.import('NSURL');
// 获取当前Webview对象的实例
// Get an instance of the current Webview object
var wv = plus.ios.currentWebview();
// 创建请求对象
// create request object
var req = NSURLRequest.requestWithURL(NSURL.URLWithString('http://www.dcloud.io/'));
// 跳转页面
// jump to the page
plus.ios.invoke(wv,"loadRequest:",req);
// 释放对象(可选)
// release the object (optional)
plus.ios.deleteObject(req);
plus.ios.deleteObject(wv);
// ...
```
**完整API文档参考：[HTML5+ API - Native.js for iOS](http://www.html5plus.org/doc/zh_cn/ios.html)**
**Complete API documentation reference: [HTML5+ API - Native.js for iOS](http://www.html5plus.org/doc/zh_cn/ios.html)**

## 完整业务演示
## Complete business presentation
### Android
在Android手机桌面上创建快捷方式图标，这是原本只有原生程序才能实现的功能。即使使用Hybrid方案，也需要原生工程师来配合写插件。
Create a shortcut icon on the Android phone desktop, which is a function that only native programs can achieve. Even if the Hybrid solution is used, native engineers are required to cooperate with writing plug-ins.
下面我们演示如何直接使用js在Android手机桌面创建快捷方式，在HelloH5+应用中Native.JS页面中“Shortcut (Android)”可以查看运行效果。
Below we demonstrate how to directly use js to create a shortcut on the Android phone desktop. You can view the running effect in "Shortcut (Android)" on the Native.JS page of the HelloH5+ application.
这段代码是使用原生Java实现的创建快捷方式的代码，用于参考比对：
This code is the code for creating shortcuts implemented in native Java for reference comparison:
``` java
import android.app.Activity;
import android.content.Intent;
import android.graphics.BitmapFactory;
import android.graphics.Bitmap;
// 创建桌面快捷方式
// create desktop shortcut
void createShortcut(){
	// 获取主Activity
	// Get the main Activity
	Activity main = this;
	// 创建快捷方式意图
	// create shortcut intent
	Intent shortcut = new Intent("com.android.launcher.action.INSTALL_SHORTCUT");
	// 设置快捷方式的名称
	// set the name of the shortcut
	shortcut.putExtra(Intent.EXTRA_SHORTCUT_NAME, "HelloH5+");
	// 设置不可重复创建
	// set non-reproducible creation
	shortcut.putExtra("duplicate",false);
	// 设置快捷方式图标
	// set shortcut icon
	Bitmap bitmap = BitmapFactory.decodeFile("/sdcard/icon.png");
	shortcut.putExtra(Intent.EXTRA_SHORTCUT_ICON, bitmap);
	// 设置快捷方式启动执行动作
	// Set the shortcut to start the execution action
	Intent action = new Intent(Intent.ACTION_MAIN);
	action.setComponent( main.getComponentName() );
	shortcut.putExtra( Intent.EXTRA_SHORTCUT_INTENT, action );
	// 广播创建快捷方式
	// Broadcast create shortcut
	main.sendBroadcast(shortcut);
}
```

使用NJS实现时首先导入需要使用到的android.content.Intent、android.graphics.BitmapFactory类，按照Java代码中的方法对应转换成JavaScript代码。
When using NJS to implement, first import the android.content.Intent and android.graphics.BitmapFactory classes that need to be used, and convert them into JavaScript code according to the method in the Java code.
其中快捷方式图标是通过解析本地png文件进行设置，在JavaScript中需要使用plus.io.* API转换成本地路径传递给Native API，完整代码如下：
The shortcut icon is set by parsing the local png file. In JavaScript, the plus.io.* API needs to be converted into a local path and passed to the Native API. The complete code is as follows:
``` javascript
var Intent=null,BitmapFactory=null;
var main=null;
document.addEventListener( "plusready", function() {//"plusready"事件触发时执行plus对象的方法
document.addEventListener( "plusready", function() {//The method of executing the plus object when the "plusready" event is triggered
	// ...
	if ( plus.os.name == "Android" ) {
		// 导入要用到的类对象
		// import the class object to be used
		Intent = plus.android.importClass("android.content.Intent");
		BitmapFactory = plus.android.importClass("android.graphics.BitmapFactory");
		// 获取主Activity
		// Get the main Activity
		main = plus.android.runtimeMainActivity();
	}
}, false);
/**
 * 创建桌面快捷方式
 * Create desktop shortcuts
 */
function createShortcut(){
	// 创建快捷方式意图
	// create shortcut intent
	var shortcut = new Intent("com.android.launcher.action.INSTALL_SHORTCUT");
	// 设置快捷方式的名称
	// set the name of the shortcut
	shortcut.putExtra(Intent.EXTRA_SHORTCUT_NAME, "测试快捷方式");
	shortcut.putExtra(Intent.EXTRA_SHORTCUT_NAME, "Test Shortcut");
	// 设置不可重复创建
	// set non-reproducible creation
	shortcut.putExtra("duplicate",false);
	// 设置快捷方式图标
	// set shortcut icon
	var iconPath = plus.io.convertLocalFileSystemURL("/icon.png"); // 将相对路径资源转换成系统绝对路径
	var bitmap = BitmapFactory.decodeFile(iconPath);
	shortcut.putExtra(Intent.EXTRA_SHORTCUT_ICON,bitmap);
	// 设置快捷方式启动执行动作
	// Set the shortcut to start the execution action
	var action = new Intent(Intent.ACTION_MAIN);
	action.setClassName(main.getPackageName(), 'io.dcloud.PandoraEntry');
	shortcut.putExtra(Intent.EXTRA_SHORTCUT_INTENT,action);
	// 广播创建快捷方式
	// Broadcast create shortcut
	main.sendBroadcast(shortcut);
	console.log( "桌面快捷方式已创建完成！" );
	console.log( "Desktop shortcut has been created!" );
}
```

注意：提交到云平台打包时需要添加Android权限才能在桌面创建快捷方式，在HBuilder工程中双击应用的“manifest.json”文件，切换到“代码视图”中在plus->distribute->google->permissions节点下添加权限数据：
Note: When submitting to the cloud platform for packaging, you need to add Android permissions to create shortcuts on the desktop. Double-click the "manifest.json" file of the application in the HBuilder project, switch to the "Code View" in plus->distribute->google-> Add permission data under the permissions node:
``` xml
"google": {
	// ...
	"permissions": [
"<uses-permission android:name=\"com.android.launcher.permission.INSTALL_SHORTCUT\"/>"
	]
}
```
如下图所示：
As shown below:

![manifest.json中Android权限 permissions](http://www.dcloud.io/docs/a/njs/android_permissions.png)
![Android permissions permissions in manifest.json](http://www.dcloud.io/docs/a/njs/android_permissions.png)

### iOS
在iOS手机上登录game center，一个游戏中心服务，这是原本只有原生程序才能实现的功能。即使使用Hybrid方案，也需要原生工程师来配合写插件。
Log in to game center on an iOS phone, a game center service, which is a function that only native programs can achieve. Even if the Hybrid solution is used, native engineers are required to cooperate with writing plug-ins.
下面我们演示如何直接使用js在iOS手机上登录game center，在HelloH5+应用中Native.JS页面中的“Game Center (iOS)”可以查看运行效果。
Below we demonstrate how to directly use js to log in to the game center on an iOS phone. You can view the running effect in "Game Center (iOS)" in the Native.JS page of the HelloH5+ application.
注意手机未开通game center则无法登陆，请先点击iOS自带的game center进行配置。
Note that you cannot log in if the mobile phone has not opened the game center. Please click the game center that comes with iOS to configure it.
这段代码是使用原生Objective-C实现的登录game center的代码，用于参考比对。原生Objective-C代码的头文件Test.h中代码如下：
This code is the code for logging in to the game center implemented using native Objective-C for reference comparison. The code in the header file Test.h of the native Objective-C code is as follows:
``` objc
@interface Test: NSObject
// 游戏玩家登录状态监听函数
// Game player login status listener function
- (void)authenticationChanged:(NSNotification*)notification;
// 获取游戏玩家状态信息
// Get game player status information
- (void)playerInformation:(GKPlayer *)player;
// 登录到游戏中心
// Login to Game Center
- (void)loginGamecenter;
// 停止监听登录游戏状态变化
// Stop monitoring the login game state changes
- (void)logoutGamecenter;
@end

实现文件Test.m中代码如下：
@implementation Test
// 游戏玩家登录状态监听函数
// Game player login status listener function
- (void)authenticationChanged:(NSNotification*)notification
{
    // 获取游戏玩家共享实例对象
    // Get the game player shared instance object
    GKLocalPlayer *player = notification.object;
    if ( player.isAuthenticated ) {
        // 玩家已登录认证，获取玩家信息
        // The player has logged in for authentication and obtains player information
        [self playerInformation:player];
    } else {
        // 玩家未登录认证，提示用户登录
        // The player is not logged in for authentication, prompting the user to log in
        NSLog(@"请登录！");
        NSLog(@"Please log in!");
    }
    // 释放使用的对象
    // release the used object
    [player release];
}
// 获取游戏玩家状态信息
// Get game player status information
- (void)playerInformation:(GKPlayer *)player
{
    // 获取游戏玩家的名称
    // Get the player's name
    NSLog(@"Name: %@",player.displayName);
}

// 登录到游戏中心
// Login to Game Center
- (void)loginGamecenter
{
    // 监听用户登录状态变更事件
    // Listen for user login status change events
    NSNotificationCenter *nc = [NSNotificationCenter defaultCenter];
    [nc addObserver:self
           selector:@selector(authenticationChanged)
               name:@"GKPlayerAuthenticationDidChangeNotificationName"
             object:nil];
    // 获取游戏玩家共享实例对象
    // Get the game player shared instance object
    GKLocalPlayer *localplayer = [GKLocalPlayer localPlayer];
    // 判断游戏玩家是否已经登录认证
    // Determine if the player has logged in for authentication
    if ( localplayer.isAuthenticated ) {
        // 玩家已登录认证，获取玩家信息
        // The player has logged in for authentication and obtains player information
        [self playerInformation:localplayer];
    } else {
        // 玩家未登录认证，发起认证请求
        // The player is not logged in for authentication and initiates an authentication request
        [localplayer authenticateWithCompletionHandler:nil];
        NSLog(@"登录中...");
        NSLog(@"Login...");
    }
	// 释放使用的对象
	// release the used object
    [localplayer release];
    [nc release];
}

// 停止监听登录游戏状态变化
// Stop monitoring the login game state changes
- (void)logoutGamecenter
{
    // 取消监听用户登录状态变化
    // Cancel the monitoring of user login status changes
    NSNotificationCenter *nc = [NSNotificationCenter defaultCenter];
    [nc removeObserver:self
                  name:@"GKPlayerAuthenticationDidChangeNotificationName"
                object:nil];
	// 释放使用的对象
	// release the used object
    [nc release];
}
@end
```
使用NJS实现时可以按照Objective-C代码中的方法对应转换成JavaScript代码，最关键的代码是loginGamecenter方法中对用户登录状态的监听，需调用NSNotificationCenter对象的“addObserver:selector:name:object”方法，
When implemented using NJS, it can be converted into JavaScript code according to the method in the Objective-C code. The most critical code is the monitoring of the user's login status in the loginGamecenter method. The "addObserver:selector:name:object" method of the NSNotificationCenter object needs to be called.
1. addObserver:后要求传入一个实例对象用于查找selector参数中指定的方法，在Objective-C中通常将对象自身（self）传入，但在NJS中没有此概念，因此需使用plus.ios.implements方法来创建一个新的对象：
1. addObserver: After that, an instance object is required to be used to find the method specified in the selector parameter. In Objective-C, the object itself (self) is usually passed in, but there is no such concept in NJS, so you need to use plus.ios .implements method to create a new object:
var delegate = plus.ios.implements("NSObject",{"authenticationChanged:":authenticationChanged});
第一个参数“NSObject”表示对象的类型，第二个参数中的JSON对象表明对象拥有的方法，“authenticationChanged”方法是delegate对象的方法。
The first parameter "NSObject" indicates the type of the object, the JSON object in the second parameter indicates the method the object has, and the "authenticationChanged" method is the method of the delegate object.
2. selector:后要传入一个类函数指针，在Objective-C中通过“@selector”指令可选择函数指针，在NJS中则需使用plus.ios.newObject方法来创建一个函数对象：
2. selector: After that, you need to pass in a class function pointer. In Objective-C, you can select a function pointer through the "@selector" instruction. In NJS, you need to use the plus.ios.newObject method to create a function object:
plus.ios.newObject("@selector","authenticationChanged:")
第一个参数需固定值为“@selector”，表示创建的是类函数指针对象，第二个参数。
The first parameter needs to be fixed as "@selector", which means that a function-like pointer object is created, and the second parameter is.
在"plusready"事件中导入GKLocalPlayer和NSNotificationCenter类，并调用登录方法longinGamecenter()。
Import the GKLocalPlayer and NSNotificationCenter classes in the "plusready" event and call the login method longinGamecenter().

完整JavaScript代码如下：
The complete JavaScript code is as follows:
``` js
// 处理"plusready"事件
// handle the "plusready" event
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
			plus.ui.toast( "This platform does not support Game Center function!" );
		}, 500 );
	}
}, false);

var GKLocalPlayer=null,NSNotificationCenter=null;
var delegate=null;

// 游戏玩家登录状态监听函数
// Game player login status listener function
function authenticationChanged( notification ){
	// 获取游戏玩家共享实例对象
	// Get the game player shared instance object
	var player = notification.plusGetAttribute("object");
	if ( player.plusGetAttribute("isAuthenticated") ) {
		// 玩家已登录认证，获取玩家信息
		// The player has logged in for authentication and obtains player information
		playerInformation(player);
		bLogin = true;
	} else {
		// 玩家未登录认证，提示用户登录
		// The player is not logged in for authentication, prompting the user to log in
		alert("请登录");
		alert("Please login");
        bLogin = false;
	}
	// 释放使用的对象
	// release the used object
	plus.ios.deleteObject(player);
}

// 获取游戏玩家状态信息
// Get game player status information
function playerInformation( player ){
	var name = player.plusGetAttribute("displayName");
	alert( name+" 已登录！" );
	alert( name+" logged in!" );
}

// 登录到游戏中心
// Login to Game Center
function longinGamecenter(){
	if ( bLogin ){
		return;
	}
    // 监听用户登录状态变更事件
    // Listen for user login status change events
    var nc = NSNotificationCenter.defaultCenter();
    delegate = plus.ios.implements("NSObject",{"authenticationChanged:":authenticationChanged});
    nc.addObserverselectornameobject(delegate,
    	plus.ios.newObject("@selector","authenticationChanged:"),
    	"GKPlayerAuthenticationDidChangeNotificationName",
    	null);
    // 获取游戏玩家共享实例对象
    // Get the game player shared instance object
    var localplayer = GKLocalPlayer.localPlayer();
    // 判断游戏玩家是否已经登录认证
    // Determine if the player has logged in for authentication
    if ( localplayer.isAuthenticated() ) {	// localplayer.plusGetAttribute("isAuthenticated")
        // 玩家已登录认证，获取玩家信息
        // The player has logged in for authentication and obtains player information
        playerInformation( localplayer );
        bLogin = true;
    } else {
        // 玩家未登录认证，发起认证请求
        // The player is not logged in for authentication and initiates an authentication request
        localplayer.authenticateWithCompletionHandler(null);
        alert( "登录中..." );
        alert( "Login..." );
    }
    // 释放使用的对象
    // release the used object
	plus.ios.deleteObject(localplayer);
	plus.ios.deleteObject(nc);
}

// 停止监听登录游戏状态变化
// Stop monitoring the login game state changes
function stopGamecenterObserver()
{
    // 取消监听用户登录状态变化
    // Cancel the monitoring of user login status changes
    var nc = NSNotificationCenter.defaultCenter();
    nc.removeObservernameobject(delegate,"GKPlayerAuthenticationDidChangeNotificationName",null);
    plus.ios.deleteObject(nc);
    plus.ios.deleteObject(delegate);
    delegate = null;
}
```
**注意**
**Notice**
1. 提交到云平台打包时需要添加Game Center API的系统库（framework）才能正确调用，在HBuilder工程中双击应用的“manifest.json”文件，切换到“代码视图”中在plus->distribute->apple->frameworks节点下添加要引用的系统Framework：
1. When submitting to the cloud platform for packaging, you need to add the system library (framework) of the Game Center API to call it correctly. Double-click the "manifest.json" file of the application in the HBuilder project, switch to the "Code View", and click plus->distribute- Add the system Framework to be referenced under the >apple->frameworks node:
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
2. When the official release is submitted to the AppStore, the "Game Center" service needs to be selected when configuring the App ID on the Apple Developer website:
![Game Center](http://www.dcloud.io/docs/a/njs/ios_gamecenter.png)

##开发注意和建议用途
##%E5%BC%80%E5%8F%91%E6%B3%A8%E6%84%8F%E5%92%8C%E5%BB%BA%E8%AE%AE%E7%94%A8 %E9%80%94
Native.js的运行性能仍然不比纯原生应用；JS与Native之间的数据交换效率并不如在js内部的数据交换效率；基于如上原因，有几点开发建议：
The running performance of Native.js is still not as good as that of pure native applications; the data exchange efficiency between JS and Native is not as efficient as that within js; for the above reasons, there are several development suggestions:
- 以标准web 代码为主，当遇到web能力不足的时候，调用Native.js。
- Mainly based on standard web code, when encountering insufficient web capabilities, call Native.js.
- 以标准web 代码为主，当遇到web性能不足的时候，需要分析，
- It is mainly based on standard web code. When encountering insufficient web performance, it needs to be analyzed.
if ((原生进行运算的效率-js与原生通讯的损耗)>纯web的效率){
if ((the efficiency of native computing - the loss of js and native communication) > the efficiency of pure web) {
使用Native.js
}else{
还应该使用纯js
		}
- 应避免把程序设计为在短时间内并发触发Native.js代码
- Programs designed to trigger Native.js code concurrently within a short period of time should be avoided

##调试
##%E8%B0%83%E8%AF%95
使用safari和chrome的控制台调试HBuilder的5+App时，一样可以调试NJS对象，即可以在浏览器控制台中查看各种原生对象的属性和方法，如下图所示，57行设了断点，watch了Intent对象，并在右边展开了该对象的所有属性方法：
![Chrome Debug](http://www.dcloud.io/docs/a/njs/chrome_debug.png)
关于如何在浏览器控制台调试HBuilder的5+App，请参考HBuilder的5+App开发入门教程。
For how to debug HBuilder's 5+App in the browser console, please refer to HBuilder's 5+App Development Getting Started Tutorial.

##开发资源
##%E5%BC%80%E5%8F%91%E8%B5%84%E6%BA%90
iOS 官方在线文档：[https://developer.apple.com/library/ios/navigation/](https://developer.apple.com/library/ios/navigation/)
iOS official online documentation: [https://developer.apple.com/library/ios/navigation/](https://developer.apple.com/library/ios/navigation/)
Android 官方在线文档：[https://developer.android.com/reference/packages.html](https://developer.android.com/reference/packages.html)
Android official online documentation: [https://developer.android.com/reference/packages.html](https://developer.android.com/reference/packages.html)
演讲视频：[http://v.youku.com/v_show/id_XNzYzNTcwNDI4.html](http://v.youku.com/v_show/id_XNzYzNTcwNDI4.html)
Lecture video: [http://v.youku.com/v_show/id_XNzYzNTcwNDI4.html](http://v.youku.com/v_show/id_XNzYzNTcwNDI4.html)

##高级API
##%E9%AB%98%E7%BA%A7API
有前述的常用API，已经可以完成各项业务开发。此处补充的高级API，是在熟悉NJS后，为了提升性能而使用的API。高级API无法直接用“.”操作符使用原生对象的方法，在debug时也无法watch原生对象，但高级API性能高于常规API。
With the aforementioned common APIs, various business development can be completed. The high-level API supplemented here is an API used to improve performance after being familiar with NJS. The advanced API cannot directly use the "." operator to use the methods of the native object, nor can it watch the native object during debugging, but the performance of the advanced API is higher than that of the conventional API.
虽然导入类对象（plus.android.importClass和plus.ios.importClass）后，可以方便的通过“.”操作符来访问对象的常量、调用对象的方法，但导入类对象也需要消耗较多的系统资源，所以在实际开发时应该尽可能的减少导入类对象，以提高程序效率。可以参考以下依据进行判断：
Although after importing class objects (plus.android.importClass and plus.ios.importClass), you can easily access the constants of the object and call the methods of the object through the "." operator, but importing the class object also requires more system consumption Therefore, in actual development, import class objects should be reduced as much as possible to improve program efficiency. Judgments can be made based on the following:
1. 如导入的类特别复杂，继承自很多基类，方法和属性特别多则考虑不导入类；
1. If the imported class is particularly complex, inherits from many base classes, and has many methods and attributes, consider not importing the class;
2. 对导入类是否需要频繁操作，若导入类仅是为了实例化，并作为调用其它API的参数，则不应该导入类；
2. Whether frequent operations are required for the imported class, if the imported class is only for instantiation and as a parameter for calling other APIs, the class should not be imported;
3. 在同一页面中是否导入了很多类？如果导入太多则需要考虑减少导入类的数目。
3. Are many classes imported in the same page? If you import too many you need to consider reducing the number of imported classes.

如果我们不导入类对象则无法通过new操作符实例化类对象，这时可通过plus.ios.newObject()、plus.android.newObject()方法来创建实例对象，如下：
If we do not import the class object, we cannot instantiate the class object through the new operator. In this case, we can create the instance object through the plus.ios.newObject() and plus.android.newObject() methods, as follows:
``` javascript
// iOS平台创建NSDictionary的实例对象
// The iOS platform creates an instance object of NSDictionary
var ns = plus.ios.newObject( "NSDictionary" );

// Android平台创建Intent的实例对象
// Android platform creates an instance object of Intent
var intent = plus.android.newObject( "android.content.Intent" );
```

### API on Android
#### plus.android.newObject
不导入类对象直接创建类的实例对象，方法原型如下：
The instance object of the class is created directly without importing the class object. The method prototype is as follows:
``` javascript
InstanceObject plus.android.newObject( String classname, Object...args );
```
此方法对Native层中对类进行实例化操作，创建一个类的实体并返回NJS层的实例对象。相比导入类对象后使用new操作符创建对象效率要高。
This method instantiates the class in the Native layer, creates a class entity and returns the instance object of the NJS layer. It is more efficient to use the new operator to create objects after importing class objects.
- classname：要创建实例对象的类名，类名必须是完整的命名空间，使用“.”分隔符（如“android.app.AlertDialog”），如果需要创建内部类对象需要使用“$”分割符（如“android.app.AlertDialog$Builder”）。如果指定的类名不存在，则创建对象失败，返回null。
- classname: To create the class name of the instance object, the class name must be a complete namespace, use the "." separator (such as "android.app.AlertDialog"), if you need to create an inner class object, you need to use the "$" separator (eg "android.app.AlertDialog$Builder"). If the specified class name does not exist, the object creation fails and null is returned.
- args：调用类构造函数的参数，其类型和数目必须与Native层Java类构造函数区配，否则无法创建类对象，将返回null。
- args: The type and number of parameters for calling the class constructor must be matched with the native layer Java class constructor, otherwise the class object cannot be created, and null will be returned.

**注意**：由于没有导入类对象，所以通过此方法创建的实例对象无法通过“.”操作符直接调用对象的方法，而必须使用plus.android.invoke方法来调用。
**Note**: Since the class object is not imported, the instance object created by this method cannot directly call the method of the object through the "." operator, but must use the plus.android.invoke method to call.

示例：
Example:
1. 不导入类创建实例对象
1. Create an instance object without importing a class
Java代码：
Java code:
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建对象的实例
    // create an instance of the object
    NjsHello hello = new NjsHello();
    //...
}
//...
}
```
NJS代码：
NJS code:
``` javascript
// 不调用plus.android.importClass("io.dcloud.NjsHello")导入类NjsHello
// Do not call plus.android.importClass("io.dcloud.NjsHello") to import class NjsHello
// 创建对象的实例
// create an instance of the object
var hello = plus.android.newObject( "io.dcloud.NjsHello" );
// ...
```

#### plus.android.getAttribute
不导入类对象，则无法通过类对象并访问类的静态属性，需调用以下方法获取类的静态属性值，方法原型如下：
If you do not import the class object, you cannot access the static properties of the class through the class object. You need to call the following method to obtain the static property value of the class. The method prototype is as follows:
``` javascript
Object plus.android.getAttribute( String|Object obj, String name );
```
此方法也可以获取类对象或实例对象的属性值，如果是类对象获取的则是类的静态属性，如果是实例对象则获取的是对象的非静态属性。
This method can also get the property value of class object or instance object, if it is a class object, it is the static property of the class, if it is an instance object, it is the non-static property of the object.
- obj：若是String类型，表示要获取静态属性值的类名，类名必须是完整的命名空间（使用"."分割）；若是ClassObject类型，表示要获取静态属性的类对象；若是InstanceObject类型，表示要获取属性值的实例对象。
- obj: If it is of String type, it indicates the class name of the static property value to be obtained, and the class name must be a complete namespace (separated by "."); if it is of ClassObject type, it indicates the class object of which static property is to be obtained; if it is of InstanceObject type, Represents the instance object to get the property value from.
- name：要获取的属性名称，如果指定的属性名称不存在，则获取属性失败，返回null。
- name: The property name to be acquired, if the specified property name does not exist, the property acquisition fails and null is returned.

**注意**：同样导入类对象后也可以调用此方法，obj参数类型为ClassObject时，其作用与ClassObject.plusSetAttribute方法一致。obj参数类型为InstanceObject时，其作用与InstanceObject.plusSetAttribute方法一致。
**Note**: This method can also be called after importing the class object. When the obj parameter type is ClassObject, its function is the same as that of the ClassObject.plusSetAttribute method. When the parameter type of obj is InstanceObject, its function is the same as that of the InstanceObject.plusSetAttribute method.

示例：
Example:
1. 不导入类对象获取类的静态常量属性
1. Get the static constant properties of the class without importing the class object
Java代码：
Java code:
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 获取类的静态常量属性
    // Get the static constant property of the class
    int type = NjsHello.CTYPE;
		// 输出“NjsHello Final's value: 1”
		// print“NjsHello Final's value: 1”
    System.out.printf( "NjsHello Final's value: %d", type );
    // 获取类的静态属性
    // Get the static properties of the class
    int count = NjsHello.count;
		// 输出“NjsHello Final's value: 0”
		// print“NjsHello Final's value: 0”
    System.out.printf( "NjsHello Static's value: %d", count );
    //...
}
//...
}
```
NJS代码：
NJS code:
``` javascript
// 不调用plus.android.importClass("io.dcloud.NjsHello")导入类NjsHello
// Do not call plus.android.importClass("io.dcloud.NjsHello") to import class NjsHello
// 访问类的静态常量属性
// access the static constant property of the class
var type = plus.android.getAttribute( "io.dcloud.NjsHello", "CTYPE" );
// 输出“NjsHello Final's value: 1”
// print“NjsHello Final's value: 1”
console.log( "NjsHello Final's value: "+type );
// ...
```
2. 不导入类对象，创建实例对象，并获取其name属性值
2. Do not import the class object, create an instance object, and get the value of its name attribute
Java代码：
Java code:
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建对象的实例
    // create an instance of the object
    NjsHello hello = new NjsHello();
    // 获取其name属性值
    // Get the value of its name property
    String name = hello.name;
		// 输出“NjsHello Object's name: Tester”
		// print“NjsHello Object's name: Tester”
    System.out.printf( "NjsHello Object's name: %s", name );
    //...
}
//...
}
```
NJS代码：
NJS code:
``` javascript
// 不调用plus.android.importClass("io.dcloud.NjsHello")导入类NjsHello
// Do not call plus.android.importClass("io.dcloud.NjsHello") to import class NjsHello
// 创建对象的实例
// create an instance of the object
var hello = plus.android.newObject( "io.dcloud.NjsHello" );
// 获取其name属性值
// Get the value of its name property
var name = plus.android.getAttribute( hello, "name" );
// 输出“NjsHello Object's name: Tester”
// print“NjsHello Object's name: Tester”
console.log( "NjsHello Object's name: "+name );
// ...
```

#### plus.android.setAttribute
若没有导入类对象，则无法通过类对象设置类的静态属性值，需调用以下方法设置类的静态属性值，方法原型如下：
If the class object is not imported, the static property value of the class cannot be set through the class object. The following method needs to be called to set the static property value of the class. The method prototype is as follows:
``` javascript
void plus.android.setAttribute( String|Object obj, String name, Object value );
```
此方法也可以设置类对象或实例对象的属性值，如果是类对象设置的则是类的静态属性，如果是实例对象则设置的是对象的非静态属性。
This method can also set the property value of class object or instance object. If it is a class object, it is a static property of the class. If it is an instance object, it is a non-static property of the object.
- obj：若是String类型，表示要设置静态属性值的类名，类名必须是完整的命名空间（使用"."分割）；若是ClassObject类型，表示要设置静态属性的类对象；若是InstanceObject类型，表示要设置属性值的实例对象。
- obj: If it is of String type, it indicates the class name for which static property values are to be set, and the class name must be a complete namespace (separated by "."); if it is of ClassObject type, it indicates the class object whose static properties are to be set; if it is of InstanceObject type, Represents the instance object on which the property value is to be set.
- name：要设置的属性名称，如果指定的属性名称不存在，则设置属性失败，返回null。
- name: The property name to be set. If the specified property name does not exist, setting the property fails and returns null.
- value：要设置的属性值，其类型必须与Native层obj对象的属性区配，否则设置操作不生效，将保留以前的值。
- value: The attribute value to be set, its type must match the attribute of the native layer obj object, otherwise the setting operation will not take effect and the previous value will be retained.

**注意**：同样导入类对象后也可以调用此方法，obj参数类型为ClassObject时，其作用与ClassObject.plusSetAttribute方法一致。obj参数类型为InstanceObject时，其作用与InstanceObject.plusSetAttribute方法一致。
**Note**: This method can also be called after importing the class object. When the obj parameter type is ClassObject, its function is the same as that of the ClassObject.plusSetAttribute method. When the parameter type of obj is InstanceObject, its function is the same as that of the InstanceObject.plusSetAttribute method.

示例：
Example:
1. 不导入类对象设置类的静态属性值
1. Set the static property value of the class without importing the class object
Java代码：
Java code:
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 设置类的静态属性值
    // Set the static property value of the class
    NjsHello.count = 2;
		// 输出“NjsHello Static's value: 2”
		// print“NjsHello Static's value: 2”
    System.out.printf( "NjsHello Static's value: %d", NjsHello.count );
    //...
}
//...
}
```
NJS代码：
NJS code:
``` javascript
// 不调用plus.android.importClass("io.dcloud.NjsHello")导入类NjsHello
// Do not call plus.android.importClass("io.dcloud.NjsHello") to import class NjsHello
// 设置类的静态属性值
// Set the static property value of the class
plus.android.setAttribute( "io.dcloud.NjsHello", "count", 2 );
// 输出“NjsHello Static's value: 2”
// print“NjsHello Static's value: 2”
console.log( "NjsHello Static's value: "+plus.android.getAttribute("io.dcloud.NjsHello","count") );
// ...
```
2. 导入类对象，创建实例对象，并设置其name属性值
2. Import the class object, create an instance object, and set its name attribute value
Java代码：
Java code:
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建对象的实例
    // create an instance of the object
    NjsHello hello = new NjsHello();
    // 设置其name属性值
    // Set the value of its name property
    hello.name = "Tester";
		// 输出“NjsHello Object's name: Tester”
		// print“NjsHello Object's name: Tester”
    System.out.printf( "NjsHello Object's name: %s", hello.name );
    //...
}
//...
}
```
NJS代码：
NJS code:
``` javascript
// 不调用plus.android.importClass("io.dcloud.NjsHello")导入类NjsHello
// Do not call plus.android.importClass("io.dcloud.NjsHello") to import class NjsHello
// 创建对象的实例
// create an instance of the object
var hello = plus.android.newObject( "io.dcloud.NjsHello" );
// 设置其name属性值
// Set the value of its name property
plus.android.setAttribute( hello, "name", "Tester" );
// 输出“NjsHello Object's name: Tester”
// print“NjsHello Object's name: Tester”
console.log( "NjsHello Object's name: "+hello.plusGetAttribute("name") );
// ...
```

#### plus.android.invoke
若没有导入类对象，则无法通过实例对象的“.”操作符调用其成员方法，需通过以下方法调用实例对象的成员方法，方法原型如下：
If the class object is not imported, its member method cannot be called through the "." operator of the instance object. The member method of the instance object needs to be called through the following methods. The method prototype is as follows:
``` javascript
Object plus.android.invoke( String|Object obj, String name, Object... args );
```
此方法也可以调用类对象或实例对象的方法，如果是类对象则调用的是类的静态方法，如果是实例对象则调用的是对象的普通成员方法。函数返回值是调用Native层方法运行后的返回值，Native对象的方法无返回值则返回undefined。
This method can also call the method of class object or instance object. If it is a class object, it will call the static method of the class, and if it is an instance object, it will call the ordinary member method of the object. The return value of the function is the return value after calling the native layer method to run, and the method of the native object returns undefined if there is no return value.
- obj：若是String类型，表示要调用静态方法的类名，类名必须包含完整的包名；若是ClassObject类型，表示要调用静态方法的类对象；若是InstanceObject类型，表示要调用成员方法的实例对象。
- obj: If it is of type String, it means the class name of the static method to be called, and the class name must contain the complete package name; if it is of type ClassObject, it means the class object to which the static method is to be called; if it is of type InstanceObject, it means the instance object of which the member method is to be called .
- name：要调用的方法名称，如果指定的方法不存在，则调用方法失败，返回值为null。
- name: the name of the method to be called. If the specified method does not exist, the method fails to be called and the return value is null.
- args：调用方法的参数，其类型和数目必须与Native层对象方法的函数区配，否则无法调用对象的方法，将返回null。
- args: the parameters of the calling method, whose type and number must be matched with the function of the native layer object method, otherwise the method of the object cannot be called, and null will be returned.

**注意**：同样导入类对象后也可以调用此方法，其作用与通过类对象或实例对象的“.”操作符调用方法作用一致。
**Note**: This method can also be called after importing the class object, and its effect is the same as calling the method through the "." operator of the class object or instance object.

示例：
Example:
1. 不导入类对象，调用类的静态方法
1. Do not import the class object, call the static method of the class
Java代码：
Java code:
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 调用类的静态方法
    // call the static method of the class
    NjsHello.testCount();
    //...
}
//...
}
```
NJS代码：
NJS code:
``` javascript
// 不调用plus.android.importClass("io.dcloud.NjsHello")导入类NjsHello
// Do not call plus.android.importClass("io.dcloud.NjsHello") to import class NjsHello
// 调用类的静态方法
// call the static method of the class
plus.android.invoke( "io.dcloud.NjsHello", "testCount" );
// ...
```

2. 不导入类对象，创建实例对象，并调用其updateNmae方法
2. Do not import the class object, create an instance object, and call its updateNmae method
Java代码：
Java code:
``` java
import io.dcloud.NjsHello;
//...
public class Test {
public static void main( String args[] ) {
    // 创建对象的实例
    // create an instance of the object
    NjsHello hello = new NjsHello();
    // 调用updateName方法
    // call the updateName method
    hello.updateName( "Tester" );
		// 输出“NjsHello Object's name: Tester”
		// print“NjsHello Object's name: Tester”
    System.out.printf( "NjsHello Object's name: %s", name );
    //...
}
//...
}
```
NJS代码：
NJS code:
``` javascript
// 不调用plus.android.importClass("io.dcloud.NjsHello")导入类NjsHello
// Do not call plus.android.importClass("io.dcloud.NjsHello") to import class NjsHello
// 创建对象的实例
// create an instance of the object
var hello = plus.android.newObject( "io.dcloud.NjsHello" );
// 调用updateName方法
// call the updateName method
plus.android.invoke( hello, "updateName", "Tester" );
// 输出“NjsHello Object's name: Tester”
// print“NjsHello Object's name: Tester”
console.log( "NjsHello Object's name: "+hello.getAttribute("name") );
// ...
```
**完整API文档参考：[HTML5+ API - Native.js for Android](http://www.html5plus.org/doc/zh_cn/android.html)**
**Complete API documentation reference: [HTML5+ API - Native.js for Android](http://www.html5plus.org/doc/zh_cn/android.html)**

### API on iOS
#### plus.ios.newObject
不导入类对象直接创建类的实例对象，方法原型如下：
The instance object of the class is created directly without importing the class object. The method prototype is as follows:
``` java
InstanceObject plus.ios.newObject( String classname, Object..args );
```
此方法会在Native层中对类进行实例化操作，创建一个类的实体并返回NJS层的类实例对象。相比导入类对象后使用new操作符创建对象效率要高。
This method will instantiate the class in the Native layer, create a class entity and return the class instance object of the NJS layer. It is more efficient to use the new operator to create objects after importing class objects.
- classname：要创建实例对象的类名，如果指定的类名不存在，则创建对象失败，返回null。
- classname: The class name of the instance object to be created. If the specified class name does not exist, the object creation fails and null is returned.
- args：调用类构造函数的参数，其类型和数目必须与Native层对象构造函数区配，否则无法创建类对象，将返回null。
- args: The type and number of parameters to call the class constructor must match with the native layer object constructor, otherwise the class object cannot be created and null will be returned.

**注意**：由于没有导入类对象，所以通过此方法创建的实例对象无法通过“.”操作符直接调用对象的方法，而必须使用plus.ios.invoke方法来调用。classname参数值为“@selector”表示需要创建一个函数指针对象，与Objective-C中的@selector指令功能相似，args参数为函数的名称，此时函数的名称需要包含“：”字符。
**Note**: Since the class object is not imported, the instance object created by this method cannot directly call the method of the object through the "." operator, but must use the plus.ios.invoke method to call. The value of the classname parameter is "@selector", which means that a function pointer object needs to be created. Similar to the @selector instruction in Objective-C, the args parameter is the name of the function. In this case, the name of the function needs to contain the ":" character.

示例：
Example:
1. 不导入类创建实例对象
1. Create an instance object without importing a class
Objective-C代码：
Objective-C code:
``` objc
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // 创建对象的实例
    // create an instance of the object
    NjsHello* hello = [[NjsHello alloc] init];
    // ...
}
```
NJS代码：
NJS code:
``` javascript
// 未导入“NjsHello”类
// Class "NjsHello" is not imported
// 创建对象的实例
// create an instance of the object
var hello = plus.ios.newObject( "NjsHello" );
// ...
```

#### plus.ios.invoke
若没有导入类对象，则无法通过实例对象的“.”操作符调用其成员方法，需通过以下方法调用实例对象的成员方法，方法原型如下：
If the class object is not imported, its member method cannot be called through the "." operator of the instance object. The member method of the instance object needs to be called through the following methods. The method prototype is as follows:
``` javascript
Object plus.ios.invoke( String|Object obj, String name, Object... args );
```
此方法也可以调用类对象或实例对象的方法，如果是类对象则调用的是类的静态方法，如果是实例对象则调用的是对象的普通成员方法。函数返回值是调用Native层方法运行后的返回值，Native对象的方法无返回值则返回undefined。
This method can also call the method of class object or instance object. If it is a class object, it will call the static method of the class, and if it is an instance object, it will call the ordinary member method of the object. The return value of the function is the return value after calling the native layer method to run, and the method of the native object returns undefined if there is no return value.
- obj：若是String类型，表示要调用静态方法的类名，类名必须包含完整的包名；若是ClassObject类型，表示要调用静态方法的类对象；若是InstanceObject类型，表示要调用成员方法的实例对象。
- obj: If it is of type String, it means the class name of the static method to be called, and the class name must contain the complete package name; if it is of type ClassObject, it means the class object to which the static method is to be called; if it is of type InstanceObject, it means the instance object of which the member method is to be called .
- name：要调用的方法名称，必须保留方法名称中的“：”字符，如果指定的方法不存在，则调用方法失败，返回值为null。
- name: The name of the method to be called. The ":" character in the method name must be reserved. If the specified method does not exist, the method fails to be called and the return value is null.
- args：调用方法的参数，其类型和数目必须与Native层对象方法的函数区配，否则无法调用对象的方法，将返回null。
- args: the parameters of the calling method, whose type and number must be matched with the function of the native layer object method, otherwise the method of the object cannot be called, and null will be returned.

**注意**：同样导入类对象后也可以调用此方法，其作用与通过类对象或实例对象的“.”操作符调用方法作用一致。
**Note**: This method can also be called after importing the class object, and its effect is the same as calling the method through the "." operator of the class object or instance object.

示例：
Example:
1. 不导入类创建实例对象，并调用updateName方法
1. Create an instance object without importing the class and call the updateName method
Objective-C代码：
Objective-C code:
``` objc
#import "njshello.h"
int main( int argc, char *argv[] )
{
    // 创建对象的实例
    // create an instance of the object
    NjsHello* hello = [[NjsHello alloc] init];
    // 调用updateName方法
    // call the updateName method
    [hello updateName:@"Tester"];
		// 输出“NjsHello Object's name: Tester”
		// print“NjsHello Object's name: Tester”
    NSLog(@"NjsHello Object's name: %@",hello.name);
    // ...
}
```
NJS代码：
NJS code:
``` javascript
// 未导入“NjsHello”类
// Class "NjsHello" is not imported
// 创建对象的实例
// create an instance of the object
var hello = plus.ios.newObject( "NjsHello" );
// 调用updateName方法
// call the updateName method
plus.ios.invoke( hello, "updateName", "Tester" );
// 输出“NjsHello Object's name: Tester”
// print“NjsHello Object's name: Tester”
console.log( "NjsHello Object's name: "+hello.getAttribute("name") );
// ...
```
**完整API文档参考：[HTML5+ API - Native.js for iOS](http://www.html5plus.org/doc/zh_cn/ios.html)**
**Complete API documentation reference: [HTML5+ API - Native.js for iOS](http://www.html5plus.org/doc/zh_cn/ios.html)**


## 性能优化
##Performance optimization
### 调整代码结构优化
### Adjust code structure optimization
前面章节中我们介绍如何通过NJS调用Native API来显示系统提示框，在真机运行时会发现第一次调用时会有0.5s左右的延时，再次调用则不会延时。这是因为NJS中导入类对象操作会花费较长的时间，再次调用时由于类对象已经导入过，会能很快执行完毕。因此可以调整代码结构进行优化，在页面打开后触发的“plusready”事件中进行类对象的导入操作，从而避免第一次调用的延时。
In the previous chapter, we introduced how to call the Native API through NJS to display the system prompt box. When the real machine is running, it will be found that there will be a delay of about 0.5s for the first call, and there will be no delay if the call is made again. This is because the operation of importing a class object in NJS will take a long time, and when it is called again, since the class object has been imported, it will be executed quickly. Therefore, you can adjust the code structure for optimization, and import the class object in the "plusready" event triggered after the page is opened, so as to avoid the delay of the first call.

Android平台调整NJS代码结构如下：
The Android platform adjusts the NJS code structure as follows:
``` javascript
// 保存Android导入对象和全局环境对象
// Save Android import object and global environment object
var AlertDialog=null,mainActivity=null;
// H5+事件处理
// H5+ event handling
document.addEventListener("plusready",function(){
	switch ( plus.os.name ) {
		case "Android":
		// 程序全局环境对象，内部自动导入Activity类
		// Program global environment object, automatically import Activity class internally
		mainActivity = plus.android.runtimeMainActivity();
		// 导入AlertDialog类
		// Import the AlertDialog class
		AlertDialog = plus.android.importClass("android.app.AlertDialog");
		break;
		default:
		break;
	}
},false);
//...
/**
 * 在Android平台通过NJS显示系统提示框
 * Display system prompt box through NJS on Android platform
 */
function njsAlertForAndroid(){
	// 创建提示框构造对象，构造函数需要提供程序全局环境对象，通过plus.android.runtimeMainActivity()方法获取
	// Create a prompt box construction object. The constructor needs to provide the global environment object of the program, which is obtained through the plus.android.runtimeMainActivity() method
	var dlg = new AlertDialog.Builder(mainActivity);
	// 设置提示框标题
	// set the prompt box title
	dlg.setTitle("自定义标题");
	dlg.setTitle("custom title");
	// 设置提示框内容
	// set the prompt box content
	dlg.setMessage("使用NJS的原生弹出框，可自定义弹出框的标题、按钮");
	dlg.setMessage("Using NJS's native popup box, you can customize the title and button of the popup box");
	// 设置提示框按钮
	// set the prompt box button
	dlg.setPositiveButton("确定(或者其他字符)",null);
	dlg.setPositiveButton("OK (or other characters)",null);
	// 显示提示框
	// show tooltip
	dlg.show();
}
//...
```
iOS平台调整NJS代码结构如下：
The iOS platform adjusts the NJS code structure as follows:
``` javascript
// 保存iOS平台导入的类对象
// Save the class object imported by the iOS platform
var UIAlertView=null;
// H5+事件处理
// H5+ event handling
document.addEventListener("plusready",function(){
	switch ( plus.os.name ) {
		case "iOS":
		// 导入UIAlertView类
		// Import UIAlertView class
		UIAlertView = plus.ios.importClass("UIAlertView");
		break;
		default:
		break;
	}
},false);
//...
/**
 * 在iOS平台通过NJS显示系统提示框
 * Display system prompt box through NJS on iOS platform
 */
function njsAlertForiOS(){
	// 创建UIAlertView类的实例对象
	// Create an instance object of the UIAlertView class
	var view = new UIAlertView();
	// 设置提示对话上的内容
	// Set the content on the prompt dialog
	view.initWithTitlemessagedelegatecancelButtonTitleotherButtonTitles("自定义标题" // 提示框标题
	view.initWithTitlemessagedelegatecancelButtonTitleotherButtonTitles("Custom Title" //Title of the prompt box
		, "使用NJS的原生弹出框，可自定义弹出框的标题、按钮" // 提示框上显示的内容
		, "Using the native popup box of NJS, you can customize the title and button of the popup box" // The content displayed on the prompt box
		, null // 操作提示框后的通知代理对象，暂不设置
		, null // The notification proxy object after the operation prompt box, not set yet
		, "确定(或者其他字符)" // 提示框上取消按钮的文字
		, "OK (or other characters)" // text of the cancel button on the tooltip
		, null ); // 提示框上其它按钮的文字，设置为null表示不显示
		, null ); // The text of other buttons on the prompt box, set to null means not displayed
	// 调用show方法显示提示对话框
	// Call the show method to display the prompt dialog
	view.show();
}
//...
```

### 使用高级API优化
### Optimized using advanced API
前面章节中我们提到导入类对象会消耗较多的系统资源，导入过多的类对象会影响性能。在高级API中提供一组接口可以在不导入类对象的情况下调用Native API，从而提升代码运行性能。
In the previous chapter, we mentioned that importing class objects will consume more system resources, and importing too many class objects will affect performance. Providing a set of interfaces in the high-level API can call the Native API without importing the class object, thereby improving the performance of the code.

Android平台使用高级API优化代码如下：
The Android platform uses the high-level API to optimize the code as follows:
``` javascript
// 保存Android导入对象和全局环境对象
// Save Android import object and global environment object
var mainActivity=null;
// H5+事件处理
// H5+ event handling
document.addEventListener("plusready",function(){
	switch ( plus.os.name ) {
		case "Android":
		// 程序全局环境对象，内部自动导入Activity类
		// Program global environment object, automatically import Activity class internally
		mainActivity = plus.android.runtimeMainActivity();
		break;
		default:
		break;
	}
},false);
//...
/**
 * 在Android平台通过NJS显示系统提示框
 * Display system prompt box through NJS on Android platform
 */
function njsAlertForAndroid(){
	// 由于Builder类是android.app.AlertDialog类的内部类，这里需要使用$符号分割
	// Since the Builder class is an inner class of the android.app.AlertDialog class, you need to use the $ symbol to separate
	var dlg = plus.android.newObject("android.app.AlertDialog$Builder",mainActivity);
	// 设置提示框标题
	// set the prompt box title
	plus.android.invoke(dlg,"setTitle","自定义标题");
	plus.android.invoke(dlg,"setTitle","custom title");
	// 设置提示框内容
	// set the prompt box content
	plus.android.invoke(dlg,"setMessage","使用NJS的原生弹出框，可自定义弹出框的标题、按钮");
	plus.android.invoke(dlg,"setMessage","Using the native popup box of NJS, you can customize the title and button of the popup box");
	// 设置提示框按钮
	// set the prompt box button
	plus.android.invoke(dlg,"setPositiveButton","确定(或者其他字符)",null);
	plus.android.invoke(dlg,"setPositiveButton","OK (or other characters)",null);
	// 显示提示框
	// show tooltip
	plus.android.invoke(dlg,"show");
}
//...
```

iOS平台使用高级API优化代码如下：
The iOS platform uses the high-level API to optimize the code as follows:
``` javascript
/**
 * 在iOS平台通过NJS显示系统提示框
 * Display system prompt box through NJS on iOS platform
 */
function njsAlertForiOS(){
	// 创建UIAlertView类的实例对象
	// Create an instance object of the UIAlertView class
	var view = plus.ios.newObject("UIAlertView");
	// 设置提示对话上的内容，这里的方法名称中必须包含':'字符
	// Set the content on the prompt dialog, where the method name must contain the ':' character
	plus.ios.invoke(view,"initWithTitle:message:delegate:cancelButtonTitle:otherButtonTitles:"
	    ,"自定义标题" // 提示框标题
	    ,"custom title" // prompt box title
	    , "使用NJS的原生弹出框，可自定义弹出框的标题、按钮" // 提示框上显示的内容
	    , "Using the native popup box of NJS, you can customize the title and button of the popup box" // The content displayed on the prompt box
	    , null // 操作提示框后的通知代理对象，暂不设置
	    , null // The notification proxy object after the operation prompt box, not set yet
	    , "确定(或者其他字符)" // 提示框上取消按钮的文字
	    , "OK (or other characters)" // text of the cancel button on the tooltip
	    , null ); // 提示框上其它按钮的文字，设置为null表示不显示
	    , null ); // The text of other buttons on the prompt box, set to null means not displayed
	// 调用show方法显示提示对话框，在JS中使用()语法调用对象的方法
	// Call the show method to display the prompt dialog, and use the () syntax to call the method of the object in JS
	plus.ios.invoke(view,"show");
}
//...
```