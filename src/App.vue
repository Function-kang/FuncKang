<template>
  <div id="app">
    <Header v-if="nowRoutePath"></Header>
    <section>
      <router-view />
    </section>
  </div>
</template>
<script>
import axios from "axios";
import Header from "./components/common/header";
import { mapState } from "vuex";

export default {
  name: "app",
  data() {
    return {
      headerShow: false,
    };
  },
  computed: {
    ...mapState(["nowRoutePath"]),
  },
  mounted() {
    this.$store.commit("nowRoutePath", this.$route.path);
  },
  methods: {},
  components: {
    Header,
  },
};
</script>
<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: relative;
  display: flex;
  flex-direction: column;

  section {
    flex: 1;
    overflow: auto;
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
