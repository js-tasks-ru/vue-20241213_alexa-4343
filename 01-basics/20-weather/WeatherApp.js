import { defineComponent } from 'vue'
import { getWeatherData, WeatherConditionIcons } from './weather.service.ts'

function formatAsCelsiusTemp(kelvinTemp) {
  return (kelvinTemp - 273.15).toFixed(1)
}

function formatAsPressure(pressure) {
  return (pressure * 0.75).toFixed(0)
}

function formatTime(time) {
  let arrTime = time.split(':');
  
  let todayTime = new Date();
  todayTime.setHours(arrTime[0], arrTime[1], 0);

  return todayTime.getTime();
}

function checkIsNight(time) {
  if( formatTime(time.sunset) > formatTime(time.dt) && formatTime(time.dt) >= formatTime(time.sunrise)) {
    return false
  } else {
    return true
  }
}

export default defineComponent({
  name: 'WeatherApp',

  setup() {

      return {
        cards: getWeatherData(), 
        icons: WeatherConditionIcons,
        formatAsCelsiusTemp,
        formatAsPressure,
        checkIsNight
      }
  },

  template: `
    <div>
      <h1 class="title">Погода в Средиземье</h1>

      <ul class="weather-list unstyled-list" v-if="cards && cards.length > 0">
        <li v-for="card in cards" class="weather-card" :class="{ 'weather-card--night': checkIsNight(card.current) }">
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
      </ul>
    </div>
  `,
})
