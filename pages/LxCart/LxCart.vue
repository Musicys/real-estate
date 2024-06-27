<template>
	<view class="Cart" v-if="ISindex">
		
		
		<transition name="fade">
		<view class="fxone" v-if="Isfx"  @click="setIsfx()">
			<view class="fx">
				<image src="https://act.woniutaofang.com/assets/share.4083d406.png" mode="widthFix"></image>
				<span>点击右上角将它发给指定好友或分享至朋友圈</span>
			</view>
		</view>
		<view class="wx" v-if="Iswx" @click="setIswx">
			<view>
				<image :src="my.weixinerweima" mode="widthFix"></image>
			</view>
		</view>
		 </transition>
	
		<view class="mx_Cart">
<image :src="my.useravator" class="imgs" mode="widthFix"></image>
						
			<span>{{my.llname}}</span>
			<view >
				
				<image src="/static/sjtwo.png" mode="widthFix"></image>
				{{usedata.phone}}
			</view>
		</view>
		<view class="Cart_but">
			<button @click="copyText">保存通讯录</button>
			<button @click="setIsfx">介绍给好友</button>
		</view>
		<view class="Cart_mx">
			<view class="useCart" @click="pdadh" >
				<image src="/static/sjone.png" mode="widthFix"></image>
				<view >
					<span>拨打电话</span>
						<span>	{{usedata.phone}}</span>
				</view>
			</view>
			<view class="useCart" @click="setIswx">
				<image src="/static/wx.png" mode="widthFix"></image>
				<view >
					<span>加微信</span>
						<span>{{usedata.phone}}</span>
				</view>
			</view>
		</view>
	</view>
	<view v-else>
		404
	</view>
</template>

<script>
	export default {
		data() {
			return {
				Isfx:false,
				Iswx:false,
				usedata:{},
				ISindex:true,
				my:{
					useravator:'',
					weixinerweima:'',
					llname:'默认'
				}
			}
		},
		methods: {
			 copyText() {
			      const textToCopy =  this.usedata.phone;
			
			      if (navigator.clipboard && typeof navigator.clipboard.writeText === 'function') {
			      uni.setClipboardData({
			             data: textToCopy ,
			             success() {
			               uni.showToast({
			                 title: '复制成功',
			                 icon: 'success'
			               })
			             },
			             fail() {
			               uni.showToast({
			                 title: '复制失败',
			                 icon: 'none'
			               })
			             }
			           })
			      } else {
			       uni.showToast({
			       	title: '浏览器不支持',
			       	duration: 2000,
					icon:false,
			       });
			      }
			    },
				setIsfx(){
					
					
					if (navigator.share) {
					 uni.share({
					   provider: 'weixin',
					   type: 0, // 或者其他适当的分享类型，例如：1（图文）、2（音乐）、3（视频）
					   href: 'http://example.com', // 分享的链接地址
					   title: '分享标题', // 分享的标题（可选）
					   summary: '分享摘要', // 分享的摘要（可选）
					   imageUrl: 'http://example.com/image.png', // 分享的图片地址（可选）
					   success: function (res) {
					     console.log('分享成功');
					     console.log(res);
					     // 可以在这里处理分享成功的逻辑
					   },
					   fail: function (err) {
					     console.error('分享失败');
					     console.error(err);
					     // 可以在这里处理分享失败的逻辑
					   }
					 });
					} else {
					  // 浏览器不支持 share API
					  this.Isfx=!this.Isfx
					  // 需要通过其他方式实现分享功能
					}
					
					
				},
				setIswx(){
					this.Iswx=!this.Iswx
				},
				pdadh(){
				let phone= this.usedata.phone
					uni.showActionSheet({
						itemList: ['呼叫', '复制号码'],
						success:res=>{
						
							if(res.tapIndex + 1===1)
							{
								
								uni.makePhoneCall({
								  phoneNumber:phone,
								  success: function () {
								    console.log('拨打电话成功');
								  },
								  fail: function () {
								    console.log('拨打电话失败');
								  }
								});
							}
							else if(res.tapIndex + 1===2)
							{
								this.copyText()
								
							}
							else
							{
								addressBook.addContact({
								  contact: {
								    displayName: 'John',
								    phoneNumbers: [{ value: phone }]
								  },
								  success: function() {
								    uni.showToast({
								    	title: '添加成功',
								    	duration: 1000
								    });
								  }
								});
							}
						},
						fail: function (res) {
							console.log(res.errMsg);
						}
					});
				},
		setdata(){
				if(getApp().urlnber){
					this.$htps({url:`/fdc/accountmanage/am/${getApp().urlnber}`}).then(res=>{
						this.usedata=res
						if(res.weixinerweima)
						{
							this.my.weixinerweima=this.usedata.ym+this.usedata.weixinerweima
						}
						if(res.useravator)
						{
							this.my.useravator=this.usedata.ym+this.usedata.useravator
							
						}
						console.log('数据',res.llname);
						if(res.llname)
						{
							this.my.llname=this.usedata.llname
						}
						console.log(this.my);
					})
				}
				else{
					return 	this.ISindex=false
				}
				}
			// 
			
		},
		
		created(){
			
		},
		onShow: function() {
				
				 this.setdata()
			
		},
		onShow: function() {
			uni.setNavigationBarTitle({
				title: '抽奖信息'
			});
		
		},
	}
