<template>
  <div>
    <el-container>
      <el-aside width="200px">
  <el-menu :default-active="$route.path" class="el-menu-vertical-demo" mode="vertical" :ellipsis="false" router @select="handleSelect" >
    <div class="flex-grow" />
    <el-menu-item index="./EasyQuestion.vue"> <el-icon><Document /></el-icon>第一关：容易</el-menu-item>
    <el-menu-item index="2"><el-icon><Document /></el-icon>第二关：适中</el-menu-item>
    <el-menu-item index="3"><el-icon><Document /></el-icon>第三关：困难</el-menu-item>
  </el-menu>
  <router-view></router-view>
      </el-aside>
    </el-container>
  </div>
  
</template>

<script >
  export default {
    name: 'Nav',
    data() {
      return {
        
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
</style>
