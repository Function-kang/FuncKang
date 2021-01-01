<template>
  <div class="hello">
    <section>
      <div class="cardBox">
        <div class="card">
          <dl>
            <dt>
              <img src="../assets/images/buLiangRen3.jpg" alt />
            </dt>
            <dd>我</dd>
          </dl>
          <div class="card_right">
            <ul>
              <li>
                <label for>姓名：</label>
                <p>哈哈哈哈哈哈哈哈哈哈哈</p>
              </li>
              <li>
                <label for>座右铭：</label>
                <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="card">
          <div class="card_left">
            <ul>
              <li>
                <label for>姓名：</label>
                <p>哈哈哈哈哈哈哈哈哈哈哈</p>
              </li>
              <li>
                <label for>座右铭：</label>
                <p>哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>
              </li>
            </ul>
          </div>
          <dl>
            <dt>
              <img src="../assets/images/buLiangRen3.jpg" alt />
            </dt>
            <dd>ta</dd>
          </dl>
        </div>
      </div>
      <ul class="main">
        <li>
          <div class="fill"></div>
          <div class="limain">
            <!-- <span>资金</span> -->
          </div>
        </li>
        <li>
          <div class="limain">
            <!-- <span>资金</span> -->
          </div>
          <div class="fill"></div>
        </li>
        <li>
          <div class="fill"></div>
          <div class="limain">
            <!-- <span>资金</span> -->
          </div>
        </li>
        <li>
          <div class="limain">
            <!-- <span>资金</span> -->
          </div>
          <div class="fill"></div>
        </li>
        <li>
          <div class="fill"></div>
          <div class="limain">
            <!-- <span>资金</span> -->
          </div>
        </li>
        <li>
          <div class="limain">
            <!-- <span>资金</span> -->
          </div>
          <div class="fill"></div>
        </li>
        <li>
          <div class="fill"></div>
          <div class="limain">
            <!-- <span>资金</span> -->
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "home",
  props: {
    msg: String
  },
  computed: {
    ...mapState(["nowRoutePath"])
  },
  mounted() {
    console.log(this.$route.path);
    this.$store.commit("nowRoutePath", this.$route.path);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.hello {
  height: 100%;
  section {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    border-left: 1px solid black;
    border-right: 1px solid black;
    display: flex;
    flex-direction: column;

    .cardBox {
      display: flex;

      .card {
        width: 50%;
        height: 20vh;
        background: orange;
        float: left;
        padding: 15px;
        border-radius: 10px;
        margin: 15px;
        justify-content: space-around;
        display: flex;

        dl {
          display: flex;
          flex-direction: column;
          dt {
            height: 12vh;
            img {
              width: 12vh;
              height: 12vh;
            }
          }
          dd {
            flex: 1;
            font-size: 24px;
            font-weight: bold;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        .card_right {
          flex: 1;
          padding: 0 15px;
          overflow: hidden;
        }
        .card_left {
          flex: 1;
          padding: 0 15px;
          overflow: hidden;
        }
        ul li {
          display: flex;
          font-size: 16px;
        }
        ul li label {
          white-space: nowrap;
        }
        ul li p {
          display: block;
          overflow: hidden;
          text-overflow: ellipsis;
          // white-space: nowrap;
        }
      }
    }
    .main {
      flex: 1;
      background: orange;
      padding: 15px;
      border-radius: 10px;
      margin: 15px;
      margin-top: 0px;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;

      li {
        width: 200px;
        height: 100%;
        background: red;
        display: inline-block;
        // flex-direction: column;
        margin-left: 15px;

        .fill {
          width: 100%;
          height: 20%;
        }
        .limain {
          width: 100%;
          height: 80%;
          background: yellow;
        }
        // }
      }
      li:nth-child(1) {
        margin: 0;
      }
    }
    // .main::-webkit-scrollbar {
    //   width: 0 !important;
    // }
  }
}
</style>
