<template>
    <div style="height: 50px;"> <button @click="newpage">刷新</button></div>      
    <div style="text-align: left;"> 
        <div  v-for="(item,index) in citys" :key="index" class="eachpot" @click="handleClick(index+pageth*15+1)">
            <img :src="item.cpig" alt="">
            {{ item.cname }}
        </div>
    </div>
    <dialog-component v-if="Visiable" ref="dialog"></dialog-component>
    
</template>
<script>
import dialogComponent from "./dialogComponent.vue";
export default{
    data(){
        return{
            pageth:0,
            Visiable:false,
            // 得到id、景区名字（cname)、景区的图片（cpig,一张即可）
            citys:[
                {cname:"景区1",cpig:""},
                {cname:"景区2",cpig:""},
                {cname:"景区3",cpig:""},
                {cname:"景区4",cpig:""},
                {cname:"景区5",cpig:""},
                {cname:"景区6",cpig:""},
                {cname:"景区7",cpig:""},
                {cname:"景区8",cpig:""},
                {cname:"景区9",cpig:""},
                {cname:"景区10",cpig:""},
                {cname:"景区11",cpig:""},
                {cname:"景区12",cpig:""},
                {cname:"景区13",cpig:""},
                {cname:"景区14",cpig:""},
                {cname:"景区15",cpig:""},
            ],
            idlist:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
        }
    },
    methods:{
        handleClick(data){
          this.Visiable=true;
          this.$nextTick(()=>{
            this.$refs.dialog.init(data);
          })
        },
        getdetail(){
            
            // alert('目前id有'+this.idlist+"请获取对应的景点名称和图片一张")
            // 后端交互，由idlist获取名称和图片list，存放在citys中
        },
        newpage(){
            this.pageth+=1
            for (let i = 0 ; i <15 ; i++)
            {
                this.idlist[i]+=15;
            }
            this.getdetail()
        }
    },
    mounted(){
        this.getdetail()
    },
    components:{
          dialogComponent
    },
 
}
</script>
<style>
.eachpot{
    margin-top: 20px;
    width: 280px;
    height: 200px;
    background-color: rgb(40, 41, 40);
    display: inline-block;
    margin: 10px;
    color: rgb(160, 160, 160);
    font-size: 20px;
}
.eachpot:hover{
    color: white;
}


</style>