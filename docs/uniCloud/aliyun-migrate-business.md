# 阿里云公测版迁移到正式版
# Aliyun public beta version migrated to the official version

为了开发者更方便的将业务从公测版迁移到正式版，我们提供了公测版一键迁移到正式版的功能，开发者可在[uniCloud控制台](https://unicloud.dcloud.net.cn)操作迁移，流程如下：
To make it easier for developers to migrate their business from the public beta version to the official version, we provide the function of one-click migration from the public beta version to the official version. Developers can log in to the [uniCloud console](https://unicloud.dcloud.net. cn) operation migration, the process is as follows:

## 购买正式版迁移空间
## Purchase official version migration space
公测版迁移正式版，需通过`迁移正式版`操作来下单购买待迁移的正式版空间，该操作会为两个空间增加迁移绑定关系，方便后续迁移配置。
To migrate from the beta version to the official version, you need to place an order to purchase the official version space to be migrated through the `migrate official version` operation. This operation will add a migration binding relationship for the two spaces to facilitate subsequent migration configurations.

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/%E8%BF%81%E7%A7%BB%E6%AD%A3%E5%BC%8F%E7%89%88%E6%8C%89%E9%92%AE.png)

迁移时，可以选择新空间使用**按量计费**或**包月套餐**。
When migrating, you can choose the new space to use **As you go** or **Monthly package**.

如选择套餐，目前会根据公测版老服务空间最近三十天的平均用量水位，一共十二项计费指标，然后分别和不同档位套餐的阈值相比较。最低套餐满足了每一项指标都不超限。
If you choose a package, at present, based on the average usage level of the public beta version of the old service space in the last 30 days, a total of 12 billing indicators will be compared with the thresholds of different packages. The minimum package meets every indicator without exceeding the limit.

经与阿里云协调，已上线新版推荐套餐方案，改为只强制校验5个计费指标：
After coordination with Alibaba Cloud, a new version of the recommended package plan has been launched, and only 5 billing indicators are mandatory to be verified:
- 云数据库容量
- Cloud database capacity
- 云存储容量
- Cloud storage capacity
- 前端网页托管容量
- Front-end web hosting capacity
- 过去30天云存储累计CDN流量
- Cumulative CDN traffic of cloud storage in the past 30 days
- 过去30天前端网页托管累计CDN流量
- Cumulative CDN traffic of front-end web hosting in the past 30 days

满足这5个指标，就可以迁移。其他指标超过使用的套餐会发出警告，但也允许迁移。
Satisfy these 5 indicators, you can migrate. Packages whose other metrics exceed usage will warn, but also allow migration.

如果你的迁移选项里只有按量计费，没有套餐，那说明即便是最高档的套餐也无法满足。
If your migration options only have pay-as-you-go and no packages, it means that even the most advanced packages are not enough.

因为老空间未提供流量统计，且一直免费。导致很多开发者不知道自己的流量和存储消耗多大，可能会惊讶于最低套餐的标准。
Because the old space does not provide traffic statistics, and has always been free. As a result, many developers do not know how much their traffic and storage consumption is, and they may be surprised by the standard of the lowest package.

对于认为套餐超过预期的开发者，可能是存储里过多无用文件或代码需要优化，推荐改用按量付费，跑1天看看使用量消耗到底在哪里，问题出在哪里，然后优化下代码和存储，把成本降下来。
For developers who think that the package exceeds expectations, it may be that there are too many useless files in the storage or the code needs to be optimized. It is recommended to switch to pay-as-you-go. Run for a day to see where the usage is consumed and where the problem is, and then optimize the code. and storage to keep costs down.

虽然用户量小，但套餐推荐较高，常见的问题有：
Although the number of users is small, the packages are highly recommended. Common problems include:

1. 存储文件体积太大，低档套餐的存储不够，迁移不了
1. The size of the storage file is too large, and the storage of the low-end package is not enough, so it cannot be migrated
2. 定时任务导致云函数使用量和数据库读写量偏高
2. Timing tasks lead to high cloud function usage and database read and write volume
3. 不合理的代码设计，一个页面发起太多请求次数
3. Unreasonable code design, one page initiates too many requests
4. 云函数运行内存设的太高。正常情况下256M内存是够的。可以在[云函数package.json](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#memory)或web控制台调整。
4. The running memory of the cloud function is set too high. Under normal circumstances, 256M memory is enough. It can be adjusted in [cloud function package.json](https://uniapp.dcloud.net.cn/uniCloud/cf-functions.html#memory) or web console.
5. 如果之前使用uni统计，建议调整下统计的上报数据频率和云端跑批频率。不能太造资源。[详见](https://uniapp.dcloud.net.cn/uni-stat-v2.html#savemoney)
5. If you used uni statistics before, it is recommended to adjust the data reporting frequency and cloud batch running frequency of the statistics. Don't create too many resources. [See details](https://uniapp.dcloud.net.cn/uni-stat-v2.html#savemoney)

DCloud始终是为开发者提供更高性价比方案的产品服务公司，DCloud不会为了挣钱故意推荐开发者用不着的高档套餐。
DCloud is always a product service company that provides developers with more cost-effective solutions. DCloud will not deliberately recommend high-end packages that developers do not need in order to make money.

目前包月套餐可以转按量计费，但按量计费还不能转包月套餐。我们会推进阿里云尽快解决。
At present, the monthly package can be converted to pay-as-you-go, but the pay-as-you-go package cannot be converted to a monthly package. We will push Alibaba Cloud to solve it as soon as possible.

在购买待迁移空间前，已经可以获取到迁移后云存储上传及下载的域名，**开发小程序的话，由于小程序安全域名白名单在客户端有缓存，建议迁移前两天将云存储域名添加到白名单**。
Before purchasing the space to be migrated, you can already obtain the domain name uploaded and downloaded by the cloud storage after migration. If you want to develop a MiniApp, since the white list of the security domain name of the MiniApp is cached on the client, it is recommended to change the cloud storage domain name to Add to whitelist**.

下单时可设置迁移任务执行的时间，迁移时间仅支持两小时后到三天内的时间点，在未开始执行之前可更改迁移时间。
When placing an order, you can set the execution time of the migration task. The migration time only supports a time point within two hours to three days. You can change the migration time before the execution starts.

由于待迁移正式版空间是一个全新且独立的空间，所以在创建后会分配新的SpaceId，规则为`mp-公测版SpaceId`。
Since the official version space to be migrated is a brand new and independent space, a new SpaceId will be assigned after creation, and the rule is `mp-public beta version SpaceId`.

为了更好的在云函数/云对象中兼容，购买待迁移正式版空间时， 可选择`是否在云函数/云对象代码中兼容 SpaceID`，如果开启该选项，迁移后在云函数/云对象内获取的`context.SPACEINFO.spaceId` 及 `cloudInfo` 内的 SpaceId 将保持不变，仍为原公测版SpaceId。开发者可以通过`context.SPACEINFO.useOldSpaceId` 或 `cloudInfo.useOldSpaceId`判断当前获取的spaceId是不是迁移前的，true表示当前服务空间在云函数内取到的服务空间id为迁移前的服务空间id，否则为新空间id。如运行本地云函数，此特性于`HBuilderX 3.6.13`起支持，云端默认支持此特性。**迁移后的新服务空间id为旧空间id加`mp-`前缀。**
In order to be more compatible in cloud functions/cloud objects, when purchasing the official space to be migrated, you can choose `Whether to be compatible with SpaceID in cloud functions/cloud object codes`, if this option is enabled, the cloud functions/cloud objects after migration The `context.SPACEINFO.spaceId` obtained in `context.SPACEINFO.spaceId` and the SpaceId in `cloudInfo` will remain unchanged, and will still be the SpaceId of the original beta version. Developers can use `context.SPACEINFO.useOldSpaceId` or `cloudInfo.useOldSpaceId` to judge whether the currently obtained spaceId is before migration. true means that the service space id obtained by the current service space in the cloud function is the service space id before migration , otherwise it is the new space id. For running local cloud functions, this feature is supported starting from `HBuilderX 3.6.13`, and the cloud supports this feature by default. **The new service space id after migration is prefixed with `mp-` to the old space id. **

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/%E8%BF%81%E7%A7%BB%E4%B8%8B%E5%8D%95.png)


**注意**：
**Notice**:
- 公测版不可迁移到正式版的免费版（开发者版）
- The public beta version cannot be migrated to the free version (developer version) of the official version
- 如有跨账号迁移需求，需使用空间所属账号邮箱发送邮件至 service@dcloud.io 说明新账号及服务空间进行申请
- If there is a need for cross-account migration, you need to use the email address of the account to which the space belongs to send an email to service@dcloud.io explaining the new account and service space to apply
- 购买待迁移正式版空间后，为了保证数据迁移的一致性，此时的正式版空间无法在HBuilderX关联、无法在控制台创建数据表、无法在云存储及前端网页托管上传文件等操作，直至迁移完成。
- After purchasing the official version space to be migrated, in order to ensure the consistency of data migration, the official version space at this time cannot be associated with HBuilderX, cannot create data tables in the console, cannot upload files in cloud storage and front-end web hosting, etc., until The migration is complete.
- 购买待迁移正式版空间后，云存储及前端网页托管cdn流量便会开始计费并出账到正式版空间
- After purchasing the official version space to be migrated, the cloud storage and front-end web hosting cdn traffic will start to be billed and paid to the official version space
- 使用旧空间的链接产生的云存储及前端网页托管的CDN流量会在第二天的某个时间统计出来并加到正式版空间上
- The cloud storage and CDN traffic hosted by the front-end web page generated by using the link of the old space will be counted and added to the official space at a certain time on the next day
- 只有通过`迁移正式版`完成创建的正式版服务空间才支持一键迁移，原已创建的正式版空间无法使用该功能。
- Only the official version service space created through `Migrate Official Version` supports one-click migration, and the original official version space cannot use this function.
- 如果客户端为小程序，请在迁移前先到小程序后台配置新的上传域名到上传域名白名单（注意不要移除公测版服务空间的上传下载域名），**由于小程序安全域名在微信客户端内有缓存，建议再迁移前两天进行配置**
- If the client is a MiniApp, please go to the background of the MiniApp to configure a new upload domain name to the white list of upload domain names before migrating (be careful not to remove the upload and download domain names of the public beta service space), **because the MiniApp security domain name is in There is a cache in the WeChat client, it is recommended to configure it two days before the migration**
- 如果文件较多，建议在半夜等用户不访问的时间进行迁移。迁移过程耗时数分钟（具体取决于云存储的文件量），迁移中大多数功能仍可以使用，但云存储的上传功能在迁移中会关闭。如果文件不多，建议在工作时间迁移，万一有问题可以及时联系到DCloud和阿里云的技术支持。
- If there are many files, it is recommended to migrate them in the middle of the night and other times when users do not access them. The migration process takes several minutes (depending on the amount of files stored in the cloud), and most functions can still be used during the migration, but the upload function of the cloud storage will be turned off during the migration. If there are not many files, it is recommended to migrate during working hours. In case of any problems, you can contact the technical support of DCloud and Alibaba Cloud in time.
- 正式版固定IP代理出口IP和公测版不同，如有在三方平台配置域名白名单请自行修改，参考：[阿里云固定IP](cf-functions.md#aliyun-eip)
- The official version's fixed IP proxy export IP is different from the public beta version. If you have configured a domain name whitelist on a third-party platform, please modify it yourself. Refer to: [Aliyun Fixed IP](cf-functions.md#aliyun-eip)
- 迁移到正式版后公测版服务空间的数据库备份不会被迁移过来
- After migrating to the official version, the database backup of the public beta service space will not be migrated
- 迁移到正式版后开发者下次在HBuilderX打包发行时会使用正式版服务空间ID。请注意这时候需要修改小程序request域名白名单，将`api.next.bspapp.com`添加到request域名白名单内
- After migrating to the official version, the developer will use the service space ID of the official version when packaging and releasing HBuilderX next time. Please note that at this time, you need to modify the MiniApp request domain name whitelist, and add `api.next.bspapp.com` to the request domain name whitelist
- 迁移到正式版后公测版服务空间前端网页托管默认域名将在公测结束后自动回收  
- After migrating to the official version, the default domain name of the front-end web hosting of the public beta service space will be automatically recycled after the public beta ends
- 迁移到正式版后不可删除公测版服务空间，需等待公测结束后自动回收
- After migrating to the official version, the service space of the public beta version cannot be deleted, and it needs to be automatically recovered after the public beta is over

## 迁移开始
## Migration started

系统会在设置的迁移时间自动开始执行迁移任务，迁移逻辑及注意事项如下：
The system will automatically start the migration task at the set migration time. The migration logic and precautions are as follows:

### 云数据库
### Cloud Database

- 云数据库无需迁移，会将公测版服务空间的数据库关联到正式版上，所以**请勿删除公测版数据**
- The cloud database does not need to be migrated, and the database of the public beta version service space will be associated with the official version, so **do not delete the public beta version data**

迁移期间是否可正常服务：<font color=#42b983>是</font>
Whether the service can be normal during the migration: <font color=#42b983>Yes</font>

迁移类型：<font color=#42b983>无感迁移</font>
Migration type: <font color=#42b983>Senseless migration</font>

迁移耗时：无
Migration time-consuming: none

### 云函数
### Cloud Functions

- 云函数定时任务、url化配置及自定义域名会一并迁移，公测版服务空间的url化请求会自动转发到正式版服务空间上
- Cloud function scheduled tasks, urlization configuration and custom domain names will be migrated together, and urlization requests of the public beta service space will be automatically forwarded to the official version of the service space
- 如果绑定了自定义域名，此时仍会请求到公测版空间然后转发到正式版空间，您也可以将域名解析到正式版服务空间，免去请求转发的逻辑
- If a custom domain name is bound, the request will still be made to the public beta space and then forwarded to the official version space. You can also resolve the domain name to the official version service space, eliminating the logic of request forwarding

阿里云公测版callFunction请求、云对象调用使用了`api.bspapp.com`这个域名，正式版是`api.next.bspapp.com`。为避免迁移后旧客户端（迁移前发布的客户端）无法访问到新服务空间，阿里云做了请求转发，迁移完成后旧客户端仍会请求`api.bspapp.com`而阿里云会把发送到旧空间的请求转发到新空间去。从而保证迁移前后旧版本客户端能正常请求云函数
Alibaba Cloud public beta version callFunction requests and cloud object calls use the domain name `api.bspapp.com`, and the official version is `api.next.bspapp.com`. In order to prevent old clients (clients released before migration) from being unable to access the new service space after migration, Alibaba Cloud forwards the request. After the migration is complete, the old client will still request `api.bspapp.com` and Alibaba Cloud will send Requests sent to the old space are forwarded to the new space. In order to ensure that the old version of the client can normally request the cloud function before and after the migration

url化访问时不管是默认域名还是自定义域名均和上述转发逻辑类似。开发者也可以将自定义域名解析到新空间去，省去请求转发的逻辑。
Whether it is the default domain name or a custom domain name, the urlization access is similar to the above forwarding logic. Developers can also resolve custom domain names to new spaces, eliminating the logic of request forwarding.

迁移期间是否可正常服务：<font color=#42b983>是</font>
Whether the service can be normal during the migration: <font color=#42b983>Yes</font>

迁移类型：<font color=#42b983>无感迁移</font>
Migration type: <font color=#42b983>Senseless migration</font>

迁移耗时：约3-5分钟
Migration time-consuming: about 3-5 minutes

### 跨域配置
### Cross domain configuration

- 由于正式版跨域配置上限为9条，跨域配置记录迁移后可能会超上限，此时无法新增。正式版跨域配置支持泛域名，可将公测版配置的多个子域名删除后添加一条泛域名
- Due to the upper limit of 9 cross-domain configuration records in the official version, cross-domain configuration records may exceed the upper limit after migration, and new additions cannot be made at this time. The official version of the cross-domain configuration supports pan-domain names. You can delete multiple sub-domain names configured in the public beta version and add a pan-domain name.
- 跨域配置同时会对前端网页托管生效，如果你迁移前配置了前端网页托管自定义域名。迁移后需要先将前端网页托管的自定义域名重新绑定后才可添加新的跨域配置。
- The cross-domain configuration will also take effect for the front-end web page hosting, if you configured a custom domain name for the front-end web page hosting before the migration. After migration, you need to rebind the custom domain name hosted by the front-end web page before adding new cross-domain configurations.
- 迁移后如未关联新空间重新发布网站则访问云函数会使用旧空间的跨域配置，如需使用新空间的跨域配置需要关联新空间后重新发布
- After migration, if the website is republished without associating with the new space, accessing the cloud function will use the cross-domain configuration of the old space. If you need to use the cross-domain configuration of the new space, you need to associate the new space and republish
- 正式版默认允许127.0.0.1的所有端口跨域
- The official version allows all ports of 127.0.0.1 to cross-domain by default

迁移期间是否可正常服务：<font color=#42b983>是</font>
Whether the service can be normal during the migration: <font color=#42b983>Yes</font>

迁移类型：<font color=#42b983>无感迁移</font>
Migration type: <font color=#42b983>Senseless migration</font>

迁移耗时：很短，可忽略不计
Migration time-consuming: very short, negligible

### 云存储
### Cloud Storage

- 云存储在迁移开始后，上传文件的功能不可用，访问不受影响
- After the cloud storage migration starts, the function of uploading files is unavailable, and the access will not be affected
- 原云存储链接仍可正常访问，流量费用会计到正式版空间，正式版空间如果是包年包月则从资源用量中扣除，如果是按量计费则会出账并从余额中扣除，出账时间为T+2
- 使用HBuilderX 3.6.10-Alpha或3.6.5-正式版之前的版本发布的应用，迁移后上传文件会报错（错误信息为：`文件上传失败`，web端上传请求会返回403错误码），需要使用更新的HBuilderX版本重新发布应用（不管是app、小程序、web均需要重新发布，app端可使用wgt更新）。cli创建的项目需要更新项目依赖，参考：[修改依赖为指定版本](../quickstart-cli.md#cliversion)
- 正式版新上传的视频文件，视频截帧只支持H.264编码格式，不支持H.265编码格式，原公测版上传的视频不受影响
- For the newly uploaded video files of the official version, the video frame capture only supports the H.264 encoding format, not the H.265 encoding format, and the videos uploaded by the original public beta version will not be affected

迁移期间是否可正常服务：<font color=#f3a73f>可正常访问，不可上传</font>
Whether the service can be normal during the migration: <font color=#f3a73f>can be accessed normally, but cannot be uploaded</font>

迁移类型：<font color=#f3a73f>有感迁移，迁移期间不可上传文件</font>
Migration type: <font color=#f3a73f>Feeling migration, no files can be uploaded during migration</font>

迁移耗时：单文件体积较大，1GB迁移耗时约1分钟；单文件体积不大文件较多，1万个文件耗时约30分钟
Migration time-consuming: a single file is large in size, and it takes about 1 minute to migrate 1GB; a single file is small in size and there are many files, and it takes about 30 minutes for 10,000 files

### 前端网页托管
### Front-end web hosting

- 前端网页托管文件及自定义域名会一并迁移，迁移期间访问不受影响
- Front-end web page hosting files and custom domain names will be migrated together, and access will not be affected during the migration
- 网站首页需设置为index.html，如果设置为其他子目录(xxx/index.html)，迁移可能会失败
- The homepage of the website needs to be set to index.html, if it is set to another subdirectory (xxx/index.html), the migration may fail
- 单页应用配置取消，改为由错误页面实现，迁移时会自动将开发者配置的单页应用目录转为错误页面配置项，开发者无需操作
- The single-page application configuration is canceled and replaced by an error page. When migrating, the single-page application directory configured by the developer will be automatically converted into an error page configuration item, and the developer does not need to operate
- 默认域名及自定义域名此时仍会请求到公测版空间，与云存储不同的是不会转发到正式版空间
- The default domain name and custom domain name will still request to the public beta space at this time, unlike cloud storage, it will not be forwarded to the official version space
- 正式版空间如果为按量计费，在迁移任务执行时会自动开通前端网页托管
- If the official version space is billed by volume, the front-end web page hosting will be automatically activated when the migration task is executed

迁移期间是否可正常服务：<font color=#42b983>是</font>
Whether the service can be normal during the migration: <font color=#42b983>Yes</font>

迁移类型：<font color=#f3a73f>有感迁移，迁移完成后自定义域名需重新绑定及解析CNAME到正式版</font>
Migration type: <font color=#f3a73f>Feeling migration, after the migration is completed, the custom domain name needs to be re-bound and resolved to the official version</font>

迁移耗时：单文件体积较大，1GB迁移耗时约1分钟；单文件体积不大文件较多，1万个文件耗时约30分钟
Migration time-consuming: a single file is large in size, and it takes about 1 minute to migrate 1GB; a single file is small in size and there are many files, and it takes about 30 minutes for 10,000 files


## 迁移完成
## Migration complete

在迁移任务执行完成后，业务中公测版服务空间相关的数据会一并迁移至正式版：
After the migration task is completed, the data related to the service space of the public beta version in the business will be migrated to the official version:

1. 插件市场购买的付费插件
1. Paid plug-ins purchased from the plug-in market
2. 公测版服务空间购买的Redis
2. Redis purchased from public beta service space
3. 公测版服务空间添加的协作者
3. Collaborators added to the public beta service space
4. 公测版服务空间添加的安全网络及IP防刷配置
4. The security network and IP anti-brush configuration added to the service space of the public beta version

此时公测版服务空间将无法在[uniCloud控制台](https://unicloud.dcloud.net.cn)操作，无法在HBuilderX关联， 正式版服务空间已完全替代公测版，可在HBuilderX关联进行打包。
At this time, the public beta version of the service space will not be able to operate in the [uniCloud console](https://unicloud.dcloud.net.cn), and cannot be associated with HBuilderX. The official version of the service space has completely replaced the public beta version, and can be associated with HBuilderX for packaging .

### 迁移完成后的TODO
### TODO after the migration is complete

- 检查云函数运行是否正常，比如定时任务及url化是否正常、云函数/云对象中获取到的SpaceId是否符合预期
- Check whether the cloud function is running normally, such as whether the scheduled task and urlization are normal, whether the SpaceId obtained in the cloud function/cloud object meets expectations
- 检查云存储上传是否正常，公测版服务空间的上传请求会转发到正式版，所以上传的文件会在正式版里体现
- Check whether the cloud storage upload is normal, the upload request of the public beta service space will be forwarded to the official version, so the uploaded files will be reflected in the official version
- 检查前端网页托管是否正常，比如自定义域名的访问。如果有使用默认域名请尽快替换为正式版域名
- Check whether the front-end web page hosting is normal, such as access to custom domain names. If you use the default domain name, please replace it with the official domain name as soon as possible

### 前端网页托管绑定了自定义域名
### Front-end web hosting is bound to a custom domain name

如果绑定了自定义域名，则仍会请求到公测版服务空间，此时正式版上传的文件并不会反向同步到公测版，导致自定义域名无法访问新上传的文件。
If a custom domain name is bound, the service space of the public beta version will still be requested. At this time, the files uploaded from the official version will not be reversely synchronized to the public beta version, resulting in the custom domain name being unable to access newly uploaded files.

由于自定义域名仍绑定在公测版服务空间，正式版空间前端网页托管的域名状态为`需解绑后重新绑定`
Since the custom domain name is still bound to the service space of the public beta version, the status of the domain name hosted on the front-end webpage of the official version space is `Need to unbind and rebind`

![](https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/%E5%89%8D%E7%AB%AF%E7%BD%91%E9%A1%B5%E6%89%98%E7%AE%A1%E5%9F%9F%E5%90%8D%E7%8A%B6%E6%80%81.png)

需要开发者在[uniCloud控制台](https://unicloud.dcloud.net.cn)将自定义域名删除后重新绑定，通过该操作获取到新的CNAME后，将域名解析更换到新的CNAME以完成域名迁移。 这个期间前端网页托管自定义域名访问会中断，建议在访问量较低的时候处理。
The developer needs to delete the custom domain name in the [uniCloud console](https://unicloud.dcloud.net.cn) and then bind it again. After obtaining the new CNAME through this operation, replace the domain name resolution to the new CNAME to complete the domain transfer. During this period, access to the custom domain name hosted on the front-end webpage will be interrupted. It is recommended to deal with it when the traffic volume is low.


## 迁移后uniCloud特殊业务消耗费用说明@unicloud-fee
## Description of uniCloud special business consumption fee after migration @unicloud-fee

很多开发者使用uniCloud是因为短信、app一键登陆、iOS通用链接、app升级中心、uni统计等业务。
Many developers use uniCloud because of services such as text messaging, one-click app login, iOS universal links, app uni-upgrade-center, and uni statistics.

当阿里云计费后，开发者关心这些业务造成的成本有多少？我们为开发者进行测算，具体结果见下方：
After Alibaba Cloud bills, how much do developers care about the costs caused by these businesses? We conduct calculations for developers, and the specific results are as follows:

[uni统计2.0](https://uniapp.dcloud.net.cn/uni-stat-v2.html#cost)
[uni statistics 2.0](https://uniapp.dcloud.net.cn/uni-stat-v2.html#cost)

[App升级中心](https://uniapp.dcloud.net.cn/uniCloud/upgrade-center.html#upgrade-center-fee)
[uni-upgrade-center](https://uniapp.dcloud.net.cn/uniCloud/upgrade-center.html#upgrade-center-fee)

[短信](https://uniapp.dcloud.net.cn/uniCloud/sms/price)

[App一键登录](https://uniapp.dcloud.net.cn/uniCloud/univerify.html#unilogin-fee)
[App one-click login](https://uniapp.dcloud.net.cn/uniCloud/univerify.html#unilogin-fee)

[激励视频服务器回调](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html#aliyun-cf-fee)
[Rewarded video server callback](https://uniapp.dcloud.net.cn/component/ad-rewarded-video.html#aliyun-cf-fee)

[uni-push2.0](https://uniapp.dcloud.net.cn/unipush-v2.html#uni-push2-0%E8%B4%B9%E7%94%A8%E8%AF%B4%E6%98%8E)

[iOS通用链接](https://uniapp.dcloud.net.cn/api/plugins/universal-links.html#%E4%BA%91%E8%B5%84%E6%BA%90%E6%B6%88%E8%80%97%E8%AF%B4%E6%98%8E)
[iOS Universal Links](https://uniapp.dcloud.net.cn/api/plugins/universal-links.html#%E4%BA%91%E8%B5%84%E6%BA%90%E6%B6 %88%E8%80%97%E8%AF%B4%E6%98%8E)
