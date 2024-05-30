<template>
	<scroll-view class="usemgs" :scroll-y="true">

	<view class="Huogui">

	<image :src="url" mode="widthFix" class="use"></image>
		<image src="https://img.woniutaofang.com/tjyun/c80aaeba665c4a78bf26a8dbe3ff40c3.png" mode="widthFix" class="gb" @click="xs"></image>		
	</view>
	</scroll-view>
		
		

</template>

<script>
	import Fhcj from "./Fhcj.vue"
	import Xup from "./Xup.vue"
	export default {
			name:"Imgs",
			
		props:{
			url:{
				type:String,
				default(){
					return '123'
				}
			},
			xs:{
				type: Function,
				default: null
			}
		},
	components:{
		Fhcj,
		Xup
	},
		data() {
			return {
				
			};
		},
		methods:{
			
		},
		mounted(){
			console.log(this.url,'图片');
		}
	}
</script>

<style lang="less" scoped>
@import '../mount/index.less';
	.usemgs{
		
		position: fixed;
		top:0;
		width: 100vw;
		z-index: 10;
		
		height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
		view{
			.xs{
				z-index: 12;
			}
			position: relative;
			.use{
						width: 100%;
						
						z-index: 10;
					}
					.gb{
						display: block;
						width: 2em;
						z-index: 11;
						
					
						position: absolute;
						bottom:  0;
						left: 50%;
						transform: translate(-50%, -50%);

					}
		
		}
		
	}

</style>