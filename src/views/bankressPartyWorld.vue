<template>

    
    <div class="scrollpara">
    <scroll-parallax class="parallax" :speed="0.40">
        <div class="bgImage">
            <p>
            Bankress Party World is known for being reliable, 
                creative, and (of course) making great-tasting food for your event!
            </p>
        <div class="overlay">

            </div>
        </div>
        </scroll-parallax >
    </div>
    
    <div class="section-2">
        <div class="cardContainer">
            <div class="card" v-for="card in cards" :key="card.id" >
            <div class="cardImage">
                <img :src="card.image" alt="">
                <div class="imageOverlay">
                <router-link :to="card.link" class="btn" href="">read more</router-link>
            </div>
            </div>
            <h1>{{card.header}}</h1>
            <p>{{card.text}}</p>
            <router-link :to="card.link" class="readMore" href="">read more</router-link>
            </div>
        </div>
    </div>

    <div class="projectSection">
        <div style="width: 300px;">
            <p>GALLERY</p>
            <h1>Check our recent projects</h1>
            <hr style="width: 100px;"/>
        </div>
        <ProjectGallery/>

        <div class="fadeEffect">
            <div class="layerOne"></div>
            <div class="layerTwo"></div>
        </div>
        <router-link to="/projects" >
        <button class="btn">
            view more
        </button>
    </router-link>
    </div>
   
</template>

<script>
// import navBar from '../components/navBar.vue'
import ProjectGallery from '../components/projectGallery.vue'
export default {
  components: { ProjectGallery },
    name: 'bankressPartyWorld',
    data() {
        return{
            cards:[
                {
                    header: 'our menu',
                    text: 'Plan the perfect meals for an upcoming event',
                    image: require(`@/assets/card1.jpg`),
                    id: 1,
                    link: '/menu'
                },
                {
                    header: 'Events & Private Parties',
                    text: "Our full-service events can be easily customized to match your taste and vision. From the flavors of your cuisine to the branding of your menu items—anything is possible. Our expert coordinators, planners and servers consider every detail to make your event unforgettable.",
                    image: require(`@/assets/projects/bankress8.jpg`),
                    id: 2,
                    link: ''
                },
                {
                    header: 'Catering',
                    text: 'We cater for large parties, both corprate organizations and private individuals.',
                    image: require(`@/assets/projects/bankress11.jpg`),
                    id: 4,
                    link: '/projects'
                },
            ],
            
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
    background-image: url('../assets/projects/bankress7.jpg');
    background-color: #f8f7f7;
    background-size: cover;
    background-position: center ;
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
    text-shadow: 2px 2px 4px grey;

    width: 60%;
}
.bgImage .overlay{
    position: absolute;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    width: 100%;
    height: 40%;
    /* background-image: linear-gradient( #06080aa9, transparent ); */
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
        border: none;
    }
.section-2{
    background-color: #ffffff;
    width: calc(100% - 20%);
    min-height: 450px;
    padding: 50px 10%;
    padding-bottom: 0;
}
.section-2  p{
    text-align: justify;
    padding: 10px 0;
}
.cardContainer{
    display: flex;
    justify-content: space-evenly;
    min-height: 1100px;
    width: 100%;
    flex-wrap: wrap;
    padding-top: 50px;
}

.cardContainer > .card{
    width: 45%;
    min-height: 400px;
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

.projectSection{
    display: flex;
    position: relative;
    padding: 0 10%;
    flex-direction: column;
    align-items: center;
    
    margin-bottom: 100px;
}
.projectSection > div > h1{
    text-transform: capitalize;
}
.projectSection > .fadeEffect{
    position: absolute;
    height: 275px;
    z-index: 20;
    bottom: 50px;
    width: 100%;
    background-image: linear-gradient(rgba(255, 255, 255, 0.01) 30%, white 70%);
}
/* .fadeEffect > .layerOne{
    height: 70%;
}
.fadeEffect > .layerTwo{
    height: 30%;
    background: white;
} */

</style>

<style scoped>
@media (max-width: 900px) {
    .bgImage{
    background-image: url('../assets/projects/bankress7.jpg');
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
 
}
</style>

<style scoped>
@media (max-width: 600px) {
    .bgImage{
    background-image: url('../assets/projects/bankress7.jpg');
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
    font-size: 25px;
    /* font-family: cursive; */
    font-weight: bolder;
    text-align: center;
    text-shadow: 2px 2px 4px grey;
    width: 90%;
}
.overlay .btn{
    font-size: 15px;
}
.section-2{
    background-color: #fff;
    width: calc(100% - 20%);
    min-height: 500px;
    padding: 50px 10%;
    padding-bottom: 0;
}
.section-2 p{
    text-align: left;
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
.projectSection{
    display: flex;
    position: relative;
    padding: 0 0;
    flex-direction: column;
    align-items: center;
    
    margin-bottom: 100px;
}

}
</style>