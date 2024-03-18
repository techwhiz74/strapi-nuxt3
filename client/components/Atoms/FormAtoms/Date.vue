<template>
    <label class="text-left w-full block mb-3 font-bold" :for="item.InputID">
        {{ item.Label }}
        <span v-if="item.Required">*</span>
    </label>
    <p v-if="item.Help">{{ item.Help }}</p>

    <input
    class="w-full rounded-full border-black bg-light-grey p-4 text-sm"
    :placeholder="item.Placeholder"
    type="date"
    :id="item.InputID"
    :required="item.Required"
    />
</template>

<script setup>
defineProps(['item']);
</script>
