<template>
    <div class="top-panel-title">
        <h1>About Us</h1>
        <span>
            <router-link to="/">Home</router-link> > About Us
        </span>

    </div>
    <section class="aboutPage">

        <div class="about">
            <div><img  src="../assets/portfolio/office.jpg" alt=""></div>
            <p><span class="text-center"><p><b>BANKRESS PARTY WORLD</b><br/></p></span> is a fast growing business concern in the entertainment/hospitality industry in lagos nigeria.  Our business outfit is statutorily registered with the Cooperate Affairs Commision(CAC) as an indoor and outdoor catering service outfit.<br/>
            <span><P><b>BANKRESS PARTY WORLD</b></P></span> was established and started operations in april 2000, taking care of small parties. However, consistent with the organization's vision of customer satisfaction through delivery of good quality services over the years, the job scope of the organization increased immensely alongside with increased human capacity and material resources.
            <br/>The company has transformed and is in better position to cater for large parties, both corprate organizations and private individuals.</p>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style scoped>
.aboutPage{
    padding: 40px 10%;
}

.about{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.about > div {
    width: 200px;
    align-self: flex-start;
    display: flex;
    justify-content: flex-start;
    height: 200px;
}
.about img {
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    height: 200px;
    width: 200px;
}
.about p{
    margin: 0;
}
.about > p{
    text-align: left;
    width: 70%;
    margin: 0;
    margin-left: 20px;
    line-height: 2;
}
.about > p b{
    font-size: large;
}
.about > p span:last-of-type p{

margin-top: 50px;
}

</style>

<style scoped>
@media (max-width: 1000px) {
    .about > p{
    text-align: left;
    width: 60%;
    margin: 0;
    margin-left: 20px;
    line-height: 2;
}
}


@media (max-width: 700px) {
.aboutPage{
    padding: 40px 10%;
    padding-top: 0px;
}

.about{
    display: flex;
    flex-direction: column;
    align-items: center;
    /* background-color: #f8f7f7; */
}
.about > div {
    width: 200px;
    align-self: center;
    display: flex;
    justify-content: center;
    height: 200px;
}
.about img {
    border-radius: 10px;
    height: 200px;
    width: 200px;
}
.about > p{
    background-image: radial-gradient(circle, #f8f7f7, white) ;
    text-align: center;
    width: 100%;
    margin: 0;
    line-height: 2;
}
.about > p span p{

    margin-top: 50px;
    text-align: center;
}
.text-center{
    /* background-image: url('../assets/fae.jpg'); */
}
}
</style>






<style>
.top-panel-title{
    height: 150px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 100px;
}
.top-panel-title a{
    text-decoration: none;
    color: inherit;
}
    .top-panel-title::before{
    background-color: #f8f7f7;
    /* background-image: url('../assets/logo.jpg'); */
    background-repeat: no-repeat;
    background-position: center top;
    /* background-attachment: fixed; */
    background-size: 60% 100%;
    /* opacity: 0.7; */
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -2;
}
</style>