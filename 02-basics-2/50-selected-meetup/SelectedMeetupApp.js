import { defineComponent, ref, onMounted, onUpdated } from 'vue'
import { getMeetup } from './meetupsService.ts'

export default defineComponent({
  name: 'SelectedMeetupApp',

  setup() {
    let pagination = ref([1, 2, 3, 4, 5]);
    let picked = ref(1);
    let meetup = ref(null);


    onMounted(async() => {
      meetup.value = await getMeetup(picked.value)
    })

    onUpdated(async() => {
      meetup.value = await getMeetup(picked.value)
    })

    return {
      pagination,
      picked,
      meetup
    }
  },

  template: `
    <div class="meetup-selector">
      <div class="meetup-selector__control">
        <button class="button button--secondary" 
                type="button" 
                :disabled='picked === pagination[0]'
                @click='picked--'
        >Предыдущий</button>

        <div class="radio-group" role="radiogroup">

          <div class="radio-group__button" v-for="paginationBtn in pagination">
            <input
              :id="\`meetup-id-$\{paginationBtn}\`"
              class="radio-group__input"
              type="radio"
              name="meetupId"
              :value="paginationBtn"
              v-model="picked"
            />
            <label :for="\`meetup-id-$\{paginationBtn}\`" class="radio-group__label">{{ paginationBtn }}</label>
          </div>
        </div>

        <button class="button button--secondary" 
                type="button"
                :disabled='picked === pagination.length'
                @click='picked++'
        >Следующий</button>
      </div>

      <div class="meetup-selector__cover" v-if="meetup">
        <div class="meetup-cover">
          <h1 class="meetup-cover__title">{{ meetup.title }}}</h1>
        </div>
      </div>
      <div v-else>Загрузка...</div>

    </div>
  `,
})
