<template>
  <div id="app">
    <div id="nav">
      <LeftNav />
      <RightContainer />
    </div>
  </div>
</template>
<script>
import LeftNav from "@/components/LeftNav";
import RightContainer from "@/components/RightContainer";
export default {
  name: "App",
  components: {
    LeftNav,
    RightContainer
  },
  data() {
    return {};
  }
};
</script>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
#nav {
  display: flex;
  height: 100%;
  // padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    &.router-link-exact-active {
      position: relative;
      color: #42b983;
    }
    &.router-link-exact-active::after {
      position: absolute;
      color: #42b983;
      position: absolute;
      width: 90%;
      height: 0px;
      left: 0%;
      bottom: -4px;
      display: block;
      border: 2px solid blue;
      content: "";
    }
  }
}
</style>
