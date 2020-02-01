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
    margin-left: 40%;
  }

  .image {
    width: 100%;
    display: block;
  }
</style>
