<template>
     <div class="componentWidth pt-52 md:pt-64 lg:w-9/12 w-11/12">
          <div class="w-full whiteText font-extrabold uppercase text-center text-7xl max-md:text-3xl max-md:leading-none">
               <span>{{title}}</span>
          </div>
          <div class="w-full mt-5 whiteText text-center text-xl max-md:text-lg max-md:leading-none">
              {{ description }}
          </div>
          <div class="w-full lg:8/12 flex mx-auto mt-8 md:mt-24">
               <video class="w-full h-full" controls>
                    <source :src="vimeoLink" type="video/mp4">
               </video>
          </div>
          <div class="w-full flex justify-center mt-8 md:mt-20">
               <NuxtLink :to="contactButtonLink" :target="contactButtonTarget" class=" inline-flex px-8 py-4 items-center gap-x-5 yellowBackground max-md:px-4 max-md:py-2">
                    <span class="font-bold uppercase max-md:text-sm">{{ contactButtonText }}</span>
               </NuxtLink>
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
const vimeoInfo = data.value.data.pages.data[0].attributes.pageZone.filter(m => m.__typename === "ComponentPagesVimeo")[0];
const title = vimeoInfo.Title;
const description = vimeoInfo.description;
const vimeoLink = vimeoInfo.EmbedCode;
let contactButton, contactButtonText, contactButtonLink, contactButtonTarget;
if(vimeoInfo.contactButton.length !== 0) {
     contactButton = vimeoInfo.contactButton[0];
     contactButtonText = contactButton.text;
     contactButtonLink = contactButton.url;
     contactButtonTarget = contactButton.target;
}

</script>