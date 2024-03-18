<template>
    <div v-if="page">
      <OrganismAlert v-if="page.attributes.Alert !== null && page.attributes.Alert.text !== null" :content="page.attributes" />
      <OrganismHero :content="page.attributes" />
      <OrganismContentGrid :content="page.attributes" />
    </div>
  </template>
  
  <script setup>
  import { contentQuery } from "~/query/content"

  const graphql = useStrapiGraphQL()
  const isPreview = import.meta.env.VITE_PUBLISHED_STATE === 'PREVIEW' ? "PREVIEW" : "LIVE";
  const { data } = await useAsyncData('blog-data', () => graphql(contentQuery, { "url": 'blog', "publicationState": isPreview }));
  const result = data.value;
  
  if (result.data.pages.data.length === 0) showError({ statusCode: 404, statusMessage: `Page [${permalink}] Not Found` });

  const page = result.data.pages.data[0];

  setMeta(page);

  const {mounted} = await getSettings();

  onMounted(async() => {
    mounted();
  });
  </script>
