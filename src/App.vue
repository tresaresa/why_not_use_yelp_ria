<template>
  <div id="app">
    <div class="header">
      <h1 class="header-name">Why not use yelp?</h1>
      <el-button icon="el-icon-user" circle class="my" @click="toUser"/>
      <el-divider content-position="left"/>
    </div>
    <router-view/>

  </div>
</template>

<script>
  import GlobalVariable from "@/api/GlobalVariable"
  export default {
    name: 'App',
    components: {

    },
    data() {
      return {
        userId: ""
      }
    },
    methods: {
      toUser() {
        GlobalVariable.setUserId("BiZvuNKi0bs_YwttHhhq4w")
        this.userId = GlobalVariable.getUserId()
        this.$router.push({path: `/userinfo/${this.userId}`})
      }
    }
  }
</script>

<style>
  .header {
    height: 8%;
    margin: 1%;
  }
  .header-name {
    width: 20%;
    display: inline;
  }
  .my {
    display: inline;
    float: right;
  }
</style>

