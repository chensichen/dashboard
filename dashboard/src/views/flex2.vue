<template>
  <div class="echarts">
    <div class="column">
      <div class="row">
        <div>flex2</div>
        <div class="center">
          <div>flex2</div>
          <div>flex2</div>
        </div>
        <div>flex2</div>
      </div>
    </div>
    <div class="column">
      <div class="row">
        <div>flex2</div>
        <div class="center">
          <div>flex2</div>
          <div>flex2</div>
        </div>
        <div>flex2</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "flex2",
  data() {
    return {};
  }
};
</script>
<style lang="less" scoped>
.echarts {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  flex: 1;
  // justify-content: space-between;
  .column {
    display: flex;
    flex-direction: column;
    flex: 1;
    flex-wrap: wrap;
    .row {
      display: flex;
      flex-direction: row;
      flex: 1;
      div {
        display: flex;
        flex-direction: row;
        margin-top: 10px;
        height: 200px;
        border: 1px solid red;
        justify-content: center;
        align-items: center;
        flex: 1;
      }
      .center {
        width: 50%;
        flex: none;
        border: 1px solid #ddd;
        margin: 0 10px;
        margin-top: 10px;
        div {
          margin-top: 0px;
          border: none;
        }
      }
    }
  }
}
</style>
