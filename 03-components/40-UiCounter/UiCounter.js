import { defineComponent, ref, watchEffect } from 'vue'
import { UiButton } from '@shgk/vue-course-ui'
import './UiCounter.css'

export default defineComponent({
  name: 'UiCounter',

  components: {
    UiButton,
  },

  props: {
    min: {
      type: Number,
      default: () => 0
    },
    
    max: {
      type: Number,
      default: () => Infinity
    },
    
    count: {
      type: Number,
      required: true
    }
  },

  emits: ['update:count'],

  setup(props, { emit }) {
    const localCount = ref(props.count);

    watchEffect(() => {
      localCount.value = props.count;
    })

    // Рекомендуется для практики реализовать обработку событий внутри setup, а не непосредственно в шаблоне
    function decrease() {
      emit('update:count', --localCount.value);
    }

    function increase() {
      emit('update:count', ++localCount.value);
    }

    return {
      localCount,
      decrease,
      increase
    }
  },

  template: `
    <div class="counter">
      <UiButton aria-label="Decrement" :disabled='localCount === min' @click="decrease">➖</UiButton>
      <span class="count" data-testid="count">{{localCount}}</span>
      <UiButton aria-label="Increment" :disabled='localCount === max' @click="increase">➕</UiButton>
    </div>
  `,
})
