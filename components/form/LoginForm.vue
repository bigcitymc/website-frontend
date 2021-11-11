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
import OAuth from '~/bigcity'

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
        await this.$auth.loginWith('refresh', {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          },
          data: OAuth.getAccessTokenData(this.form.username, this.form.password)
        }).then((data) => {
          this.$auth.setUserToken(data.data.access_token, data.data.refresh_token);
          this.$bvToast.toast(`Willkommen zurück!`, {
            autoHideDelay: 5000,
            variant: 'success',
          })
        });

        // await this.$router.push('/login');
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        this.$bvToast.toast(`${e}`, {
          title: 'Beim Login ist ein Fehler aufgetreten',
          noAutoHide: true,
          variant: 'danger',
        })
      }
    }
  }
}
</script>
