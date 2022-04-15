import {createApp} from 'vue'
import type { App } from 'vue';
import app from './App.vue'
import { useRouter } from '@/router';

const setupApp = (app: App) => {
   const s = createApp(app)
   useRouter(s)
   s.mount('#root')
}

setupApp(app)