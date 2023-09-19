import {createApp} from 'vue';
import './style.css';
import App from '@/views/App.vue';
import vuetify from '@/plugins/vuetify';

import router from './router';

createApp(App).use(router).use(vuetify).mount('#app');
