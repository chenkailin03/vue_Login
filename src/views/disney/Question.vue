<template>
  <div>
    <el-container>
      <el-header style="margin-left: -15%;">
  <el-menu class="el-menu-demo" mode="horizontal" :ellipsis="false"  >
    <div class="flex-grow" />
    <p>点击右侧即可切换题目难度，快来挑战吧～</p>
    <el-menu-item v-bind:disabled="is" @click="first"><el-icon><Document /></el-icon>第一关：难度🌟</el-menu-item>
    <el-menu-item v-bind:disabled="is" @click="second"><el-icon><Document /></el-icon>第二关：难度🌟🌟</el-menu-item>
    <el-menu-item v-bind:disabled="is" @click="third"><el-icon><Document /></el-icon>第三关：难度🌟🌟🌟</el-menu-item>
    <el-menu-item v-bind:disabled="is" @click="fourth"><el-icon><Document /></el-icon>第四关：难度🌟🌟🌟🌟</el-menu-item>
    <el-menu-item v-bind:disabled="is" @click="fifth"><el-icon><Document /></el-icon>第五关：难度🌟🌟🌟🌟🌟</el-menu-item>
  </el-menu>
  <router-view></router-view>
      </el-header>
    </el-container>
  </div>

    <!-- 右侧题目-->
    <el-main  />
    <div>
      <component :is="showtype"></component>
    </div>
  
</template>

<script >
import EasyQuestion from "@/components/EasyQuestion.vue"
import DQuestion from "@/components/DQuestion.vue"
  export default {
    name: 'Nav',
    data() {
      return {
        showtype: "EasyQuestion",
      }
    },
    computed:{
      
    },
    methods: {
      first() {
      this.showtype = "EasyQuestion"
    },
    third() {
      this.showtype = "DQuestion"
    },
      },
      components: {
     EasyQuestion,
     DQuestion,
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

 
