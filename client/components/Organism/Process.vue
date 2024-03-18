<template>
     <div class="componentWidth pb-36 lg:w-9/12 w-11/12">
          <div class="w-full mt-24 md:mt-36 whiteText font-extrabold uppercase text-center text-7xl max-md:text-3xl max-md:leading-none">
               <span>{{ title }}</span>
          </div>
          <div class="w-full lg:8/12 mt-12 md:mt-20 space-y-4">
               <div class="xl:flex justify-between xl:space-x-4 xl:space-y-0 space-x-0 space-y-4">
                    <div class="w-full h-64 yellowBackground flex">
                         <div class="w-5/12 relative">
                              <div class="max-md:hidden absolute processNumber">01</div>
                              <div class="md:hidden absolute processNumberMobile">01</div>
                              
                         </div>
                         <div class="w-7/12 px-7 py-8 flex items-end text-start max-md:p-4">
                              <div>
                                   <div class="font-bold uppercase leading-none text-2xl max-md:text-xl" @click="toggleTextVisibility1"
                                        @mouseover="showText1 = true">{{ content[0].processTitle }}</div>
                                   <div class="mt-3 text-sm max-md:text-xs" @mouseleave="showText1 = false"
                                        :style="{ display: showText1 ? 'block' : 'none' }">
                                        {{ content[0].processText }}
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div class="w-full h-64 whiteBackground flex">
                         <div class="w-5/12 relative">
                              <div class="max-md:hidden absolute processNumber">02</div>
                              <div class="md:hidden absolute processNumberMobile">02</div>
                         </div>
                         <div class="w-7/12 px-7 py-8 flex items-end text-start max-md:p-4">
                              <div>
                                   <div class="font-bold uppercase leading-none text-2xl max-md:text-xl" @click="toggleTextVisibility2"
                                        @mouseover="showText2 = true">{{ content[1].processTitle }}</div>
                                   <div class="mt-3 text-sm max-md:text-xs" @mouseleave="showText2 = false"
                                        :style="{ display: showText2 ? 'block' : 'none' }">
                                        {{ content[1].processText }}
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
               <div class="xl:flex justify-between xl:space-x-4 xl:space-y-0 space-x-0 space-y-4">
                    <div class="w-full h-64 whiteBackground flex">
                         <div class="w-7/12 px-7 py-8 flex items-end text-start max-md:p-4">
                              <div>
                                   <div class="font-bold uppercase leading-none text-2xl max-md:text-xl" @click="toggleTextVisibility3"
                                        @mouseover="showText3 = true">{{ content[2].processTitle }}</div>
                                   <div class="mt-3 text-sm max-md:text-xs" @mouseleave="showText3 = false"
                                        :style="{ display: showText3 ? 'block' : 'none' }">
                                        {{ content[2].processText }}
                                   </div>
                              </div>
                         </div>
                         <div class="w-5/12 relative">
                              <div class="max-md:hidden absolute processReverseNumber">03</div>
                              <div class="md:hidden absolute processReverseNumberMobile">03</div>
                         </div>
                    </div>
                    <div class="w-full h-64 yellowBackground flex">
                         <div class="w-7/12 px-7 py-8 flex items-end text-start max-md:p-4">
                              <div>
                                   <div class="font-bold uppercase leading-none text-2xl max-md:text-xl" @click="toggleTextVisibility4"
                                        @mouseover="showText4 = true">{{ content[3].processTitle }}</div>
                                   <div class="mt-3 text-sm max-md:text-xs" @mouseleave="showText4 = false"
                                        :style="{ display: showText4 ? 'block' : 'none' }">
                                        {{ content[3].processText }}
                                   </div>
                              </div>
                         </div>
                         <div class="w-5/12 relative">
                              <div class="max-md:hidden absolute processReverseNumber">04</div>
                              <div class="md:hidden absolute processReverseNumberMobile">04</div>
                         </div>
                    </div>
               </div>
               <div class="xl:flex justify-between xl:space-x-4 xl:space-y-0 space-x-0 space-y-4">
                    <div class="w-full h-64 yellowBackground flex">
                         <div class="w-5/12 relative">
                              <div class="max-md:hidden absolute processNumber">05</div>
                              <div class="md:hidden absolute processNumberMobile">05</div>
                         </div>
                         <div class="w-7/12 px-7 py-8 flex items-end text-start max-md:p-4">
                              <div>
                                   <div class="font-bold uppercase leading-none text-2xl max-md:text-xl" @click="toggleTextVisibility5"
                                        @mouseover="showText5 = true">{{ content[4].processTitle }}</div>
                                   <div class="mt-3 text-sm max-md:text-xs" @mouseleave="showText5 = false"
                                        :style="{ display: showText5 ? 'block' : 'none' }">
                                        {{ content[4].processText }}
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div class="w-full h-64 whiteBackground flex">
                         <div class="w-5/12 relative">
                              <div class="max-md:hidden absolute processNumber">06</div>
                              <div class="md:hidden absolute processNumberMobile">06</div>
                         </div>
                         <div class="w-7/12 px-7 py-8 flex items-end text-start max-md:p-4">
                              <div>
                                   <div class="font-bold uppercase leading-none text-2xl max-md:text-xl" @click="toggleTextVisibility6"
                                        @mouseover="showText6 = true">{{ content[5].processTitle }}</div>
                                   <div class="mt-3 text-sm max-md:text-xs" @mouseleave="showText6 = false"
                                        :style="{ display: showText6 ? 'block' : 'none' }">
                                        {{ content[5].processText }}
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
const processInfo = data.value.data.pages.data[0].attributes.pageZone.filter(m => m.__typename === "ComponentPagesProcess")[0];
const title = processInfo.title;
let content;
if(processInfo.process.length !== 0) {
     content = processInfo.process;
}

const showText1 = ref(false);
const showText2 = ref(false);
const showText3 = ref(false);
const showText4 = ref(false);
const showText5 = ref(false);
const showText6 = ref(false);

const toggleTextVisibility1 = () => {
    if(window.innerWidth >= 768) { // Check if screen width is greater than or equal to "sm" breakpoint
        showText1.value = !showText1.value;
    }
};
const toggleTextVisibility2 = () => {
     if(window.innerWidth >= 768) { // Check if screen width is greater than or equal to "sm" breakpoint
        showText2.value = !showText1.value;
    }
};
const toggleTextVisibility3 = () => {
     if(window.innerWidth >= 768) { // Check if screen width is greater than or equal to "sm" breakpoint
        showText3.value = !showText1.value;
    }
};
const toggleTextVisibility4 = () => {
     if(window.innerWidth >= 768) { // Check if screen width is greater than or equal to "sm" breakpoint
        showText4.value = !showText1.value;
    }
};
const toggleTextVisibility5 = () => {
     if(window.innerWidth >= 768) { // Check if screen width is greater than or equal to "sm" breakpoint
        showText5.value = !showText1.value;
    }
};
const toggleTextVisibility6 = () => {
     if(window.innerWidth >= 768) { // Check if screen width is greater than or equal to "sm" breakpoint
        showText6.value = !showText1.value;
    }
}; 
onMounted(() => {
    if(window.innerWidth < 768) { // Check if screen width is less than "sm" breakpoint
        showText1.value = true; // Show the text by default on smaller screens
        showText2.value = true;
        showText3.value = true;
        showText4.value = true;
        showText5.value = true;
        showText6.value = true;
    }
});
</script>
