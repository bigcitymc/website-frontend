<template>
  <div>
    <b-form-select v-model='$colorMode.preference' :options='colors'></b-form-select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      colors: {
        'system': 'System',
        'light': 'Hell',
        'dark': 'Dunkel',
        'darkest': 'Schwarz',
        'flat': 'Flat',
        'flat-dark': 'Flat Dark',
      }
    }
  }
}
</script>
