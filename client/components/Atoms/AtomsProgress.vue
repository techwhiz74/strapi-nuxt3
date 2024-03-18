<template>
    <div v-if="submitted" class="progressBar mb-6">
        <p class="text-dark-blue">Uploaded: {{percent}} %</p>
        <div class="h-[3px] bg-coral transition-all duration-300" :style="'width:' + percent + '%'"></div>
    </div>
</template>

<script setup>
 defineProps(['submitted', 'percent']);
</script>