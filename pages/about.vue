<script setup>

const TeamImg1 = "https://media.licdn.com/dms/image/D4D03AQFUZUHXntqlCw/profile-displayphoto-shrink_800_800/0/1692520251096?e=1711584000&v=beta&t=-e-YO13rVUaQu8kRAEN_4bVNbynYTEUI5hwJF1cTPb8";
const TeamImg2 = "https://www.notebookcheck.net/uploads/tx_nbc2/03_01.jpg";
const TeamImg3 = "https://img.freepik.com/free-vector/tiny-business-people-with-digital-devices-big-globe-surfing-internet_335657-2449.jpg";

const team = [
  {
    name: "Almonzer Osman",
    title: "about.software-engineer",
    avatar: {
      src: TeamImg1,
      width: 480,
      height: 560,
    },
  },
  {
    name: "about.my-laptop",
    title: "about.operations",
    avatar: {
      src: TeamImg2,
      width: 580,
      height: 580,
    },
  },
  {
    name: "about.internet",
    title: "about.pr",
    avatar: {
      src: TeamImg3,
      width: 580,
      height: 580,
    },
  },
];
</script>

<template>
  <Container>
    <Sectionhead>
      <template v-slot:title>{{ $t("about.about-title") }}</template>
      <template v-slot:desc>{{ $t("about.small-team") }}</template>
    </Sectionhead>

    <div class="flex flex-col gap-3 mx-auto max-w-4xl mt-16">
      <h2 class="font-bold text-3xl text-gray-800">
        {{ $t("about.empower") }}
      </h2>
      <p class="text-lg leading-relaxed text-slate-500">
        {{ $t("about.about-me") }}
      </p>
    </div>
    <div class="grid md:grid-cols-3 gap-10 mx-auto max-w-4xl mt-12">
      <div v-for="item of team" class="group">
        <div class="w-full aspect-square">
          <img :src="item.avatar.src" :width="item.avatar.width" :height="item.avatar.height" format="avif" alt="Team"
            class="w-full h-full object-cover rounded transition group-hover:-translate-y-1 group-hover:shadow-xl" />
        </div>

        <div class="mt-4 text-center">
          <h2 class="text-lg text-gray-800">{{ $t(item.name) }}</h2>
          <h3 class="text-sm text-slate-500">{{ $t(item.title) }}</h3>
        </div>
      </div>
    </div>
  </Container>
</template>
