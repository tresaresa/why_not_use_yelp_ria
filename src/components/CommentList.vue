<template>
  <div>
    <el-page-header @back="goBack" content="Comments"/>
    <div v-for="(item, index) in comments" v-bind:key="index" class="margin1">
      <el-card class="box-card">
        {{item.userName}}
        <br>
        <el-rate
          v-model="item.rating"
          disabled
          text-color="#ff9900"
          score-template="{value}">
        </el-rate>
        <br>
        {{item.content}}
        <br>
        <el-button plain @click="deleteComment(item.id)" class="margin1">delete</el-button>
        <el-button plain @click="getChildComments(item.id)" class="margin1">see comments</el-button>
        <!-- sub comments -->
        <div v-for="(_item, _index) in children[item.id]" v-bind:key="_index">
          <el-card class="box-card" >
            {{_item.userName}}
            <el-button plain @click="followUser(item.userId)" class="margin1">follow this user</el-button>
            <br>
            {{_item.content}}
          </el-card>
        </div>
        <!-- add new comment -->

      </el-card>
    </div>
  </div>
</template>

<script>
  import GlobalVariable from "@/api/GlobalVariable";
  export default {
    name: "CommentList",
    props: {
      // resturant id
      id: String
    },
    data() {
      return {
        comments: [],
        children: []
      }
    },
    mounted () {
      this.$http.get(`/app/allcomment/${this.id}`).then(response => {
        var data = response.data
        this.comments = data
        console.log(data)
      })
    },
    methods: {
      goBack () {
        this.$router.push({path: `/`})
      },
      getChildComments(id) {
        this.$http.get(`/app/childcomment/${id}`).then(response => {
          var data = response.data
          this.$set(this.children, id, data)
          console.log(this.children[id]);
        })
      },
      deleteComment(id) {
        this.$http.get(`/app/comment-deletion/${id}`).then(response => {
          var data = response.data
          this.$set(this.children, id, data)
          console.log(this.children[id]);
        })
      },
      followUser(id) {
        // id is the user been followed
        let a = GlobalVariable.getUserId()
        console.log(a)
        this.$http.get(`/app/newfollow/${id}/${a}`).then(response => {
          var data = response.data
          this.$set(this.children, id, data)
          console.log(this.children[id]);
        })
      }
    }
  }
</script>

<style scoped>
  .margin1 {
    margin: 1%;
  }
</style>
