<template>
<view class="my-view" :style="Isxla?'overflow: hidden;':''"  @scroll="loadMore" v-if="Isindex">

	 <transition name="fade">
	   <Sru v-if="Isxla" :Issur='Issur' ></Sru>
	   	<Imgs :url="imgurl" :xs='xs' v-if="Isimg"></Imgs>
		<JpCart :data="jl" :setis='setIsjl' v-if="Isjl"></JpCart>
<!-- 		<view class="Tc" v-if="isDlu">
			<view class="TC_Cp">
				<view class="bt">
					标题
				</view>
				<text>需获取用户信息</text>
				<view class="dl" @click="godlu">一键获取</view>
			</view>
		</view> -->
	  </transition>

<!-- 三图片 -->

<!-- <Xup @click.native='goxcx'></Xup> -->

 <transition name="fade">

<Fhcj :IsIndex="xs" v-if="Isimg"></Fhcj>


 </transition>
<!-- 活动规则 -->

<view class="xuanx">
	<image src="https://img.woniutaofang.com/tjyun/6a97be02b1d244ce9f964eab1aaa0655.png" mode="widthFix" @click="goguih()"></image>
	<image src="https://img.woniutaofang.com/tjyun/ed3e38b9822b45b5bc0709216b251802.png" mode="widthFix" @click="goguiz()"></image>
</view>
<!-- 聊一聊 -->
<!-- 
<view class="liaooneliao" @click="goIQQ">
	<image :src="my.useravator" mode="widthFix"></image>
	<view>
		聊一聊
	</view>
</view> -->



<!--音乐  -->
<view class="music" @click="addAnimation" :class="Israle?'animate':''">
	
</view>
<!-- 一键播号 -->

<view class="bohao" @click="pdadh()">
	<image src="https://img.woniutaofang.com/tjyun/620a44af17f541ba98b928a732b2788e.png" mode="widthFix"></image>
</view>
<!-- 尾部 -->

<view class="butom">
	<image src="https://img.woniutaofang.com/tjyun/ac85f837ed1e42d59dee64ece4f53049.png" mode="widthFix" @click="Issur"></image>
	
	<view class="but1" @click="goditu">
		一键导航
	</view>
	<view class="but2" @click="goxcx">
		在线看房
	</view>
</view>

		<view class="top" :style=" `background-image:url('${usedata.ym+usedata.indeximg}');background-size: 100% 100% ;`">
		
		<view class="top_bt">
		<!-- 	<image src="https://img.woniutaofang.com/tjyun/608d6749396942ea9b7ac034e85a773a.png" mode="heightFix"></image>
			<image src="https://img.woniutaofang.com/tjyun/64faff2daf954514963cc12c25648e37.png" mode="heightFix"></image> -->
		</view>
	
	<view class="top_cyrs">
			<span>参与人数：{{usedata.visistpeople}}</span>
			<span>围观人数：{{usedata.lookpeople}}</span>
		</view>
		
		<view class="top_dtt">
			<image :src="my.gifimg" mode="widthFix"></image>
			<image :src="my.activitytimeimg" mode="widthFix"></image>
			
		</view>
		
		<view class="jdan" @click="jdancj()">
			<image src="https://img.woniutaofang.com/tjyun/b8f1a1b46aff411a9aa05a678795d4db.png" mode="widthFix"  :class="IsCJ?'calse':''"></image>
			<image src="https://img.woniutaofang.com/tjyun/ec1ed1beb82941bb997fedeea641924b.png" mode="widthFix" :class="Iskj?'clasetwo':''"></image>
			<image src="https://img.woniutaofang.com/tjyun/c3f8adb5f7e9408db8b5ec475318f410.png" mode="widthFix"></image>
		
		</view>
	
		
		<view class="chouj">
				<image src="https://img.woniutaofang.com/tjyun/71478aefb77f47d69cf27a41bafe57d4.png" mode="widthFix" @click="Issur"></image>
				<span>您还有{{nbercishu}}次抽奖机会</span>
		</view>
		
		<view class="top_but">
			<image src="https://img.woniutaofang.com/tjyun/17e1ccd366dc46dbabd74de94e2f6fae.png" mode="widthFix" @click="xs(1)"></image>
			<image src="https://img.woniutaofang.com/tjyun/970dc38c4ec84a2197b08929cceb763d.png" mode="widthFix" @click="xs(2)"></image>
			<image src="https://img.woniutaofang.com/tjyun/78b1e0c3999b44df83de7cd5785972e5.png" mode="widthFix" @click="xs(3)"></image>
		</view>
		
		<view class="vide0">
			<video :src="my.voidurl" :autoplay="true" :page-gesture="false" :enable-progress-gesture='false'  @ended="videoEnded"  :show-progress="false "></video>
		</view>
		
		<swiper :indicator-dots="true" :autoplay="true" :interval="3000" :duration="800" class="top_swiper" indicator-active-color="#1989FA" :circular='true' >
			<swiper-item v-for="(i,k) in swper" :key="k">
				<view class="swiper-item" >
					<image :src="i" ></image>
					
				</view>
			</swiper-item>
		
		</swiper>
		
	
		
		
		
		
		
		
		
		
		</view>
		
		<view class="but">
			<image :src="my.jlurl" ></image>
		</view>
	
		
