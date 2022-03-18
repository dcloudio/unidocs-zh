<template>
	<!-- 分页结构 -->
	<div class="page-bar">
		<ul>
			<li v-if="cur > 1"><a class="clearfix" v-on:click="cur--, pageClick()">上一页</a></li>
			<li v-if="cur == 1"><a class="banclick clearfix">上一页</a></li>
			<template v-for="index in indexs">
				<li :key="index" :class="{ active: cur == index }">
					<a class="clearfix" v-on:click="btnClick(index)">{{ index }}</a>
				</li>
			</template>
			<li v-if="cur != all"><a class="clearfix" v-on:click="cur++, pageClick()">下一页</a></li>
			<li v-if="cur == all"><a class="banclick clearfix">下一页</a></li>
			<li>
				<span>
					共
					<i>{{ all }}</i>
					页
				</span>
			</li>
		</ul>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				all: 10, //总页数
				cur: 1, //当前页码
				// totalPage: 0, //当前条数
			};
		},
		props: {
			curPage: {
				type: Number,
				default: 1,
			},
			totalPage: {
				type: Number,
				default: 0,
			},
		},
		created() {
			this.all = this.totalPage;
			this.cur = this.curPage;
		},
		watch: {
			curPage: {
				immediate: true,
				handler(val) {
					this.cur = val;
				},
			},
			totalPage: {
				immediate: true,
				handler(val) {
					this.all = val;
				},
			},
		},
		methods: {
			//请求数据
			dataListFn: function (index) {
				this.$emit('research', index);
			},
			//分页
			btnClick: function (data) {
				if (data != this.cur) {
					this.cur = data;
					this.dataListFn(this.cur);
				}
			},
			pageClick: function () {
				this.dataListFn(this.cur);
			},
		},
		computed: {
			//分页
			indexs: function () {
				var left = 1;
				var right = this.all;
				var ar = [];
				if (this.all >= 5) {
					if (this.cur > 3 && this.cur < this.all - 2) {
						left = this.cur - 2;
						right = this.cur + 2;
					} else {
						if (this.cur <= 3) {
							left = 1;
							right = 5;
						} else {
							right = this.all;
							left = this.all - 4;
						}
					}
				}
				while (left <= right) {
					ar.push(left);
					left++;
				}
				return ar;
			},
		},
	};
</script>
<style lang="stylus" scoped>
	.page-bar
	  display flex
	  justify-content center
	  margin 10px

	ul, li
	  margin 0px
	  padding 0px
	  user-select none

	li
	  display inline-block
	  list-style none
	  overflow hidden

	.page-bar li:first-child > a
	  margin-left 0px

	.page-bar a
	  border 1px solid #ddd
	  text-decoration none
	  position relative
	  float left
	  padding 2px 10px
	  margin-left -1px
	  line-height 1.42857143
	  color #5d6062
	  cursor pointer
	  margin-right 20px
	  background-color #fff

	.page-bar a:hover
	  background-color #eee

	.page-bar a.banclick
	  cursor not-allowed

	.page-bar .active a
	  color #fff
	  cursor default
	  background-color $accentColor
	  border-color $accentColor

	.page-bar i
	  font-style normal
	  color $accentColor
	  margin 0px 4px
	  font-size 12px
</style>
