import { defineComponent } from 'vue'
import { getWeatherData } from './weather.service.ts'
import WeatherList from './WeatherList.js'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherList
  },

  setup() {
    const cards = getWeatherData()

    return {
      cards
    }
},

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>
      <WeatherList :cards="cards"/>
    </div>
  `,
})
