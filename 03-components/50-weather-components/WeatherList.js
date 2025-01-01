import { defineComponent } from 'vue'
import WeatherListItem from './WeatherListItem.js'

export default defineComponent({
  name: 'WeatherList',

  components: {
    WeatherListItem
  },

  props: {
    cards: {
      type: Array,
      required: true,
    },

    icons: {
      type: Object,
      required: true,
    },
  },

  template: `
    <ul class="weather-list unstyled-list">
      <WeatherListItem
        v-for="(card, index) in cards"
        :key="card"
        :card="card"
        :icons="icons"
      />
    </ul>
  `,
})
