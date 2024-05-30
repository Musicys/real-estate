<template>
	<view class="Sru">
		<view class="shuruk">
			<image src="/static/choujiang.png" mode="widthFix" class="bj"></image>
			  <view class="fromuse">
				  
			      <input type="text" v-model="name" placeholder="请输入名称" />
			      <input type="number" v-model="nuber" placeholder="请输入电话"  maxlength="11" />
			      <button type="submit" @click="tj">提交</button>
				 	<image src="https://img.woniutaofang.com/tjyun/c80aaeba665c4a78bf26a8dbe3ff40c3.png" mode="widthFix" class="useimg"  @click="sc()"></image>
			    </view>
		</view>
	</view>
</template>

<script>
	export default {
		name:"Sru",
		props: {
		  Issur: {
		    type: Function,
		    default: null
		  }
		
		},
		data() {
			return {
				name:'',
				nuber:''
			};
		},
		methods:{
		deepEqual(obj1, obj2) {
			for(let i in obj1)
			{
				if(obj1[i]!==obj2[i])
				{
					return false
				}
			}
		 return true
		},

				tj(){
		let my={
			fdcName:this.name,
			fdcPhone:this.nuber
		}
	if(this.name&&this.nuber)
	{
		if(	/^(\+\d{1,3})?[\d\-]+\d$/.test(this.nuber))
		{
			if(uni.getStorageSync('user'))
			{
				console.log(this.deepEqual(JSON.parse(uni.getStorageSync('user')), my));
				
				if(this.deepEqual(JSON.parse(uni.getStorageSync('user')), my))
				{
					return  uni.showToast({
						     title: '请勿重复提交',
						     icon: 'none',
						     duration: 2000
						   });
				}
			}
		
			let str=JSON.stringify({
				fdcName:this.name,
				fdcPhone:this.nuber
			})
			this.$htps({
				url:"/fdc/accountmanage/insertyvyue",
				
				method:'POST',
				data:{
					fdcName:this.name,
					fdcPhone:this.nuber,
					fdcAccount:getApp().urlnber
				}
			}).then(res=>{
				uni.setStorageSync('user', str)
				uni.showToast({
				  title: '提交成功',
				  icon: 'success',
				  duration: 2000
				});
				this.sc()
				
				
			}).catch(res=>{
				uni.showToast({
				  title: '提交失败',
				  icon: 'success',
				  duration: 2000
				});
			})
			}
			else{
				uni.showToast({
				  title: '电话号码不对',
					icon:'none',
				  duration: 2000
				});
			}
		}

	else{
	uni.showToast({
	  title: '还有未填写哦',
		icon:'none',
	  duration: 2000
	});
	}



			
					
				},
				sc(){
					
				this.Issur()
			
				},
				hcsj(){
					
				},
	setmy()
	{
		if(uni.getStorageSync('user'))
		{
			
			this.name=JSON.parse(uni.getStorageSync('user')).fdcName
			this.nuber=JSON.parse(uni.getStorageSync('user')).fdcPhone
		}
	}
		},
	
		created(){
			this.setmy()
		}
	}
</script>

<style lang="less" scoped>
	@import '../mount/index.less';
.Sru
{
	top: 0;
	
	position: fixed;
	width: 100vw;
	height: 100vh;
	z-index: 15;
	 background-color: rgba(0, 0, 0, 0.5);
	 .center();
	 .shuruk{
		
			 .center();
		
		width: 80%;
		height: 70%;
		.bj{
			position: absolute;
			width: 100%;
			height: 100%;
		}
		position: relative;
		 .fromuse{
			 z-index: 2;
			 width: 50%;
			 display: block;
			 .flex-top();
			 margin-top: -1.2em;
			
		 .useimg{
			 width: 2em;
			 position: absolute;
			 bottom: -1em;
		 }
			
			
		 	input{
				display: block;
				font-size: .6em;
				width: 60%;
				text-align: center;
				color: #C6BCBC;
				background: #F4F2EE;
				padding: .2em;
			
				border-radius: 2em;
		 	}
		 	button{
		 		background: #0660CC;
				color: #FFFFFF;
				height: 2em;
				
				border-radius: 2em;
				width: 80%;
				font-size: .6em;
				
				.center();
		 	}
		 }
	 }
}


input, button {
  margin-bottom: 10px;
}
</style>