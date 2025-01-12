import type { App } from 'vue'
import { Icon } from '@iconify/vue'

export function registerGlobalComponents(app: App) {
  app.component('Icon', Icon)
}
