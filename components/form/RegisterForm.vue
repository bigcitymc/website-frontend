<template>
  <b-form @submit.prevent='onSubmit'>
    <b-form-group id="input-group-username" label="Username:" label-for="input-username">
      <b-form-input
        id="input-username"
        v-model="form.username"
        placeholder="Username"
        required
      ></b-form-input>
    </b-form-group>
    <b-form-group id="input-group-email" label="E-Mail-Adresse:" label-for="input-email">
      <b-form-input
        id="input-email"
        v-model="form.email"
        placeholder="E-mail-Adresse"
        type='email'
        required
      ></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Submit</b-button>
  </b-form>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      form: {
        username: "",
        email: "",
      }
    }
  },
  methods: {
    async onSubmit() {
      try {
        await this.$axios.post('user/register?_format=json', {
          name: [this.form.username],
          mail: [this.form.email],
        })
        .then(value => {
          // eslint-disable-next-line no-console
          console.log(value);
        }, error => {
          // eslint-disable-next-line no-console
          console.log(error);
        })
        ;

        // await this.$auth.loginWith('local', {
        //   data: {
        //     name: this.form.username,
        //     pass: this.form.password
        //   }
        // });
        //
        // await this.$router.push('/');
      } catch (e) {
        // eslint-disable-next-line no-console
        console.log(e);
        this.$bvToast.toast(`${e}`, {
          title: 'Bei der Registrierung ist ein Fehler aufgetreten',
          noAutoHide: true,
        })
      }
    }
  }
}
</script>
