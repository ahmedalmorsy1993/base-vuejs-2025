
import TextInput from '@/components/core/forms/TextInput/index.vue';
import type { App } from 'vue';

export const globalComponents = (app: App<Element>) => {
  app.component('TextInput', TextInput)
}