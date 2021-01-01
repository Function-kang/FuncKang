<!--
  现金流表 * 查看流表
-->
<template>
  <div class="main">
    <div style="width: auto">
      <a-button class="listBtn" type="primary" style="margin-bottom: 16px" @click="toggleCollapsed">
        <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
      </a-button>
      <a-menu
        :default-selected-keys="['1']"
        :default-open-keys="['sub1']"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
        :style="width"
        class="left"
      >
        <a-sub-menu :key="value.key" v-for="value in listData" @titleClick="yearClick">
          <span slot="title">
            <a-icon type="mail" />
            <span>{{value.name}}</span>
          </span>
          <a-menu-item :key="val.key" v-for="val in value.data">{{val.name}}</a-menu-item>
        </a-sub-menu>
      </a-menu>
    </div>
    <div class="right">
      <div class="RHeader">
        <a-dropdown>
          <a-menu slot="overlay" @click="handleMenuClick">
            <a-menu-item key="1">
              <a-icon type="user" />主动流入
            </a-menu-item>
            <a-menu-item key="2">
              <a-icon type="user" />被动流入
            </a-menu-item>
            <a-menu-item key="3">
              <a-icon type="user" />固定流出
            </a-menu-item>
            <a-menu-item key="4">
              <a-icon type="user" />弹性流出
            </a-menu-item>
          </a-menu>
          <a-button style>
            新建
            <a-icon type="down" />
          </a-button>
        </a-dropdown>
      </div>
      <div class="right-main">
        <div class="table">
          <div class="thead">
            <ul>
              <li>流入</li>
              <li>流出</li>
            </ul>
            <ul>
              <li>主动流入</li>
              <li>被动流入</li>
              <li>固定流出</li>
              <li>弹性流出</li>
            </ul>
            <ul>
              <li>项目</li>
              <li>金额</li>
              <li>项目</li>
              <li>金额</li>
              <li>项目</li>
              <li>金额</li>
              <li>项目</li>
              <li>金额</li>
            </ul>
          </div>
          <div class="tbody">
            <ul class="tr" v-for="(value, index) in tableData" :key="index">
              <li v-for="(val, ind) in value.data" :key="ind">
                <div class="box" v-for="(v, i) in val.data" :key="i">
                  <ul>
                    <li>{{v.name}}</li>
                    <li>{{v.money}}</li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div>
      <a-modal v-model="visible" okText="确定" cancelText="取消" :title="handleTitle()" @ok="handleOk">
        <a-input placeholder="Basic usage" class="ipt">
          <a-icon slot="prefix" type="align-left" class="iptIcon" />
        </a-input>
        <a-input placeholder="Basic usage" class="ipt">
          <a-icon slot="prefix" type="pay-circle" class="iptIcon" />
          <a-select slot="addonAfter" default-value="元" style="width: 80px">
            <a-select-option value="元">元</a-select-option>
            <a-select-option value="万元">万元</a-select-option>
          </a-select>
        </a-input>
      </a-modal>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "cashFlowSheetShow",
  props: {
    msg: String,
  },
  computed: {
    ...mapState(["nowRoutePath"]),
  },
  data() {
    return {
      collapsed: false,
      width: "width: 20vw",
      listData: [
        {
          name: "2020年",
          key: "year-2020",
          data: [
            {
              name: "一月",
              key: "month-0",
            },
            {
              name: "二月",
              key: "month-1",
            },
            {
              name: "三月",
              key: "month-2",
            },
          ],
        },
      ],
      tableData: [
        // 现金流变 表格渲染数据
        {
          name: "流入",
          data: [
            {
              name: "主动流入",
              data: [
                {
                  name: "工资",
                  money: "12000",
                },
              ],
            },
            {
              name: "被动流入",
              data: [
                {
                  name: "债券",
                  money: "200",
                },
              ],
            },
          ],
        },
        {
          name: "流出",
          data: [
            {
              name: "主动流出",
              data: [],
            },
            {
              name: "弹性流出",
              data: [],
            },
          ],
        },
      ],
      projectTempObj: {
        // 项目模板数组
        name: "",
        money: "",
      },
      menuTitleArr: ["主动流入", "被动流入", "固定流出", "弹性流出"],
      ModalText: "Content of the modal",
      visible: false,
      confirmLoading: false,
      newhandleKey: "", // 新建弹框 key 值
    };
  },
  mounted() {
    this.nowRoutePath(this.$route.path);
  },
  computed: {
    ...mapState(["aaa"]),
  },
  methods: {
    ...mapMutations(["nowRoutePath"]),
    toggleCollapsed() {
      // 侧边栏折叠
      if (this.collapsed) {
        this.width = "width: 20vw";
      } else {
        this.width = "width: 80px";
      }
      this.collapsed = !this.collapsed;
    },
    yearClick(value) {
      // 侧边栏 年
      console.log(value);
    },
    handleMenuClick(e) {
      // 新建下拉菜单
      console.log("click", e);
      this.newhandleKey = e.key;
      this.visible = true;
    },
    handleTitle() {
      // 新建项目弹出框题目
      return "新建" + this.menuTitleArr[this.newhandleKey - 1];
    },
    handleOk(e) {
      // 新建弹出框确认按钮
      this.visible = false;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;

  > div {
    position: relative;

    .listBtn {
      position: absolute;
      left: 15px;
      bottom: 0px;
    }
  }

  .left {
    // width: 20vw;
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
    // background: red;
    padding: 10px;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .RHeader {
      width: 100%;
      height: auto;
      margin-bottom: 10px;
    }
    .right-main {
      flex: 1;
      // background: yellow;
      overflow: hidden;

      .table {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        overflow: hidden;

        .thead {
          border: 1px solid #555c64;
          border-radius: 5px;

          ul {
            width: 100%;
            height: 40px;
            margin: 0;
            display: flex;

            li {
              flex: 1;
              text-align: center;
              line-height: 40px;
              border-right: 1px solid #555c64;
            }
            li:nth-last-child(1) {
              border-right: none;
            }
          }
          ul:nth-child(2) {
            border-top: 1px solid #555c64;
            border-bottom: 1px solid #555c64;
          }
        }
        .tbody {
          flex: 1;
          margin-top: 10px;
          margin-bottom: 0;
          border: 1px solid #555c64;
          border-radius: 5px;
          display: flex;
          overflow: hidden;

          .tr {
            flex: 1;
            border-right: 1px solid #555c64;
            display: flex;
            margin-bottom: 0;

            > li {
              flex: 1;
              border-right: 1px solid #555c64;
              overflow: auto;

              .box {
                width: auto;
                height: 100px;
                border: 1px solid #555c64;
                border-radius: 5px;
                margin: 5px;

                ul {
                  width: 100%;
                  height: 100%;
                  display: flex;

                  li {
                    border-right: 1px solid #555c64;
                    flex: 1;
                    text-align: center;
                    line-height: 100px;
                    font-size: 30px;
                    font-weight: bold;
                  }
                  li:nth-last-child(1) {
                    border-right: none;
                  }
                }
              }
            }
            > li:nth-last-child(1) {
              border-right: none;
            }
          }

          .tr:nth-last-child(1) {
            border-right: none;
          }

          // .tr {
          //   flex: 1;
          // border-right: 1px solid #555c64;
          // overflow: auto;

          // .box {
          //   width: auto;
          //   height: 100px;
          //   border: 1px solid #555c64;
          //   border-radius: 5px;
          //   margin: 5px;

          //   ul {
          //     width: 100%;
          //     height: 100%;
          //     display: flex;

          //     li {
          //       border-right: 1px solid #555c64;
          //       flex: 1;
          //     }
          //     li:nth-last-child(1) {
          //       border-right: none;
          //     }
          //   }
          // }
          // }
          // .tr::-webkit-scrollbar {
          //   display: none;
          // }
        }
      }
    }
  }
}

.ipt:nth-last-child(1) {
  margin-top: 20px;
}
.iptIcon {
  font-size: 20px;
  margin-left: -5px;
}
</style>
