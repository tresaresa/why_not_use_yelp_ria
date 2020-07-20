<template>
  <div>
    Resturants
    <el-table
      :data="resturants"
      style="width: 100%"
      @row-click="rowClick">
      <el-table-column
        prop="name"
        width="180">
      </el-table-column>
      <el-table-column
        prop="description">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  export default {
    name: "ResturantList",
    data () {
      return {
        resturants: []
      }
    },
    mounted () {
      console.log("resturant list mounted");
      this.$http.get('/app/allresturant').then(response => {
          var data = response.data;
          console.log(data);
          this.resturants = data;
        })
    },
    methods: {
      rowClick (row, column, cell) {
        console.log(row, column, cell)
        this.$router.push({path: `/comments/${row.id}`})
      }
    }

  }
</script>

<style scoped>

</style>
