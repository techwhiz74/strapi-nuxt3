<!-- // todo: fix the radio button to be a component -->

<template>
    <p class="w-full my-4 items-center font-bold">{{item.Label}}</p>
    <p v-if="item.Help">{{ item.Help }}</p>
    <div class="mr-4 mb-4 flex w-full md:w-1/4 md:mr-0 items-center" v-for="option in item.Options.split(',')">
        <input class="mr-2 w-6 h-6 text-orange-500 bg-gray-100 border-black focus:ring-orange-500 focus:ring-2 " 
        type="radio" :id="item.Label + '-' + option.replace(/ /g,'-')" 
        :name="item.InputID" :value="option.replace(/ /g,'-')">
        <label :for="option.replace(/ /g,'-')">{{option}}</label><br>
    </div>
</template>

<script setup>
defineProps(['item']);
</script>
