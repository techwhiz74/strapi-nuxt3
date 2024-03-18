<template>
  <div class="flex items-center justify-center max-w-3xl mx-auto px-4 h-screen">
    <div>
      <div class="flex flex-col items-center space-y-4">
        <svg xmlns="http://www.w3.org/2000/svg" class="text-green-600 w-28 h-28" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h1 class="text-4xl font-bold">Thank You !</h1>
        <p class="text-center">Thank you for your interest! We will be in touch soon.</p>
        <AtomsPrimaryButton link="/" text="Home"/>
      </div>
    </div>
  </div>
</template>

<script setup>
const {mounted} = await getSettings();

onMounted(async() => {
mounted();
});

const page = {
  attributes: {
      seo: {
          metaTitle: 'Thank you',
          metaDescription: 'Thank you for submitting the form, please wait for our response.',
          keywords: 'Thank you', 
          metaRobots: 'noindex',
          metaSocial: null,
      },
  }
}

setMeta(page);
</script>
