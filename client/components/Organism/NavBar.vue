<template>
  <header aria-label="Site Header">
    <div class="px-0 py-4 lg:pt-16 componentWidth h-screen flex flex-col justify-between">
      <div class="md:flex md:items-center md:justify-between md:flex-wrap">
        <NuxtLink to="/">
          <div class="flex max-md:scale-75 max-md:origin-top-left">
            <img :src="logo" alt="header-logo">
          </div>
        </NuxtLink>
        <nav class="lg:!mt-0 !mt-6">
          <ul class="flex justify-center whiteText text-base font-bold leading-7 gap-x-9">
            <li v-for="(navItem, index) in nav" :key="index">
              <NuxtLink :to="navItem.navLink">{{ navItem.navtext }}</NuxtLink>
            </li>
          </ul>
        </nav>
        <NuxtLink :to="startButton.url" :target="startButton.target" class="lg:!mt-0 !mt-6 inline-flex px-8 py-4 items-center gap-5 yellowBorder max-md:px-4 max-md:py-2 max-md:gap-2">
          <span class="yellowText text-lg font-bold uppercase max-md:text-base">{{ startButton.text }}</span>
          <img :src="startButton.buttonIcon.data[0].attributes.url" alt="button-svg">
        </NuxtLink>
      </div>
      
      <div class="flex flex-col justify-between md:space-y-32 lg:mt-24 sm:space-y-12">
        <div>
          <div class="yellowText text-center text-7xl font-extrabold leading-none uppercase max-md:text-4xl max-md:leading-none">
            {{ title }}
          </div>
          <div class="pt-8 whiteText text-center text-3xl font-bold leading-none max-md:text-lg max-md:leading-none">
            {{ subTitle }}
          </div>
        </div>
        <div class="flex justify-center">
          <div class="md:inline-flex px-8 py-4 items-center gap-5 yellowBackground max-md:text-center max-md:px-4 max-md:py-2 max-md:mt-12">
            <div class="text-gray-900 text-lg font-bold uppercase max-md:text-base">{{ contactButton.text }}</div>
            <NuxtLink class="text-gray-900 text-lg max-md:text-base" :to="`mailto:${contactButton.email}`">{{ contactButton.email }}</NuxtLink>
          </div>
        </div>
      </div>

      <div class="flex justify-center">
        <div class="w-20 h-20">
          <img :src="animation" alt="header-animation">
        </div>
      </div>
    </div>
  </header>

  
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
let navBarInfo;
if(data.value.data.pages.data.length !== 0) {
  navBarInfo = data.value.data.pages.data[0].attributes.pageZone.filter(m => m.__typename === "ComponentPagesHeader")[0];
}
  const title = navBarInfo.title;
  const subTitle = navBarInfo.subtitle;
  let logo, nav, startButton, contactButton, animation;
  if(navBarInfo.logo.data.length !== 0) {
    logo = navBarInfo.logo.data[0].attributes.url
  }
  if(navBarInfo.nav.length !== 0) {
    nav = navBarInfo.nav;
  }
  if(navBarInfo.startButton.length !== 0) {
    startButton = navBarInfo.startButton[0];
  }
  if(navBarInfo.contactButton.length !== 0) {
    contactButton = navBarInfo.contactButton[0];
  }
  if(navBarInfo.animation.data.length !== 0) {
    animation = navBarInfo.animation.data[0].attributes.url;
  }
</script>