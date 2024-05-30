<script>
	export default {
		mounted(){
				 this.share();
		},
		onLaunch: function() {
		
			 console.log('执行');
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		},
		methods:{
			share(){
			
		
			
			console.log("路径参数",window.location.href);
		
			const currentURL = window.location.href;
			
			// 创建 URLSearchParams 对象
			const params = new URLSearchParams(new URL(currentURL).search);
			
			// 获取参数值
			const paramValue = params.get('user');
			
			// let str=window.location.href
			// let strone=window.location.href.replace("?", "%3F");
			// let str=`?url=${strone}`
			// console.log( "请求123路径",str);
			this.$htps({
				url:"/fdc/accountmanage/getShare",
				method:"POST",
				data:{
					url:window.location.href,
					account:paramValue
				}
			})
			.then(res=>{
				
				console.log("DJK请求参数",res,paramValue);
					this.$wx.config({
					 // beta: true,// 必须这么写，否则wx.invoke调用形式的jsapi会有问题
					    debug: false,//开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
					     appId: "wx7c2eb41912ca37c1", // 必填，公众号的唯一标识
					     timestamp: res.timestamp, // 必填，生成签名的时间戳
					     nonceStr: res.noncestr, // 必填，生成签名的随机串
					     signature: res.signature, // 必填，签名
					     jsApiList: ["updateAppMessageShareData", "updateTimelineShareData","onMenuShareTimeline","onMenuShareAppMessage"] // 必填，需要使用的JS接口列表
					   });
					 this.$wx.ready(()=>{
						 // console.log("分享",res.sharetitle);
						 this.$wx.updateAppMessageShareData({
						    title: res.sharetitle, // 分享标题
						    desc: res.sharedesc, // 分享描述
						    link:window.location.href, // 分享链接
						    imgUrl:res.shareimgurl, // 分享封面
						       success: function () {
						         // 设置成功
						  						// 次数返回加1
						  			console.log("设置成功");	
						       },
						 	  
						     })
						
						 this.$wx.onMenuShareAppMessage({
						title: res.sharetitle, // 分享标题
						desc: res.sharedesc, // 分享描述
						link:window.location.href, // 分享链接
						imgUrl:res.shareimgurl, // 分享封面
						   success() {
						     // 用户确认分享后回调
							 console.log("分享了");
						   },
						   cancel() {
						     // 用户取消分享后回调
							  console.log("没分享");
						   }
						 })
					 })
					 this.$wx.ready(() => {
				
					   });
					 
				
					 
			
				this.$wx.error(err => {
				  console.log("设置失败");	
													})
												
				})
				
				// 获取
				
				
				
				 
				
			
			}
		}
	}
</script>

<style>
	@import "/mount/index.less";
	
	/*每个页面公共css */
#page-fade-enter-active, .page-fade-leave-active {
  transition: opacity 2s;
}

.page-fade-enter, .page-fade-leave-to {
  opacity: 0;
}
	/deep/uni-page-head{
	  display: none;
	}
	*{
		padding: 0;
		margin: 0;
	}
	*::-webkit-scrollbar
	{
		display: none;
		
		width: 0 !important;
		height: 0 !important;
		-webkit-appearance: none;
		background: transparent;
	}
</style>
