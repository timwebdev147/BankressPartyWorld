
<template>
        <div class="projects">
            <div class="project" v-for="project in projects" :key="project.id">
                <div class="imagesContainer">
                    <img :src="project.image" alt="">
            <div class="projectOverlay">
                <button @click="imgClick(project)" >
                    <i class="fa fa-search"></i>
                </button>
            </div>
                </div>
            
            <div  v-if="project.show" class="modal">
                <button @click="closeModal(project)">
                    <i class="fa fa-times"></i>
                </button>
                <img :src="project.image" alt="">
            </div>
            </div>
        </div>
        
</template>

<script>
export default {
    name: 'projectGallery',
    data(){
        return{
            projects:[
                {
                    textLink: 'Fruits Menu',
                    image: require(`@/assets/projects/bankress1.jpg`),
                    id: 1
                },
                {
                    textLink: 'Private Dinner Menu',
                    image: require(`@/assets/projects/bankress2.jpg`),
                    id: 2
                },
                {
                    textLink: 'Buffet Menu',
                    image: require(`@/assets/projects/bankress16.jpg`),
                    id: 3
                },
                {
                    textLink: 'BBQ/Grills Menu',
                    image: require(`@/assets/projects/bankress4.jpg`),
                    id: 4
                },
                {
                    textLink: 'Breakfast Menu',
                    image: require(`@/assets/projects/bankress15.jpg`),
                    id: 5
                },
                {
                    textLink: 'Christmas Delivery Menu',
                    image: require(`@/assets/projects/bankress6.jpg`),
                    id: 6
                }
            ],
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

<style scoped>
.projects{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
}

.projects .project{
    width: 30%;
    display: flex;
    margin-bottom: 2.5%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 250px;
}
.projects .imagesContainer{
    position: relative;
    width: 100%;
    height: 100%;
}
.project > .imagesContainer > img{
    /* padding: 10px 0 ; */
    border-radius: 15px;
    width: 100%;
    height: 100%;
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
.project:hover .projectOverlay{
    border-radius: 15px;
    width: 100%;
    height: 100%;
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
</style>

<style scoped>
    @media (max-width: 600px) {
        .projects{
    width: calc( 100% - 10%);
    padding: 0 5%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    }
        .projects .project{
    width: 100%;
    display: flex;
    margin-bottom: 10%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 250px;
    }
    }
    </style>