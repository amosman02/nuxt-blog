<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const { slug } = useRoute().params;
const store = useStore();
const blog = computed(() => {
  return store.getters.blogBySlug(slug);
});

if (!blog.value) {
  throw createError({ statusCode: 404, statusMessage: "Blog wasn't found!" });
}

onMounted(() => {
  console.log(blog);
});

</script>

<template>
  <main class="pt-8 antialiased">
    <div class="flex justify-between px-4 mx-auto max-w-screen-xl " v-if="blog">
      <article
        class="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <header class="mb-4 lg:mb-6 not-format">
          <h1 class="mb-4 text-3xl font-extrabold leading-tight text-sky-900 lg:mb-6 lg:text-4xl">{{ blog.title }}
          </h1>
          <figure><img :src="blog.image" alt="blog image" class="rounded-md shadow-md">
          </figure>
        </header>

        <p class="lead">{{ blog.content }}</p>
      </article>
    </div>
  </main>
</template>