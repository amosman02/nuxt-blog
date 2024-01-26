<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const blogs = computed(() => {
  return store.getters.blogs;
});
const latestBlogs = blogs.value.slice(0, 3);

</script>

<template>
  <Container>
    <Hero></Hero>
    <Latestblogs :blogs="latestBlogs" title="homepage.latest-blogs"></Latestblogs>
    <Logos></Logos>
    <Cta></Cta>
  </Container>
</template>