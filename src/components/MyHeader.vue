<template>
  <header>
    <div class="left-content">
      <el-button
        :icon="isCollapse ? 'el-icon-right' : 'el-icon-back'"
        size="mini"
        @click="menuControll"
      >
      </el-button>
      <h3 style="color: #fff">首页</h3>
    </div>
    <div class="right-content">
      <el-dropdown trigger="click" szie="mini">
        <span class="el-dropdown-link">
          <img :src="userImg" alt="" class="user" />
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </header>
</template>

<script>
export default {
  name: "MyHead",
  data() {
    return {
      userImg: require("../assets/user.jpg"),
    };
  },
  methods: {
    menuControll() {
      this.$store.commit("CollapseControll");
    },
  },
  computed: {
    isCollapse() {
      return this.$store.state.tab.isCollapse;
    },
  },
};
</script>

<style lang='scss' scoped>
header {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  .left-content {
    display: flex;
    align-item: center;
    .el-button {
      font-size: 16px;
      font-weight: 700;
      margin-top: 15px;
      height: 30px;
      margin-right: 20px;
      // line-height: 40px;
    }
  }
  .right-content {
    .user {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
}
</style>