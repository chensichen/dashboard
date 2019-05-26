<template>
  <div class="echarts">
    <div>flex1</div>
    <div>flex1</div>
    <div>flex1</div>
    <div>flex1</div>
    <div>flex1</div>
    <div>flex1</div>
    <div>flex1</div>
    <div>flex1</div>
    <!-- <div>flex1</div> -->
  </div>
</template>
<script>
export default {
  name: "flex1",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.echarts {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  div {
    display: flex;
    margin-top: 10px;
    width: 24%;
    height: 200px;
    border: 1px solid red;
    justify-content: center;
    align-items: center;
  }
}
</style>
