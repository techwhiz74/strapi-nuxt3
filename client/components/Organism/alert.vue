<template>
    <div v-if="content.Alert.type === 'bottom'">
        <div class="fixed inset-x-0 bottom-0">
            <div class="bg-slate-400 px-4 py-3 text-white">
                <p class="text-center text-sm font-medium">
                    {{ content.Alert.text }}
                    <a :href="content.Alert.Link.url" :target="content.Alert.Link.target" class="inline-block underline">{{ content.Alert.Link.text }}</a>
                </p>
            </div>
        </div>
    </div>
    <div v-else class="bg-slate-400 px-4 py-3 text-white">
        <p class="text-center text-sm font-medium">
            {{ content.Alert.text }}
            <a :href="content.Alert.Link.url" :target="content.Alert.Link.target" class="inline-block underline">{{ content.Alert.Link.text }}</a>
        </p>
    </div>
</template>

<script>
 export default {
    props: {
      content: Object,
    }
  };
</script>
