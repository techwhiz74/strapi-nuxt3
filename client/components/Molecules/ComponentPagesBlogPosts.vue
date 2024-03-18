<template>
    <section>
    <div class="mb-8 px-11 py-20 componentWidth">
        <div>
            <h2>{{ zone.Title }}</h2>
            <p>{{ zone.Description }}</p>
        </div>
        <div class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3">
            <div class="flex items-start gap-4 items-stretch" v-for="blog in blogs" :key="blog.id">
            <article
            class="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm flex flex-col flex-grow"
            >
            <AtomsImage v-if="blog.attributes.Image.data" class="h-56 w-full object-cover" :image="blog.attributes.Image" />
                <div class="p-4 sm:p-6 flex flex-col h-full">
                    <h3 class="text-lg font-medium text-gray-900">
                        {{ blog.attributes.Title }}
                    </h3>
                    <p class="mt-2 mb-4 line-clamp-3 text-sm/relaxed text-gray-500">
                        {{ blog.attributes.Description }}
                    </p>

                    <AtomsPrimaryButton class="w-full md:w-max mt-auto" text="Find out more" :link="`/blog/${blog.attributes.url}`" />
                </div>
            </article>
            </div>
        </div>
    </div>
    </section>
</template>

<script setup>
const props = defineProps({zone: Object});

import { blogsQuery } from "~/query/blogs"
 
const graphql = useStrapiGraphQL()

const isPreview = import.meta.env.VITE_PUBLISHED_STATE === 'PREVIEW' ? "PREVIEW" : "LIVE";
const { data } = await useAsyncData('blogs-data', () => graphql(blogsQuery, {"publicationState": isPreview}));
const result = data.value;
  
const blogs = result.data.blogs.data ? result.data.blogs.data : null;

</script>