</view>
<view v-else>
	404
</view>
</template>

<script>
	import Sru from "../../components/Sru.vue"
	// 线上售楼处
	import Xup from "../../components/Xup.vue"
	
	import Imgs from "../../components/Imgs.vue"
	
	import Fhcj from "../../components/Fhcj.vue"
	
	import JpCart from "../../components/JpCart.vue"
	export default {
		data() {
			return {
				Israle:false,//是否旋转
				Isxla:false,//是否禁用滚动//是否显示输入框组件
				Isimg:false,//控制是否显示三途
				imgurl:'',
				Isindex:true,//是否显示首页
				usedata:{},//使用数据
				swper:[],
				my:{
					voidurl:'',
					mp3url:'',
					jlurl:'',
					gifimg:'',
					activitytimeimg:'',
					useravator:''
				},
				music:'',//音乐
				usetime:{
					sateatime:'',
					endtime:''
				},
				cjarr:[],
				IsCJ:false,
				Iskj:false,
				jl:{
					createBy: "",
					createTime: "2023-09-14 20:27:04",
					fdcAccount: "123",
					fdcEndtime: "2023-09-29",
					fdcId: 4,
					fdcPrizeimg: "/profile/upload/2023/09/27/电脑_20230927130156A001.png",
					fdcPrizename: "电脑",
					fdcPrizenumber: 312,
					fdcPrizeprobability: 20,
					fdcStarttime: "2023-09-14",
					remark: "123备注",
					updateBy: "",
					updateTime: "2023-09-27 16:50:30",
					ym:'http://djlmy.top:8080'
				},
				Isjl:false,
				nbercishu:3,//抽奖次数
				isDlu:true,
				ISforcj:false//判断是否在抽奖
				
			}
		},
		components:{
			Xup,
			Sru,
			Imgs,
			Fhcj,
			JpCart
			
		},
		mounted(){
		this.share();
			
			this.SIwxseach()
		},
		onLoad() {
	
		
		
		},
		methods: {
			
			// 防抖
			videoEnded(){
				
						
				const currentURL = window.location.href;
				
				// 创建 URLSearchParams 对象
				const params = new URLSearchParams(new URL(currentURL).search);
				
				// 获取参数值
				const paramValue = params.get('user');
			
				this.$htps({
					url:"/fdc/accountmanage/sharecount",
					method:"POST",
					data:{
						"fdcPhone":JSON.parse(uni.getStorageSync('user')).fdcPhone,
						"fdcAccount":paramValue
					}
				}).then(res=>{

					if(res==1)
					{
						uni.showToast({
						   	title:"次数+1",
							icon:"none"
						   })
						 
					}
					else{
						uni.showToast({
						   	title:"添加次数上限",
							icon:"none"
						   })
					}
					  this.setdata()
				})
			},
			share(){
				
			
					
			
			},
			// 判断是否是微信浏览器
			SIwxseach(){
				let status = navigator.userAgent.toLowerCase();
				        if (status.match(/MicroMessenger/i) == "micromessenger") {
				           this.isDlu=true
						this.getpho()
						
					
						
						
				        }else{
				               this.isDlu=false
				        }
			},
			getpho(){
				console.log('获得电脑号码');
				const launchOptions = uni.getLaunchOptionsSync();
				const query = launchOptions.query;
				
				if (query && query.code) {
							  console.log('请求数据',query);
					this.isDlu=false
				  const code = query.code;
				  console.log(code);
				 
								this.$htps({
									url:'/fdc/accountmanage/getAccessKey/031ENHll2Sxekc40Igml2tyftO1ENHl0?code='+code
								}).then(res=>{
									console.log('请求的code数据',res);
									return 
								})
							
				  // 继续处理code参数
				} else {
				  // URL中没有code参数的逻辑处理
							console.log("没有");
							 this.godlu();
				}
			}
			,
			
			godlu(){
				// console.log('跳转',window.location.href);
					uni.setStorageSync('code', '200');
					
				
					
			},
			setphone(){
				if(!uni.getStorageSync('user')){
					this.isDlu=true
					console.log('执行');
				}
				
			},
			setnbercishu(){
				this.$htps({
					url:'/fdc/accountmanage/judgecount',
					method:'POST',
					data:{
						  "fdcAccount":getApp().urlnber,
						  "fdcPhone":JSON.parse(uni.getStorageSync('user')).fdcPhone
					}
				}).then(res=>{
					console.log('1111',{
						  "fdcAccount":getApp().urlnber,
						  "fdcPhone":JSON.parse(uni.getStorageSync('user')).fdcPhone
					});
					if(typeof res=='number')
					{
						if(res<=0)
						{
								this.nbercishu=0
						}
						else{
							this.nbercishu=res
						}
					}
					else{
						return this.nbercishu=3
					}
					
					
				
			
				})

		
			},
			setIsjl(){
				this.Isjl=!this.Isjl
			},
			settime(time1,time2){
				var timestamp1 = new Date(time1);
				var timestamp2 = new Date(time2);
				var times=new Date()
			
				if(times>=timestamp1&&times<=timestamp2)
				{
					
				
					return true
				}
				return false
			},//比较当前时间大小函数
			random(){//抽奖函数
				
			
				let arr=this.cjarr.map(i=>{
					if(i.fdcPrizenumber==0)
					{
						return 0
					}
					return i.fdcPrizeprobability
				})
				let nbers=0
				arr.forEach(i=>{
					nbers+=i
				})
		let nuber=Math.floor(Math.random() * nbers)
				
				let a=0
				
					for(let i in arr)
					{
						
						if( nuber>=a&& nuber<=a+arr[i])
						{
							return i
						}
						a+=arr[i]
					
						
					}
				
				 
			},
			
			jdancj(){
				
				
				if(this.ISforcj)
				{
					return 
				}
				
		
				if(!this.nbercishu)
				{
					return uni.showToast({
					  title: '已没抽奖次数了哦',
					  icon: 'none'
					})
				}
				if(this.settime(this.usetime.sateatime ,this.usetime.endtime))
				{
					
					if(uni.getStorageSync('user'))
					{
						
						
						
						this.ISforcj=true
					
						this.IsCJ=true
						setTimeout(()=>{
							this.IsCJ=false
							this.Iskj=true
							setTimeout(()=>{
									this.Iskj=false
							this.charchoujiang(this.random())	// 抽奖
							// 次数减少
							this.ISforcj=false
							},2000)
						},800)
					
						
						
						
					}
					else{
						uni.showToast({
						  title: '请先登录',
						icon: 'none'
						})
						return this.Issur()
					}
				
				}
				else{
					uni.showToast({
					  title: '活动已结束哦',
					  icon: 'none'
					})
				}
			},
			charchoujiang(index){
				//fdcPrizeprobability 概率
				//fdcPrizename   奖品名
				//fdcPrizeimg  奖品图片 
				
				let jp=0;
				
				
				this.cjarr.forEach(i=>{
						jp+=i.fdcPrizenumber
					})
			if(jp<=0)
			{
				return uni.showToast({
					title: '奖品已经抽完了',
					icon: 'none'
				})
			}
			
			if(this.cjarr[index].fdcPrizenumber==0)
			{
				return this.charchoujiang(this.random())	
			}
			
				if(index>=this.cjarr.length)
				{
					return uni.showToast({
					  title: '错误',
					  icon: 'none'
					})
				}
			
				console.log();
				let user=JSON.parse(uni.getStorageSync('user'))
				this.$htps({
					url:'/fdc/accountmanage/insertjiangxinxinxi',
					method:'POST',
					data:{
						"fdcAccount":getApp().urlnber,
						"fdcName":user.fdcName,
						"fdcPhone":user.fdcPhone,
						"fdcPrizeinfo":this.cjarr[index].fdcPrizename,
						"fdcPrizeimg":this.cjarr[index].fdcPrizeimg
					}
				}).then(res=>{
					console.log('是否抽奖成功',res);
					console.log({
						"fdcAccount":getApp().urlnber,
						"fdcName":user.fdcName,
						"fdcPhone":user.fdcPhone,
						"fdcPrizeinfo":this.cjarr[index].fdcPrizename,
						"fdcPrizeimg":this.cjarr[index].fdcPrizeimg
					});
					if(res===1)
					{
						
						// 展示抽奖图片
						// uni.showToast({
						//   title: '抽奖成功',
						//   icon: 'none'
						// })
						this.jl=this.cjarr[index]
						this.jl.ym=this.usedata.ym
						this.setIsjl()
						this.setnbercishu()//抽奖更新次数
						this.sethjdata()//更新抽奖次数
					}
					else{
					this.jl=this.cjarr[index]
					this.jl.ym=this.usedata.ym
					this.setIsjl()
					this.setnbercishu()//抽奖更新次数
					this.sethjdata()//更新抽奖次数
					}
				})
				
			},
			goxcx(){
				
				if(this.usedata.xiaochengxv)
				{
					let arr=this.usedata.xiaochengxv
					console.log("跳转",arr)
					location.href=arr
				}
			
				
				    
			},
			loadMore(){
				if(this.music.src)
				{
					return
				}
				else
				{
						this.addAnimation()
				}
			
				
			},
			addAnimation(){
			
				this.Israle=!this.Israle
				if(this.Israle)
				{
				
				
				
					try {
							this.music.src = this.my.mp3url;
							this.music.play();
					} catch (error) {
					  // 处理播放异常
					 
						console.log('123',error);
					  // 进行其他操作，如显示错误提示等
					}
			
				}
				else{
					if(this.music.src)
					{
						return this.music.pause();
					}
					return 
				}
				
			},
			goguih(){
				uni.navigateTo({
					url:'/pages/hdgh/hdgh',
					animationType: 'fade-in',
					 animationDuration: 1000
				})
			},
			goguiz()
			{
				uni.navigateTo({
					url:'/pages/Gzeluy/Gzeluy',
					animationType: 'fade-in',
					animationDuration: 1000
				})
			},
			Issur(){
				this.Isxla=!this.Isxla
				if(!this.Isxla)
				{
					this.setnbercishu()
					console.log('123');
				}
			},
			xs(x){
				if(!this.Isimg&&x!==undefined)
				{
					switch(x)
					{
						  case 1:
						  	  // this.imgurl=this.usedata.ym+this.usedata.roombackground
						  this.imgurl=this.usedata.ym+this.usedata.viewimg
						    // 当 expression 等于 value1 时执行的代码块
						    break;
						  case 2:
						this.imgurl=this.usedata.ym+this.usedata.roomimg
						    // 当 expression 等于 value2 时执行的代码块
						    break;
						  case 3:
						    // 当 expression 等于 value3 时执行的代码块
							
						
								  this.imgurl=this.usedata.ym+this.usedata.realityimg
						    break;
						
					}
				}
				
					
				this.Isimg=!this.Isimg
			},
			goIQQ(){
				uni.navigateTo({
					url:'/pages/LxCart/LxCart'
				})
			},
			pdadh(){
			
				uni.showActionSheet({
					itemList: ['呼叫', '复制号码'],
					success:res=>{
					
						if(res.tapIndex + 1===1)
						{
							uni.makePhoneCall({
							  phoneNumber: this.usedata.phone,
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
							
						}
					},
					fail: function (res) {
						console.log(res.errMsg);
					}
				});
			},
			goditu(){
		// uni.openLocation({
		//         // 目标位置的经纬度
		//         latitude: 23.134424,
		//         longitude: 113.314286,
		//         // 目标位置的名称
		//         name: '广州市珠江新城',
		//         // 目标位置的详细地址
		//         address: '广东省广州市天河区珠江新城香江广场',
		//         // 地图缩放比例
		//         scale: 18,
		//         // 调用成功时的回调函数
		//         success: function(res) {
		//           console.log('调用成功：', res)
		//         },
		//         // 调用失败时的回调函数
		//         fail: function(res) {
		//           console.log('调用失败：', res)
		//         },
		//         // 调用完成时的回调函数
		//         complete: function(res) {
		//           console.log('调用完成：', res)
		//         }
		//       })
		
		
				if(this.usedata.location)
				{
					let a=this.usedata.location.split(',')
			
					uni.openLocation({
					  latitude:parseFloat(a[3]),  
					  longitude: parseFloat(a[2]), 
					  name: a[0], 
					  address: a[1], 
					  scale: 18  
					});
					console.log("经纬度",parseFloat(a[2]),parseFloat(a[3]));
					
				}
				else{
					uni.openLocation({
					  latitude: 32.046047 ,  
					  longitude:32.046047 ,  
					  name: '广州塔', 
					  address: '广东省广州市海珠区', 
					  scale: 18  
					});
				}
				
			},
			setdata(){
				if(this.$route.query.user||getApp().urlnber)
					{
						
					
						getApp().urlnber=this.$route.query.user
						console.log("数据参数",this.$route.query.user);
						this.$htps({url:`/fdc/accountmanage/am/${this.$route.query.user}`}).then(res=>{
							this.usedata=res
							console.log('所有数据',res);
						if(this.usedata.swiperimg)
						{
							this.swper=this.usedata.swiperimg.split(',').map(i=>{
								return this.usedata.ym+i
							})// 初始化轮播图
						}
					
						
						try{
							this.my.voidurl=this.usedata.ym+this.usedata.video
							this.my.mp3url=this.usedata.ym+this.usedata.mp3
							this.my.jlurl=this.usedata.ym+this.usedata.roombackground
							this.my.gifimg=this.usedata.ym+this.usedata.gifimg
							this.my.activitytimeimg=this.usedata.ym+this.usedata.activitytimeimg
							this.my.useravator=this.usedata.ym+this.usedata.useravator
								console.log("活动时间",this.usedata.activityendtime);
							
							if(this.usedata.activitystarttime!=undefined&&this.usedata.activityendtime!=undefined)
							{
								this.usetime.sateatime=this.usedata.activitystarttime
								this.usetime.endtime=this.usedata.activityendtime
							
							}
							
								
							
						}
						catch(e)
						{
							console.log("错误",this.usedata);
						}
						
					
						})
					}
				else{
					return this.Isindex=false
				}
				
			},
		sethjdata(){
			if(this.$route.query.user)
			{
				this.$htps({
					url:'/fdc/accountmanage/listjiangpin?fdcAccount='+this.$route.query.user
					
				}).then(res=>{
					console.log('抽奖数据',res.rows)
					this.cjarr=res.rows
					if(this.usetime.sateatime==""&&this.usetime.endtime=="")
							{
							this.usetime.endtime=res.rows[0].fdcEndtime
									this.usetime.sateatime=res.rows[0].fdcStarttime
									console.log("活动时间",this.usetime);
							}
					
					
				})
			}
			
		},
			copyText() {
			     const textToCopy = this.usedata.phone;
						
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
					icon:false
			      });
			     }
			   }
		},
		created() {
			
		this.setdata()
		this.music = uni.createInnerAudioContext();//初始化
		this.sethjdata()
		this.setnbercishu()
		
	
		  },
		  onShow: function() {
		  	uni.setNavigationBarTitle({
		  		title: '凤凰网房地产抽奖'
		  	});
		  	console.log('App Show')
		  },
		
	}
