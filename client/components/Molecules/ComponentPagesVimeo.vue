<template>
    <section class="relative bg-light-grey py-16 lg:pt-20 lg:pb-44 w-full relative lg:bg-left overflow-clip">
        <div v-if="!zone.Description" class="hidden lg:block absolute bottom-28 right-0 w-1/2 md:w-full">
            <svg class="ml-auto right-0" width="535" height="146" viewBox="0 0 535 146" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M533.921 138L78.3348 136.713C37.5818 136.713 8 110.028 8 73.2581V71.4547C8 34.6846 37.5818 8 78.3348 8L534 9.29427" stroke="#EF4D23" stroke-opacity="1" stroke-width="15" stroke-miterlimit="10"/>
            </svg>
        </div>
      <div class="w-full relative lg:w-2/3 lg:mx-auto flex flex-col z-10 px-10">
        <h3 v-if="zone.Title" class="mb-12 text-2xl text-center lg:w-1/2 mx-auto">{{ zone.Title }}</h3>
        <button v-if="!showVideo" @click="playVideo" class="z-10 block relative">
          <div class="absolute left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%]">
            <svg width="72" height="83" viewBox="0 0 72 83" fill="#000" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.834381 41.2981V0.466537L36.2507 20.8784L71.6669 41.2981L36.2507 61.7099L0.834381 82.1296V41.2981Z" fill="#000"/>
            </svg>
          </div>
          <NuxtImg :src="placeholder" alt="Video placeholder" class="z-10 block w-full h-auto mx-auto" />
        </button>

        <div v-if="showVideo" class="w-full z-10 mx-auto" v-html="zone.EmbedCode"></div>

        <div v-if="zone.Description" class="w-full">
          <div class="mt-8 whitespace-pre-wrap" v-html="md.render(zone.Description)"></div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import axios from 'axios';
  import MarkdownIt from 'markdown-it'
  const props = defineProps({ zone: Object, });

  const md = new MarkdownIt();
  </script>

  <script>
  export default {
    data() {
      return {
        showVideo: false,
        placeholder: 'https://via.placeholder.com/1280x720.png?text=play+video',
      }
    },
    methods: {
      playVideo() {
        this.showVideo = !this.showVideo;
      },
    },
    mounted() {
      const embedCode = this.zone.EmbedCode;
      const regex = /vimeo.com\/video\/(\d+)/i;
      const match = embedCode.match(regex);
      const videoId = match ? match[1] : null;

      axios
        .get('https://vimeo.com/api/v2/video/'+ videoId + '.json')
        .then((response) => {
          this.placeholder = response.data[0].thumbnail_large;
        });
    },
  }
  </script>
  