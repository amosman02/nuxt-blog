<script setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import { computed } from 'vue'

const { locales, locale, setLocale } = useI18n();

const setLanguage = (newLang) => {
  return setLocale(newLang);
}

</script>

<template>
  <Menu as="div" class="relative inline-block text-left">
    <div>
      <MenuButton
        class="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50">
        {{ $t('language-switcher.language') }}
        <ChevronDownIcon class="-mr-1 h-5 w-5 text-sky-400" aria-hidden="true" />
      </MenuButton>
    </div>

    <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
      <MenuItems
        class="absolute right-0 z-10 mt-2 w-56 origin-top-right divide-y divide-sky-100 rounded-md bg-white shadow-lg ring-1 ring-sky-900 ring-opacity-5 focus:outline-none cursor-pointer">
        <div class="py-1" v-for="lang in locales" :key="lang.code">
          <MenuItem v-slot="{ active }">
          <a @click="setLanguage(lang.code)"
            :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm']">{{
              lang.name
            }}</a>
          </MenuItem>
        </div>
      </MenuItems>
    </transition>
  </Menu>
</template>
