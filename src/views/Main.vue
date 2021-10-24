<template>
  <el-row class="main" :getter="20">
    <el-col :span="8" style="margin-top: 20px">
      <el-card shadow="always">
        <div class="user">
          <div class="user-info">
            <img :src="userImg" alt="用户头像" />
            <p class="name">moogu</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登陆地点: <span>[Object,Object]</span></p>
          <p>上次登陆时间: <span>2021-10-24</span></p>
        </div>
      </el-card>
    </el-col>
    <el-col :span="16"></el-col>
  </el-row>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      userImg: require("../assets/user.jpg"),
    };
  },
};
</script>

<style lang='scss' scoped>
.main {
  .user {
    padding-bottom: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    .user-info {
      display: flex;
      align-items: center;
      img {
        width: 160px;
        height: 160px;
        border-radius: 50%;
        margin-right: 30px;
      }
      .name {
        font-size: 32px;
        margin-bottom: 20px;
      }
    }
  }
  .login-info{
      p{
          line-height: 28px;
          font-size: 16px;
          color: #999;
          span{
              margin-left: 10px;
              color: #666;
          }
      }
  }
  .graph{
      margin-top: 20px;
      display: flex;
      justify-content: space-between;
      .el-card {
          width: 48%;
      }
  }
}
</style>