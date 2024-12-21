import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'CounterApp',

  setup() {
    const count = ref(0);  

    return {
      count,
      minCount: 0,
      maxCount: 5,
    }
  },

  template: `
    <div class="counter">
      <button
        class="button button--secondary"
        type="button"
        aria-label="Decrement"
        :disabled='count === minCount'
        @click='count--'
      >➖</button>

      <span class="count" data-testid="count">{{ count }}</span>

      <button
        class="button button--secondary"
        type="button"
        aria-label="Increment"
        :disabled='count === maxCount'
        @click='count++'
      >➕</button>
    </div>
  `,
})
