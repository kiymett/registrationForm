<template>
  <Header />
  <SignupForm />
  <Footer />
</template>

<script>
import Modal from './components/Modal.vue'
import SignupForm from './components/SignupForm.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components : { Header, SignupForm, Footer},
  data(){
    
    return {
      title:'My first app',  
    }
  },
  methods:{
    }
  }

</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
