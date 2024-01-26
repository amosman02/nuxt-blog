<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const blogs = computed(() => {
  return store.getters.blogs;
});
const latestBlogs = blogs.value;

</script>  

<template>
  <Container>
    <Latestblogs :blogs="latestBlogs" title="navbar.all-blogs"></Latestblogs>
  </Container>
</template>