</script>

<style lang="less" scoped>
@import '../../mount/index.less';
.Cart{
		.flex-top-start();
		background: #F2F2F2;
		width: 100vw;
		height: 100vh;
		.fxone{
			position: fixed;
			z-index: 1;
			background-color: rgba(0, 0, 0, 0.5);
			width: 100vw;
			height: 100vh;
			
			.fx{
				width: 60%;
				height: 25vh;
				
				position: absolute;
				top:0;
				right: 0;
				image{
					width: 6em;
					position: absolute;
					right: 0;
					top: 0;
					
				}
				span{
					position: absolute;
					left: 0;
					bottom: 0;
					width: 8em;
					text-align: center;
					color: #FFFFFF;
					font-weight: bold;
					
				}
				
			}
		}
		.mx_Cart{
		
		
			.flex-top();
			background-image: url('https://act.woniutaofang.com/assets/bg.cae281fd.png');
			background-size: 100% 100%;
			width: 100%;
			height: 25em;
			.imgs{
				display: block;
				margin-top: 1em;
				border-radius: 50%;
				
				width:6em;
			}
			span{
				.center();
				text-align: center;
				display: block;
				font-size: 1.4em;
				font-weight: bold;
				color: #ffffff;
			}
			view{
				margin-left: 1em;
				width: 100%;
				margin-bottom: 1em;
				.flex-left();
				justify-content: start;
				
				font-size: 1.2em;
				color: #ffffff;
				image{
					width: .8em;
				}
			}
			
		}
	.Cart_but{
		width: 100%;
		.flex-left();
		margin-top: .2em;
		button{
			flex:1;
			margin-right: .5em;
			margin-left: .5em;
		}
		&>button:nth-child(1){
		border: .1em solid #EE0A24;
		color: #EE0A24;
		font-weight: bold;
		}
		&>button:nth-child(2){
				border: .1em solid #EE0A24;
				background: #EE0A24;
				font-weight: bold;
				color: #ffffff;
		}
	}	
	.Cart_mx{
		width: 100%;
		margin-top: .5em;
		height: 100%;
		display: flex;
		justify-content: start;
		flex-wrap: wrap;
		
		
	&>view{
		margin-top: .5em;
		margin-left: .5em;
		width: 8em;
		height: 3em;
		
		background: #FFFFFF;
		box-shadow:2rpx 2rpx 3rpx 3rpx rgba(0, 0, 0, 0.3);
		padding: .5em;
		border-radius: .2em;
		
		.flex-left();
		justify-content: start;
		
		image{
			width: 1.5em;
		}
		view{
			
		
			.flex-top-start();
			margin-left:.8em;
			span{
				width: 100%;
				display: block;
			}
		&>span:nth-child(1){
			
		}
		&>span:nth-child(2){
			color: #666666;
			font-size: .8em;
		}
		}
	}
		
	}
	.wx{
		position: fixed;
		top: 0;
		width: 100%;
		height: 100%;
		z-index: 3;
		background-color: rgba(0, 0, 0, 0.5);
		.center();
		view{
			width: 60%;
			image{
				width: 100%;
			}
		}
	}
}
</style>
