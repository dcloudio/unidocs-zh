`uni-ui`为了避免视觉传达差异，使用一套特定的调色板来规定颜色，为你所搭建的产品提供一致的外观视觉感受。
`uni-ui` To avoid differences in visual communication, use a specific set of color palettes to specify colors to provide a consistent look and feel for the products you build.

### 主色
### Main color
`uni-ui`的主色使用了令人安静并放松的蓝色。
The main color of `uni-ui` is a calming and relaxing blue.


<div class="color-main">
	<div class="color-main-top" style="background-color:#2979ff;">
		<p class="color-main-text">Primary Color</p>
		<p class="color-main-text">#2979ff</p>
	</div>
	<div class="color-main-box">
		<div class="color-main-top" style="background-color:#94bcff;">
			<p class="color-main-text">#94bcff</p>
		</div>
		<div class="color-main-top" style="background-color:#d4e4ff;">
			<p class="color-main-text">#d4e4ff</p>
		</div>
	</div>
</div>

我们通过uni-scss提供了对应的颜色变量名
We provide the corresponding color variable name through uni-scss
```css
$uni-primary: #2979ff;
$uni-primary-disable:#94bcff;
$uni-primary-light: #d4e4ff;
```
### 辅助色
### Secondary color

除了主色外的场景色，需要在不同的场景中使用,不同颜色代表不同的场景，如：绿色代表成功、红色代表错误、黄色代表警告。
Scene colors other than the main color need to be used in different scenes, and different colors represent different scenes, such as: green for success, red for errors, and yellow for warnings.

<div class="color-content">
	<div class="color-main">
		<div class="color-main-top" style="background-color:#18bc37">
			<p class="color-main-text">Success Color</p>
			<p class="color-main-text">#18bc37</p>
		</div>
		<div class="color-main-box">
			<div class="color-main-top" style="background-color:#8cde9b;">
				<p class="color-main-text">#8cde9b</p>
			</div>
			<div class="color-main-top" style="background-color:#d1f2d7;">
				<p class="color-main-text">#d1f2d7</p>
			</div>
		</div>
	</div>
	<div class="color-main margin">
		<div class="color-main-top" style="background-color:#f3a73f;">
			<p class="color-main-text">Warning Color</p>
			<p class="color-main-text">#f3a73f</p>
		</div>
		<div class="color-main-box">
			<div class="color-main-top" style="background-color:#f9d39f;">
				<p class="color-main-text">#f9d39f</p>
			</div>
			<div class="color-main-top" style="background-color:#fdedd9;">
				<p class="color-main-text">#fdedd9</p>
			</div>
		</div>
	</div>
	<div class="color-main margin">
		<div class="color-main-top" style="background-color:#e43d33;">
			<p class="color-main-text">Error Color</p>
			<p class="color-main-text">#e43d33</p>
		</div>
		<div class="color-main-box">
			<div class="color-main-top" style="background-color:#f29e99;">
				<p class="color-main-text">#f29e99</p>
			</div>
			<div class="color-main-top" style="background-color:#fad8d6;">
				<p class="color-main-text">#fad8d6</p>
			</div>
		</div>
	</div>
	<div class="color-main margin">
		<div class="color-main-top" style="background-color:#8f939c;">
			<p class="color-main-text">Info Color</p>
			<p class="color-main-text">#8f939c</p>
		</div>
		<div class="color-main-box">
			<div class="color-main-top" style="background-color:#c7c9ce;">
				<p class="color-main-text">#c7c9ce</p>
			</div>
			<div class="color-main-top" style="background-color:#e9e9eb;">
				<p class="color-main-text">#e9e9eb</p>
			</div>
		</div>
	</div>
</div>

我们通过uni-scss提供了对应的颜色变量名
We provide the corresponding color variable name through uni-scss
```css
$uni-success: #18bc37;
$uni-success-disable: #8cde9b;
$uni-success-light: #d1f2d7;

$uni-warning: #f3a73f;
$uni-warning-disable: #f9d39f;
$uni-warning-light: #fdedd9;

$uni-error: #e43d33;
$uni-error-disable: #f29e99;
$uni-error-light: #fad8d6;

$uni-info: #8f939c;
$uni-info-disable: #c7c9ce;
$uni-info-light: #e9e9eb;
```

### 中性色
### Neutral colors
中性色用于文本、背景和边框颜色。通过运用不同的中性色，来表现层次结构。
Neutral colors are used for text, background, and border colors. The hierarchy is expressed by using different neutral colors.

<div class="color-content">
	<div class="color-main">
		<div class="color-main-top" style="background-color:#3a3a3a">
			<p class="color-main-text">Main Color</p>
			<p class="color-main-text">#3a3a3a</p>
		</div>
	</div>
	<div class="color-main margin">
		<div class="color-main-top" style="background-color:#6a6a6a;">
			<p class="color-main-text">Base Color</p>
			<p class="color-main-text">#6a6a6a</p>
		</div>
	</div>
	<div class="color-main margin">
		<div class="color-main-top" style="background-color:#909399;">
			<p class="color-main-text">Secondary Color</p>
			<p class="color-main-text">#909399</p>
		</div>
	</div>
	<div class="color-main margin">
		<div class="color-main-top" style="background-color:#c7c7c7;">
			<p class="color-main-text">Extra Color</p>
			<p class="color-main-text">#c7c7c7</p>
		</div>
	</div>
</div>

