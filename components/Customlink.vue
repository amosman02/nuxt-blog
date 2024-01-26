<script setup lang="ts">
interface Props {
  href: string;
  size?: "md" | "lg";
  block?: boolean;
  styleName?: "outline" | "primary" | "inverted" | "muted";
  className?: string;
  [x: string]: any;
}

withDefaults(defineProps<Props>(), {
  size: "lg",
  styleName: "primary",
});

const sizes = {
  lg: "px-5 py-2.5",
  md: "px-4 py-2",
};

const styles = {
  outline: "bg-white border-2 border-sky-900 hover:bg-sky-100 text-sky-900",
  primary: "bg-sky-900 text-white hover:bg-sky-800  border-2 border-transparent",
  inverted: "bg-white text-sky-900 border-2 border-transparent",
  muted: "bg-sky-100 hover:bg-sky-200 border-2 border-transparent",
};
</script>

<template>
  <NuxtLink :href="href" :class="[
    'rounded text-center transition focus-visible:ring-2 ring-offset-2 ring-sky-200',
    block && 'w-full',
    sizes[size],
    styles[styleName],
  ]">
    <slot />
  </NuxtLink>
</template>
