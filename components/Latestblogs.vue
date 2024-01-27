<script setup>
const blogs = defineProps(["blogs", "title"]);

const latestBlogs = blogs.blogs;

</script>
<template>
  <div class="mt-16 mb-16">
    <h2 class="text-4xl lg:text-5xl font-bold lg:tracking-tight">{{ $t(blogs.title) }}</h2>
    <div class="container mx-auto place-items-center pt-16 pb-8 md:pt-8 grid gap-4 lg:grid-cols-3">
      <Blogcard v-for="blog in latestBlogs" :title="blog.title" :image="blog.image" :content="blog.content"
        :slug="blog.slug">
      </Blogcard>
    </div>
  </div>
</template>

