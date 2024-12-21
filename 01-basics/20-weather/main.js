import '@shgk/vue-course-ui/meetups/style.css'
import './weather.css'
import { createApp } from 'vue'
import WeatherApp from './WeatherApp.js'

const vm = createApp(WeatherApp).mount('#app')
window.vm = vm;
