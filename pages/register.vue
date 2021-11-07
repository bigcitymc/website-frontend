<template>
  <main>
    <Headline level='1' content='Login'></Headline>
    <RegisterForm></RegisterForm>
  </main>
</template>
<script>
import Headline from '~/components/elements/Headline'
import RegisterForm from '~/components/form/RegisterForm'
export default {
  components: { RegisterForm, Headline }
}
</script>
