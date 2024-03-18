<template>
  <div v-if="blog" class="max-w-4xl px-11 mx-auto pb-11 pt-36 lg:pt-52">
      <h1 class="text-2xl lg:text-3xl text-center mb-11">{{ blog.attributes.Title }}</h1>
      <div v-if="blog.attributes.Image.data">
        <AtomsImage class="mx-auto mb-8" :image="blog.attributes.Image" />
      </div>
      <article v-html="blog.attributes.Content" class="whitespace-pre-wrap mb-8"></article>
  </div>
</template>

<script setup>
import { blogQuery } from "~/query/blog"

const route = useRoute()
const {slug} = route.params;
let permalink = Array.isArray(slug) ? slug.join('/') : 'blog';
if (permalink.endsWith('/')) {
  permalink = permalink.substring(0, permalink.length - 1);
}
const graphql = useStrapiGraphQL()

const isPreview = import.meta.env.VITE_PUBLISHED_STATE === 'PREVIEW' ? "PREVIEW" : "LIVE";
const { data } = await useAsyncData('blog-data-' + permalink, () => graphql(blogQuery, { "url": permalink, "publicationState": isPreview }));
const result = data.value;

if (result.data.blogs.data.length === 0) showError({ statusCode: 404, statusMessage: `Page [${permalink}] Not Found` });

const blog = result.data.blogs.data[0] ? result.data.blogs.data[0] : null;

const {mounted} = await getSettings();

if (blog !== null) {
  setMeta(blog);
}

onMounted(async() => {
  mounted();
});
</script>