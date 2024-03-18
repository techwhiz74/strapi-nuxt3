<template>
    <ul v-if="content.format === 'unordered'">
        <li class="list-disc" v-for="item in content.children">
            {{ item.children[0].text  }}
        </li>
    </ul>

    <ol v-if="content.format === 'ordered'">
        <li class="list-decimal" v-for="item in content.children">
            {{ item.children[0].text  }}
        </li>
    </ol>
</template>

<script setup>
defineProps(['content']);
</script>