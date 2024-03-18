<<template>
     <div ref="featuredListCompenent" class="bg-cover bg-no-repeat h-full relative">
          <img :src="backgroundImage" alt="background-image" class="absolute w-full h-full inset-0">
          <div class="w-full h-full featurebackground bg-blend-multiply relative">
               <div class="absolute -top-64 right-0 featureClipPath z-10">
                    <img :src="subImage" alt="sub-image" class="filter invert">
               </div>
               
               <div class="componentWidth pt-12 pb-52 md:pt-36 md:pb-64">
                    <div class="lg:flex w-full gap-20 space-y-8 lg:space-y-0">
                         
                         <div class="lg:w-7/12 z-30 order-1 lg:order-2">
                              <div class="whiteText uppercase font-extrabold text-5xl max-md:text-2xl">
                                   <span>{{title}}</span>
                              </div>
                              <hr class="!my-10 w-8/12" style="border: 1px solid #E2EF1E;"/>
                              <div class="yellowText uppercase font-bold text-xl max-md:text-lg">
                                   {{ subtitle }}
                              </div>
                              <ul class="!mt-8 space-y-2">
                                   <li v-for="(contentItem, index) in contentList" :key="index" class="flex items-center gap-x-2">
                                        <img :src="contentItem.Icon.data.length !== 0 ? contentItem.Icon.data[0].attributes.url : ''" alt="content-list-svg">
                                        <span class="text-lg max-md:text-base whiteText leading-none">{{ contentItem.Text }}</span>
                                   </li>
                              </ul>
                         </div>
                         <div class="lg:w-5/12 lg:h-auto z-30 order-2 lg:order-1">
                              <div class="w-full h-full relative">
                                   <div class="absolute inset-0 yellowBackground mix-blend-multiply"></div>
                                   <img :src="image" alt="featured-group-image" class="w-full h-full object-cover">
                              </div>
                         </div>
                    </div>
               </div>
               <div v-if="displayPopup" class="absolute -bottom-36 w-full animateFaidIn">
                    <div class="componentWidth">
                         <div class="w-full h-full">
                              <div class="yellowBackground relative">
                                   <img :src="bannerImage" alt="rectangle" class="absolute w-full h-full inset-0">
                                   <div class="w-full p-4 md:p-16 text-center">
                                        <div class="font-extrabold uppercase text-4xl max-md:text-2xl">
                                             {{ bannerTitle }}
                                        </div>
                                        <NuxtLink :to="bannerButtonLink" :target="bannerButtonTarget" class="mt-7 inline-flex px-8 py-4 items-center gap-x-5 blackBackground max-md:px-4 max-md:py-2">
                                             <span class="whiteText font-bold uppercase max-md:text-sm">{{ bannerButtonText }}</span>
                                             <img :src="bannerButtonIcon" alt="banner-button-icon">
                                        </NuxtLink>
                                   </div>
                              </div>
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
const featuredListInfo = data.value.data.pages.data[0].attributes.pageZone.filter(m => m.__typename === "ComponentPagesFeaturedList")[0];
const title = featuredListInfo.title;
const subtitle = featuredListInfo.subtitle;
let backgroundImage, image, subImage, contentList, bannerImage, bannerButtonIcon;


if(featuredListInfo.backgroundImage.data) {
     backgroundImage = featuredListInfo.backgroundImage.data.attributes.url;
} 
if(featuredListInfo.Image.data.length !== 0) {
     image = featuredListInfo.Image.data[0].attributes.url;
} 
if(featuredListInfo.subImage.data.length !== 0) {
     subImage = featuredListInfo.subImage.data[0].attributes.url;
} 
if(featuredListInfo.contentList.length !== 0) {
     contentList = featuredListInfo.contentList;
} 

const featuredBannerInfo = data.value.data.pages.data[0].attributes.pageZone.filter(m => m.__typename === "ComponentPagesBanner")[1];
const bannerTitle = featuredBannerInfo.Title;
if(featuredBannerInfo.Image.data.length !== 0) {
     bannerImage = featuredBannerInfo.Image.data[0].attributes.url;
}
if (featuredBannerInfo.CTA.buttonIcon.data.length !== 0) {
     bannerButtonIcon = featuredBannerInfo.CTA.buttonIcon.data[0].attributes.url;
}
const bannerButtonText = featuredBannerInfo.CTA.text;
const bannerButtonLink = featuredBannerInfo.CTA.url;
const bannerButtonTarget = featuredBannerInfo.CTA.target;
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
     displayPopup(){
          return this._displayPopup;
     }
  },
  methods: {
    handleScroll() {
      const scrollPosition = window.innerHeight + window.pageYOffset;
      const documentHeight = 2800 || document.documentElement.scrollHeight;
      const bottomThreshold = 50; // Adjust this threshold as needed

      if (scrollPosition >= documentHeight - bottomThreshold) {
        this._displayPopup = true;
      } else {
        this._displayPopup = false;
      }
    }
  }
};
</script>>