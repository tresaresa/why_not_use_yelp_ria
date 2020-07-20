<template>
  <div>
    <el-card class="box-card">
      <img src="logo.png">
      {{user.id}}
      <br>
      {{user.nickname}}
      <br>
      {{user.gender}}
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "User",
    props: {
      id: String
    },
    data () {
      return {
        user: Object
      }
    },
    mounted() {
      this.$http.get(`/app/userinfo/${this.id}`).then(response => {
        var data = response.data
        this.user = data
        console.log(data);
      })
    },
    methods: {

    }
  }
</script>

<style scoped>

</style>
