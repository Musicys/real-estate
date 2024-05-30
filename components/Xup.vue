<template>
	<view class="ysone" >
		<image src="/static/xsxs.jpg" mode="widthFix"></image>
	</view>
</template>

<script>
	export default {
		name:"Xup",
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
.ysone{
	position: fixed;
	z-index: 12;
	width: 4em;
	bottom: 45vh;
	right: 0;
	height: 4em;

	
	image{
		width: 100%;
		border-radius: 1em;
	}
	
}
</style>