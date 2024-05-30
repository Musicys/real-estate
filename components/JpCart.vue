<template>
	<view class="Cart">
	
	<view class="use">
			<span>恭喜你获得了！</span>
		<image :src="data.ym+data.fdcPrizeimg" mode=""></image>
		<view class="use_cart">
			<span class="bt">奖励：{{data.fdcPrizename}}</span>
			<span>{{data.remark}}</span>
			<button @click="setis">确定</button>
				<p>有效时间内才能领取哦</p>
		</view>
	</view>
	</view>
</template>

<script>
	export default {
		name:"JpCart",
		props:{
			data:{
				default(){
					return {
						
					}
				}
			},
			setis:{
				
			}
			
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="less" scoped>
@import "../mount/index.less";
.Cart{
	z-index: 11;
	position: absolute;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.5);
		flex-wrap: wrap;
	.center();
	

	.use{
		&>span:nth-child(1){
			position: absolute;
			top:26%;
		
			font-weight: bold;
			font-size: 1.5rem;
			color: #FCFA68;
			z-index: 12;
			  left: 50%;
			  transform: translateX(-50%);
			  /* 设置蒙版的颜色为金黄色 */
			 
		}
	
		width: 60%;
		height: 35%;
		
		border-radius: 2em;
		overflow: hidden;
		background: #FFFFFF;
	image{
		display: block;
		width: 100%;
		border-bottom: 1rpx solid  #cccccc;
		height: 50%;
	}
	.use_cart{
		.flex-top();
		width: 100%;
		height: 50%;
		
		.bt{
			display: block;
			width: 100%;
			
			text-align: center;
			margin-top: .5em;
			font-size: 1.5em;
		
			
		}
		button{
			width: 50%;
			background: #F63F18;
			color: #FFFFFF;
			border-radius: 1em;
			margin-top: .8em;
		}
	
		p{
			width: 100%;
			text-align: center;
			font-size: .6em;
			margin-bottom: .1em;
		}
	}
	}
}
</style>