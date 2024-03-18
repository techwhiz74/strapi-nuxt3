<template>
    <h1 v-if="heading.level === 1">{{ heading.children[0].text }}</h1>
    <h2 v-if="heading.level === 2">{{ heading.children[0].text }}</h2>
    <h3 v-if="heading.level === 3">{{ heading.children[0].text }}</h3>
    <h4 v-if="heading.level === 4">{{ heading.children[0].text }}</h4>
    <h5 v-if="heading.level === 5">{{ heading.children[0].text }}</h5>
    <h6 v-if="heading.level === 6">{{ heading.children[0].text }}</h6>
</template>

<script setup>
defineProps(['heading']);
</script>