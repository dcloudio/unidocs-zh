<template>
	<div class="page-runtime">
		<div class="page-snippet">
			<slot></slot>
		</div>
		<div class="code-content">
			<iframe class="code-iframe" :src="src" frameborder="0"></iframe>
		</div>
	</div>
</template>

<script>
export default {
	props:{
		src:{
			type:String,
			default:''
		}
	},
	created(){
		console.log('this.src', this.src);
	}
}
</script>

<style>
.page-runtime {
	display: flex;
	height: 667px;
}
.page-snippet {
	width: 100%;
	overflow: hidden;

}
.page-snippet div[class*="language-"]{
	width: 100%;
	height: 100%;
	border-radius: 0;
	overflow: hidden;

}
.page-snippet pre[class*="language-"]{
	margin: 0;
	padding: 10px;
	width: 100%;
	height: 100%;
	overflow: scroll;
	box-sizing: border-box;
}
.code-iframe {
	flex-shrink: 0;
	width: 375px;
	height: 667px;
}
</style>
