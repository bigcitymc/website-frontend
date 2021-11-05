<template>
  <main>
    <NuxtLink to="/demo">Demo Start Page</NuxtLink>
    <NuxtLink to="/demo/elements">Elements</NuxtLink>
    <NuxtLink to="/demo/components">Komponenten</NuxtLink>
    <hr />
    <Headline level="1" content="Komponenten"></Headline>
    <Headline level="2" content="Posts"></Headline>
    <Headline level="3" content="Text-Post"></Headline>
    <TextPost text="Lorem Ipsum"></TextPost>
  </main>
</template>
<script>
import Headline from "~/components/elements/Headline";
import TextPost from "~/components/post/TextPost";
export default {
  components: {TextPost, Headline}
}
</script>
