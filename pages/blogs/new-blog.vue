<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
import slugify from 'slugify';

const store = useStore();

const blogTitle = ref("");
const blogImage = ref("");
const blogContent = ref("");

const localPath = useLocalePath();

const addBlog = () => {
  const slug = slugify(blogTitle.value, {
    replacement: '-',
    remove: undefined,
    lower: false,
    strict: false,
    trim: true
  });

  const newBlog = {
    title: blogTitle.value,
    slug: slug,
    image: blogImage.value,
    content: blogContent.value
  }

  store.dispatch("addBlog", { newBlog });
}
</script>

<template>
  <Container>
    <section class="bg-white">
      <div class="py-8 px-4 mx-auto max-w-2xl lg:py-16">
        <h2 class="mb-4 text-xl font-bold text-gray-900">Add a new blog</h2>
        <form @submit="addBlog" :action="localPath('/blogs')">
          <div class="grid gap-4 sm:grid-cols-2 sm:gap-6">
            <div class="sm:col-span-2">
              <label for="title" class="block mb-2 text-sm font-medium text-gray-900">Blog title</label>
              <input type="text" title="title" id="title"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Type blog title" v-model="blogTitle">
            </div>
            <div class="sm:col-span-2">
              <label for="image" class="block mb-2 text-sm font-medium text-gray-900">Blog image URL</label>
              <input type="text" image="image" id="image"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                placeholder="Type image URL" v-model="blogImage">
            </div>
            <div class="sm:col-span-2">
              <label for="content" class="block mb-2 text-sm font-medium text-gray-900">Content</label>
              <textarea id="content" rows="8"
                class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                placeholder="Your content here" v-model="blogContent"></textarea>
            </div>
          </div>
          <button type="submit"
            class="inline-flex items-center px-5 py-2.5 mt-4 sm:mt-6 text-sm font-medium text-center text-white bg-sky-700 rounded-lg focus:ring-4 focus:ring-sky-200">
            {{ $t("blogs.add-blog") }}
          </button>
        </form>
      </div>
    </section>
  </Container>
</template>