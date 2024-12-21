import DefaultTheme from 'vitepress/theme'
import './tailwind.postcss'
import Layout from './Layout.vue'

export default {
  ...DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    // Register global components if needed
  }
}