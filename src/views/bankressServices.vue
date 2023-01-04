<template>
    <!-- <div class="top-panel-title">
        <h1>Services</h1>
        <span>
            <router-link to="/">Home</router-link> > Services
        </span>

    </div> -->

    <div class="services">
        <h1>Our Services</h1>
        <hr>
        <div class="cardContainer">
            <div class="card" v-for="service in services" :key="service.id">
                <img :src="service.image" alt="">
                <h1>{{service.title}}</h1>
                <p>

                    <text-clamp :text='service.text' :expanded="service.expand"  :max-lines="4" />
                </p>
                <a  @click="expand(service)"  class="readMore">
                    Read More
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import textClamp from 'vue3-text-clamp'
export default {
    name: 'bankressServices',
    components: {textClamp},

    data() {
        return{
            services: [
                {
                    id: 1,
                    title: 'Catering services',
                    image: require(`@/assets/projects/bankress2.jpg`),
                    text: 'We are highly rated first among equal in the catering/hospitality business industry in Nigeria, with notable list of clientele who have rave reviews of not only our exquisite range of both local and inter-continental dishes led by our team head/CEO who is an internationally trained culinary master, but also our excellent professional services. At bankress we add glamour to yur events like no other.'
                },
                {
                    id: 2,
                    title: 'Event Management',
                    image: require(`@/assets/bg1.jpg`),
                    text: '----'
                },
                {
                    id: 3,
                    title: 'Rentals of Catering Equipment ',
                    image: require(`@/assets/cateringequipment.jpg`),
                    text: 'We have for rentals exclusive and premium party equipments and accessories such as Rolltops( gold and silver ), Cutlery set( spoons, fork and knives in gold and silver), Hot plate, Glass cups(water, wine and champagne), Napkins, various exclusive plates, Decorative rings...e.t.c \n Kitchen Equipments like Cooking pots, Gas burner e.t.c'
                },
                {
                    id: 4,
                    title: 'Bankress Foods (foodstuffs)',
                    image: require(`@/assets/cateringequipment.jpg`),
                    text: 'Raw and proccessed food exports (This service will be available soon)'
                }
            ]
        }
    },

    methods: {
        expand(service){
            service.expand = true;
        }
    }
    
}
</script>

<style scoped>
.services{
    background-color: #ffffff;
    width: calc(100% - 10%);
    min-height: 450px;
    padding: 20px 5%;
    padding-bottom: 0;
}
.services > hr{
    /* font-size: 30px; */
    width: 100px;
    color: #dc4b1e;
}
.cardContainer{
    display: flex;
    justify-content: flex-start;
    min-height: 100px;
    width: 100%;
    flex-wrap: wrap;
    padding-top: 50px;
}
.cardContainer > .card{
    width: 30%;
    min-height: 450px;
    margin-right: 3.3%;
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
    cursor: pointer;
}
/* .card > img{
    height: 50%;
    position: relative;
} */
.card img{
    width: 100%;
    height: 50%;
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

</style>

<style scoped>
@media (max-width: 600px) {
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
.card > img{
    width: 100%;
    height: 50%;
    border-radius: 10px;
}
}
</style>