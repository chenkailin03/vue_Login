<template>
    <div>
        <el-menu
      :default-active="$route.path"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      router
      @select="handleSelect"
      style="background-color: rgb(194, 229, 246);"
    >
    <img class="scroll" alt="logo" src="../components/logo.png" > 
    <el-menu-item v-bind:disabled="is" style="font-size: 200%;margin-left: 5%;" >SeaWorld</el-menu-item>
    <img alt="logo" src="../components/logo.png" style="height: 60px;opacity: 1;position: fixed;" >
      <div class="flex-grow" />
      <el-sub-menu index="1">
        <template #title>首页</template>
        <el-menu-item index="/home">图片和纪录片</el-menu-item>
        <el-menu-item index="3-2">景点推荐</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="3">
        <template #title>海洋知识</template>
        <el-menu-item index="/OceanRecord">海洋笔记</el-menu-item>
        <el-menu-item index="3-2">海洋书籍</el-menu-item>
        <!-- 这里的分类只是示例 -->
        <el-sub-menu index="3-3">
          <template #title>海洋百科</template>
          <el-menu-item index="3-3-1">哺乳动物</el-menu-item>
          <el-menu-item index="3-3-2">贝类</el-menu-item>
          <el-menu-item index="3-3-3">鱼</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
        <el-sub-menu index="4">
        <template #title>海洋乐园</template>
        <el-menu-item index="/seamusic" >海洋之声</el-menu-item>
        <el-menu-item index="/question">答题挑战</el-menu-item>
        <el-menu-item index="/game">小游戏</el-menu-item>
      </el-sub-menu>
      <div class="flex-grow1" />
      <el-menu-item index="/login" >个人中心</el-menu-item>
      <el-menu-item index="/login" >登陆</el-menu-item>
    </el-menu>
    <router-view></router-view>
    </div>
    
  </template>
  
  <script >
    export default {
      name: 'SeaHead',
      data() {
        return {
          is:false
        }
      },
      computed:{
        activeIndex(){
          return this.$route.path.replace('/','')
        }
      },
      methods: {
        handleSelect(key, keyPath) {
          console.log(this);
          console.log(key,keyPath);
        }
      }
    }
  </script>
  
  <style>
  .flex-grow {
    flex-grow: 0.7;
  }
  .flex-grow1 {
    flex-grow: 1;
  }
  .scroll{
        display: inline-block;
        height: 60px;
        opacity: 0.7;
        position: absolute;
        left: 5%;
        top: 2px;
        z-index: 15;
        animation: scrollA infinite 20s linear alternate;
      }
      @keyframes scrollA {
        0% {left: 0%;transform: rotate(0deg);};
        10% {left: 10%;transform: rotate(-15deg);}
        20% {left: 20%;transform: rotate(-60deg);}
        30% {left: 30%;transform: rotate(-15deg);}
        40% {left: 40%;transform: rotate(-60deg);}
        50% {left: 50%;transform: rotate(-15deg);}
        60% {left: 60%;transform: rotate(-60deg);}
        70% {left: 70%;transform: rotate(-15deg);}
        80% {left: 80%;transform: rotate(-60deg);}
        90% {left: 90%;transform: rotate(-15deg);}
        100% {left: 100%;transform: rotate(-60deg);}
      }
  </style>
  