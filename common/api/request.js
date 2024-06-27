export default{
baseUrl:"https://fangdichan.djlmy.top:8082",
data:{},method:'GET',
header: {'Content-Type': 'application/json'},
dataType:'json',
request(obj={}){
obj.url=this.baseUrl+obj.url
obj.data=obj.data||{}
obj.method=obj.method||this.method
obj.header=obj.header||this.header
obj.dataType=obj.dataType||this.dataType
return new Promise((res,rej)=>{
uni.request({...obj,success:(result)=>{if(result.statusCode!=200)return 
let data=result.data
if (typeof data=== 'object' && data !== null) 
{
	data['ym']=this.baseUrl
}

console.log(result);
if(data.code===500)
{
	// console.log('123');

}
res(data)
}})})}}
