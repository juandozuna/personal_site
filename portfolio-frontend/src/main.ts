import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueParticlesBg from 'particles-bg-vue';

require('@/assets/main.scss');
createApp(App).use(VueParticlesBg).use(store).use(router).mount('#app');
