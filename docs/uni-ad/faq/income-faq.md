## 数据收益常见问题

### 广告收益的高低与什么有关？
- AppDCloud快捷广告的收益目前比不上渠道SDK广告。DCloud快捷广告偶尔有高收益广告主，但填充率不足。想获得更高广告收益，应克服App的上架等门槛，开通渠道SDK广告。
- 你的app日活越高，广告收益越高。注意新增渠道SDK广告SDK后，涉及新包升级问题，带渠道SDK广告sdk的日活才有意义。
- 开通的广告位类型越多，广告收益越高。开屏、信息流、Banner、激励视频、Push、悬浮红包都开通，赚的更多。单独对比各种广告位类型，CPM（千次展示收益）排序是：激励视频 > 插屏 > 开屏 > 信息流/Banner > 悬浮红包 > Push。尤其是激励视频的CPM能达到数百元，单次点击收益几块钱。每天看的激励视频越多，收益越高（每个用户每天播放激励视频建议不要超过15个，间隔不要太短，否则会触发反作弊）。
- 你的app权限越多，广告越精准：IMEI（也称电话权限）、位置、本机app列表读取，这些权限都有影响，足够的数据可以推送更精准的广告。
- 持续的新用户：一般情况下，App刚开通广告时，App的用户出于新鲜感，广告效果会好一些。时间变长后，老用户点击广告的概率会下降，造成收益减少。如果App有持续的新增用户，则收益可以持续拉高。好的App大多有裂变传播能力，即用户邀请好友有奖励，甚至有下线机制
- uni-ad广告联盟，App端的收益，一般CPM(千次展示收益)在几元到几百元不等，与上面提到的开通方式、匹配度、权限有关。
- 一般iOS广告的CPM高于Android。

---

### 广告收益和日活大约什么关系，1万日活的app一个月大约能赚多少钱？

我们把应用分2类来看，一类是普通App，加些广告变现；一类是围绕广告设计的App，尤其是充分运用激励视频的网赚类App。

- 先看普通App，以DCloud自己的`hello uni-app`应用为例
hello uni-app每个日活用户，对应2.5次开屏曝光，最近一周（2019年1月1日-7日）的开屏cpm日均值为40元。也就是每个日活用户，每天产生1×2.5×40/1000=0.1元的开屏广告收入。
hello uni-app还开通了信息流广告，每日活用户对应1.8次曝光，最近一周（2019年1月1日-7日）的开屏cpm日均值为24元。也就是每个日活用户，每天产生1×1.8×24/1000=0.0432元的开屏广告收入。
合计开屏和信息流，1个日活用户日广告收益为0.1432元。
如果以hello uni-app为例，日活1万的App，每月广告收益可以达到0.1432×30×10000=42960元。

注意必须开渠道SDK广告，DCloud快捷广告的收益达不到上述数字。

- 再看围绕广告设计的App，尤其是充分运用激励视频的网赚类App
如果能引导用户大量点击激励视频，比如每天点击30条激励视频，再配合开屏，基本上每日活用户每天可以赚到1.8元的广告费。
如果有1万日活用户，每天就是1.8万，一个月就是54万。

> 如果App的次留在30%以上，可以考虑买量。联系uniad@dcloud.io可以进行流量采购，成为uni-ad的广告主。

---

### 为什么看不到昨日的广告收益？

多方广告渠道每日系统汇总数据，有些渠道有延时，建议下午 4:30 后查看。如已同步完毕，系统会有提示。

---

### 我的广告有展示，但无收益是怎么回事？

请先查看广告是否有点击数据。无点击则无转化，广告主不会付费，应用也无收益。


---

### 应用广告收益低的原因？换框架开发能提高收益吗？

广告收益取决于用户质量，与开发框架无关。建议：
- 展示量低于 10 个 CPM 时单价仅供参考，建议增加日活
- 开启多家广告渠道（至少 3 家）
- 开通穿山甲广告
- 开启 bidding+瀑布流优化算法
- 开启所有权限（IMEI、地理等）
- 激励视频开启服务器回调，防止刷量
- 推广高价值用户

> 如排查后仍无提升请联系运营或邮件：uniad@dcloud.io

---

### 有广告代理说 uni-ad 分成高，接入广告会出 bug，是真的吗？

- 非法广告代理为获取收益会破解 DCloud 广告产品，DCloud 不断升级防范。
- 与三方广告 sdk 合作会导致收益下降，DCloud 优化算法保证开发者收益最大化。
- 原生或 flutter 开发成本高于 uni-app 2-3 倍，维护成本更高。
- uni-ad 也有原生广告 SDK，保障高收益。
- 非正规代理公司风险高，广告收益结算无保障。

---

### 广告的计费模式是什么样的，cpm、cpc、cpd、cpa、cps？

由于是广告平台，广告主投放什么样的模式都是有的。但App的广告，使用cpc点击计费的不多，大部分是cpm。
但即便是cpm，它的单价不是恒定的，最终是看广告的效果。
开发者切不可自行刷曝光、刷点击，刷广告会被直接停用账户，收益不会结算。
尤其是使用渠道SDK广告的应用，优量汇、穿山甲、快手的反作弊能力非常强大，由于原生sdk直接进入手机，甄别作弊能力远超过h5网页，开发者切不可拿着网页里刷流量那套玩法在app里搞。
给广告主提供实打实的广告效果，才是共赢的良好模型。

---

### uni-ad 广告有收费标准吗？多少钱一条？

- uni-ad 按照 CPM（每千次展示价格）计费。
- 广告主根据用户点击率和转化率付费，收益随大促季等波动。
- 具体价格可咨询官方商务/运营。

---

### 预估收益和提现金额不一致？
- 各广告渠道的预估收益和提现金额有一定的误差，以提现金额为准。
- 广告渠道因延迟/核减等问题进行的扣减，详细请关注站内信+邮件通知。
- 因托管第三方广告穿山甲/百度 进行的扣减。
> 由于可能存在以上差异，预估收益报表仅作为日常数据表现的参考，在正式结算开票时，请以结算单金额为准，不要使用预估收益金额提前开票，以免因金额不准确影响结算。

--- 

