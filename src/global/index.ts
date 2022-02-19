import { App } from 'vue';
import registerElementPlus from './register-element-plus';

export function registerCompoents(app: App): void {
  registerElementPlus(app);
}
