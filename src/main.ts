import { createApp } from 'vue';
import { globalRegister } from './global';

import App from './App.vue';

import router from './router';
import store from './store';

import hRequest from './service';

const app = createApp(App);

app.use(globalRegister);
app.use(router);
app.use(store);

app.mount('#app');

interface DateType {
  data: any;
  returnCode: string;
  success: boolean;
}

let result: DateType;

hRequest
  .get<DateType>({
    url: '/home/multidata'
  })
  .then((res) => {
    result = res;
    console.log(result);
  });