</script>


<style  lang="less">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.my-view {
    overflow: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE and Edge */
	width: 100vw;
	height: 100vh;

	
}

.my-view::-webkit-scrollbar {
    display: none; /* Webkit (Chrome, Safari) */
}
	@import '@/mount/index.less';
	.bohao{
		position: fixed;
		width: 3em;
		height: 2em;
		bottom: 6em;
	
		z-index: 5;
		 animation: zoos  1s linear infinite;
		right: 1em;
		image{
			width: 100%;
		}
	}
	.butom{
		
		.flex-left();
		justify-content: start;
		position: fixed;
		width: 100%;
		z-index: 3;
		height: 3em;
		background: #FCFBFC;
			bottom: 0;
		image{
			width: 5em;
			display: block;
			transform: translateY(-20%);
		}
		.but1{
			margin-left: .3em;
			border-radius: 1em;
			font-weight: bold;
			background: #FB9310;
			color: #FFFFFF;
			.center();
			width: 20vh;
			height: 80%;
		}
		.but2{
			margin-left: 1em;
			border-radius: 1em;
			font-weight: bold;
			background: #F34345;
			color: #FFFFFF;
			.center();
			width: 20vh;
			height: 80%;
		}
	
	}
	.music{
		position: fixed;
		z-index: 99;
		width: 2em;
		height: 2em;

		bottom: 6em;
		left: 1em ;
		border-radius: 50%;
		background-image: url('../../static/music.png');
		background-size: 100% 100%;
		
	}
	.liaooneliao{
		.flex-top();
		width: 4em;
		// height: 10vh;
		
		position: fixed;
		z-index: 1;
		right: 0;
		bottom: 25vh;
		
		view{
			background: #FFFFFF;
			.center();
			width: 100%;
			font-size: .6em;
		
			border-radius:1em ;
			text-align: center;
			height: 2em;
			color: red;
		}
		image{
			width: 100%;
			border-radius: 50%
		}
	}
