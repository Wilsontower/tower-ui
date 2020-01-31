<template>
  <div class="home">
    <top-nav></top-nav>
    <div id="container">
      <main-page></main-page>
    </div>
    <bottom-footer></bottom-footer>
  </div>

</template>

<script>
import TopNav from '../../common/TopNav'
import BottomFooter from '../../common/Footer'
import MainPage from './MainPage'
export default {
  name: 'Main',
  components: {MainPage, BottomFooter, TopNav},
  data () {
    return {
      msg: 'Welcome to tower!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  #container{
    min-height: 1200px;
    /*box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);*/
    /*background-color: #f5f5f5;*/
  }
  .home{
    min-height: 1200px;
  }
</style>
