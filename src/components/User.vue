<template>
  <div>
    <el-card class="box-card">
      <div class="picture">
        <img :src="boy" class="piccontent">
      </div>
      <div class="info">
        UID: {{user.id}}
        <br>
        Nickname: {{user.nickname}}
        <br>
        Gender: {{user.gender}}
        <br><br>
        <router-link :to="follower" class="link">followers</router-link>
        <router-link :to="followee" class="link">followees</router-link>
      </div>
    </el-card>
    <router-view/>
  </div>
</template>

<script>
  //import boy from '@assets/boy.jpg'
  export default {
    name: "User",
    props: {
      id: String
    },
    data () {
      return {
        user: Object,
        boy: require("../assets/boy.jpg"),
        girl: require("../assets/girl.jpg"),
        follower: "/userinfo/" + this.id + "/follower/" + this.id,
        followee: "/userinfo/" + this.id + "/followee/" + this.id,
      }
    },
    mounted() {
      //this.id = "BiZvuNKi0bs_YwttHhhq4w"
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

<style>

</style>
<style scoped>
  .box-card {
    margin: 1%;
  }
  .picture {
    width: 15%;
    height: 15%;
    margin: 1%;
    display: inline;
  }
  .piccontent {
    width: 15%;
    height: 15%;
    display: inline;
  }
  .info {
    width: 81%;
    height: 15%;
    display: inline;
    margin: 1%;
    float: right;
  }
  .link {
    margin: 0 1% 0 0;
  }
</style>
