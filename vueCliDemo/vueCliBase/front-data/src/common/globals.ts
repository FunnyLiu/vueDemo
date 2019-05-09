import vue from 'vue'
declare global {
  interface Window {
    Vue: any
  }
}
export let Vue = vue
