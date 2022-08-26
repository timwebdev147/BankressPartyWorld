<template>

    <nav-bar logo="logo.jpg" menu1="home" menu2="menu" menu3="catering" menu4="about" menu5="contact" menu6="" menu7=""/>
    <div class="scrollpara">
    <scroll-parallax class="parallax" :speed="0.30">
        <div class="bgImage">
            <p>
            Bankress Party World is known for being flexible, 
                creative, and (of course) making great-tasting food for your event!
            </p>
        <div class="overlay">

            </div>
        </div>
        </scroll-parallax >
    </div>
    
    <div class="section-2">
        <a class="btn" href="">Book Your Wedding Reception</a>
        <p>From relaxing family meals and romantic dinners, to private parties and catering for events and business functions, Bankress Party World in Surulere Lagos has been serving exquisite Italian cuisine since 1965. We invite you to explore our menus and services to discover the difference that over 50 years of tradition can make.
        </p>
        <div class="cardContainer">
            <div class="card" v-for="card in cards" :key="card.id" >
            <div class="cardImage">
                <img :src="card.image" alt="">
                <div class="imageOverlay">
                <a class="btn" href="">read more</a>
            </div>
            </div>
            <h1>{{card.header}}</h1>
            <p>{{card.text}}</p>
            <a class="readMore" href="">read more</a>
            </div>
        </div>
    </div>
    <div class="section-3">
        <div class="sectionTitle">
            <h1>"Menus and Selections"</h1>
            <p>Every Menu is custom created to fit your specific needs!
                 Click each category to view a Sample Menu of Delicious
                  Meals created by Chef Celestine.</p>
        </div>
        <div class="categories">
            <div class="category" v-for="category in categories" :key="category.id">
            <img :src="category.image" alt="">
            <a href="">{{category.textLink}}</a>
            </div>
        </div>
    </div>
</template>

<script>
import navBar from '../components/navBar.vue'
export default {
  components: { navBar },
    name: 'bankressPartyWorld',
    data() {
        return{
            cards:[
                {
                    header: 'our menu',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus reprehenderitofficia fugit eligendi dolor hic excepturi nam voluptatum beatae dolores aspernatur, animi atque, assumenda eius officiis error,',
                    image: require(`@/assets/card1.jpg`),
                    id: 1
                },
                {
                    header: 'Events & Private Parties',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus reprehenderitofficia fugit eligendi dolor hic excepturi nam voluptatum beatae dolores aspernatur, animi atque, assumenda eius officiis error,',
                    image: require(`@/assets/card2.jpg`),
                    id: 2
                },
                {
                    header: 'Specials & Specialties',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus reprehenderitofficia fugit eligendi dolor hic excepturi nam voluptatum beatae dolores aspernatur, animi atque, assumenda eius officiis error,',
                    image: require(`@/assets/card3.jpg`),
                    id: 3
                },
                {
                    header: 'Catering',
                    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus reprehenderitofficia fugit eligendi dolor hic excepturi nam voluptatum beatae dolores aspernatur, animi atque, assumenda eius officiis error,',
                    image: require(`@/assets/card4.jpg`),
                    id: 4
                },
            ],
            categories:[
                {
                    textLink: 'Fruits Menu',
                    image: require(`@/assets/bg2.jpg`),
                    id: 1
                },
                {
                    textLink: 'Private Dinner Menu',
                    image: require(`@/assets/bg3.jpg`),
                    id: 2
                },
                {
                    textLink: 'Buffet Menu',
                    image: require(`@/assets/bg4.jpg`),
                    id: 3
                },
                {
                    textLink: 'BBQ/Grills Menu',
                    image: require(`@/assets/bg3.jpg`),
                    id: 4
                },
                {
                    textLink: 'Breakfast Menu',
                    image: require(`@/assets/bg4.jpg`),
                    id: 5
                },
                {
                    textLink: 'Christmas Delivery Menu',
                    image: require(`@/assets/bg2.jpg`),
                    id: 6
                }
            ]
        }
    }
    
}
</script>

<style>

</style>