我们通过uni-scss提供了对应的颜色变量名
We provide the corresponding color variable name through uni-scss
```css
$uni-main-color: #3a3a3a; 			// 主要文字
$uni-base-color: #6a6a6a;			// 常规文字
$uni-secondary-color: #909399;		// 次要文字
$uni-extra-color: #c7c7c7;			// 辅助说明
```

### 边框颜色
### border color

主要用于边框、分隔线颜色
Mainly used for border, divider color

<div class="color-content">
	<div class="color-main">
		<div class="color-main-top" style="background-color:#f0f0f0">
			<p class="color-main-text">Border-1 olor</p>
			<p class="color-main-text">#f0f0f0</p>
		</div>
	</div>
	<div class="color-main margin">
		<div class="color-main-top" style="background-color:#ededed;">
			<p class="color-main-text">Border-2 Color</p>
			<p class="color-main-text">#ededed</p>
		</div>
	</div>
	<div class="color-main margin">
		<div class="color-main-top" style="background-color:#dcdcdc;"> 
			<p class="color-main-text">Border-3 Color</p>
			<p class="color-main-text">#dcdcdc</p>
		</div>
	</div>
	<div class="color-main margin">
		<div class="color-main-top" style="background-color:#b9b9b9;">
			<p class="color-main-text">Border-4 Color</p>
			<p class="color-main-text">#b9b9b9</p>
		</div>
	</div>
</div>

我们通过uni-scss提供了对应的颜色变量名
We provide the corresponding color variable name through uni-scss

```css
$uni-border-1: #f0f0f0;
$uni-border-2: #ededed;
$uni-border-3: #dcdcdc;
$uni-border-4: #b9b9b9;
```

### 常规色
### Regular color
通用颜色，如黑色、白色、常用背景色等
Common colors, such as black, white, common background colors, etc.

<div class="color-content">
	<div class="color-main" style="border:1px #eee solid;">
		<div class="color-main-top" style="background-color:#ffffff;">
			<p class="color-main-text black">White Color</p>
			<p class="color-main-text black">#ffffff</p>
		</div>
	</div>
	<div class="color-main margin">
		<div class="color-main-top" style="background-color:#000000;">
			<p class="color-main-text">Black Color</p>
			<p class="color-main-text">#000000</p>
		</div>
	</div>
	<div class="color-main margin transparent">
		<div class="color-main-top" style="background-color:transparent;"> 
			<p class="color-main-text black">Transparent Color</p>
			<p class="color-main-text black">transparent</p>
		</div>
	</div>
	<div class="color-main margin">
		<div class="color-main-top" style="background-color:#f7f7f7;">
			<p class="color-main-text black">Background Color</p>
			<p class="color-main-text black">#f7f7f7</p>
		</div>
	</div>
</div>

我们通过uni-scss提供了对应的颜色变量名
We provide the corresponding color variable name through uni-scss

```css
// 常规色
// regular color
$uni-black: #000000;
$uni-white: #ffffff;
$uni-transparent: rgba($color: #000000, $alpha: 0);
// 背景色
// background color
$uni-bg-color: #f7f7f7;
```

### 阴影
### Shadow

<div class="color-content">
	<div class="color-main shadow" style="border:1px #eee solid;box-shadow: 0 0 5px hsl(0deg 0% 85% / 50%);">
		<div class="color-main-top" style="background-color:#ffffff;">
			<p class="color-main-text black">Shadow-sm Color</p>
		</div>
	</div>
	<div class="color-main margin shadow" style="border:1px #eee solid;box-shadow: 0 1px 8px 1px hsl(0deg 0% 65% / 20%);">
		<div class="color-main-top" style="background-color:#ffffff;">
			<p class="color-main-text black">Shadow-base Color</p>
		</div>
	</div>
	<div class="color-main margin shadow" style="border:1px #eee solid;box-shadow: 0 1px 10px 2px rgb(165 164 164 / 50%);">
		<div class="color-main-top" style="background-color:#ffffff;">
			<p class="color-main-text black">Shadow-lg Color</p>
		</div>
	</div>
</div>

我们通过uni-scss提供了对应的颜色变量名
We provide the corresponding color variable name through uni-scss

```css
$uni-shadow-sm:0 0 5px rgba($color: #d8d8d8, $alpha: 0.5);
$uni-shadow-base:0 1px 8px 1px rgba($color: #a5a5a5, $alpha: 0.2);
$uni-shadow-lg:0px 1px 10px 2px rgba($color: #a5a4a4, $alpha: 0.5);
```

<style>
.color-content {
	display:flex;
}
.color-main {
	width:200px;
	border-radius:5px;
	overflow:hidden;
}
.color-main-top {
	width:100%;
	padding:10px 0;
	text-align:center;
}
p.color-main-text {
	margin:0;
	color:#fff;
	font-size:14px;
	line-height:1.5;
}

p.color-main-text.black {
	color:#333;
}
.color-main-box {
	display:flex;
}
.margin {
	margin-left:10px;
}

.transparent {
	border: 1px solid #fcc3c3;
	color: #303133;
	background: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' version='1.1' preserveAspectRatio='none' viewBox='0 0 100 100'><path d='M0 98 L100 0 L100 1 L1 98' fill='%23FCC3C3' /></svg>");
	background-repeat: no-repeat;
	background-position: 50%;
	background-size: 100% 100%,auto;
}
.shadow {
	display:flex;
	align-items: center;
	height:55px;
}
</style>