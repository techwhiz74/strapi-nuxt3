<template>
    <label class="text-left w-full block mb-3 font-bold" :for="item.InputID">
        {{ item.Label }}
        <span v-if="item.Required">*</span>
    </label>
    <p v-if="item.Help">{{ item.Help }}</p>

    <input
    class="w-full rounded-full border-black bg-light-grey p-4 text-sm"
    :placeholder="item.Placeholder"
    type="range"
    :id="item.InputID"
    :required="item.Required"
    :min="min" 
    :max="max"
    />
    <div class="flex w-full justify-between">
        <p>Min: {{ min }}</p>
        <p>Max: {{ max }}</p>
    </div>
</template>

<script setup>
defineProps(['item', 'min', 'max']);
</script>
