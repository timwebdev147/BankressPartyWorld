<template>

    <nav-bar :logo="logo" customMenu="home" :menu1="menu1" :menu2="menu2" :menu3="menu3" :menu4="menu4" menu5="" menu6=""/>
   <router-view></router-view>
   
    <button @click="backToTop()" v-if="scrollPosition > 20"  class="scrollToTop"><i class="fa fa-arrow-up"></i></button>
   <bankressFooter :logo="logo" :navigator1="menu1" :navigator2="menu2" :navigator3="menu3" :navigator4="menu4"/>
   
</template>

<script>
import navBar from './components/navBar.vue'
import bankressFooter from './components/bankressFooter.vue'
export default {
  components: { navBar, bankressFooter },
    name: 'App',
    data(){
      return{
        scrollPosition: '',
        logo: 'logo.jpg',
        menu1: 'menu',
        menu2: "catering",
        menu3: 'about',
        menu4: "contact"
      }
    },
    methods: {
      updateScroll () {
            this.scrollPosition = window.scrollY;
            // if (this.scrollPosition > 5) {
            //   this.mT
            // }
            console.log(this.scrollPosition)
        },
      backToTop() {
            window.scrollTo({
              top: 0,
              behavior: "smooth"
            });
            console.log(window.scrollY)
      }
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll);
      
    }
    
}
</script>

<style>
#app, body {
  font-family: cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  /* margin-top: 60px; */
}
#nav{
  width: 100%;
  height: 50px;
  background-color: #86a1bd;
  /* position: ; */
}
#nav > a{
  text-decoration: none;
  padding: 0 10px;
}
.scrollToTop{
  padding: 20px 10px;
  border: none;
  box-shadow:  2px 2px 10px grey;
  position: fixed;
  bottom: 30px;
  right: 30px;
  border-radius: 10px;
  color: #db4a24;
}
@media (max-width: 600px) {
  #app, body{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
}
</style>



