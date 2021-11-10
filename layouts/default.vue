<template>
  <div class='layout layout-default'>
    <Header></Header>
    <Nuxt />
    <pre>{{ $store.state }}</pre>
    <pre>{{ $auth.user }}</pre>
    <pre v-if='isAuthenticated'>{{ loggedInUser.name }}</pre>
    <Footer></Footer>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  components: { Header, Footer },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  created() {
    // eslint-disable-next-line no-console
    console.debug(this.$auth);
  }
}
</script>
