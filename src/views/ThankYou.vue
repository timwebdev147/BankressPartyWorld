<template>
<div class="thankYou">
    <h1>Thank You for reaching out!</h1>
    <p>
        We received your message, you'll get a response as soon as possible.<br/> 
        Be rest assured our services don't disappoint, we deliver better than your expectations. 
    </p>
    <div class="buttons">
        <router-link to="/">
            home page
        </router-link>
        <router-link to="/contact">
            send another message
        </router-link>
    </div>
</div>
</template>

<script>
export default {
    name: "thankYou",

}
</script>

<style scoped>
.thankYou{
    width: 100%;
    height: 100vh;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.8);
    color: white;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

}
.buttons{
    width: 350px;
    display: flex;
    justify-content: space-between;
}
a{
        background-color: #db4a24;
        text-decoration: none;
        color: white;
        font-size: small;
        padding: 10px 20px;
        border-radius: 5px;
        border: none;
        text-transform: uppercase;
}
</style>