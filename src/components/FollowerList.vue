<template>
  <div>
    <div class="title">
      <h2>Followers:</h2>
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
    name: "FollowerList",
    props: {
      id: String
    },
    data() {
      return {
        users: []
      }
    },
    mounted() {
      this.$http.get(`/app/follower/${this.id}`).then(response => {
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
