<template>
    <footer>
        <div class="footer-first">
            <div class="info">
                <img :src="require(`@/assets/${logo}`)" alt="aefawef">
                <ul>
                    <p class="siteTitle">
                        {{siteTitle}}
                    </p>
                    <p class="address">
                        {{address}}
                    </p>
                    <p class="underline">
                        {{phoneNumber}}
                    </p>
                    <p class="underline">
                        {{email}}
                    </p>

                </ul>
            </div>
            <div class="navigator">
                <h1>Navigate</h1>
                <div>
                    <router-link :to="list.link" v-for="list in navigatorList" :key="list.id"  >{{list.text}}</router-link>
                </div>
            </div>
            <div class="contact">
                <p>Every taste. Every moment. Completely customizable, 
                    completely you. Ready to create an experience like no other?
                </p>
                <button>
                    let's get started
                </button>
                <div class="icons">
                    <i class="fab fa-facebook-square"></i><i class="fab fa-instagram-square"></i><i class="fab fa-linkedin"></i>
                </div>
            </div>
        </div>
        <div class="footer-second">
            <span>
                <p>&copy; {{siteTitle}}</p>
            </span>
            <span>
                <router-link to="#">Privacy Policy</router-link>
            </span>
            <span>
                <router-link to="#">Terms Conditions</router-link>
            </span>
            <span>
                <router-link to="#">Cookie Policy</router-link>
            </span>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'bankressFooter',
    props: {
        logo: {
            type: String,
            // default: 'logo.jpg'
        },
        siteTitle: {
            type: String,
            default: 'Site Title'
        },
        address: {
            type: String,
            default: '44 E. West Street Ashland, OH 44805',
        },
        phoneNumber: {
            type: String,
            default: '0000000000'
        },
        email: {
            type: String,
            default: 'example@unknown.com'
        },
        navigator1:{
            type: String,
            default: 'navigator1'
        },
        navigator2:{
            type: String,
            default: 'navigator2'
        },
        navigator3:{
            type: String,
            default: 'navigator3'
        },
        navigator4:{
            type: String,
            default: 'navigator4'
        }
    },
    data(){
        return{
        navigatorList: [
            {
                link: '/menu',
                text: this.navigator1,
                id: 1
            },
            {
                link: '/catering',
                text: this.navigator2,
                id: 2
            },
            {
                link: '/about',
                text: this.navigator3,
                id: 3
            },
            {
                link: '/contact',
                text: this.navigator4,
                id: 4
            }
        ]
        }
    }
}
</script>

<style scoped>
footer{
    width: 100%;
}
    .footer-first{
        width: calc(100% - 30%);
        min-height: 300px;
        padding: 0 15%;
        padding-top: 20px;
        border-top: 1px dotted #db4a24;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .footer-first > .info, .footer-first > .navigator, .footer-first > .contact{
        width: 30%;
        height: 70%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        text-align: left;
    }
    .info img{
        width: 150px;
    }
    .info ul{
        padding: 0;
        margin: 0;
    }
    .info p{
        margin: 0;
        padding: 0;
    }
    .info .siteTitle{
        text-transform: capitalize;
    }
    .info .address{
        width: 60%;
    }
    .underline{
        text-decoration: underline;
    }
    .navigator > div, .info > ul{
        height: 50%;
        display: inherit;
        flex-direction: inherit;
        justify-content: inherit;
        justify-self: baseline;
        align-items: inherit;
    }
    .navigator h1{
        padding: 0;
        margin: 15px 0;
    }
    .navigator a{
        text-decoration: none;
        color: #2c3e50;
        text-transform: uppercase;
    }
    .navigator a:hover{
        color: #db4a24;
    }
   .contact > button{
       padding: 20px 40px;
    background-color: transparent;
    border: 2px solid #db4a24;
    border-radius: 5px;
    font-weight: 600;
    color: #db4a24;
    text-transform: uppercase;
    cursor: pointer;
   }
   .contact > button:hover{
       background-color: #db4a24;
    color: white;
   }
   
   .contact > .icons{
       display: flex;
    width: 150px;
    justify-content: space-between;
   }
   .contact > .icons  .fa-facebook-square, .contact > .icons  .fa-instagram-square, .contact > .icons  .fa-linkedin{
    font-size: 50px;
   }
    .footer-second{
       width: calc(100% - 20%);
       height: 60px;
       padding: 0 10%;
       display: flex;
       align-items: center;
       justify-content: flex-start;
       background:  #f8f7f7;
    }
    .footer-second > span{
        padding: 0 10px;
        height: 20px;
        border-right: 1px solid #2c3e50;
    }
    .footer-second > span > p{
        padding: 0;
        margin: 0;
    }
    .footer-second > span > a{
        color: #2c3e50;
    }
    .footer-second > span > a:hover{
        color: #db4a24;
    }
</style>

<style scoped>
@media (max-width: 600px) {
    .footer-first{
        width: calc(100% - 30%);
        min-height: 550px;
        padding: 0 15%;
        padding-top: 20px;
        border-top: none;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
     .footer-first > .info, .footer-first > .navigator, .footer-first > .contact{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        text-align: center;
        border-top: 1px dotted #db4a24;
    }
    .contact > button{
       padding: 10px 30px;
    background-color: transparent;
    border: 2px solid #db4a24;
    border-radius: 5px;
    font-weight: 600;
    color: #db4a24;
    text-transform: uppercase;
    cursor: pointer;
   }
   .navigator h1{
        padding: 0;
        margin: 15px 0;
        font-size: 20px;
    }
    .navigator a{
        text-decoration: none;
        color: #2c3e50;
        text-transform: uppercase;
    }
    .contact > .icons{
       display: flex;
    width: 100px;
    justify-content: space-between;
   }
    .contact > .icons  .fa-facebook-square, .contact > .icons  .fa-instagram-square, .contact > .icons  .fa-linkedin{
    font-size: 35px;
   }
    .footer-second{
       width: calc(100% - 20%);
       height: 60px;
       padding: 0 10%;
       margin-top: 20px;
       display: flex;
       align-items: center;
       justify-content: flex-start;
       background:  #f8f7f7;
    }
    .footer-second > span{
        padding: 0 10px;
        height: 20px;
        font-size: x-small;
        border-right: 1px solid #2c3e50;
    }
}
</style>