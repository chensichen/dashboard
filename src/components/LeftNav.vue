<template>
  <div class="left">
    <ul>
      <li
        v-for="(item, index) in nav"
        :key="index"
        :class="{ activeClass: index == activeNum }"
        @click="changeRouter(index)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "LeftNav",
  data() {
    return {
      activeNum: 0,
      nav: [
        { name: "第1条", id: 1 },
        { name: "第2条", id: 2 },
        { name: "第3条", id: 3 },
        { name: "第4条", id: 4 }
      ]
    };
  },
  methods: {
    changeRouter(index) {
      this.activeNum = index;
      // this.$router.push("flex" + (index + 1));
    }
  }
};
</script>
<style lang="less" scoped>
.left {
  display: flex;
  width: 200px;
  height: 100%;
  border: 1px solid red;
  ul {
    display: flex;
    width: 100%;
    flex-direction: column;
    li {
      padding: 10px 10px;
      cursor: pointer;
    }
    .activeClass {
      background: #ccc;
      position: relative;
    }
    .activeClass::after {
      position: absolute;
      height: 50%;
      left: 0%;
      top: 10px;
      display: block;
      border: 3px solid blue;
      content: "";
    }
  }
}
</style>
