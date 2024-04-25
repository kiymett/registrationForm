console.log('hello,vue')

const app=Vue.createApp({
    data (){
        return{
            url:"https://www.thenetninja.co.uk",
            showBooks:true,
            //title: 'The final Empire',
            //author: 'Brandon Sanderson',
            //age:45,
            x:0,
            y:0,
            books:[
                {title: 'name of the wind', author:"patcik müller", img:"IMG1.jpg"},
                { title:'the of the king', author:'brandon ', img:"IMG2.jpg"},
                {title:'the sofe of the king', author:'brandon brenn', img:"IMG3.jpg"}
            ]


        }
    },
    methods: { 
        toogleShowBooks(){
            this.showBooks = !this.showBooks
        },

        handleEvent(e, data){
            console.log(e, e.type)
            if(data){
                console.log(data)
            }
        },
        handleMousemove(e){
            this.x=e.offsetX
            this.y=e.offsetY

        }
        //changeTitle(title){
           // console.log('you clicked me')
            //this.title='words of radience'
            //this.title = title
        }
    }
)
app.mount('#app')