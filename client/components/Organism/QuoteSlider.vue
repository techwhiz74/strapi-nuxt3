<template>
     <div class="componentWidth pb-12 md:pb-36">
          <div class="yellowText font-bold uppercase text-center text-xl max-md:text-lg">{{ head }}</div>
          <div class="mt-3 whiteText font-extrabold uppercase text-center text-7xl max-md:text-3xl">{{ title }}</div>
          <swiper
               :slidesPerView="showNumber"
               :spaceBetween="20"
               :pagination="{ clickable: true }"
               :modules="modules"
               class="mt-4 md:mt-16"
               
          >
               <swiper-slide v-for="(item, index) in quote" :key="index" class="pt-16">
                    <div class="h-full px-8 pt-14 pb-8 md:px-16 md:pt-28 md:pb-16 greyBackground relative">
                         <div class="absolute -top-12 z-40">
                              <img :src="item.sliderHeadImage.data.length !== 0 ? item.sliderHeadImage.data[0].attributes.url : ''" alt="slider-image">
                         </div>
                         <div class="flex flex-col justify-between">
                              <div class="whiteText text-lg max-md:text-base">
                                   {{ item.quote }}
                              </div>
                              <div class="mt-8 md:mt-16 flex items-center space-x-4">
                                   <img :src="item.avatar.data.length !== 0 ? item.avatar.data[0].attributes.url : ''" alt="slider-image">
                                   <div>
                                        <span class="whiteText text-lg font-bold max-md:text-base">{{ item.author }}</span><br>
                                        <span class="whiteText text-sm max-md:text-xs">{{ item.company }}</span>
                                   </div>
                              </div>
                         </div>
                    </div>
               </swiper-slide>
          </swiper>
     </div>
</template>

<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination } from 'swiper/modules';
const showNumber = ref(1);
const modules = [Pagination];

onMounted(() => {
     if (typeof window !== 'undefined') {
         showNumber.value = window.innerWidth > 1024 ? 3 : 1;
     }
});

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
const quoteSliderInfo = data.value.data.pages.data[0].attributes.pageZone.filter(m => m.__typename === "ComponentPagesQuoteSlider")[0];
const title = quoteSliderInfo.title;
const head = quoteSliderInfo.head;
let quote;
if(quoteSliderInfo.Quote.length !== 0) {
     quote = quoteSliderInfo.Quote;
}
</script>

<script>
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
};
</script>

<style>
/* Add your custom styles here */
</style>
