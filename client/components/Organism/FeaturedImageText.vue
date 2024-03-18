<template>
     <div class="componentWidth pt-36">
          <div class="lg:flex justify-between">
               
               <div class="lg:w-6/12 w-full m-auto pb-12 md:p-12 relative order-1 lg:order-2">
                    <div class="absolute -top-24 -left-24">
                         <img :src="subImage" alt="featured-sibImage" class="w-full h-full object-cover">
                    </div>
                    <div class="w-full text-start whiteText font-extrabold uppercase text-7xl max-md:text-3xl">
                         <span>{{ title }}</span>
                    </div>
                    <div class="mt-8 w-full text-justify whiteText text-lg leading-6 max-md:text-base max-md:leading-none">
                         {{ description }}
                    </div>
                    <div class="mt-8 w-full yellowText font-bold uppercase text-xl max-md:text-lg max-md:leading-none">
                         {{ subtitle }}
                    </div>
                    <NuxtLink :to="button.url" :target="button.target" class="mt-8 inline-flex px-8 py-4 gap-5 items-center yellowBorder max-md:px-4 max-md:py-2">
                         <span class="yellowText font-bold uppercase text-base max-md:text-sm">{{ button.text }}</span>
                         <img :src="buttonIcon" alt="featured-button-icon">
                    </NuxtLink>
               </div>
               <div class="lg:w-6/12 w-full order-2 lg:order-1">
                    <div class="w-full h-full md:-ml-12">
                         <img :src="image" alt="featured-image" class="w-full h-full object-cover">
                    </div>
               </div>
          </div>
          
     </div>
</template>

<script setup>
import { contentQuery } from "~/query/content"
const route = useRoute();
const { slug } = route.params;
let permalink = Array.isArray(slug) ? slug.join('/') : 'home';
if (permalink.endsWith('/')) {
  permalink = permalink.substring(0, permalink.length - 1);
}
const isPreview = import.meta.env.VITE_PUBLISHED_STATE === 'PREVIEW' ? "PREVIEW" : "LIVE";

const graphql = useStrapiGraphQL();
const { data } = await useAsyncData('navBar',
  () => graphql(contentQuery, { "url": permalink, "publicationState": isPreview }));
const featuredImageTextInfo = data.value.data.pages.data[0].attributes.pageZone.filter(m => m.__typename === "ComponentPagesFeaturedImageText")[0];
let button, buttonIcon, image, subImage;
const title = featuredImageTextInfo.title;
const subtitle = featuredImageTextInfo.subtitle;
const description = featuredImageTextInfo.Description;

if(featuredImageTextInfo.button.length !== 0) {
     button = featuredImageTextInfo.button[0];
     if(button.buttonIcon.data.length !== 0) {
          buttonIcon = button.buttonIcon.data[0].attributes.url;
     }
}

if(featuredImageTextInfo.Image.data.length !== 0) {
     image = featuredImageTextInfo.Image.data[0].attributes.url;
}
if(featuredImageTextInfo.subImage.data.length !== 0) {
     subImage = featuredImageTextInfo.subImage.data[0].attributes.url;
}

</script>