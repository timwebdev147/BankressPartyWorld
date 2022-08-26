import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ScrollParallax from 'vue3-parallax/src/components/ScrollParallax.vue';
import { library, dom } from '@fortawesome/fontawesome-svg-core';
import {  fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { far} from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fas, fab, far);
dom.watch();
const app = createApp(App);
app.component('scroll-parallax', ScrollParallax);

app.component('font-awesome=icon', FontAwesomeIcon)
app.use(router).mount('#app')