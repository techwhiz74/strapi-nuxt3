<template>
  <div class="bg-black font-inter">
    <div class="background-animation">
      <OrganismNavBar />
      <main>
        <OrganismMediumBanner />
        <OrganismFeaturedList />
        <OrganismVimeo />
        <OrganismProcess />
        <OrganismQuoteSlider />
        <OrganismFeaturedImageText />
        <OrganismPatternBanner />
        <slot />
      </main>
      <!-- <OrganismAllLinks v-if="isPreview" /> -->
    </div>
    <OrganismFooter />
  </div>
</template>

<script setup>
onMounted(() => {
  const radialBackground = document.querySelector(".background-animation");
  radialBackground.addEventListener('mousemove', evt => {
    const rect = radialBackground.getBoundingClientRect();
    const x = evt.clientX - rect.left;
    const y = evt.clientY - rect.top;

    const centerX = (x / rect.width) * 100;
    const centerY = (y / rect.height) * 100;

    radialBackground.style.background = `radial-gradient(circle at ${centerX}% ${centerY}%, #E2EF1E, transparent 350px)`;
  });
});
const isPreview =
  import.meta.env.VITE_PUBLISHED_STATE === 'PREVIEW' ? true : false;
</script>
