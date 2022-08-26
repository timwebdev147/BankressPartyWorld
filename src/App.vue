<template>
<div>
  
</div>
  <!-- <div id="nav">
    <router-link :to="{name: 'homePage'}">Home</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/helloWorld">Hello world</router-link>
    <router-link to="/drivingPlate">Driving Plate</router-link>

<div>
  {{ email != "" ? email : "Loading email address..." }}
</div>
  </div> -->
  <router-view></router-view>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import axios from "axios";



export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  mounted() {
    // console.log('Component mounted');

    let requestObject = {
      name: "John",
      password: "123455664",
      email: "john@gmail.com"
    }

    let requestConfig =  {
      timeout: 30000
    }

    

    let formData = new FormData();

  
  for (let key in requestObject) {
    formData.append(key, requestObject[key])
  }

  console.log({formData});

    axios.post("http://localhost/myphp/api.php", formData, requestConfig)
    .then(response => {
      console.log(response);

      console.log({ data: response.data.email })
      this.email = response.data.email

    }).catch(error => {
      console.log(error)


    })
  },
  data() {
    return {
      email : ""
    }
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
@media (max-width: 600px) {
  #app, body{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  }
}
</style>

