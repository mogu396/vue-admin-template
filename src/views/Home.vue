<template>
  <div class="home">
    <el-container style="height:100%">
      <el-aside width="auto">
        <MyAside></MyAside>
      </el-aside>
      <el-container>
        <el-header>
          <MyHeader/>
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
// @ is an alias to /src
import MyAside from '../components/MyAside.vue'
import MyHeader from '../components/MyHeader.vue'
export default {
  name: "Home",
  components: {
    MyAside,MyHeader
  },
};
</script>


<style lang="scss" scopd>
  .el-header{
    background-color: #333;
  }
  .el-main{
    padding-top: 0px;
  }
</style>
