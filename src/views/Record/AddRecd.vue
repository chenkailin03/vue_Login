
<template>
    <input placeholder="标题" type="text" v-model="recd.title"><br>
    <input placeholder="正文" type="text" v-model="recd.content"><br>
    <button @click="addRecord">发表笔记</button>
</template>

<script>
import axios from 'axios'
	export default{
		name:'addRecd',
		data(){
			return {
				recd:{
					title:'',
                    content:''
				}
			}
		},
		methods:{
			addRecord() {
				const self = this;
				alert("receive!");
				if (self.recd.title != "" && self.recd.content != "") {
					 self.$axios({
					 method:'post',
					 url:'http://127.0.0.1:8000/addnote/',
					 data:{
                        title:self.recd.title,
                        content:self.recd.content
					    }
					})
					.then( res => {
						if(res.data.code==0){
								alert("发表成功！");
						}
					})
					.catch( err => {
						console.log(err);
					})
				} else{
					alert("填写不能为空！");
				}
            }
        }
        }
</script>