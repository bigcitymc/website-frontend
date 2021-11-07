<template>
  <b-alert v-if='$auth.loggedIn' show variant="danger">Du bist bereits eingeloggt.</b-alert>
  <b-form v-else @submit.prevent='onSubmit'>
    <b-form-group id="input-group-1" label="Username:" label-for="input-1">
      <b-form-input
        id="input-1"
        v-model="form.username"
        placeholder="Username"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-2" label="Passwort:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.password"
        placeholder="Passwort"
        type='password'
        required
      ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Submit</b-button>
  </b-form>
</template>

<script>
export default {
  name: "LoginForm",
  data() {
    return {
      form: {
        username: "",
        password: "",
      }
    }
  },
  methods: {
    async onSubmit() {
      try {
        // await this.$axios.post('user/login?_format=json', {
        //   name: this.form.username,
        //   pass: this.form.password,
        // });

        await this.$auth.loginWith('cookie', {
          data: {
            name: this.form.username,
            pass: this.form.password
          }
        }).then((data) => {
          // eslint-disable-next-line no-console
          console.warn(data.data);
          // eslint-disable-next-line no-console
          console.warn(data.data);
          // eslint-disable-next-line no-console
          console.warn(data.data.current_user);
          this.$auth.setUser(data.data.current_user);
          this.$auth.$storage.setCookie('X-CSRF-Token', data.data.csrf_token);
          this.$bvToast.toast(`Willkommen zurück!`, {
            title: 'Beim Login ist ein Fehler aufgetreten',
            autoHideDelay: 5000,
            variant: 'success',
          })
        });

        await this.$router.push('/');
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        this.$bvToast.toast(`${e}`, {
          title: 'Beim Login ist ein Fehler aufgetreten',
          noAutoHide: true,
        })
      }
    }
  }
}
</script>
