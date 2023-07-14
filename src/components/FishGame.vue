<template>
    <div class="box">
      <h1>石头剪刀布</h1>
      <div class="boxli">
        <div class="top">
          <p>
            你已获胜了<span class="id">{{ id }}</span> 次
          </p>
          <div class="liimg">
            <img src="./img/加载.gif" id="img" />
            <span>{{ text }}</span>
            <img :src="list[index].image" alt="" />
          </div>
        </div>
        <div class="bottom">
          <img
            v-for="item in list"
            :key="item.id"
            :src="item.image"
            @click="add(item.id)"
          />
        </div>
        <div class="btn" @click="btn">再来一局</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        list: [
          {
            id: 1,
            image: require("./img/1.png"),
          },
          {
            id: 2,
            image: require("./img/2.png"),
          },
          {
            id: 3,
            image: require("./img/3.png"),
          },
        ],
        index: 0,
        setInter: "",
        text: "",
        id: 0,
      };
    },
    mounted() {
      this.SetInter();
    },
    methods: {
      SetInter() {
        this.setInter = setInterval(() => {
          this.index++;
          if (this.index === 3) {
            this.index = 0;
          }
        }, 100);
      },
      add(id) {
        let img = document.getElementById("img");
        if (img.src === "http://localhost:8080/img/logo.b990c710.gif") {
          img.src = this.list[id - 1].image;
          clearInterval(this.setInter);
          switch (this.index) {
            case 0:
              if (id - 1 === 0) {
                this.text = "平局了";
              } else if (id - 1 === 1) {
                this.text = "获胜了";
              } else if (id - 1 === 2) {
                this.text = "失败了";
              }
              break;
            case 1:
              if (id - 1 === 0) {
                this.text = "失败了";
              } else if (id - 1 === 1) {
                this.text = "平局了";
              } else if (id - 1 === 2) {
                this.text = "获胜了";
              }
              break;
            case 2:
              if (id - 1 === 0) {
                this.text = "获胜了";
              } else if (id - 1 === 1) {
                this.text = "失败了";
              } else if (id - 1 === 2) {
                this.text = "平局了";
              }
              break;
          }
          if (this.text === "获胜了") {
            this.id++;
            console.log(this.id);
          }
        }
      },
      btn() {
        let img = document.getElementById("img");
        if (img.src !== "http://localhost:8080/img/logo.b990c710.gif") {
          img.src = require("./img/加载.gif");
          this.SetInter();
          this.text = "";
        }
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .box {
    text-align: center;
    h1 {
      margin: 20px 0;
    }
    .boxli {
      width: 800px;
      height: 550px;
      border: 1px solid red;
      margin: 0 auto;
      .top {
        img {
          width: 200px;
          height: 200px;
        }
        .liimg {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        span {
          display: inline-block;
          width: 100px;
          color: red;
          text-align: center;
        }
        .id {
          width: 30px;
          margin-top: 20px;
        }
      }
    }
    .btn {
      width: 200px;
      height: 50px;
      background-image: linear-gradient(to right, #ff00ad, #f09876);
      margin: 0 auto;
      line-height: 50px;
      color: #fff;
      border-radius: 10px;
    }
  }
  </style>
  