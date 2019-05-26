<template>
  <div class="RightContainer">
    <HeaderNav />
    <ContentInfo />
  </div>
</template>

<script>
import HeaderNav from "@/components/HeaderNav";
import ContentInfo from "@/components/ContentInfo";

export default {
  name: "RightContainer",
  components: {
    HeaderNav,
    ContentInfo
  },
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
.RightContainer {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  border: 1px solid blue;
}
</style>
