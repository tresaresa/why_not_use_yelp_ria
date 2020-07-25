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
        <br>
        <el-button circle @click="cancelFollowee(item.id)"/>
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
      this.refresh();
    },
    methods: {
      cancelFollowee(followeeId) {
        this.$http.get(`/app/followee-deletion/${followeeId}/${this.id}`).then(response => {
          var data = response.data
          console.log(data)
        })
      },
      refresh() {
        this.$http.get(`/app/followee/${this.id}`).then(response => {
          var data = response.data
          this.users = data
          console.log(data)
        })
      }
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
