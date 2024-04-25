console.log('hello,vue')

export default {
    data() {
      return {
        vname: '',
        nname: '',
        checkbox:false,
        email:'',
        user:'',
        password:'',
        passwordrepeat:'',
        street:'',
        zip:''
      }
    },
    methods:{
        submit(event){
            alert(`Hello ${this.user}!`)
        }
    },
   
  }

app.mount('#app')