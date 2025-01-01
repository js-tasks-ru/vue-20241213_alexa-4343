import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'
import WeatherList from './WeatherList.js'
import './WeatherApp.css'

export default defineComponent({
  name: 'WeatherApp',

  components: {
    WeatherList
  },

  setup() {
    const cards = getWeatherData()
    const icons = WeatherConditionIcons

    return {
      cards,
      icons
    }
},

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>
      <WeatherList :cards="cards" :icons="icons"/>
    </div>
  `,
})
