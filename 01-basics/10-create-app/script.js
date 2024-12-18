import { defineComponent, createApp } from 'vue';

const App = defineComponent({
    name: 'App',

    data() {},

    methods: {
        formatAsLocalDate() {
            return new Date().toLocaleString(navigator.language, {dateStyle: 'long'})
        },
    },

    template: `
        <div>Сегодня {{ formatAsLocalDate() }}</div> 
    `
});

const app = createApp(App);
const vm = app.mount('#app');

window.vm = vm;