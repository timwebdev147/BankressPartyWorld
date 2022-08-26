<template>
<section>
    <div  :class="{show: scrollPosition > 10, hide: scrollPosition < 10}"></div>
    <nav v-bind:class="{sticky: scrollPosition > 10}">
        <img :src="require(`@/assets/${logo}`)" >
        <ul>
            <a href=""  v-for="menu in menus" :key="menu.id">
            <li> {{menu.menu}} </li>
            </a>
        </ul>
        <button @click="showSideBar()">
            <i class="fa fa-bars"></i>
        </button>
    </nav>
     
    <div id="sidebar"  :class="{hide: !active}">
        <div id="sidebar-1" @click="hideSideBar()" ></div>
        <div id="sidebar-2">
            <button @click="hideSideBar()"><i class="fa fa-times"></i></button>
            <ul>
                <li><a href=""> {{menu1}} </a></li>
                <li> <a href=""> {{menu2}} </a> </li>
                <li> <a href=""> {{menu3}} </a> </li>
                <li> <a href=""> {{menu4}} </a> </li>

            </ul>
        </div>
    </div>
    </section>
</template>

<script>
export default {
    name: "navBar",
    props: {
        logo: {
            type: String,
        },
        menu1: {
            type: String,
            default: 'Services',
        },
        menu2: {
            type: String,
            default: 'Team',
        },
        menu3: {
            type: String,
            default: 'Portfolio',
        },
        menu4: {
            type: String,
            default: 'Pricing',
        },
        menu5: {
            type: String,
            default: 'clients',
        },
        menu6: {
            type: String,
            default: 'testimonials',
        },
        menu7: {
            type: String,
            default: 'contact',
        }
    },
    data () {
        return {
            menus: [
                {
                    menu: this.menu1,
                    id: 1,
                },
                {
                    menu: this.menu2,
                    id: 2,
                },
                {
                    menu: this.menu3,
                    id: 3,
                },
                {
                    menu: this.menu4,
                    id: 4,
                },
                {
                    menu: this.menu5,
                    id: 5,
                },
                {
                    menu: this.menu6,
                    id: 6,
                },
                {
                    menu: this.menu7,
                    id: 7,
                }
            ],
            active: false,
            show: true,
            hide: false,
            scrollPosition: 0,
        }
    },
    methods: {
        showSideBar() {
            document.querySelector('#app').style.overflow = 'hidden';
            if (!document.querySelector('#sidebar').classList.contains('sidebar')) {
                document.querySelector('#sidebar').classList.remove('slideAway')
                document.querySelector('#sidebar-1').classList.remove('fadeAway')
                 document.querySelector('#sidebar-1').classList.add('fadeIn')
                document.querySelector('#sidebar').classList.add('sidebar')
                document.querySelector('#sidebar-2').classList.add('slidein')

                }
            
            // document.querySelector('#app').classList.
            // this.active = !this.active
            // // document.querySelector('#app').style.
        },
        hideSideBar() {
            document.body.style.overflow = 'scroll';
             if (document.querySelector('#sidebar').classList.contains('sidebar')) {
                document.querySelector('#sidebar').classList.remove('sidebar')
                document.querySelector('#sidebar').classList.add('slideAway')
                document.querySelector('#sidebar-2').classList.remove('slidein')
                document.querySelector('#sidebar-1').classList.add('fadeAway')

                }
            // this.active = !this.active;
            // this.hide = !this.hide
        },

        // toggle () {
        //     this.isActive = !this.isActive;
        //     this.isTimes = !this.isTimes;
        //     console.log(this.$refs.toggleIcon)
        // },
        updateScroll () {
            this.scrollPosition = window.scrollY;
            // if (this.scrollPosition > 5) {
            //   this.mT
            // }
            console.log(this.scrollPosition)
        }
    },
    mounted() {
      window.addEventListener('scroll', this.updateScroll)
    }
    
}
</script>

<style scoped>
    nav{
        width: 100%;
        height: 70px;
        /* border: 1px solid black; */
        display: flex;
        justify-content: space-between;
        background-color: rgb(255, 255, 255);
        align-items: center;
        transition-duration: 0.2s;
        overflow: -moz-hidden-unscrollable;
    }
    .hide{
        display: none;
        transition-duration: 0.2s;
    }
    .show{
        height: 50px;
        display: block;
        transition-duration: 0.2s;
    }
    .sticky{
        box-shadow: 2px 2px 10px 4px grey;
        position: fixed;
        height: 55px;
        transition-duration: 0.2s;
        top: 0;
        z-index: 2000;
    }
    .sticky img{
        height: 100%;
    }
    nav > img{
        width: 150px;
        height: 90%;
        padding: 0 30px;
    }
    nav > ul{
        display: flex;
        min-width: 200px;
        /* border: 1px solid black; */
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        padding-right: 50px;
    }
    nav > ul > a{
        text-transform: uppercase;
        font-size: 15px;
        font-weight: 600;
        color: #3f3d3b;
        text-decoration: none;
        padding: 0 15px;
    }
    nav > ul > a:hover{
        color: #db4a24;
    }
   
    nav > button{
        padding: 20px 30px;
        background-color: transparent;
        border: none;
        display: none;
        
    }
    button > .fa-bars, .fa-times{
        font-size: 30px;
    }
    .hide{
        display: none;
    }
    
