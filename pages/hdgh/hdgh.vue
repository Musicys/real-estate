<template>
	<view class="Huogui">
		<image :src="backurl" ></image>
		<span>
			<p>抽奖时间：2023年8月24日-2023年9月3日</p>
			<p>领奖时间：2023年8月25日-2023年9月3日</p>
			<p>                （ 上午9:00-11:30；下午3:00-6:00）</p>
			<p>领奖地址：武汉·王家湾·龙阳湖畔（中国铁建·花语汀澜营销中心）</p>
			<p>咨询热线：027-8550 8881</p>
			<p>领奖规则：</p>
			<p>1、每个ID每天初始3次抽奖机会，最高5次，想获得更多抽奖机会，可至案场咨询置业顾问。</p>
			<p>2、本次活动线下领奖限18-60周岁人员参加。需携带本人身份证在规定时间内领取，不得代领。</p>
			<p>3、整个活动期间，每人仅限一个微信ID参与领奖,每个ID最多可以抽奖15次，每人凭身份证限领奖品3份，每个身份证每天限领奖品1份。</p>
			<p>4、当日领奖时间截止后，系统自动关闭，无法兑奖，领奖处可能有排队现象，获奖者可合理安排时间，请勿在当日领奖时间截止后扰乱现场公共秩序。</p>
			<p>5、线下领奖开始时间为2023年8月25日，所中奖品48小时之内未领取则失效，奖品数量有限
			，先到先得，发完即止。</p>
			<p>6、本活动法律范围内的解释权归中铁房地产集团武汉有限公司所有。</p>
		</span>
		<image src="https://img.woniutaofang.com/tjyun/c80aaeba665c4a78bf26a8dbe3ff40c3.png" mode="widthFix" class="useimg" @click="goback()"></image>
	</view>
</template>

<script>
	export default {
		name:"Huoguih",
		data() {
			return {
				usedata:[],
				backurl:''
			};
		},
		methods:{
			goback(){
				uni.navigateTo({
					url:`/pages/index/index?user=${getApp().urlnber}`
				})
			},
			setdata(){
				if(getApp().urlnber){
					this.$htps({url:`/fdc/accountmanage/am/${getApp().urlnber}`}).then(res=>{
						this.usedata=res
						this.backurl=this.usedata.ym+this.usedata.activityruleimg
					})
				}
				else{
					return console.log('123');
				}
				}
			// 
			
		},
		created(){
			this.setdata()
		}
	}
</script>

<style lang="less">
.Huogui{
	position: fixed;
	width: 100vw;
	height: 100vh;
	
	z-index: 6;
	&>image:nth-child(1){
		top: 0;
		position: absolute;
		width: 110%;
		transform: translateX(-1%);
		height: 100%;
		z-index: 7;
	}
	.useimg{
	
		position: absolute;
		z-index: 8;
		width: 2em;
		
		top: 70%;
		left: 50%;
		 transform: translate(-50%, -50%);
	}
	span{
		overflow-x: auto;
		display: block;
		width: 90%;
		color: #FFFFFf;
		position: absolute;
		z-index: 8;
		height: 50vh;
	
		top: 40%;
		left: 50%;
		 transform: translate(-50%, -50%);
		}
}

</style>