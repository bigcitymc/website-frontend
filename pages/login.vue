<template>
  <main>
    <Headline level='1' content='Login'></Headline>
    <LoginForm></LoginForm>
  </main>
</template>
<script>
import Headline from '~/components/elements/Headline'
import LoginForm from '~/components/form/LoginForm'
export default {
  components: { LoginForm, Headline }
}
</script>
