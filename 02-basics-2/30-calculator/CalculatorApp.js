import { defineComponent, ref, computed } from 'vue'

function getMath(a, b, operator) {
  switch(operator) {
    case "sum":
      return a + b
    case "subtract":
      return a - b
    case "multiply":
      return a * b
    case "divide":
      return a / b
  }
}

export default defineComponent({
  name: 'CalculatorApp',

  setup() {
    let num1 = ref(0);
    let num2 = ref(0);
    let mathOperators = ref([
      { name: 'sum', icon: '➕'}, 
      { name: 'subtract', icon: '➖'}, 
      { name: 'multiply', icon: '✖'}, 
      { name: 'divide', icon: '➗'}
    ]);
    let picked = ref('sum');

    const result = computed(() => 
      getMath(num1.value, num2.value, picked.value) 
    )

    return {
      num1,
      num2,
      mathOperators,
      picked,
      result,
      getMath
    }
  },

  template: `
    <div class="calculator">
      <input type="number" aria-label="First operand" v-model="num1" />

      <div class="calculator__operators">
        <label v-for="operator in mathOperators" :key="operator.name">
          <input type="radio" name="operator" :value="operator.name" v-model="picked" />
          {{ operator.icon }}
        </label>
      </div>

      <input type="number" aria-label="Second operand" v-model="num2"/>

      <div>=</div>

      <output>{{ result }}</output>
    </div>
  `,
})
