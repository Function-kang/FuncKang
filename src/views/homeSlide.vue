<template>
  <div class="main">
    <Slide></Slide>
  </div>
</template>

<script>
import Slide from "../components/common/slide";

export default {
  name: "homeSlide",
  props: {
    msg: String
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {},
  components: {
    Slide
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.main {
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}
</style>
