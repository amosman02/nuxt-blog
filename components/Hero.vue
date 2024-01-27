<script setup>
const localPath = useLocalePath();
</script>

<template>
  <main class="grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-8">
    <div class="p-24 md:order-1 hidden md:block">
      <img class="rounded-full transition-transform transform hover:scale-125" src="~/assets/img/hero.jpg"
        alt="Technology image" loading="eager" format="avif" width="512" height="512" />
    </div>

    <div>
      <h1 class="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight text-sky-900">
        {{ $t("homepage.hero-heading") }}
      </h1>
      <p class="text-lg mt-4 text-slate-600 max-w-xl">
        {{ $t("homepage.hero-description") }}
      </p>
      <div class="mt-6 flex flex-col sm:flex-row gap-3">
        <Customlink :href="localPath('/blogs')" rel="noopener">{{ $t("homepage.go-blogs") }}
        </Customlink>
        <Customlink size="lg" styleName="outline" rel="noopener" :href="localPath('/about')">{{
          $t("homepage.interested-about-me") }}
        </Customlink>
      </div>
    </div>
  </main>
</template>
