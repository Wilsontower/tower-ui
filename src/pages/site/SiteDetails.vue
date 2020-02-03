<template>
  <div class="site-main">
    <top-nav></top-nav>
    <div class="container">
      <el-page-header @back="goBack" content="网站详情">
      </el-page-header>
      <div class="main-info">
        <div class="site-info">
          <div class="details">
            <span class="title">XXX标题</span>
            <p><strong>简介：</strong>这里是简介这里是简介这里是简介这里是简介这里是简介这里
              是简介这里是简介这里是简介这里是简介这里是简介,
              这里是简介这里是简介这里是简介这里是简介这里是简介这里
              是简介这里是简介这里是简介这里是简介这里是简介
              这里是简介这里是简介这里是简介这里是简介这里是简介这里
              是简介这里是简介这里是简介这里是简介这里是简介
              这里是简介这里是简介这里是简介这里是简介这里是简介这里
              是简介这里是简介这里是简介这里是简介这里是简介
              这里是简介这里是简介这里是简介这里是简介这里是简介这里
              是简介这里是简介这里是简介这里是简介这里是简介</p>
          </div>
          <div class="link">
            <p><strong>链接：</strong>http://www.xxxxxxxxxxxxxxx.com</p>
            <el-button class="el-button--primary enter" ><span style="font-size: 20px">进入</span></el-button>
          </div>
        </div>
        <div class="site-img">
          <el-image  fit="cover" :src="require('@/assets/carousel/img3.png')" class="carousel-img">
            <div slot="placeholder"
                 class="image-slot img-loading">
              <i class="el-icon-loading"></i>
              加载中<span class="dot">...</span>
            </div>
          </el-image>
        </div>
      </div>
    </div>
    <div style="clear:both;"></div>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import TopNav from '../../common/TopNav'
import BottomFooter from '../../common/Footer'
export default {
  name: 'SiteDetails',
  components: {BottomFooter, TopNav},
  mounted () {
    // 解决：Vue路由跳转到新页面时 默认在页面最底部 而不是最顶部
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0)
    })
  },
  methods: {
    goBack () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.site-main{
  width: 100%;
  min-height: 620px;
}
  .container{
    width: 80%;
    margin-left: 10%;
    min-height: 620px;
  }
  .el-page-header{
    margin-top: 80px;
  }
  .main-info{
    display: flex;
  }
  .site-info{
    width: 50%;
    margin-left: 5%;
    margin-top: 5%;
  }
.site-img{
  float: left;
  width: 400px;
  height: 400px;
  margin-left: 5%;
  margin-top: 5%;
  background-color: darkred;
}
.title{
  font-size: 26px;
}
.details{
  text-align: left;
  float: left;
}
.link{
  width: 80%;
  height: 50px;
  margin-left: 10%;
  text-align: center;
  font-size: 20px;
}
  .enter{
    margin-top: 30px;
    width: 200px;
  }
</style>
