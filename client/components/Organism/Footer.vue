<template>
  <footer aria-label="Site Footer" class="text-white" style="background-color: #53535333;">
    <div class="componentWidth py-8 md:py-14 mx-auto space-y-8 sm:px-6 lg:space-y-16 lg:px-8">
      <div class="md:flex items-end justify-between flex-wrap space-y-0 sm:space-y-4">
        <div>
          <NuxtLink to="/">
            <img :src="logo" alt="footer-logo">
          </NuxtLink>
        </div>
        <nav class="max-md:hidden">
          <ul class="flex justify-center font-normal text-base leading-6 gap-x-9">
            <li v-for="(item, index) in nav" :key="index">
              <NuxtLink :to="item.navLink">{{ item.navtext }}</NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
      <hr class="hidden md:block !mt-6 !mb-6 w-full" style="border-color: #53535399;"/>
      <div class="!my-6 w-full">
        <ul class="md:flex items-center w-full justify-center gap-x-12">
            <li v-for="(item, index) in contact" :key="index">
                <NuxtLink to="/" class="flex items-center">
                  <img :src="item.contactIcon.data.length !== 0 ? item.contactIcon.data[0].attributes.url : ''" alt="contact-icon">
                  <span class="leading-none">{{ item.contactInformation }}</span>
                </NuxtLink>
            </li>
          </ul>
      </div>
      <hr class="hidden md:block !mt-6 !mb-6 w-full" style="border-color: #53535399;"/>
      <div class="md:flex items-center w-full md:justify-between text-center px-2 pr-7 pl-4 !mt-0 font-normal text-xs leading-5 space-y-0 sm:space-y-4">
          <ul class="flex justify-center gap-x-3">
            <li v-for="(item, index) in social" :key="index" class="flex w-10 h-10 p-2 flex-col justify-center items-center gap-2 rounded-full yellowBackground">
              <NuxtLink to="/"><img :src="item.socialIcon.data ? item.socialIcon.data.attributes.url : ''" alt="contact-icon"></NuxtLink>
            </li>
          </ul>
          <div>
            <span class="leading-none">{{ copywrite }}</span>
          </div>
          <div class="flex justify-center gap-x-3 max-md:!mt-2 leading-none">
            <span>{{ policy }}</span>
            <span class="w-1 border-r border-gray-300 leading-none"></span>
            <span>{{ service }}</span>
          </div>
      </div>
    </div>
  </footer>
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
const footerInfo = data.value.data.pages.data[0].attributes.pageZone.filter(m => m.__typename === "ComponentPagesFooter")[0];
let logo, nav;
if(footerInfo.logo.data.length !== 0) {
  logo = footerInfo.logo.data[0].attributes.url;
}
if(footerInfo.nav.length !== 0) {
  nav = footerInfo.nav;
}
const contact = footerInfo.contact;
const social = footerInfo.social;
const copywrite = footerInfo.copywrite;
const policy = footerInfo.policy;
const service = footerInfo.service;

</script>

