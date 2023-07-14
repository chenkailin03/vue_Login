<template>
    <!-- 图片 -->
    <div class='tit'>
        <p>图片</p><el-button :plain="true" @click="newimg" style="float: right;">刷新</el-button>
    </div>
    <div class="pic">
        <picimage :imgurls="imgArr"/>
    </div>

    <!-- 纪录片 -->
    <div >
        <div class='tit'>
        <p>纪录片</p><el-button :plain="true" @click="newfilm" style="float: right;">刷新</el-button>
    </div>
    <a href="https://www.bilibili.com/" class="show-area" v-for="(item, index) in imageurl" :key="index" target="_blank" >
        <img class="img-area" :src="item.pictureurl" /><span class="blacktxt">片名</span>
    </a>
    </div>
    
</template>


<script>
import { ElMessage } from 'element-plus'
import picimage from './picimage.vue';
export default {
    data() {
        return {
             //需要 detail-img、videourl、name、 每次、十条纪录片
            count:0,
            list:[ ],
            imageurl: [0,1, 2, 3, 4,5,6,7]
            
        }
    },
    methods: {

        newimg() {
            ElMessage({
                showClose: true,
                message: '图片数不够，代码我还没写',
            })
        },

        newfilm() {
            ElMessage({
                showClose: true,
                message: '纪录片数不够，代码我还没写',
                //


            })
        }
    },
    components: {
        picimage,
    }
} 
</script>

<style>
.tit {
    width: 100%;
    /* vertical-align: middle; */
    height: 60px;
    line-height: 60px;
}

p {
    font-weight: bold;
    text-align: left;
    font-size: 20px;

}

.tit p {
    /* margin-top: 10px; */
    display: inline;
    float: left;
}

.pic {
    width: 80%;
    height: 400px;
    text-align: center;
    /* background-color: rgba(0, 0, 0, 0.2); */
    margin-bottom: 20px;
}

.show-area {
    display: inline-block;
    box-sizing: border-box;
    width: 45%;
    height: 200px;
    background-color: rgba(0, 0, 0, 0.2);
    /* vertical-align: middle; */
    margin:20px 0;
    box-shadow: 10px 5px 5px rgba(35, 139, 223, 0.5);
    list-style: none;
    
}
.show-area:nth-child(2n){
    margin-right: 60px;

}
.img-area {
    box-sizing: border-box;
    margin: 10px;
    float: left;
    width: 270px;
    height: 180px;
    background-color: rgba(6, 6, 6, 0.6);
    background-size: 600px 400px;
}

.blacktxt {
    box-sizing: border-box;
    color: rgb(44, 44, 44);
    transition: all 1s;
    text-align: center;
    vertical-align: middle;
    line-height: 180px;
}

</style>