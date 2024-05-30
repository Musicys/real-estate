<template>
	<view class="ysone">
		<image src="/static/fhcj.jpg" mode="widthFix" @click="goindex()"></image>
		
	</view>
</template>

<script>
	export default {
		props:{
			IsIndex:{
				type:Function,
				default:null
			}
		},
		name:"Xup",
		data() {
			return {
				
			};
		},
		methods:{
			goindex(){
				this.IsIndex()
				console.log('123');
			}
		}
	}
</script>

<style lang="less" scoped>
.ysone{
	position: fixed;
	z-index: 15;
	width: 4em;
	height: 4em;
	bottom: 60vh;

	right: 0;
	
	image{
		width: 100%;
		border-radius: 1em;
	}
	
}
</style>