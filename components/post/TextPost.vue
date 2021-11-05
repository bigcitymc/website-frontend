<template>
  <main>
    <PostBase>
      <b-card-text>{{ text }}</b-card-text>
    </PostBase>
  </main>
</template>

<script>
import PostBase from "~/components/post/PostBase";
export default {
  name: "TextPost",
  components: {PostBase},
  props: {
    text: {
      type: String,
      default: ""
    }
  }
}
</script>
