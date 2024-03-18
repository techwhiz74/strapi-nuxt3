<template>
    <label class="text-left w-full block mb-3 font-bold" :for="item.InputID">
        {{ item.Label }}
        <span v-if="item.Required">*</span>
    </label>
    <p v-if="item.Help">{{ item.Help }}</p>

    <select class="bg-light-grey border-0 min-w-[150px]" type="select" :name="item.InputID" :id="item.InputID">
        <option v-for="option in options.split(',')" :value="option">{{ option }}</option>
    </select>
</template>

<script setup>
defineProps(['item', 'options']);
</script>
