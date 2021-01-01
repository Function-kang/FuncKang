<!--
  资金
-->
<template>
  <div class="hello">
    <!-- 123456 -->
    <div class="main">
      <div class="fundNav">
        <dl class="navTab" @click="navTabClick">
          <dt>
            <img src="../assets/images/nvdi.jpg" alt />
          </dt>
          <dd>现金流表</dd>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
// cashFlowSheet
import { mapState } from "vuex";

export default {
  name: "fund",
  props: {
    msg: String,
  },
  computed: {
    ...mapState(["nowRoutePath"]),
  },
  mounted() {
    this.$store.commit("nowRoutePath", this.$route.path);
  },
  methods: {
    navTabClick() {
      this.$router.push({
        path: "/cashFlowSheet/cashFlowSheetShow",
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  width: 100%;
  height: 100%;
  background: url(../assets/images/fundBack.jpg) no-repeat;
  background-size: 100% 100%;
  overflow: hidden;

  .main {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    background: rgba(255, 255, 255, 0.7);
    overflow: auto;
    .fundNav {
      width: 100%;

      .navTab {
        width: 25%;
        height: 250px;
        background: white;
        display: flex;
        flex-direction: column;

        dt {
          text-align: center;
          flex: 1;
          // position: relative;

          img {
            width: 50%;
            height: auto;
            border-radius: 50%;
            margin-top: 15px;
            // position: absolute;
            // top: 58%;
            // left: 50%;
            // -webkit-transform: translate(-50%, -50%);
          }
        }
        dd {
          width: 100%;
          height: 35%;
          font-size: 22px;
          text-align: center;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    }
  }
  .main::-webkit-scrollbar {
    display: none;
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
