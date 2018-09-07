Vue.use(Buefy.default)
  const example = {
    methods: {
      switvh() { return 99; },
      q() { return { codigo: 125 }; },
    },
    data() {
      return {
        activeTab: 0,
        activeSubTab: 0,
        showBooks: false
      }
    }
  }

const app = new Vue(example)

app.$mount('#app')

new Vue ({
  el: '#app-1',
  data:{
    items:[
    'Home',
    'Roadmap',
    'Team',
    'Contact'
    ],
    show:false,
  }
});







