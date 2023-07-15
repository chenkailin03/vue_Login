<template>
    <div class="about">
      <h1>OceanRecord page</h1>
    </div>
    <div class="main-panel">
      <div class="menus">
        <div class="menudiv" v-for="menu in menus" :key="menu.name" @click="toPage(menu)" >
          {{ menu.name }}
        </div>
      </div>
      <div style="padding: 20px;width: 100%;">
          <RouterView></RouterView>
      </div>
    </div>
  </template>

<script setup>
import router from '@/router';

    let menus = [
        {name:"查 询", href:"../Record/search.vue"},
        {name:"发 表", href:"../Record/AddRecd.vue"},
    ]

  const toPage = (menu)=>{
    router.push(menu.href)
  }
</script> 
  
<style scoped>
.main-panel{
  display: flex;
  color: #64676a;
  max-width: 1500px;
  margin: 0 auto;
}
.menus{
  padding: 20px 0;
  box-sizing: border-box;
  line-height: 55px;
  text-align: center;
  width: 180px;
  height: 95vh;
  border-right: 1px solid #dadada;
}
.menudiv {
     cursor: pointer;
   }
.menudiv:hover{
  color: #fd670e;
}

</style>