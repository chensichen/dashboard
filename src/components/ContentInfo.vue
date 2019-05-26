<template>
  <div class="content">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "ContentInfo",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.content {
  flex: 1;
  display: flex;
  padding: 0px 10px;
  overflow-y: scroll;
  align-items: flex-start;
}
</style>
