<template>
  <div>
    <el-table
      :data="resturants"
      class="resturants"
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
.resturants {
  width: 100%;
  margin: 1%;
}
</style>
