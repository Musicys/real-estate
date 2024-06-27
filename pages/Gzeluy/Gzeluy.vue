<template>
	
		<view class="Huogui" >
			<image :src="usedata.backurl" ></image>	
			<view class="use">
				<view class="top">
					<view :class="Ischou?'ys':'ys2'" @click="Ischoutrue">
						未领奖
					</view>
					<view :class="Ischou?'ys2':'ys'" @click="Ischoufalse">
						已领奖
					
					</view>
				</view>
				<view class="th">
				<view >
					奖品名称
				</view>
				<view >
					抽取时间
				</view>
				<view >
					操作
				</view>
			
				</view>
				<view class="tr" v-for="(i,k) in jlarr" :key="k">
					<view >
						{{i.fdcPrizeinfo}}
					</view>
					<view >
						{{i.createTime}}
					</view>
					<view >
						抽奖
					</view>
				</view>
			
			</view>
	
			<image src="https://img.woniutaofang.com/tjyun/c80aaeba665c4a78bf26a8dbe3ff40c3.png" mode="widthFix" class="useimg" @click="goback()"></image>
		</view>
		

	

</template>

<script>
	export default {
		name:"Huoguih",
		data() {
			return {
				Ischou:true,
				usedata:{
					backurl:''
				},
				jlarr:[],
				
			};
		},
		methods:{
			goback(){
				uni.navigateTo({
				url:`/pages/index/index?user=${getApp().urlnber}`
				})
			},
			Ischoutrue(){
				this.Ischou=true
				this.setjlarr()
			},
			Ischoufalse(){
				this.Ischou=false
				this.jlarr=[]
			},
			setdata(){
				if(getApp().urlnber){
					this.$htps({url:`/fdc/accountmanage/am/${getApp().urlnber}`}).then(res=>{
						if(res.priceimg)
						{
							this.usedata.backurl=res.ym+res.priceimg
						}
						
					
						
					})
				}
				else{
					return console.log('123');
				}
				},
			setjlarr(){
			this.$htps({
				url:'/fdc/accountmanage/selectprize/'+JSON.parse(uni.getStorageSync('user')).fdcPhone
			}).then(res=>{
				console.log(JSON.parse(uni.getStorageSync('user')).fdcPhone);
				console.log('用户数据',res);
				this.jlarr=res.rows
			})
			}
			
		},
		created(){
		
			this.setdata()
			this.setjlarr()
		},
		onShow: function() {
			uni.setNavigationBarTitle({
				title: '我的奖品'
			});
		
		},
		
	}
</script>

<style lang="less">
@import '../../mount/index.less';
.Huogui{
	position: fixed;
	width: 100vw;
	height: 100vh;
	
	z-index: 6;
	&>image:nth-child(1){
		top: 0;
		position: absolute;
		width: 100%;
		transform: translateX(-1%);
		height: 100%;
		z-index: 7;
	}
	.useimg{
	
		position: absolute;
		z-index: 8;
		width: 2em;
		
		top: 35%;
		right:  0%;
		 transform: translate(-50%, -50%);
		
	}

	.use{
	
	.flex-top-start();
		
	overflow-x: auto;
	display: block;
	width: 80%;
	background: #BEDCEF;
	color: #FFFFFf;
	position: absolute;
	z-index: 8;
	height: 30vh;
	top: 50%;
	left: 50%;
	 transform: translate(-50%, -50%);
	
	
		view{
			.flex-left();
			
		}
		.top{
			
			view{
				padding:  .4em 0em;
				border-bottom: 1rpx solid #CCCCCC;
				flex: 1;
				.center();
			}
		}
		.th{
			color: #096F9A;
			font-size: .2em;
			view{
				flex: 1;
				.center();
			}
		}
		.tr{
			border-bottom: 1rpx solid #CCCCCC;
			font-size: .2em;
			color: #096F9A;
			view{
				flex: 1;
				text-align: center;
				.center();
			}
		}
		
		
		}
}
.ys{
	background: #096F9A;
	color: #FFFFFf;
}
.ys2{
	color: #096F9A;
}

</style>