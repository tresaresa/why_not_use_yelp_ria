<template>
  <div>
    <div class="title">
      <h2>Followees:</h2>
    </div>
    <div v-for="(item, index) in users" v-bind:key="index">
      <el-card class="box-card">
        {{item.id}}
        <br>
        {{item.nickname}}
        <br>
        {{item.gender}}
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "FolloweeList",
    props: {
      id: String
    },
    data() {
      return {
        users: []
      }
    },
    mounted() {
      this.$http.get(`/app/followee/${this.id}`).then(response => {
        var data = response.data
        this.users = data
        console.log(data);
      })
    }
  }
</script>

<style scoped>
  .title {
    margin: 1%;
  }
  .box-card {
    margin: 1%;
  }
</style>
