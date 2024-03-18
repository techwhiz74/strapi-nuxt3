<template>
  <div v-if="page">
    <OrganismAlert v-if="page.attributes.Alert !== null && page.attributes.Alert.text !== null"
      :content="page.attributes" />
    <OrganismHero :content="page.attributes" />
    <OrganismContentGrid :content="page.attributes" />
  </div>
</template>


<script setup>
import { contentQuery } from "~/query/content"

const route = useRoute();
const { slug } = route.params;
let permalink = Array.isArray(slug) ? slug.join('/') : 'home';
console.log(permalink, 'permalink');
if (permalink.endsWith('/')) {
  permalink = permalink.substring(0, permalink.length - 1);
}
const graphql = useStrapiGraphQL();
const isPreview = import.meta.env.VITE_PUBLISHED_STATE === 'PREVIEW' ? "PREVIEW" : "LIVE";

const { data } = await useAsyncData('page-data-' + permalink,
  () => graphql(contentQuery, { "url": permalink, "publicationState": isPreview }));
const result = data.value;

if (result.data.pages.data.length === 0) {
  alert("No Page")
  try {
    showError({ statusCode: 404, statusMessage: `Page [${permalink}] Not Found` });
  } catch (error) {
    console.log(error);
  }
}

try {
  const page = result?.data?.pages?.data[0];
  setMeta(page);
} catch (error) {
  console.log(error);
}

const { mounted } = await getSettings();

onMounted(async () => {
  mounted();
});
</script>
