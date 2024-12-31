import { defineComponent, ref, onBeforeUnmount } from 'vue'

export default defineComponent({
  name: 'UiClock',

  setup() {
    const currentTime = ref(new Date().toLocaleTimeString(navigator.language, {timeStyle: 'medium'}));

    const updateCurrentTime = () => {
      currentTime.value = new Date().toLocaleTimeString(navigator.language, {timeStyle: 'medium'});
    };

    const updateTimeInterval = setInterval(updateCurrentTime, 1000);

    onBeforeUnmount(() => {
      clearInterval(updateTimeInterval);
    });

    return {
      currentTime
    }
  
  },

  template: `<div class="clock">{{ currentTime }}</div>`
})
