<template>
  <div class="message-main">
    <top-nav></top-nav>
    <div id="container">
      <p>this is message</p>
    </div>
    <bottom-footer></bottom-footer>
  </div>
</template>

<script>
import TopNav from '../../common/TopNav'
import BottomFooter from '../../common/Footer'
export default {
  name: 'message',
  components: {BottomFooter, TopNav}
}
</script>

<style scoped>
  #container{
    min-height: 1200px;
    /*box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);*/
    /*background-color: #f5f5f5;*/
  }
  .message-main{
    min-height: 1200px;
  }
</style>
