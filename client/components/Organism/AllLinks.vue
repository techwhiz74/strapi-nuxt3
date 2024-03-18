<template>
    <div class="fixed z-10 left-[-280px] hover:left-0 ease duration-300 transition-all min-h-[300px] w-[300px] bg-white top-1/2 translate-y-[-50%]">
        <div class="relative flex p-8 flex-col">
            <h3 class="text-xl">List of all pages </h3>
            <p class="text-primary mb-4">Shows only on staging</p>
            <button class="rotate-90 absolute text-xl top-1/2 right-[-50%] bg-primary w-full">Show all pages</button>
            <div v-for="page in pages" :key="page.id">
                <NuxtLink class="hover:underline" :title="page.attributes.url" :to="page.attributes.url">{{ page.attributes.url }}</NuxtLink>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { pagesQuery } from "~/query/pages"

const graphql = useStrapiGraphQL();
const { data } = await useAsyncData('pages', () => graphql(pagesQuery));
const result = data.value;

const pages = result.data.pages.data;
</script>
