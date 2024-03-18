<template>
  <section>
    <div class="componentWidth py-10 flex flex-col gap-6">
      <div class="font-normal whitespace-pre-wrap" v-html="md.render(zone.richText)"></div>
    </div>
  </section>
</template>

<script setup>
import MarkdownIt from 'markdown-it'

const props = defineProps({zone: Object});
const md = new MarkdownIt();

</script>
