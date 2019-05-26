<template>
  <div class="echarts">
    <div>
      <ul>
        <li v-for="(item, index) in flex1Data" :key="index">
          <span>{{ item.title }}</span>
          <img :src="item.icon" />
          <span>{{ item.author }}</span>
          <span>{{ item.date }}</span>
        </li>
      </ul>
    </div>
    <div>
      <ul>
        <li v-for="(item, index) in flex2Data" :key="index">
          <span>{{ item.title }}</span>
          <img :src="item.imgSrc" />
          <span>{{ item.author }}</span>
          <span>{{ item.date }}</span>
        </li>
      </ul>
    </div>
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
    return {
      flex1Data: [],
      flex2Data: []
    };
  },
  created() {
    this.$http.get("/flex1Data").then(res => {
      this.flex1Data = res.data.posts;
    });
    this.$http.get("/flex2Data").then(res => {
      this.flex2Data = res.data.data;
    });
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
    justify-content: flex-start;
    align-items: flex-start;
    overflow-y: scroll;
  }
}
</style>
