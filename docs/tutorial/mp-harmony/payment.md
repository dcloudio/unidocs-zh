# 鸿蒙应用、鸿蒙元服务支付

目前鸿蒙应用、元服务鼓励通过华为支付完成支付，本文介绍华为支付流程。

## 整体流程

华为支付整体流程如下：

1. 登录华为商户平台
2. 设置信息提交入网资料，等待审核
3. 审核通过，华为小额打款认证
4. 签署协议，完成开户
5. 技术联调

整体流程可参考 [华为支付申请接入教程 申请流程](https://developer.huawei.com/consumer/cn/doc/pay-docs/hwzf-jieruliucheng-0000001251448455)

## 准备工作

华为支付时候，用户需要选择和华为的合作身份：商户身份、平台身份。具体细节可参考 [申请接入时如何选择合作身份](https://developer.huawei.com/consumer/cn/doc/pay-docs/hwzf-hezuoshenfen-0000001725918617)

## 技术联调

等待华为支付入网成功之后，开始进入技术联调阶段。

### 获取商户号信息

登录 [华为支付商户平台](https://petalpay-merchant.cloud.huawei.com/merchcenter/appIds)，页面右上角会展示商户号，为一串数字，请保存，等待后续使用。

### 生成商户证书

登录 [华为支付商户平台](https://petalpay-merchant.cloud.huawei.com/merchcenter/appIds)，选择 **商户中心 - 证书管理 - 上传商户证书**

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/ad52a870-5127-42be-ad1a-727dc8c0abc1.png)

这个页面要求上传商户公钥。参考 《[生成商户证书](https://developer.huawei.com/consumer/cn/doc/HMSCore-Guides/certificate-preparation-0000001596094962#section08051431101916)》，这里推荐使用 node.js 脚本完成生成。

保存下面代码到 `generateKeyPair.js`。

```js
const crypto = require('crypto');
// 生成密钥对
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 3072, // 密钥长度，不少于3072
  publicKeyEncoding: {
    type: 'spki', // 公钥编码格式
    format: 'pem', // 公钥输出格式
  },
  privateKeyEncoding: {
    type: 'pkcs8', // 私钥编码格式
    format: 'pem', // 私钥输出格式
  },
});
console.info('生成的公钥：');
console.info(publicKey);
console.info('生成的私钥：');
console.info(privateKey);
```

执行 `node generateKeyPair.js`得到返回值，返回结构如下：

```text
-----BEGIN PUBLIC KEY-----
以实际内容为准
-----END PUBLIC KEY-----
```

返回的私钥结构如下

```txt
-----BEGIN PRIVATE KEY-----
以实际内容为准
-----END PRIVATE KEY-----
```

- 商户证书私钥，保留在自己服务器上，用于参数签名
- 商户证书公钥，上传到华为商户后台，用于给华为验证签名

返回的结果手动存储，将公钥返回部分复制，存储为 `payPublicKey.pem`，在上传页面，选择 RSA 签名方式，上传公钥文件。

上传成功后，公钥表格会更新内容，说明这部分工作完成。请保存证书 ID 视为证书编号，后续会使用。

### 下载华为支付证书

进入页面 **证书管理 - 华为支付证书 - 下载**，得到一个证书文件

```txt
-----BEGIN CERTIFICATE-----
xxx
-----END CERTIFICATE-----
```

### 关联应用

选择 **产品功能 - AppID 管理**，观察 AppID 关联列表中是否已经包含你应用的名称，检查对应的 AppID

![](https://web-ext-storage.dcloud.net.cn/uni-app/harmony/adacb199-c40d-456f-aa0e-27ac9561f124.png)

按照提示进行关联操作，最终应当在列表中包含你的鸿蒙应用、鸿蒙元服务信息。

### 修改 uni-pay 配置

这里使用开源免费的 [uni-pay](https://doc.dcloud.net.cn/uniCloud/uni-pay/uni-app.html#config-huawei-mp) 项目进行演示，来完成支付。

也可以直接访问 [插件市场 uni-pay](https://ext.dcloud.net.cn/plugin?name=uni-pay)，下载示例项目。

下载项目并关联 uniCloud 云服务空间。

编辑配置文件 `uniCloud/cloudfunctions/common/uni-config-center/uni-pay/config.js`，找到 `huawei` 节点，如果是元服务编辑 `mp` 节点，如果是鸿蒙应用请编辑 `app` 节点

```json
{
  // 华为支付
  "huawei": {
    // 华为 - 元服务支付
    "mp": {
      "appId": "", // 应用的appId
      "mchId": "", // 商户号
      "mchAuthId": "", // 商户证书编号
      "mchPrivateKey": "", // 商户私钥内容
      "platformPublicKey": "", // 华为支付公钥
      "clientType": "mp-harmony" // 固定 mp-harmony 请勿修改
    },
    // 华为 - APP支付
    "app": {
      "appId": "", // 应用的appId
      "mchId": "", // 商户号
      "mchAuthId": "", // 商户证书编号
      "mchPrivateKey": "", // 商户私钥内容
      "platformPublicKey": "", // 华为支付公钥
      "clientType": "app-harmony" // 固定 app-harmony 请勿修改
    }
  }
}
```

参数说明

- `appId` 在 **商户中心-AppID 管理-AppID 关联列表** 找到 APPID 并进行填入
- `mchId` 商户号，在商户后台右上角获取
- `mchAuthId` 商户证书编号，可在 **商户中心-上传商户证书**，在页面列表页中复制证书 ID
- `mchPrivateKey` 商户私钥内容。填写证书私钥完整内容，以 `-----BEGIN PRIVATE KEY-----` 开头，换行使用`\n`。参考结果 `"mchPrivateKey":"-----BEGIN PRIVATE KEY-----\n具体内容\n-----END PRIVATE KEY-----\n"`
- `platformPublicKey` 华为支付公钥。填写 **华为支付证书** 下载的文件，这里只需要正文部分，具体值一般是以 `04ACC` 开头。

继续编辑 `uni-pay/config.js` 文件修改支付回调地址。

修改顶部 `notifyUrl` 参数会你的 uniCloud 地址，具体参考 [支付回调配置](https://doc.dcloud.net.cn/uniCloud/uni-pay/uni-app.html#config-notify) 如何获取对应参数。

操作完毕，上传对应配置。

### HBuilderX 代码开启

修改 mainifest.json 找到 **鸿蒙 App 配置 - uni-payment - 勾选华为支付**。

配置签名，运行鸿蒙配置。鸿蒙元服务可直接唤起支付，鸿蒙应用如果看不到华为支付，可先添加

```html
<!-- #ifdef APP-HARMONY -->
<button @click="createOrder('huawei')">直接发起支付（huawei）</button>
<!-- #endif -->
```

### 验证结果

如果上述配置，设置完成，可在鸿蒙应用、鸿蒙元服务中唤起华为支付。

如果遇到提示未正确配置回调地址，重新检查 HBuilderX 登录账号和云端登录的账号是否为同一个，避免匹配失败。

### 后续支持

如果操作过程有疑问，可点此进入 [uni-app 鸿蒙化技术交流群](https://im.dcloud.net.cn/#/?joinGroup=668685db8185e1e6e7b7b15e)
