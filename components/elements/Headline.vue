<template>
  <h1 v-if="level === '1'" :id='slug' class="headline headline-1">{{ content }}</h1>
  <h2 v-else-if="level === '2'" :id='slug' class="headline headline-2">{{ content }}</h2>
  <h3 v-else-if="level === '3'" :id='slug' class="headline headline-3">{{ content }}</h3>
  <h4 v-else-if="level === '4'" :id='slug' class="headline headline-4">{{ content }}</h4>
  <h5 v-else-if="level === '5'" :id='slug' class="headline headline-5">{{ content }}</h5>
  <h6 v-else-if="level === '6'" :id='slug' class="headline headline-6">{{ content }}</h6>
</template>

<script>
export default {
  name: "Headline",
  props: {
    level: {
      type: String,
      default: "2"
    },
    content: {
      type: String,
      default: "",
    }
  },
  data() {
    return {
      slug: ''
    }
  },
  created() {
    this.slug = this.content
      .toLowerCase()
      .replace(/^ä$/g, 'ae')
      .replace(/^ö$/g, 'oe')
      .replace(/^ü$/g, 'ue')
      .replace(/^ß$/g, 'ss')
      .replace(/^ $/g, '-')
      .replace(/^_$/g, '-')
      .replace(/^\W.+$/g, '')
    ;
  }
}
</script>
