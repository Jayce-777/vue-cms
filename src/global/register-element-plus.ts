import { ElButton } from 'element-plus';
import { App } from 'vue';

const elComponents = [ElButton];

export default function (app: App): void {
  elComponents.forEach((cpn) => {
    app.component(cpn.name, cpn);
  });
}
