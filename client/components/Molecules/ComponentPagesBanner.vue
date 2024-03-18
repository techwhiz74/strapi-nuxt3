<template>
    <section v-bind:style="zone.Image.data ? 'background-image: url(https://ik.imagekit.io/yof11vec3/lightbeam/' + zone.Image.data.attributes.hash + zone.Image.data.attributes.ext + '); background-color:' + zone.Color + ';' : 'nothing'" :class="zone.Image.data ? 'lg:py-44 py-20 px-10 lg:px-11 bg-no-repeat bg-cover' : 'bg-none md:bg-orange-shape bg-no-repeat bg-right py-20 px-10 lg:px-11 lg:py-11  bg-light-grey'">
        <div class="componentWidth lg:flex items-center justify-between">
            <div class="w-full text-center lg:text-left lg:w-2/3">
                <h3 v-bind:class="zone.Image.data ? 'text-white mb-4 w-full xl:w-9/12' : 'mb-4 text-black'">{{ zone.Title }}</h3>
                <p v-if="zone.Description" v-bind:class="zone.Image.data ? 'text-white mb-4 mt-8' : 'text-black mt-4'">{{ zone.Description }}</p>
                <AtomsPrimaryButton v-if="!zone.Image.data" :text="zone.CTA.text" :link="zone.CTA.url" class="max-w-full mx-auto lg:mx-0 md:max-w-max mt-8" />
            </div>
            <div class="w-full mx-auto lg:w-auto flex justify-center">
                <AtomsPrimaryButton v-if="zone.Image.data" :text="zone.CTA.text" :link="zone.CTA.url" />
            </div>
        </div>
    </section>
  </template>
  
  <script setup>
  const props = defineProps({zone: Object});
  </script>
