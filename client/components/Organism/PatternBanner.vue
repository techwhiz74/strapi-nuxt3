<template>
     <div class="relative">
          <div class="relative">
               <img :src="patternBackground" alt="pattern" class="w-full h-full max-md:h-96 opacity-10">
               <div class="absolute inset-0 bg-radial-gradient"></div>
          </div>
          <div v-if="displayPopup" class="absolute bottom-1/2 translate-y-1/2 w-full animateFaidIn">
               <div class="componentWidth">
                    <div class="w-full p-4 md:px-20 md:py-10 yellowBackground relative">
                         <div class="absolute right-0 top-0">
                              <img :src="bannerImage" alt="brand-element">
                         </div>
                         <div class="lg:flex items-center lg:space-x-32 lg:space-y-0 space-y-3">
                              <div class="lg:w-6/12 w-full">
                                   <div class="font-extrabold leading-none text-start text-4xl max-md:text-2xl max-md:leading-none">
                                        {{ bannerTitle }}
                                   </div>
                                   <div class="mt-3 text-lg leading-none max-md:text-base max-md:leading-none">
                                        {{ bannerDescription }}
                                   </div>
                              </div>
                              <NuxtLink :to="bannerButtonLink" :target="bannerButtonTarget" class="inline-flex px-8 py-4 items-center gap-x-5 blackBackground max-md:px-4 max-md:py-2 max-md:!mt-6">
                                   <span class="whiteText font-bold uppercase max-md:text-sm">{{ bannerButtonText }}</span>
                                   <img :src="bannerButtonIcon" alt="pattern-banner-image">
                              </NuxtLink>
                         </div>
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
let patternBackground, bannerImage, bannerButton, bannerButtonText, bannerButtonLink, bannerButtonTarget, bannerButtonIcon;
if(data.value.data.pages.data.length !== 0) {
  patternBackground = data.value.data.pages.data[0].attributes.Image.data[0].attributes.url;
}
const patternBannerInfo = data.value.data.pages.data[0].attributes.pageZone.filter(m => m.__typename === "ComponentPagesBanner")[2];
const bannerTitle = patternBannerInfo.Title;
const bannerDescription = patternBannerInfo.Description;
if(patternBannerInfo.Image.data) {
  bannerImage = patternBannerInfo.Image.data[0].attributes.url;
}
if(patternBannerInfo.CTA) {
  bannerButton = patternBannerInfo.CTA;
  bannerButtonText = bannerButton.text;
  bannerButtonLink = bannerButton.url;
  bannerButtonTarget = bannerButton.target;
  if(bannerButton.buttonIcon.data.length != 0) {
    bannerButtonIcon = bannerButton.buttonIcon.data[0].attributes.url;
  }
}

</script>
<script>
export default {
  data() {
    return {
      _displayPopup: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  computed: {
    displayPopup() {
      return this._displayPopup;
    }
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.innerHeight + window.pageYOffset;
      const documentHeight = document.documentElement.scrollHeight;
      const distanceFromBottom = 300; // Adjust this threshold as needed

      if (documentHeight - scrollPosition <= distanceFromBottom) {
        this._displayPopup = true;
      } else {
        this._displayPopup = false;
      }
    }
  }
};
</script>

