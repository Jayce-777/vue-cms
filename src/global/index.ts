import { App } from 'vue';
import registerElementPlus from './register-element-plus';

export function globalRegister(app: App): void {
  registerElementPlus(app);
}
