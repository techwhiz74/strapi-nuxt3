<template>
    <nuxt-img v-if="image.data" provider="imagekit" format="webp" quality="100" :src="image.data.attributes.hash + image.data.attributes.ext" :alt="image.data.attributes.alternativeText" :width="width" :height="height" :placeholder="[0, 25, 75, 5]" />
</template>

<script setup>
const props = defineProps(['image']);

const width = props.image.data.attributes.formats?.small?.width ? props.image.data.attributes.formats?.small?.width : props.image.data.attributes.width;
const height = props.image.data.attributes.formats?.small?.height ? props.image.data.attributes.formats?.small?.height : props.image.data.attributes.height;
</script>