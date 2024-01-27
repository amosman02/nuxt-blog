<script setup>
const blog = defineProps([
  "title",
  "image",
  "content",
  "slug"
]);

const excerpt = blog.content.substring(0, 150) + "...";

const localPath = useLocalePath();

</script>

<template>
  <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <a :href="localPath(`/blogs/${slug}`)">
      <img class="rounded-t-lg" :src="blog.image" alt="blog image" />
    </a>
    <div class="p-5">
      <a :href="localPath(`/blogs/${slug}`)">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-sky-900 ">{{ blog.title }}</h5>
      </a>
      <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{{ excerpt }}</p>
      <a :href="localPath(`/blogs/${slug}`)"
        class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-700 rounded-lg hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800">
        {{ $t("blogs.read-more") }}
        <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
          viewBox="0 0 14 10">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9" />
        </svg>
      </a>
    </div>
  </div>
</template>