<template>
  <el-row>
    <el-col :span="8" >
      <el-card :body-style="{ padding: '0px' }">
        <img src="../assets/img/template.png" class="image">
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'card',
  data () {
    return {
      currentDate: new Date()
    }
  }
}
</script>

<style scoped>
  .el-card{
    width: 150px;
    margin-top: 25px;
    margin-left: 20%;
  }

  .image {
    width: 150px;
    display: block;
  }
</style>
