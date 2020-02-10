<template>
  <div class="site-main">
    <top-nav></top-nav>
    <div class="container">
      <el-page-header @back="goBack" content="网站详情">
      </el-page-header>
      <div class="main-info">
        <div class="site-info">
          <div class="details">
            <h3 class="title">{{site.siteName}}</h3>
            <p style="line-height: 30px;"><strong>简介：</strong>{{site.description}}</p>
          </div>
          <div class="link">
            <el-input class="url-input" placeholder="可复制网址" :value="site.siteUrl">
              <template slot="prepend">链接</template>
            </el-input>
            <el-button class="el-button--primary enter" @click="gotoSite(site.siteUrl)" ><span style="font-size: 20px">进入</span></el-button>
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
  data () {
    return {
      site: {}
    }
  },
  mounted () {
    let siteInfo = window.sessionStorage.getItem('site')
    this.site = JSON.parse(siteInfo)
    // 解决：Vue路由跳转到新页面时 默认在页面最底部 而不是最顶部
    this.$router.afterEach((to, from, next) => {
      window.scrollTo(0, 0)
    })
  },
  methods: {
    goBack () {
      this.$router.push('/')
    },
    gotoSite (url) {
      window.open(url)
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
  text-align: center;
}
.details{
  text-align: left;
  float: left;
  line-height:18px;
}
.link{
  width: 80%;
  height: 50px;
  margin-left: 10%;
  text-align: center;
  font-size: 20px;
  margin-top: 290px;
}
.url-input{
  margin-bottom: 25px;
}
  .enter{
    margin-bottom: 30px;
    width: 200px;
  }
</style>
