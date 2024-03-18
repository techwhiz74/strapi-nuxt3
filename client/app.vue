<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
const {mounted} = await getSettings();

const route = useRoute()

onMounted(() => mounted);

useHead({
  htmlAttrs: {
    lang: 'en',
  }
})

// TODO: change the href to the production URL
useHead(() =>  ({
  link: [
    {
      rel: 'canonical',
      href: 'https://localhost:1337' + route.path
    },
  ],
}))

useHead({
  link : [
    {
      rel: 'preconnect',
      href: 'https://www.googletagmanager.com',
    }
  ],
  link : [
    {
      rel: 'preconnect',
      href: 'https://plausible.io',
    }
  ],
});
</script>
