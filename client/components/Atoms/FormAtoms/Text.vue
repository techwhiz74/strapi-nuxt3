<template>
    <label class="text-left w-full block mb-3 font-bold" :for="item.InputID">
        {{ item.Label }}
        <span v-if="item.Required">*</span>
    </label>
    <p class="" v-if="item.Help">{{ item.Help }}</p>
    <input
    class="w-full rounded border-0 bg-light-grey p-4 text-sm"
    :placeholder="item.Placeholder"
    :type="type"
    :id="item.InputID"
    :required="item.Required"
    />
</template>

<script setup>
defineProps(['item', 'type']);

/* 
item: {
"Type": "text",
"Label": "First Name",
"InputID": "first-name",
"Help" : "Please enter your first name",
"Placeholder": "First Name",
"Required": true
"Options": "one, two, three, four, five", // for select
"NotAFit": "two, three, four", // if they select one of these redirect 
}
*/
</script>
