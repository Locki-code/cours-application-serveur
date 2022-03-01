let app = Vue.createApp({
  data: function() {
    return {
      isVisible: false
    }
  },
  methods: {
    toggleBox: function() {
      this.isVisible = !this.isVisible
    }
  },
});
app.component('test-box', {
  template: `
                            <div class="box"></div>
                        `,
});
app.component('login-form', {
  template: `
    <form @submit.prevent="handleSubmit">
        <h1>{{ title }}</h1>
        <input type="email" />
        <input type="password" />
        <button>Log in</button>
    </form>
  `,
  data() {
    return {
      title: 'Login Form'
    }
  },
  methods: {
    handleSubmit() {
      console.log('Submitted');
    }
  }
});
app.mount('#app');