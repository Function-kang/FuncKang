<template>
  <div class="header">
    <ul>
      <li>
        <img src="../../assets/images/buLiangRen1.jpg" alt />
        <router-link to="/home">首页</router-link>
      </li>
      <li>
        <img src="../../assets/images/buLiangRen1.jpg" alt />
        <router-link to="/fund">资金</router-link>
      </li>
      <li>
        <img src="../../assets/images/buLiangRen1.jpg" alt />
        <router-link to="/idol">偶像</router-link>
      </li>
      <li>
        <img src="../../assets/images/buLiangRen1.jpg" alt />
        <router-link to="/hobby">爱好</router-link>
      </li>
      <li>
        <img src="../../assets/images/buLiangRen1.jpg" alt />
        <router-link to="/ana">语录</router-link>
      </li>
      <li>
        <img src="../../assets/images/buLiangRen1.jpg" alt />
        <router-link to="/battle">目标</router-link>
      </li>
      <li>
        <img src="../../assets/images/buLiangRen1.jpg" alt />
        <router-link to="/my">我的</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.header {
  width: 100%;
  height: 60px;
  line-height: 60px;
  border-bottom: 1px solid black;

  ul {
    width: 100%;
    height: 100%;

    li {
      height: 100%;
      float: left;
      // border-left: 1px solid red;
      // background-image: url("../../assets/images/buLiangRen1.jpg");
      // background-position: center left;
      // background-repeat: no-repeat;
      // background-size: 30px 30px;
      margin-left: 20px;
      padding: 0 20px 0 40px;
      position: relative;

      img {
        width: 30px;
        height: 30px;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        margin: auto 0;
        border-radius: 50%;
      }
      a {
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
      }
    }
  }
}
</style>
