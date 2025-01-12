import { defineComponent, computed } from 'vue'
import { WeatherConditionIcons } from './weather.service.ts'

function formatAsCelsiusTemp(kelvinTemp) {
  return (kelvinTemp - 273.15).toFixed(1)
}

function formatAsPressure(pressure) {
  return (pressure * 0.75).toFixed(0)
}

export default defineComponent({
  name: 'WeatherListItem',

  props: {
    card: {
      type: Object,
      required: true,
    }
  },

  setup(props) {
    const icons = WeatherConditionIcons

    const isDay = computed(() => {
      return props.card.current.sunset > props.card.current.dt && props.card.current.dt >= props.card.current.sunrise
    })

    return {
      icons,
      formatAsCelsiusTemp,
      formatAsPressure,
      isDay
    }
  },

  template: `
    <li class="weather-card" :class="{ 'weather-card--night': !isDay }">
      <div v-if='card.alert' class="weather-alert">
        <span class="weather-alert__icon">⚠️</span>
        <span class="weather-alert__description">{{ card.alert.sender_name }}: {{ card.alert.description }}</span>
      </div>
      <div>
        <h2 class="weather-card__name">{{ card.geographic_name }}</h2>
        <div class="weather-card__time">{{ card.current.dt }}</div>
      </div>
      <div class="weather-conditions">
        <div class="weather-conditions__icon" :title="card.current.weather.description">{{ icons[card.current.weather.id] }}</div>
        <div class="weather-conditions__temp">{{ formatAsCelsiusTemp(card.current.temp) }} °C</div>
      </div>
      <div class="weather-details">
        <div class="weather-details__item">
          <div class="weather-details__item-label">Давление, мм рт. ст.</div>
          <div class="weather-details__item-value">{{ formatAsPressure(card.current.pressure) }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Влажность, %</div>
          <div class="weather-details__item-value">{{ card.current.humidity }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Облачность, %</div>
          <div class="weather-details__item-value">{{ card.current.clouds }}</div>
        </div>
        <div class="weather-details__item">
          <div class="weather-details__item-label">Ветер, м/с</div>
          <div class="weather-details__item-value">{{ card.current.wind_speed }}</div>
        </div>
      </div>
    </li>
  `,
})