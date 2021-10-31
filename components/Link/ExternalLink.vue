<template>
  <a class='link link-external' :href='cleanLink' target='_blank'>{{ cleanTitle }}</a>
</template>

<script>
/**
 * Component used to create an anchor tag targeting a blank page.
 */
export default {
  name: "ExternalLink",
  props: {
    /**
     * The link the link should link to.
     */
    link: {
      type: String,
      required: true
    },

    /**
     * The title of the link.
     *
     * If no title is given, the link will be used as title.
     */
    title: {
      type: String,
      default: '',
      required: false
    },
  },
  data() {
    return {
      cleanLink: "",
      cleanTitle: "",
    }
  },
  created() {
    if (this.link !== "") {
      this.cleanLink = this.link;
    }
    if (this.title !== "") {
      this.cleanTitle = this.title;
    } else {
      this.cleanTitle = this.cleanLink;
    }
  }
}
</script>
