import { createApp } from 'vue';
import { IonicVue } from '@ionic/vue';
import mitt from 'mitt';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

import App from './App.vue';
import router from './router';
import store from './store';
import Utils from './utils/index';
import VueSocketIO from 'vue-3-socket.io'
import BaseLayout from './components/base/BaseLayout.vue';
import { DynamicScroller } from 'vue-virtual-scroller';
import ErrorMessage from './components/ErrorMessage.vue';
import Loading from './components/Loading.vue';

/* Core CSS required for Ionic components to work properly */
import '@ionic/vue/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/vue/css/padding.css';
import '@ionic/vue/css/float-elements.css';
import '@ionic/vue/css/text-alignment.css';
import '@ionic/vue/css/text-transformation.css';
import '@ionic/vue/css/flex-utils.css';
import '@ionic/vue/css/display.css';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

/* Theme variables */
import './theme/index.css';
import './styles/app.css';
import './theme/core.css';

/* Bootstrap utilities */
import './assets/css/bootstrap-grid.min.css';

const socket = new VueSocketIO({
  debug: true,
  connection: 'http://localhost:3000',
  vuex: {
    store,
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_'
  }
});

const stripe = Stripe('pk_test_51LEAlbLhNfISaHcDyPFUqUz2L4dro10Dj9LHWYpeUTg0isQESNIClDsERc7Gm7l6LaiDiRrJ7koijJGFvWtq6AY100g3MeaXpr');

const app = createApp(App)
  .use(IonicVue)
  .use(router)
  .use(store)
  .use(socket)
  .use(stripe)

app.config.globalProperties.emitter = mitt();
app.config.globalProperties.$validate = Utils.validations;

app.component('base-layout', BaseLayout);
app.component('error-message', ErrorMessage);
app.component('loading', Loading);
app.component('DynamicScroller', DynamicScroller);

router.isReady()
  .then(() => {
    app.mount('#app');
  })
  .then(() => defineCustomElements(window));
