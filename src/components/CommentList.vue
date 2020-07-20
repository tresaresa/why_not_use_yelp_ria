<template>
  <div>
    <el-page-header @back="goBack" content="Comments"/>
    <div v-for="(item, index) in comments" v-bind:key="index">
      <el-card class="box-card">
        {{item.userId}}
        <br>
        {{item.rating}}
        <br>
        {{item.content}}
        <el-button plain @click="getChildComments(item.id)">查看回复</el-button>
        <div v-for="(_item, _index) in children[item.id]" v-bind:key="_index">
          <el-card class="box-card" >
            {{_item.userId}}
            <br>
            {{_item.rating}}
            <br>
            {{_item.content}}
          </el-card>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CommentList",
    props: {
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
        console.log(data);
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
      }
    }
  }
</script>

<style scoped>

</style>
