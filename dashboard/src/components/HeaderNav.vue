<template>
  <div class="headerNav">
    <ul>
      <li v-for="(item, index) in nav" :key="index">
        <router-link :to="'flex' + (index + 1)">{{ item.name }}</router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "HeaderNav",
  data() {
    return {
      activeNum: 0,
      nav: [
        { name: "张老三", id: 1 },
        { name: "李老四", id: 2 },
        { name: "王老五", id: 3 },
        { name: "赵老柳", id: 4 }
      ]
    };
  },
  methods: {}
};
</script>
<style lang="less" scoped>
.headerNav {
  width: 100%;
  height: 60px;
  border: 1px solid green;
  display: flex;
  ul {
    display: flex;
    li {
      padding: 10px 10px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
