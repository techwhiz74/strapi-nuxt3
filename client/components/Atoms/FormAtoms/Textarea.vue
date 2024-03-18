<template>
    <label class="text-left w-full block mb-3 font-bold" :for="item.InputID">
        {{ item.Label }}
        <span v-if="item.Required">*</span>
    </label>
    <p v-if="item.Help">{{ item.Help }}</p>

    <textarea class="w-full rounded border-0 bg-light-grey p-4 text-sm" rows="4" cols="50" id="textarea" placeholder="Text ...." name="textarea"></textarea>


    <!-- <textarea 
     class="w-full rounded border-0 bg-light-grey p-4 text-sm" rows="4" cols="50"
     :id="item.InputID"
     :required="item.Required"
     :placeholder="item.Placeholder"
     :name="item.InputID">
    </textarea> -->
</template>

<script setup>
defineProps(['item']);
</script>
