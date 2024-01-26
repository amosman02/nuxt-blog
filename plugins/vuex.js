import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      blogs: [
        {
          title: "Beginner's Guide to Vue.js: Building Your First App",
          author: "Jane Doe",
          publishDate: "January 26, 2024",
          slug: "beginners-guide-to-vuejs-building-your-first-app",
          image:
            "https://media.geeksforgeeks.org/wp-content/uploads/20240103164616/Vuejs-Tutorial.png",
          content:
            "Vue.js is a progressive JavaScript framework for building user interfaces. It's easy to get started with Vue.js. You can include it in your project using a script tag or install it via npm. Once set up, you can create your first Vue app by defining a Vue instance and specifying the element to mount to. Vue.js allows you to easily bind data to the DOM and create reactive components.",
        },
        {
          title: "Demystifying Vuex: Simplified State Management in Vue.js",
          author: "John Smith",
          publishDate: "January 28, 2024",
          slug: "demystifying-vuex-simplified-state-management-in-vuejs",
          image:
            "https://miro.medium.com/v2/resize:fit:1000/1*9H6N8KnK6bzubOrLswANjg.png",
          content:
            "Vuex is a state management pattern and library for Vue.js applications. It helps manage the state of your Vue.js app in a centralized store, making it easy to access and modify state across your application. Vuex consists of several core concepts, including state, mutations, actions, and getters. By following Vuex's principles, you can effectively manage complex state in your Vue.js apps and ensure a predictable state management flow.",
        },
        {
          title:
            "Deep Dive into Nuxt.js: Building Universal Vue.js Applications",
          author: "Emily Rogers",
          publishDate: "February 2, 2024",
          slug: "deep-dive-into-nuxtjs-building-universal-vuejs-applications",
          image:
            "https://media.geeksforgeeks.org/wp-content/cdn-uploads/20230313161021/NUXT.js-tutorial.png",
          content:
            "Nuxt.js is a framework for building Vue.js applications with server-side rendering (SSR) capabilities. SSR improves performance and SEO by pre-rendering Vue.js components on the server before sending them to the client. Nuxt.js provides out-of-the-box features such as routing, automatic code splitting, and static file serving. With Nuxt.js, you can create universal Vue.js applications that work seamlessly on both the client and server.",
        },
        {
          title: "Streamlining Vue.js Deployment: A Guide to Netlify Hosting",
          author: "Michael Johnson",
          publishDate: "February 5, 2024",
          slug: "streamlining-vuejs-deployment-a-guide-to-netlify-hosting",
          image:
            "https://149842345.v2.pressablecdn.com/wp-content/uploads/2023/08/netlify-cloud-hosting-platform.jpg",
          content:
            "Netlify is a popular platform for deploying Vue.js applications. It offers continuous deployment, custom domains, SSL certificates, and serverless functions. With Netlify, you can easily deploy your Vue.js app to a global content delivery network (CDN), ensuring fast load times for users around the world. Netlify's intuitive interface and seamless integration with Git make deploying Vue.js apps a breeze.",
        },
        {
          title:
            "Elevating Vue.js UIs with Tailwind CSS: A Comprehensive Guide",
          author: "Sarah Williams",
          publishDate: "February 9, 2024",
          slug: "elevating-vuejs-uis-with-tailwind-css-a-comprehensive-guide",
          image:
            "https://www.copycat.dev/blog/wp-content/uploads/2022/11/tailwind.png",
          content:
            "Tailwind CSS is a utility-first CSS framework that helps you quickly build custom designs without writing custom CSS. With Tailwind CSS, you can apply utility classes directly to your HTML elements to style them. Tailwind CSS provides a wide range of utility classes for styling typography, spacing, colors, and more. By leveraging Tailwind CSS in your Vue.js projects, you can create beautiful, responsive user interfaces with minimal effort.",
        },
      ],
    };
  },
  getters: {
    blogs(state) {
      return state.blogs;
    },
    blogBySlug: (state) => (slug) => {
      return state.blogs.find((post) => post.slug === slug);
    },
  },
  mutations: {
    addTodo(state, todo) {
      state.todos.push(todo);
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      commit("addTodo", data);
    },
  },
});

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(store);
});
