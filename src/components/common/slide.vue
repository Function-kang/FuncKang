<template>
  <div class="main">
    <div class="section">
      <div class="box one" :class="{ active: nowIndex == 0 }">
        <div class="layer"></div>
        <div class="text">
          <h1>既然你也是剑客，那就来给我试一下剑，这是缘</h1>
          <el-button type="info" round class="layerBtn" @click="btnClick">永远不要选择逃避，直面一切，善恶分明</el-button>
        </div>
      </div>
      <div class="box two" :class="{ active: nowIndex == 1 }">
        <div class="layer"></div>
      </div>
      <div class="box three" :class="{ active: nowIndex == 2 }">
        <div class="layer"></div>
      </div>
      <i aria-label="图标: right-circle" @click="last" class="anticon anticon-right-circle">
        <svg
          viewBox="64 64 896 896"
          data-icon="right-circle"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          class
        >
          <path
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm154.7 454.5l-246 178c-5.3 3.8-12.7 0-12.7-6.5v-46.9c0-10.2 4.9-19.9 13.2-25.9L566.6 512 421.2 406.8c-8.3-6-13.2-15.6-13.2-25.9V334c0-6.5 7.4-10.3 12.7-6.5l246 178c4.4 3.2 4.4 9.8 0 13z"
          />
        </svg>
      </i>
      <i aria-label="图标: left-circle" @click="next" class="anticon anticon-left-circle">
        <svg
          viewBox="64 64 896 896"
          data-icon="left-circle"
          width="1em"
          height="1em"
          fill="currentColor"
          aria-hidden="true"
          focusable="false"
          class
        >
          <path
            d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm104 316.9c0 10.2-4.9 19.9-13.2 25.9L457.4 512l145.4 105.2c8.3 6 13.2 15.6 13.2 25.9V690c0 6.5-7.4 10.3-12.7 6.5l-246-178a7.95 7.95 0 0 1 0-12.9l246-178a8 8 0 0 1 12.7 6.5v46.8z"
          />
        </svg>
      </i>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "home",
  props: {
    msg: String
  },
  data() {
    return {
      nowIndex: 0,
      boxlength: 0
    };
  },
  mounted() {
    let box = document.getElementsByClassName("box");
    this.boxlength = box.length;
  },
  methods: {
    last() {
      this.nowIndex++;
      if (this.nowIndex >= this.boxlength) {
        this.nowIndex = 0;
      }
    },
    next() {
      this.nowIndex--;
      if (this.nowIndex < 0) {
        this.nowIndex = this.boxlength - 1;
      }
    },
    btnClick() {
      this.$router.push({
        path: "/home",
        name: "home"
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  background: black;

  .section {
    flex: 1;
    position: relative;
    display: flex;
    align-items: center;

    .one {
      background: url(../../assets/images/1.png) no-repeat;
    }
    .two {
      background: url(../../assets/images/2.png) no-repeat;
    }
    .three {
      background: url(../../assets/images/3.png) no-repeat;
    }
    .box {
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
      position: absolute;
      opacity: 0;
      transition: opacity 2s;

      .layer {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.6);
      }
      .text {
        width: 80%;
        height: 80%;
        font-size: 20px;
        font-family: "华文楷体";
        color: white;
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        z-index: 99;

        h1 {
          margin-top: 20vh;
          color: white;
        }
        .layerBtn {
          float: right;
          margin-top: 30vh;
          background: none;
          color: white;
          padding: 10px;
          font-size: 18px;
        }
      }
    }
    .active {
      opacity: 1 !important;
    }
    .anticon-right-circle {
      position: absolute;
      right: 5%;
      font-size: 50px;
      opacity: 0.4;
      transition: opacity 0.5s;
    }
    .anticon-right-circle:hover {
      opacity: 1;
    }
    .anticon-left-circle {
      position: absolute;
      left: 5%;
      font-size: 50px;
      opacity: 0.4;
      transition: opacity 0.5s;
    }
    .anticon-left-circle:hover {
      opacity: 1;
    }
  }
}
</style>
