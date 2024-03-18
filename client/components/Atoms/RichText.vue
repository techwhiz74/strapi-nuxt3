<template>
    <div v-for="item in content">
        <p v-if="item.type === 'paragraph'">
            {{ item.children[0].text }}
        </p>

        <AtomsHeadings v-if="item.type === 'heading'" :heading="item" />

        <AtomsLists v-if="item.type === 'list'" :content="item" />

        <AtomsQuotes v-if="item.type === 'quote'" :quote="item.children[0].text" />

        <div v-if="item.type === 'code'" v-html="item.children[0].text"></div>

        <nuxt-img v-if="item.type === 'image'" provider="imagekit" format="webp" quality="100" :src="item.image.hash + item.image.ext" :alt="item.image.alternativeText" :width="item.image.width" :height="item.image.height" :placeholder="[0, 25, 75, 5]" />
    </div>
</template>

<script setup>
defineProps(['content']);
</script>