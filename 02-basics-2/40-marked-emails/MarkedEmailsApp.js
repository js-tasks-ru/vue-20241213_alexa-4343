import { computed, defineComponent, ref } from 'vue'

// Значения взяты из https://jsonplaceholder.typicode.com/comments
export const emails = [
  'Eliseo@gardner.biz',
  'Jayne_Kuhic@sydney.com',
  'Nikita@garfield.biz',
  'Lew@alysha.tv',
  'Hayden@althea.biz',
  'Presley.Mueller@myrl.com',
  'Dallas@ole.me',
  'Mallory_Kunze@marie.org',
  'Meghan_Littel@rene.us',
  'Carmen_Keeling@caroline.name',
  'Veronica_Goodwin@timmothy.net',
  'Oswald.Vandervort@leanne.org',
  'Kariane@jadyn.tv',
  'Nathan@solon.io',
  'Maynard.Hodkiewicz@roberta.com',
  'Christine@ayana.info',
  'Preston_Hudson@blaise.tv',
  'Vincenza_Klocko@albertha.name',
  'Madelynn.Gorczany@darion.biz',
  'Mariana_Orn@preston.org',
  'Noemie@marques.me',
  'Khalil@emile.co.uk',
  'Sophia@arianna.co.uk',
  'Jeffery@juwan.us',
  'Isaias_Kuhic@jarrett.net',
]

export default defineComponent({
  name: 'MarkedEmailsApp',

  setup() {
    let inputEmail = ref();

    const list = computed(() => 
      emails.map(e => ({
        name: e, 
        isMarked: e.includes(inputEmail.value) ? true : false
      }))
    )

    return {
      list,
      inputEmail
    }
  },

  template: `

    <div>
      <div class="form-group">
        <input type="search" aria-label="Search" v-model="inputEmail"/>
      </div>
      <ul aria-label="Emails" v-if="list">
        <li v-for='email in list' 
            :key="email.name"
            :class="{ 'marked': email.isMarked }"        
        >{{ email.name }}</li>
         
        
        <!-- <li class="marked">Jayne_Kuhic@sydney.com</li>  -->
      </ul>
    </div>
  `,
})
