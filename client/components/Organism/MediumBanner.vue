<template>
     <div class="relative">
          <div class="relative w-full h-full">
               <img :src="imageDesktop" alt="medium-banner-image-desktop"
                    class="max-md:hidden w-full h-full object-cover">
               <img :src="imagemobile" alt="medium-banner-image-mobile"
                    class="md:hidden w-full h-full object-cover">
               <div class="absolute inset-0 flex items-center bannerLinearGradient"></div>
          </div>

          <div
               class="absolute bottom-1/2 translate-y-1/2 text-justify yellowText text-3xl font-bold leading-none max-md:text-lg max-md:leading-none">
               <div class="md:w-5/12 md:ml-24 w-10/12 m-auto">
                    {{ description }}
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
const mediumBannerInfo = data.value.data.pages.data[0].attributes.pageZone.filter(m => m.__typename === "ComponentPagesBanner")[0];
const description = mediumBannerInfo.Description;
let imageDesktop, imagemobile;
if(mediumBannerInfo.Image.data[0]) {
     imageDesktop = mediumBannerInfo.Image.data[0].attributes.url;
}
if(mediumBannerInfo.Image.data[1]) {
     imagemobile = mediumBannerInfo.Image.data[1].attributes.url;
}

</script>