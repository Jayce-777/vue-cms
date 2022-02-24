import {
  ElButton,
  ElTabs,
  ElForm,
  ElInput,
  ElCheckbox,
  ElLink
} from 'element-plus';
import { ElTabPane } from 'element-plus/lib/components/tabs';
import { ElFormItem } from 'element-plus/lib/components/form';
import { App } from 'vue';

const elComponents = [
  ElButton,
  ElTabs,
  ElTabPane,
  ElForm,
  ElFormItem,
  ElInput,
  ElCheckbox,
  ElLink
];

export default function (app: App): void {
  elComponents.forEach((cpn) => {
    app.component(cpn.name, cpn);
  });
}
