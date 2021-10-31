<template>
  <div class='layout layout-default theme-default'>
    <Header></Header>
    <Nuxt />
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'
import '~/assets/themes/default/main.scss';
export default {
  components: { Header, Footer }
}
</script>
