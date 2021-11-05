<template>
  <main>
    <b-card header-tag="header" footer-tag="footer">
      <template #header>
        <b-img src="https://picsum.photos/16/16/?image=25"></b-img>
        <NuxtLink to="#">Username</NuxtLink>
        <time class="">05.11.2021 3:01</time>
      </template>
      <slot>PostBase</slot>
      <template #footer>
        <b-button-group>
          <b-dropdown split text="Add Reaction" variant="primary">
            <b-dropdown-item>Like</b-dropdown-item>
            <b-dropdown-item>Dislike</b-dropdown-item>
          </b-dropdown>
        </b-button-group>
        <b-button-group>
          <b-button href="#" variant="primary">Report</b-button>
        </b-button-group>
      </template>
    </b-card>
  </main>
</template>

<script>
export default {
  name: "PostBase",
}
</script>
