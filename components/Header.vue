<template>
  <div class='header'>
    <b-navbar toggleable="lg" fixed='top'>
      <b-navbar-brand href="/">BigCity</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <ThemeSwitch></ThemeSwitch>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
import ThemeSwitch from '~/components/ThemeSwitch'
export default {
  components: { ThemeSwitch }
}
</script>
