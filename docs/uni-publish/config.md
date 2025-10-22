
## Api传包相关参数的获取@getKey
`请使用应用市场的主账号获取Api传包相关操作，不要使用子账号，否则可能权限不足，或没有操作入口`

### 小米@xiaomi
1.前往小米[开放平台](https://dev.mi.com/xiaomihyperos)，点击管理中心。如未登录，则会先跳转至登录页面。
![](https://web-ext-storage.dcloud.net.cn/appstore/mi_2025-09-01_155214_780.png)
2.点击“自动发布接口”。
![](https://web-ext-storage.dcloud.net.cn/appstore/mi_2025-09-01_155659_112.png)
3.获取公钥：下载公钥文件后，使用记事本等文本编辑器打开文件，复制其中的公钥内容。

4.获取私钥：点击“获取私钥”按钮，平台将分配私钥。

5.小米账号：登录小米开放平台的小米账号邮箱


### OPPO@oppo
1.前往OPPO[开放平台](https://open.oppomobile.com)，点击管理中心。如未登录，则会先跳转至登录页面。
![](https://web-ext-storage.dcloud.net.cn/appstore/oppo_2025-09-01_163233_036.png)
2.点击顶部的“产品” ，然后点击“我的API”。
![](https://web-ext-storage.dcloud.net.cn/appstore/oppo_2025-09-01_163303_508.png)
3.点击左上角“API服务”右侧的导航栏，我的页面显示为【客户端应用】，你的页面可能会有所不同。点击后会弹出应用编辑的对话框。
![](https://web-ext-storage.dcloud.net.cn/appstore/oppo_2025-09-01_163547_709.png)
4.在对话框中，点击左下角的“新建应用”。
![](https://web-ext-storage.dcloud.net.cn/appstore/oppo_2025-09-01_170306_252.png)
5.在新建应用的对话框中，按照截图所示填写/选择。
![](https://web-ext-storage.dcloud.net.cn/appstore/oppo_2025-09-01_164836_649.png)
注:同一个秘钥可以支持多个APP使用。[API传包FAQ](https://web-ext-storage.dcloud.net.cn/appstore/oppo_2025-09-01_164836_649.png)

6.创建应用成功后，平台将分配client_id和client_secret。


### VIVO@vivo
1.前往VIVO[开放平台](https://dev.vivo.com.cn/contacts/details)，如未登录，则先登录。

2.点击账号 - 账号管理 - API管理，进入以下页面。
![](https://web-ext-storage.dcloud.net.cn/appstore/vivo_20240415150637181831.png)
![](https://web-ext-storage.dcloud.net.cn/appstore/vivo_20221008102105709868.png)
3.点击立即开通，开通成功后，平台将分配access_key和access_secret。
![](https://web-ext-storage.dcloud.net.cn/appstore/vivo_20221008101936287002.png)



### 荣耀@honor
1.前往荣耀[开放平台](https://developer.honor.com/cn)，点击管理中心。如未登录，则会先跳转至登录页面。
![](https://web-ext-storage.dcloud.net.cn/appstore/honor_2025-09-01_175654_723.png)
2.点击凭证。
![](https://web-ext-storage.dcloud.net.cn/appstore/honor_2025-09-01_175730_782.png)
3.点击申请凭证，申请成功后，平台将分配client_id和密钥。
![](https://web-ext-storage.dcloud.net.cn/appstore/honor_2025-09-01_180712_089.png)


### 应用宝@yyb
1.前往腾讯应用[开放平台](https://app.open.qq.com/p/home)，如未登录，则先登录。

2.点击账号 - 账号管理 - API发布接口，进入以下页面。
![](https://web-ext-storage.dcloud.net.cn/appstore/qq_2025-09-01_175038_522.png)
![](https://web-ext-storage.dcloud.net.cn/appstore/qq_2025-09-01_174814_738.png)
3.点击申请开通，开通成功后，平台将分配access_secret。 

4.UserID获取，如下图。
![](https://web-ext-storage.dcloud.net.cn/appstore/2025-09-23_110024_975.png)

5.当在应用发布页面中勾选 更新发布，且渠道中包含 **应用宝**时，需要填写对应的 app_id，app_id 获取方式如下图所示。
![](https://web-ext-storage.dcloud.net.cn/appstore/09231106.png)

### 华为@huawei
1.前往[AppGallery Connect](https://developer.huawei.com/consumer/cn/service/josp/agc/index.html)，如未登录，则先登录。

2.选择“用户与访问” 。
![](https://web-ext-storage.dcloud.net.cn/appstore/huawei0001.png)
3.选择左侧导航栏的“API密钥 > Connect API”，点击“创建”。
![](https://web-ext-storage.dcloud.net.cn/appstore/huawei002.png)
4.在“名称”列输入自定义的客户端名称，“项目”保持默认值“N/A”，“角色”选择APP管理员，点击“确认”。
![](https://web-ext-storage.dcloud.net.cn/appstore/huawei007.png)

5.创建成功，平台将分配client_id和密钥。
![](https://web-ext-storage.dcloud.net.cn/appstore/huawei004.png)

6.当在应用发布页面中勾选 首次发布，且渠道中包含**华为**时，同样需要填写对应的 app_id，可[参考](https://developer.huawei.com/consumer/cn/doc/app/agc-help-appinfo-0000001100014694)


### 苹果@apple
1.前往[Apple 账户](https://account.apple.com/account/manage)，如未登录，则先登录。

2.选择“登录和安全”。

![](https://web-ext-storage.dcloud.net.cn/appstore/apple10001.png)

3.点击 “App 专用密码” 在弹窗中 “密码” 右侧的 “+” 号按钮，输入备注名称后，点击 “创建” ，复制出生成的 App 专用密码。

4.登录[App Store Connect](https://appstoreconnect.apple.com/)，如未登录，则先登录。

5.在 “用户和访问” - “集成” - “[App Store Connect API](https://appstoreconnect.apple.com/access/integrations/api)” 中可以看到 “Issuer ID”。

![](https://web-ext-storage.dcloud.net.cn/appstore/apple10002.png)

![](https://web-ext-storage.dcloud.net.cn/appstore/apple10003.png)

6.创建密钥，点击“有效”旁边的“+”号按钮，访问选择 “管理” 或 “App 管理”权限，点击创建。

7.创建成功后，将 “密钥ID” 和 “密钥文件” 下载保存。