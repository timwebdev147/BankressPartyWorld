<template>
    <div class="top-panel-title">
        <h1>Menu</h1>
        <span>
            <router-link to="/">Home</router-link> > Menu
        </span>

    </div>
 <div class="section-3">
        <div class="sectionTitle">
            <h1>"Menus and Selections"</h1>
            <p>Every Menu is custom created to fit your specific needs!
                 Click each menu card to view previous Menus from recent parties catered by Bankress Party World.</p>
        </div>
        <div class="categories">
            <div class="category" v-for="menu in menus" :key="menu.id">
                <div class="imagesContainer">
                <img :src="menu.image" alt="">
        <div class="projectOverlay">
            <button @click="imgClick(menu)" >
                <i class="fa fa-search"></i>
            </button>
        </div>
            </div>
        
        <div  v-if="menu.show" class="modal">
            <button @click="closeModal(menu)">
                <i class="fa fa-times"></i>
            </button>
            <img :src="menu.image" alt="">
        </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'bankressMenu',
    data(){
        return{
            menus:[
                {
                    image: require(`@/assets/menus/menu.jpg`),
                    id: 1
                },
                {
                    textLink: 'Nigerian soup variety',
                    image: require(`@/assets/menus/menu1.jpg`),
                    
                    id: 2
                },
                {
                    textLink: 'Sides',
                    image: require(`@/assets/menus/menu2.jpg`),

                    id: 3
                },
                {
                    textLink: 'Protein Variety Menu',
                    image: require(`@/assets/menus/menu3.jpg`),

                    id: 4
                },
                {
                    textLink: 'Oriental cuisine',
                    image: require(`@/assets/menus/menu4.jpg`),
                    id: 5
                },
                {
                    textLink: 'Oriental cuisine',
                    image: require(`@/assets/menus/menu5.jpg`),
                    id: 6
                },
                {
                    textLink: 'Oriental cuisine',
                    image: require(`@/assets/menus/menu6.jpg`),
                    id: 7
                },
                {
                    textLink: 'Oriental cuisine',
                    image: require(`@/assets/menus/menu7.jpg`),
                    id: 8
                },
                {
                    textLink: 'Oriental cuisine',
                    image: require(`@/assets/menus/menu8.jpg`),
                    id: 8
                },
            ]
        }
    },
    
methods: {
imgClick(project) {
        project.show = true
    },
closeModal(project){
    project.show = false
}
}

}
</script>

<style>
.category .imagesContainer{
position: relative;
width: 100%;
height: 100%;
}
.category > .imagesContainer > img{
/* padding: 10px 0 ; */
border-radius: 15px;
width: 100%;
height: 70%;
transition: 0.3s;
position: relative;
/* top: -20px; */
}
/* .project img:hover{
width: 95%;
height: 85%;
transition: 0.2s;
} */
.projectOverlay{
display: none;
transition-duration: 0.2s;
border-radius: 10px;
}
.category:hover .projectOverlay{
border-radius: 15px;
width: 100%;
height: 70%;
transition: 0.3s;
position: absolute;
top: 0;
z-index: 2;
display: flex;
align-items: center;
justify-content: center;
background-color: rgba(0, 0, 0, 0.4);
}
.projectOverlay button{
background-color: white;
color: #db4a24;
border: none;
border-radius: 300px;
padding: 15px 30px;
}
.modal{
background-color: rgba(0, 0, 0, 0.8);
position: fixed;
display: flex;
justify-content: center;
align-items: center;
width: 100%;
z-index: 3000;
height: 100vh;
top: 0;
bottom: 0;
left: 0;
right: 0;
}
.modal > img{
max-width: 70%;
max-height: 80%;
}
.modal > button{
position: absolute;
right: 0px;
top: 0px;
background-color: rgba(0, 0, 0, 0.8);
padding: 19px 30px;
box-shadow: 2px 2px 10px 1px rgba(0, 0, 0, 0.8) ;
/* border-radius: 100px; */
color: grey;
border: none;
font-size: 15px;
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
    /* margin-bottom: 50px; */
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 250px;
    position: relative;
}
/* .category img{ */
    /* padding: 10px 0 ;
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

} */
</style>


<style scoped>
@media (max-width: 1200px) {
       .section-3 .categories{
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
}
    .categories .category{
    width: 40%;
    padding: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 250px;
    position: relative;
}
}

@media (max-width: 600px) {
    .section-3{
    width: calc(100% -20%);
    min-height: 600px;
    display: flex;
    flex-direction: column;
    padding: 40px 10%;
    padding-top: 0px;
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
width: 90%;
display: flex;
margin-bottom: 10%;
justify-content: center;
align-items: center;
flex-direction: column;
height: 250px;
}
.category img{
    /* padding: 10px 0 ; */
    border-radius: 15px;
    width: 100%;
    height: 70%;
    transition: 0.3s;
    position: relative;
    /* top: -20px; */
}
}
</style>