</style>


<style scoped>
@media (min-width: 350px) and (max-width: 750px) {
    nav > ul{
        display: flex;
        width: 300px;
        /* border: 1px solid black; */
        justify-content: space-between;
        align-items: center;
        list-style-type: none;
        position: initial;
        display: none;
    }
    nav > button{
        padding: 20px 30px;
        color: #db4a24;
        background-color: transparent;
        border: none;
        display: block;
    }
     nav > img{
        width: 100px;
        height: 100%;
        padding: 0 30px;
    }
    .sticky{
        position: fixed;
        height: 70px;
        background-color: #fff;
        box-shadow: 0px 0px 4px grey;
        margin: 0;
        top: 0;
        left: 0;
        right: 0;
        transition-duration: 0.1s;
    }
    .sticky > img{
        width: 100px;
        height: 100%;
    }
    .visible{
        display: block;
        height: 100px;
    }
    #sidebar{
        
    }
    .sidebar{
        width: 100%;
        height: 100%;
        /* border: 1px solid black; */
        display: flex;
        position: fixed;
        justify-content: space-between;
        top: 0;
        /* left: 0; */
        right: 0;
        bottom: 0;
        z-index: 2001;
        overflow: hidden;
        animation-name: showSideBar;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
    }
    #sidebar button{
        color: #db4a24;
    }
    .slideAway{
        width: 100%;
        height: 100%;
        /* border: 1px solid black; */
        display: flex;
        position: fixed;
        top: 0;
        /* left: 0; */
        right: 0;
        bottom: 0;
        z-index: 10;
        overflow: hidden;
        animation-name: hideSideBar;
        animation-fill-mode: forwards;
        animation-duration: 0.3s;
    }
    .slidein{
        animation-name: slidein;
        animation-fill-mode: forwards;
        animation-duration: 0.3s;
    }
    .slideout{
        animation-name: slideout;
        animation-fill-mode: forwards;
        animation-duration: 0.3s;
    }
    @keyframes slidein {
        from {
            width: 0%;
        }
        to {
            width: 70%;
        }
    }
    @keyframes slideout {
        from {
            width: 70%;
        }
        to {
            width: 0%;
        }
    }
    
    @keyframes showSideBar {
        from {
            width: 100%;
        }
        to {
            width: 100%;
        }
    }
    @keyframes hideSideBar {
        from {
            width: 100%;
        }
        to {
            width: 0;
            display: none;
        }
    }
    #sidebar > div:nth-child(1){
        width: 100%;
        height: 100%;
        /* border: 1px solid black; */
        /* background-color: rgba(0, 0, 0, 0.3); */
        position: relative;
        
        /* animation-delay: 0.2s; */
        z-index: -3;
        /* transition-duration: 1s; */
        /* opacity: 0.5; */
    }
    .fadeIn{
        animation-name: opacity;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
        
    }
    @keyframes opacity {
        from {
            background-color: transparent;
            width: 100%;
        }
        to {
            background-color: rgba(0, 0, 0, 0.3);
            width: 30%;
        }
    }
    @keyframes fadeAway {
        from {
            /* background-color: rgba(0, 0, 0, 0.3); */
            width: 30%;
        }
        to {
            /* background-color: transparent; */
            /* visibility: hidden; */
            width: 100%;
        }
    }
    .fadeAway{
        animation-name: fadeAway;
        animation-fill-mode: forwards;
        animation-duration: 0.3s;
        width: 100%;
    }
    #sidebar > div:nth-child(2){
        width: 0%;
        height: 100%;
        /* border: 1px solid black; */
        overflow: hidden;
        background-color: white;
        position: relative;
        right: inherit;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-shadow: 2px 2px 4px grey;

    }
    #sidebar > div:nth-child(2) > button{
        padding: 20px 30px;
        background-color: transparent;
        border: none;
    }
    #sidebar > div:nth-child(2) > ul{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 0;
        list-style-type: none;
        height: 15vh;
    }
    #sidebar > div:nth-child(2) > ul > li > a{
        /* margin: 0; */
        color: black;
        text-decoration: none;
        
    }
    #sidebar > div:nth-child(2) > ul > li > a:hover{
        color: #35495e;
    }
    button > .fa-xmark{
        font-size: 30px;
    }
}
</style>