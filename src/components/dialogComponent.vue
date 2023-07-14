<template>
  <el-dialog v-model="detailVisible" :title="cityname" class="dig" center draggable>
    <div class="imgs">
      <!-- 景点图片 -->
      <h2>相关图片</h2>
      <img v-for="(url) in urls" :key="url" :src="url" lazy />
      <!-- <img :src="urls[0]" alt=""> -->
    </div>
    <div class="textbody">
      <p style="color: red;">当前景点的cityid为：{{ cityid }}</p>
     <ul>
      <li class="detail">
        <h2>地理位置</h2>
        <p>{{loca}}</p>
      </li>
      <li class="detail">
        <h2>详细信息</h2>
        <p>{{txt}}</p>
      </li>
      <li class="detail">
        <h2>评价</h2>
        <li v-for="(item) in evaluate" :key="item.key" class="lii">{{ item }}</li>
      </li>
     </ul>
    </div> 
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="detailVisible = false">Cancel</el-button>
        <el-button type="primary" @click="detailVisible = false">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>
    
<script>

export default {
  name: "dialogComponent",
  data() {
    return {
      detailVisible: false,
      //景点的id（cityid）、名称（cityname)、图片（urls）、简介（txt）、地理位置(loca)、相关评价（evaluate）
      cityid: 3,
      cityname:"同济大学海洋馆",
      urls: ["./imgs/banner01.jpg", "./imgs/banner01.jpg","./imgs/banner01.jpg", ],
      loca:"同济大学校内",
      txt:"历史悠久xxxxxxxxxxxx",
      evaluate:["good",'很好，推荐'],
    }
  },
  methods: {
    init(data) {
      this.detailVisible = true;
      this.cityid = data;
    },
    mounted(){
      //已知cityid获取对应景点的具体信息 ：（后端交互）
      // this.name=
      // this.urls=
      // this.txt=   
    }
  },
}
</script>

<style>
.dig {
  margin: 0 !important;
  position: absolute;
  ;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
  height: 600px;
  /* max-height: calc(100% - 100px);
  max-width: calc(100% - 20px); */
  /* overflow: hidden; */
  overflow-y: auto;
}

.dialog-footer button:first-child {
  margin-right: 10px;
}

.dialog-footer {
  /* position:  */
  bottom: 15px;
}

.imgs {
  box-sizing: border-box;
  margin-top: 0;
  width: 700px;
  height: 150px;
  /* overflow-x: auto; */
  /* overflow-y:hidden; */
}
.textbody{
  box-sizing: border-box;
  margin-top: 20px;
  margin-right: 10px;
  width: 700px;
}
.imgs img {
  /* display: block; */
 /* text-align: left; */
  width: 200px;
  height: 130px;
  margin-right: 5px;
  margin-bottom: 5px;
}
p,.lii{
  margin:1px,0;
  text-indent: 2em;
  font-size: 15px;
  color: rgb(70, 68, 67);
}
.detail{
  padding-bottom: 30px;
}

</style>
    