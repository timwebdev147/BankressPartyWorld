<template>
    <router-view></router-view>
    <div class="top-panel-title">
        <h1>Contact Us</h1>
        
        <span>
            <router-link to="/">Home</router-link> > Contact Us
        </span>
    </div>
    <iframe class="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.117803167824!2d3.3545331139142536!3d6.50676922516489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8c3f1c3fb323%3A0x44a77cceaf971054!2s40%20Randle%20Ave%2C%20Surulere%20101241%2C%20Lagos!5e0!3m2!1sen!2sng!4v1670252439578!5m2!1sen!2sng" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    <!-- <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.6916525835195!2d3.416270213914032!3d6.433639225988467!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8ad35f7e93e9%3A0xed985b3c7e02529a!2s14%20Adeleke%20Adedoyin%20St%2C%20Victoria%20Island%20106104%2C%20Lagos!5e0!3m2!1sen!2sng!4v1669931724080!5m2!1sen!2sng" style="border: 0" width="600" height="450"  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe> -->

    <section class="contact-page">
        <p>
            Please use the form below to send us a message.<span class="largeScreen"><br/>  Or simply gives us a call on any of the phone numbers below.</span> <br/> Thanks for your interest!
        </p>
        <div class="form_info_section">
            <div>
                <p class="smallScreen">
                    Or simply gives us a call on any of the phone numbers below. <br/> Thanks once again!
                </p>
                <div>
                    <h1><b>Phone</b></h1>
                    <p>{{info.phoneNumber1}}</p>
                    <p>{{info.phoneNumber2}}</p>
                </div>
                <div>
                    <h1><b>Working Hours</b></h1>
                    <p>Monday through Saturday</p>
                    <p>8am – 7pm</p>
                </div>
                <div>
                    <h1><b>Address</b></h1>
                    <p>{{info.address}}</p>
                    <a href="https://goo.gl/maps/rvMYJancoMu5db8D8" target="_blank">View Map</a>
                </div>
                <div class="thanks">
                    <h1><b>Thank You!</b></h1>
                </div>
            </div>
            <div class="contact-form">
                <form action="https://bankress-mailer.vercel.app/" method="POST">
                    <div v-for="field in form" :key="field.id">
                        <label for="">{{field.label}}<b> *</b></label>
                        <input :name="field.name" :value="field.value" v-if="field.tag == 'input' " :type="field.type">
                        <textarea :name="field.name"  :value="field.value" v-if="field.tag == 'textarea'" :type="field.type"></textarea>
                    </div>
                    <div class="submit-container">
                        <button class="submit" name="submit" type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>

</template>

<script>
export default {
    data(){
        return {
            info: {
                phoneNumber1: "08033356184",
                phoneNumber2: "08081386328",
                address: "40 Randle avenue, surulere, Lagos"
            },
            form: [
                {
                    label: "Name",
                    type: 'text',
                    name: 'fullname',
                    tag: 'input',
                    value: '',
                    id: 1
                },
                {
                    label: "Phone",
                    type: 'text',
                    name: 'number',
                    tag: 'input',
                    value: '',
                    id: 2
                },
                {
                    label: "Email",
                    type: 'email',
                    name: 'email',
                    tag: 'input',
                    value: '',
                    id: 3
                },
                {
                    label: "Message",
                    type: 'text',
                    tag: 'textarea',
                    name: 'message',
                    value: '',
                    id: 4
                }
            ]
        }
    }
}
</script>

<style scoped>

.map{
    width: calc(100% - 40px);
    padding: 20px;
    height: 500px;
}
.contact-page{
    padding: 0 10%;
    padding-bottom: 100px;
    width: calc(100% - 20%);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contact-page > p, .form_info_section > div:first-child > p{
    max-width: 700px;
    margin-bottom: 50px;
    font-size: large;
}
.contact-page > .form_info_section{
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    min-height: 550px;
}
.contact-page > .form_info_section > div:first-child{
    width: 30%;
    display: flex;
    height: 550px;
    flex-direction: column;
    justify-content: space-between;
}
.contact-page > .form_info_section > div:first-child .smallScreen{
    display: none;
}
.form_info_section > div:first-child > div{
    padding: 10px 30px;
    max-height: 250px;
    text-align: left;
    background-color: #f8f7f7;
    margin-bottom: 20px;
}
.form_info_section > div:first-child > div a{
    color: #db4a24;
}
.form_info_section > div:first-child > .thanks{
    text-align: center;
}
.contact-page > .form_info_section > .contact-form{
    width: 60%;
    padding: 30px;
    display: flex;
    min-height: 550px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #f8f7f7;
}
.form_info_section > .contact-form > form{
    width: 100%;
    
}
.form_info_section > .contact-form > form div{
    display: flex;
    min-width: 80%;
    flex-direction: column;
    align-items: flex-start;
}
.contact-form > form div b{
    color: #db4a24;
}
.contact-form  div > input{
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
}
.contact-form  div > textarea{
    width: 100%;
    height: 150px;
    margin-bottom: 20px;
}
.form_info_section > .contact-form > form > .submit-container{
    display: flex;
    align-items: center;
    height: 50px;
    margin-bottom: 20px;
}
.contact-form .submit{
    width: 100%;
    padding: 20px 40px;
    background-color: #db4a24;
    color: white;
    border: none;
    border-radius: 5px;
    font-weight: 600;
    text-transform: uppercase;
    cursor: pointer;
}
.contact-form .submit:hover{
       border: 2px solid #db4a24;
    background-color: transparent;
    color: #db4a24;
   }
</style>

<style scoped>
@media (max-width: 900px) {
    
}

@media (max-width: 600px) {
.contact-page{
    padding: 0 10%;
    padding-bottom: 100px;
    width: calc(100% - 20%);
    display: flex;
    flex-direction: column;
    align-items: center;
}
.contact-page > p{
    max-width: 700px;
    margin-bottom: 50px;
    font-size: large;
}
.contact-page > p .largeScreen{
    display: none;
}
.contact-page > .form_info_section{
    display: flex;
    /* flex-direction: column; */
    flex-direction: column-reverse;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    min-height: 550px;
}
.contact-page > .form_info_section > div:first-child{
    width: 100%;
    display: flex;
    height: 550px;
    flex-wrap: wrap;
    flex-direction: initial;
    justify-content: space-between;
}
.contact-page > .form_info_section > div:first-child .smallScreen{
    display: block;
    margin-top: 50px;
}
.form_info_section > div:first-child > div{
    padding: 10px 20px;
    max-height: 200px;
    width: calc(47.5% - 40px);
    text-align: left;
    background-color: #f8f7f7;
    margin-bottom: 20px;
}
.form_info_section > div:first-child > .thanks{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.contact-page > .form_info_section > .contact-form{
    width: calc(100% - 60px);
    padding: 30px;
    display: flex;
    min-height: 550px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    background-color: #f8f7f7;
}
.form_info_section > .contact-form > form{
    width: 100%;
    
}
.form_info_section > .contact-form > form div{
    display: flex;
    min-width: 80%;
    flex-direction: column;
    align-items: flex-start;
}
.contact-form > form div b{
    color: #db4a24;
}
.contact-form  div > input{
    width: 100%;
    height: 50px;
    margin-bottom: 20px;
}
.contact-form  div > textarea{
    width: 100%;
    height: 150px;
    margin-bottom: 20px;
}
}
</style>