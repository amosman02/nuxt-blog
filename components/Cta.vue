<template>
  <div class="bg-sky-900 px-20 py-20 mt-20 mx-auto max-w-5xl rounded-lg flex flex-col items-center text-center">
    <h2 class="text-white text-3xl md:text-6xl">{{ $t("homepage.interested-about-my-work") }}</h2>
    <p class="text-sky-500 mt-4 text-lg md:text-xl">
      {{ $t("homepage.contact-me-now-title") }}
    </p>
    <div class="flex mt-5">
      <Customlink href="/contact" styleName="inverted">{{ $t("homepage.contact-me-now-cta") }}</Customlink>
    </div>
  </div>
</template>
