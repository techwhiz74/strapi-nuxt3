<template>
  <section>
    <div class="componentWidth py-10 flex flex-col gap-6">
      <blockquote class="text-xl">{{ zone.quote }}</blockquote>
      <cite class="font-bold not-italic">by {{ zone.author }}</cite>
    </div>
  </section>
</template>

<script setup>
const props = defineProps({zone: Object});
</script>
