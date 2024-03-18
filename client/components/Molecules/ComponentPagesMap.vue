<template>
    <section class="relative flex flex-wrap mb-10 lg:mb-0" :style="'background-color:' + zone.Color + ';'">
        <div class="componentWidth flex flex-col lg:flex-row">
            <address class="w-full py-10 lg:w-1/3 font-bold not-italic lg:py-32">
                <h3 class="text-2xl mb-4">Address</h3>
                <div v-if="address" v-html="md.render(address)" class="mb-8"></div>
                <AtomsPrimaryButton class="mt-8 w-full block text-center md:text-left md:w-max" :link="zone.GoogleMapUrl" text="Open in Google maps" target="_blank" />
            </address>
            <div class="w-full lg:py-32 lg:w-2/3 lg:flex relative">
                <AtomsImage class="w-full" :image="zone.Image" quality="100" />
                <a :href="zone.GoogleMapUrl" target="_blank" class="absolute top-[50%] left-[49%] transform-x-[-50%]">
                    <svg class="w-8 h-8 lg:h-12 lg:w-12" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M33.52 0C15.01 0 0 15.01 0 33.52C0 52.03 15.01 67.04 33.52 67.04C52.03 67.04 67.04 52.03 67.04 33.52C67.04 15.01 52.04 0 33.52 0ZM36 50.9L39.12 50.93H19.89C19.45 50.93 19.1 50.58 19.1 50.15V44.22C19.1 43.78 19.45 43.44 19.89 43.44H38.14C39.89 43.4 41.29 41.97 41.29 40.21C41.29 39.27 40.87 38.35 40.15 37.74C39.31 37.03 38.44 37.05 37.39 37.05H28.73C26.65 37.05 24.7 36.46 23.05 35.43C20.95 34.12 19.34 32.1 18.54 29.7C18.19 28.64 18 27.5 18 26.32C18 25.14 18.19 24.03 18.54 22.97C18.65 22.65 18.77 22.33 18.9 22.02C20.45 18.47 23.88 15.93 27.92 15.62V15.59H46.68C47.12 15.59 47.47 15.94 47.47 16.37V22.3C47.47 22.73 47.12 23.08 46.68 23.08H28.65C26.9 23.12 25.5 24.55 25.5 26.31C25.5 28.07 26.91 29.5 28.65 29.54C29.47 29.54 37.1 29.52 38.53 29.52C40.47 29.53 42.34 30.06 43.99 31.09C46.16 32.44 47.81 34.55 48.58 37.04C48.89 38.04 49.05 39.1 49.05 40.2C49.05 45.85 45.95 50.9 36.01 50.9" fill="#FF4900"/>
                    </svg>
                </a>
            </div> 
        </div>
    </section>
</template>
  
<script setup>
  const props = defineProps({zone: Object});

  const { address } = await getSettings();

  import MarkdownIt from 'markdown-it'
  const md = new MarkdownIt();
</script>