<style  scoped>
.scrollpara{
    position: relative;
    top: 0;
    /* padding-top: 70px; */
    z-index: -1;
}
.scrollpara > .parallax{
    position: relative;
    top: 0;
}
.bgImage{
    background-image: url('../assets/bg1.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 100%;
    height: 80vh;
}
.bgImage p{
    font-size: 40px;
    /* font-weight: bolder; */
    color: white;
    text-align: center;
    text-shadow: 2px 2px 3px #2c3e50;
    width: 60%;
}
.bgImage .overlay{
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 40%;
    background-image: linear-gradient(transparent, #06080aa9);
}
.overlay .btn{
    position: relative;
    bottom: 20px;
}
    .btn{
        background-color: #db4a24;
        text-decoration: none;
        color: white;
        padding: 10px 20px;
        border-radius: 5px;
    }
.section-2{
    background-color: #f8f7f7;
    width: calc(100% - 30%);
    min-height: 450px;
    padding: 50px 15%;
    padding-bottom: 0;
}
.section-2  p{
    text-align: justify;
    padding: 10px 0;
}
.cardContainer{
    display: flex;
    justify-content: space-between;
    min-height: 1100px;
    width: 100%;
    flex-wrap: wrap;
    padding-top: 50px;
}
.cardContainer > .card{
    width: 45%;
    height: 450px;
    display: flex;
    flex-direction: column;
}
.card h1{
    text-align: left;
    font-size: 20px;
    font-weight: 400;
    text-transform: uppercase;
    padding: 0;
    margin-top: 20px;
    margin-bottom: -10px;
}
.card p{
    text-align: left;
    padding-top: 0;
}
.card .readMore{
    text-align: left;
    text-decoration: none;
    text-decoration-line: underline;
    color: #db4a24;
}
.card > .cardImage{
    height: 50%;
    position: relative;
}
.cardImage img{
    width: 100%;
    height: 100%;
    border-radius: 10px;
}
.imageOverlay{
    display: none;
    transition-duration: 0.2s;
    border-radius: 10px;
}
.cardImage:hover .imageOverlay{
    width: 100%;
    height: 100%;
    transition-duration: 0.2s;
    position: absolute;
    top: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.4);
}
.section-3{
    width: calc(100% -20%);
    min-height: 600px;
    display: flex;
    padding: 40px 10%;
}
.section-3 .sectionTitle{
    width: 25%;
    height: 100%;
}
.sectionTitle h1{
    text-align: left;
    font-size: 25px;
}
.sectionTitle p{
    width: 90%;
    text-align: left;
    font-size: small;
 }
.section-3 .categories{
    width: 70%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
}
.categories .category{
    width: 30%;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 250px;
    position: relative;
}
.category img{
    /* padding: 10px 0 ; */
    border-radius: 15px;
    width: 100%;
    height: 70%;
    transition: 0.3s;
    position: relative;
    top: -20px;
}
.category img:hover{
    width: 90%;
    height: 60%;
    transition: 0.2s;
}
.category a{
    text-decoration: none;
    text-decoration-line: underline;
    color: #db4a24;
    position: absolute;
    bottom: 20px;

}
</style>

<style scoped>
@media (max-width: 600px) {
    .bgImage{
    background-image: url('../assets/bg1.jpg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 40vh;
}
.bgImage p{
    font-size: 20px;
    /* font-family: cursive; */
    font-weight: bolder;
    text-align: center;
    text-shadow: 2px 2px 3px black;
    width: 90%;
}
.overlay .btn{
    font-size: 15px;
}
.section-2{
    background-color: #eae0de;
    width: calc(100% - 20%);
    min-height: 500px;
    padding: 50px 10%;
}
.section-2 p{
    text-align: justify;
    font-size: 15px;
    padding: 10px 0;
}
.cardContainer > .card{
    width: 100%;
    padding-bottom: 10px;
    min-height: 450px;
    display: flex;
    flex-direction: column;
}
.card h1{
    text-align: left;
    font-size: 15px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0;
    margin-top: 20px;
    margin-bottom: -10px;
}
.card p{
    text-align: left;
    padding-top: 0;
}
.section-3{
    width: calc(100% -20%);
    min-height: 600px;
    display: flex;
    flex-direction: column;
    padding: 40px 10%;
}
.section-3 .sectionTitle{
    width: 100%;
    height: 100%;
}
.sectionTitle h1{
    text-align: center;
    font-size: 25px;
}
.sectionTitle p{
    width: 100%;
    text-align: center;
    font-size: small;
 }
 .section-3 .categories{
    width: 100%;
    height: 80%;
    display: flex;
    flex-wrap: wrap;
}
.categories .category{
    width: 100%;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 250px;
    position: relative;
}
.category img{
    /* padding: 10px 0 ; */
    border-radius: 15px;
    width: 100%;
    height: 70%;
    transition: 0.3s;
    position: relative;
    top: -20px;
}
}
</style>