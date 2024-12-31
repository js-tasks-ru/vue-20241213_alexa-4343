import { defineComponent } from 'vue'
import { UiAlert, UiContainer } from '@shgk/vue-course-ui'
import MeetupAgenda from './MeetupAgenda.js'
import MeetupDescription from './MeetupDescription.js'
import MeetupCover from './MeetupCover.js'
import MeetupInfo from './MeetupInfo.js'
import './MeetupView.css'

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupAgenda,
    MeetupDescription,
    MeetupCover,
    MeetupInfo
  },

  props: {
    meetup: {
      type: Object,
      required: true
    }
  },

  template: `
    <div>

      <!-- Обложка митапа -->
      <MeetupCover :title='meetup.title' :image='meetup.image'></MeetupCover>

      <UiContainer>
        <div class="meetup">
          <div class="meetup__content">
            <h2>Описание</h2>

            <!-- Описание митапа -->
            <MeetupDescription :description="meetup.description"></MeetupDescription>

            <h2>Программа</h2>

            <!-- Программа митапа -->
            <!-- Или при пустой программе - сообщение "Программа пока пуста..." в UiAlert -->
            <MeetupAgenda v-if="meetup.agenda && meetup.agenda.length > 0" :agenda="meetup.agenda"></MeetupAgenda>
            <UiAlert v-else-if="!meetup.agenda || meetup.agenda.length === 0">Программа пока пуста...</UiAlert>
            

          </div>
          <div class="meetup__aside">

            <!-- Краткая информация о митапе -->
            <MeetupInfo :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date"></MeetupInfo>

            <div class="meetup__aside-buttons"></div>
          </div>
        </div>
      </UiContainer>
    </div>
  `,
})
