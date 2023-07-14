<template >
  <!-- 头部导航 -->
  <div class="header">
    <button class="bt" @click="changetp1">图片和纪录片</button>
    <button class="bt" @click="changetp2">景点推荐</button>
  </div>


  <!-- 底部显示-->
  <el-backtop :right="100" :bottom="100" />
    <div class="mainpart">
      <component :is="showtype"></component>
    </div>

  
</template>

<script >
import picComponent from "@/components/picComponent.vue"
import placeComponent from "@/components/placeComponent.vue"
export default {
  data() {
    return {
      showtype: "picCom",
      buttonheight: "50px"
    }
  },
  methods: {
    changetp1() {
      this.showtype = "picComponent"
    },
    changetp2() {
      this.showtype = "placeComponent"
    },
  },
  components: {
    picComponent,
    placeComponent,
  }
}
</script>

<style>
.header {
  margin-top: 10px;
  height: 30px;
  text-align: center;
}

/* 图片纪录片景点按钮 */
.bt {
  box-sizing: border-box;
  background-color: rgb(242, 244, 245);
  font-size: 15px;
  display: inline-block;
  padding: 0 20px;
  margin: 0 20px;
  line-height: 30px;
  border-radius: 15px;
  border: 2px solid rgb(37, 177, 237);
}
.main{
  width:800px;
  padding-left:100px;
  box-sizing:border-box
}
.mainpart {
  height: 100%;
  margin-top: 10px;
  text-align: center;
}
.upp{
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  border-radius:50%;
  border:0
}
</style>

