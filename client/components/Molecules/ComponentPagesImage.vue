<template>
  <section>
    <div class="componentWidth py-10">
      <div class="flex items-center gap-6 flex-col">
        <AtomsImage :image="zone.image"/>
        <p class="w-full" v-if="zone.caption">{{ zone.caption }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({zone: Object});
</script>
