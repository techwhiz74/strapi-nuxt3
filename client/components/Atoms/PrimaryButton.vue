<template>
    <NuxtLink :title="text" :to="link" class="px-8 py-3 font-semibold rounded bg-primary bg-opacity-80 transition hover:ease-in text-primaryAcc hover:bg-opacity-100 hover:text-skin-a11y">{{ text }}</NuxtLink>
</template>

<script setup>
defineProps(['link', 'text']);
</script>