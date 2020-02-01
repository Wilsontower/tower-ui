<template>
  <div class="page-main">
    <el-carousel :interval="2000" type="card" height="500px">
      <el-carousel-item v-for="item in carousel" :key="item">
        <el-image  fit="cover" :src="require('@/assets/carousel/img3.png')" class="carousel-img">
          <div slot="placeholder"
               class="image-slot img-loading">
            <i class="el-icon-loading"></i>
            加载中<span class="dot">...</span>
          </div>
        </el-image>
      </el-carousel-item>
    </el-carousel>
    <el-divider><span style="font-size: 24px;font-family: 'Microsoft YaHei'">实用网站</span></el-divider>
    <div class="website-part">
      <el-card class="box-card"
               v-for="item in 10"
               :key="item"
               shadow="hover">
        <card></card>
        <div style="padding: 5px;">
          <span>名称</span>
          <div class="bottom clearfix">
            <div class="info">{{ currentDate }}</div>
          </div>
        </div>
      </el-card>
    </div>
    <div style="clear:both;"></div>
    <el-divider><span style="font-size: 24px;font-family: 'Microsoft YaHei'">应用列表</span></el-divider>
    <div class="app-part">
      <el-card class="app-cards"
               v-for="item in 10"
               :key="item"
               shadow="hover">
        <app-card style="float: left"></app-card>
        <div class="app-info">

          <div class="details">
            <span class="title">XXX标题</span>
            <p><strong>简介：</strong>这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介这里是简介</p>
          </div>
        </div>
      </el-card>
    </div>
  </div>
</template>

<script>
import Card from '../../common/Card'
import AppCard from '../../common/AppCard'
export default {
  name: 'MainPage',
  components: {AppCard, Card},
  data () {
    return {
      currentDate: new Date(),
      carousel: [
        '@/assets/carousel/img1.png',
        '../../assets/carousel/img2.png',
        '../../assets/carousel/img3.png',
        '../../assets/carousel/img4.png',
        '../../assets/carousel/img5.png'
      ]
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .page-main{
    min-height: 1200px;
    margin: auto;
  }
  .el-carousel__item{
    color: #475669;
    font-size: 14px;
    opacity: 2;
    line-height: 250px;
  }
  .website-part{
    width: 100%;
    margin-left: 7%;
    margin-top: 25px;
  }
  .app-part{
    width: 100%;
    margin-left: 7%;
    margin-top: 25px;
    height: 200px;
  }
  .box-card {
    width: 250px;
    height: 250px;
    float: left;
    display: flex;
    position: relative;
    margin: 5px;
  }

  .app-cards {
    width: 42.5%;
    height: 250px;
    float: left;
    position: relative;
    margin: 5px;
  }
  .app-info{
    float: left;
    width:50%;
    height:150px;
    margin-top: 25px;
    margin-left: 50px;
  }
  .info {
    font-size: 13px;
    color: #999;
  }
  .title{
    font-size: 26px;
  }
  .details{
    float: left;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }
  .el-divider{
    margin-top: 50px;
  }
  .carousel-img{
    width: 100%;
    height: 100%;
  }
</style>
