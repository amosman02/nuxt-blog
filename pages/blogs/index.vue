<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const blogs = computed(() => {
  return store.getters.blogs;
});
const latestBlogs = blogs.value;
const localPath = useLocalePath();

</script>  

<template>
  <Container>
    <a :href="localPath('/blogs/new-blog')">
      <button type="submit"
        class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200">
        {{ $t("blogs.add-blog") }}
      </button>
    </a>
    <Latestblogs :blogs="latestBlogs" title="navbar.all-blogs"></Latestblogs>
  </Container>
</template>
