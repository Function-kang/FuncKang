<!--
  cash 现金
  flow 流动
  sheet 表格

  资金 - 现金流表
-->
<template>
  <div class="hello">
    <div class="top">
      <div class="title">
        <span>现金流表</span>
      </div>
      <el-menu
        :default-active="'1'"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">查看流表</el-menu-item>
        <el-menu-item index="2">新建流表</el-menu-item>
      </el-menu>
    </div>
    <div class="bottom">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// import cashFlowShetShow from "@/components/cashFlowSheet/cashFlowSheetShow.vue";
import { mapState } from "vuex";

export default {
  name: "cashFlowSheet",
  props: {
    msg: String,
  },
  data() {
    return {
      collapsed: false,
    };
  },
  computed: {
    ...mapState(["nowRoutePath"]),
  },
  mounted() {
    this.$store.commit("nowRoutePath", this.$route.path);
  },
  methods: {
    toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },
    handleSelect(value) {
      console.log(value);
    },
  },
  components: {
    // cashFlowShetShow,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  .top {
    width: 100%;
    height: auto;
    display: flex;
    border-bottom: 1px solid #e6e6e6;

    .title {
      width: 20vw;
      height: 100%;
      background: #001529;
      position: relative;

      span {
        position: absolute;
        top: 50%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        color: white;
        font-size: 24px;
        font-weight: bold;
      }
    }
    .el-menu-demo {
      flex: 1;
      border: none;
    }
  }
  .bottom {
    flex: 1;
    display: flex;
    overflow: hidden;

    .left {
      width: 20vw;
      height: 100%;
      background: #001529;
      overflow-y: auto;
      overflow-x: hidden;
    }
    .left::-webkit-scrollbar {
      display: none;
    }
    .right {
      flex: 1;
      background: red;
      padding: 10px;
      overflow: hidden;
    }
  }
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
