<template>
    <section :style="'background-color:' + zone.Color + ';'">
        <div class="componentWidth py-32 px-16 2xl:pr-36 lg:flex items-center justify-between">
            <div class="hidden lg:block lg:w-2/4">
                <AtomsImage :image="zone.Image" quality="80" />
            </div>
            <div class="w-full mb-8 lg:text-left lg:w-2/4 lg:pl-20 xl:pl-32 2xl:pl-0 2xl:pr-20">
                <h2 :class="zone.Color ? 'text-white mb-4 text-2xl whitespace-pre-wrap' : 'mb-4 text-2xl whitespace-pre-wrap'">{{ zone.Title }}</h2>
                <p v-if="zone.Description" :class="zone.Color ? 'text-white whitespace-pre-wrap' : 'text-black whitespace-pre-wrap'">{{zone.Description}}</p>
            </div>
        </div> 
    </section>
</template>
  
<script setup>
  const props = defineProps({zone: Object});
</script>
