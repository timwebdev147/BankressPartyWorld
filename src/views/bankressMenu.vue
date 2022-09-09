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
export default {
    name: 'bankressMenu',
    data(){
        return{
            categories:[
                {
                    textLink: 'African food Menu',
                    image: require(`@/assets/bg2.jpg`),
                    id: 1
                },
                {
                    textLink: 'Nigerian vegetable soup variety',
                    image: require(`@/assets/bg3.jpg`),
                    id: 2
                },
                {
                    textLink: 'Sides',
                    image: require(`@/assets/bg4.jpg`),
                    id: 3
                },
                {
                    textLink: 'Protein Variety Menu',
                    image: require(`@/assets/bg3.jpg`),
                    id: 4
                },
                {
                    textLink: 'Oriental cuisine',
                    image: require(`@/assets/bg4.jpg`),
                    id: 5
                },
            ]
        }
    }

}
</script>

<style>
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