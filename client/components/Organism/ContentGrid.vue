<template>
    <div v-for="zone in content.pageZone">
      <component
          v-if="zone.Disabled !== true"
          :key="zone.id"
          :is="dynamicComponent(zone.__typename)"
          :zone="zone"
      />
    </div>
  </template>

  <script setup>
  import {defineAsyncComponent} from 'vue';

  const props = defineProps({
    content: Object,
    title: String,
  });

  const dynamicComponent = (name) => defineAsyncComponent(() =>
      import(`../Molecules/${name}.vue`)
  );
  </script>
