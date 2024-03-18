<template>
    <div class="pt-64 px-32">
        <h1>Pages</h1>
        <div v-for="page in pages" :key="page.id">
            <NuxtLink :title="page.attributes.url" :to="page.attributes.url">{{ page.attributes.url }}</NuxtLink>
        </div>
    </div>
</template>
  
  <script setup>
  import { pagesQuery } from "~/query/pages"

  const graphql = useStrapiGraphQL();
  const { data } = await useAsyncData('pages', () => graphql(pagesQuery));
  const result = data.value;

  const pages = result.data.pages.data;

  const page = {
    attributes: {
        seo: {
            metaTitle: 'Sitemap',
            metaDescription: '',
            keywords: '', 
            metaRobots: 'noindex',
            metaSocial: null,
        },
    }
  }

  setMeta(page);
  </script>
