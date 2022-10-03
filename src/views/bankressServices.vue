<template>
    <div class="top-panel-title">
        <h1>Services</h1>
        <span>
            <router-link to="/">Home</router-link> > Services
        </span>

    </div>

    <div class="services">
        <h1>Featured Services</h1>
        <hr>
        <div class="cardContainer">
            <div class="card" v-for="service in services" :key="service.id">
                <img :src="service.image" alt="">
                <h1>{{service.title}}</h1>
                <p>{{service.text}}</p>
                <router-link to="#" class="readMore">
                    Read More
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bankressServices',

    data() {
        return{
            services: [
                {
                    id: 1,
                    title: 'Catering services',
                    image: require(`@/assets/projects/bankress2.jpg`),
                    text: ''
                },
                {
                    id: 2,
                    title: 'Event Management',
                    image: require(`@/assets/bg1.jpg`),
                    text: ''
                },
                {
                    id: 3,
                    title: 'Rentals of Catering Equipment ',
                    image: require(`@/assets/cateringequipment.jpg`),
                    text: ''
                }
            ]
        }
    }
    
}
</script>

<style scoped>
.services{
    background-color: #ffffff;
    width: calc(100% - 10%);
    min-height: 450px;
    padding: 0 5%;
    padding-bottom: 0;
}
.services > hr{
    /* font-size: 30px; */
    width: 100px;
    color: #dc4b1e;
}
.cardContainer{
    display: flex;
    justify-content: space-evenly;
    min-height: 100px;
    width: 100%;
    flex-wrap: wrap;
    padding-top: 50px;
}
.cardContainer > .card{
    width: 30%;
    min-height: 450px;
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
.cardContainer{
    display: flex;
    justify-content: space-evenly;
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