.xuanx{
	.flex-top();
	position: fixed;
	z-index: 1;
	width: 4em;
	height: 3.5em;
	
	right:0;
	top: 4em;
	
	image{
		width: 100%;
		
	}
}
	.top {
		.flex-top-start();
		width: 100%;
		// background: linear-gradient(180deg,#53A6D5,#D8E6F3);
		
		position: relative;
		padding-bottom: 2em;
		
		.top_bt{
			
		.flex-left();
	
		top:-1em;
		overflow: hidden;
		width: 750rpx;
		height:4.8em;
	
		image{
		
			height: 100%;
		
		}
			
			}
			.top_cyrs{
				
				width: 8em;
				top: 4em;
				left: 0;
				z-index: 1;
				position: absolute;
				span{
					display: block;
					border: 1em  solid #4C6477;
					background:#4C6477 ;
					font-size: .15em;
					color: #FFFFFF;
				
					margin-top: .8em;
					padding: 0em 3em;
					border-radius: 2.2em;
				}
				
			}
		.jdan{
		
			width: 100%;
			height: 18em;
			
			position: relative;
			&>image:nth-child(1)
			{
				position: absolute;
				width: 10em;
				right: 3em;
				top: 0em;
				  
			}
			&>image:nth-child(2)
			{
				position: absolute;
				width: 19em;
				 left: 50%;
				  top: 55%;
				  transform: translate(-50%, -50%);
				  z-index: 2;
			
				  
				 
				
			}
			&>image:nth-child(3)
			{
				position: absolute;
				width: 22em;
				 left: 50%;
				  top: 55%;
				  transform: translate(-50%, -50%);
			
			}
		}
		.top_dtt{
				padding-top: 2em;
			width: 90%;
			margin:1em auto;
		
			.flex-top-start();
			image{
				
				  display: block;
			}
			&>image:nth-child(1){
		
				  animation: zoom 2s linear infinite;
				
			}	
			
		}
		.chouj{
			
			width: 90%;
			margin:1em auto;

				.flex-top();
			height: 4.5em;
			&>image{
				width: 50%;
			
			}
			&>span{
				font-size: .6em;
				color: #FFFFFF;
			}
		}
		.top_but{
			.flex-left();
			width: 90%;
			
		}
		.vide0{
			margin-top: 1em;
			width: 90%;
			height: 15em;
			
			z-index: 0;
			video{
				width: 100%;
				height: 100%;
			}
		}
		.top_swiper{
		
			
			margin:1em auto;
			width: 90%;
			height: 20em;
		
			swiper-item{
					height: 100%;
					width: 100%;
				.swiper-item{
					height: 100%;
					width: 100%;
					
					image{
						height: 100%;
						width: 100%;
					}
				}
			}
		}
		
	}
	.but{
		height: 80vh;
		width: 100%;
		padding-bottom: 3em;
		background-size: 110% 100%;
		background-position-x:-1em;
		.center();
		align-items: stretch;
		// background-image: url('../../static/true.jpg');
		image{
			
			width: 100%;
			display: block;
			height: 100%;
			
		}
		
	}
	.Tc{
		width: 100vw;
		height: 100vh;
		top: 0;
		background: rgba(255, 255, 255, .5);
		position: absolute;
		z-index: 99999;
			
			
		.TC_Cp{
				bottom: -10em;
				width: 100%;
				position: absolute;
				// bottom: 0;
				height: 10em;
				background: #FEFEFE;
				animation: top .5s forwards; 
				border-radius: 2em 2em 0 0;
				.center();
				flex-direction: column;
				.bt{
					text-align: start;
					
					width: 80%;
					font-size: 1em;
					
				}
				text{
					margin-bottom: 1em;
					font-weight: bold;
					width: 90%;
					text-align: center;
					padding-bottom: 1em;
					border-bottom: 1rpx solid rgba(0, 0, 0,.2);
				}
				
				.dl{
					background: #1FAD1B;
					width: 80%;
					.center();
					padding: 1em;
					color: #FFFFFF;
					font-size: 1em;
					border-radius: 1em;
					
				}
				
		}
		@keyframes top {
			100%{
				bottom: 0;
			}
		}
		button  {
		
		
			z-index: 99;
			left: 50%;
			
			transform: translateX(-50%);
		}
		
	}
	.topbutone{
	
		width: 80%;
		height: 6em;
	image{
		width: 100%;
	}
	}
	::-webkit-scrollbar
	{
		display: none;
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
@keyframes slide {
  0%, 40% {
    transform: translate(-50%, -50%);
  }
 60% {
   transform: translate(-45%, -50%);
  }
70%{
	 transform: translate(-55%, -50%);
}
80%{
	 transform: translate(-45%, -50%);
}
90%{
	 transform: translate(-55%, -50%);
}
 100% {
    transform: translate(-50%, -50%);
  }

}


.animate {
   animation: your-animation 2s  linear infinite;
}

.calse{
	animation: slideone 2s linear  forwards;
}

.clasetwo{
		  animation: slide 2s linear forwards;
}
@keyframes your-animation {
  /* 定义您的关键帧动画效果 */
   0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
	
}



@keyframes slideone{
	

0%{
		
		  transform: translate(-40%,30%)  rotate(-45deg);
	}
//   0%, 40% {
//    transform: translate(0,0)
//   }
//  60% {
// 	 transform: translate(9%,0)
//   }
// 70%{
//  transform: translate(-9%,0)
// }
// 80%{
// 	  transform: translate(9%,0)
// }
// 90%{
// 	transform: translate(-9%,0)
// }
//  100% {
//    transform: translate(0,0)
//   }

}


@keyframes zoom {
  0% {
    transform: scale(0);
  }
  80%,100% {
    transform: scale(1);
  }
}
@keyframes zoos {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100%{
	   transform: scale(1);
  }
}

</style>
