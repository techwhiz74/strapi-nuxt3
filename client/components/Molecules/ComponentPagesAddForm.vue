<template>
  <section>
    <div ref="pageForm" class="py-11 relative px-10 lg:px-11 bg-dark-grey">
      <MoleculesComponentPagesStandardForm :zone="zone" />
    </div>
  </section>
 
</template>

<script setup>
const props = defineProps({zone: Object});
</script>

<script>
export default {
mounted() {
  // Create a new Intersection Observer instance
  this.intersectionObserver = new IntersectionObserver(this.handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.5, // Adjust this threshold as needed (0.5 means 50% of the element must be in view)
  });

  // Observe the component element
  this.intersectionObserver.observe(this.$refs.pageForm);
},
beforeDestroy() {
  // Clean up the Intersection Observer when the component is destroyed
  if (this.intersectionObserver) {
    this.intersectionObserver.unobserve(this.$refs.pageForm);
    this.intersectionObserver.disconnect();
  }
},
methods: {
  handleIntersection(entries) {
    // Check if the component is intersecting with the viewport
    if (entries[0].isIntersecting) {
      plausible('Form Viewed ' + this.zone.form.data.attributes.FormFields.FormId);
      useHead({
          script:[ { defer: true, src: 'https://www.google.com/recaptcha/api.js?render=' + import.meta.env.VITE_RECAPTCHA_SITE_KEY} ],
      });
      this.intersectionObserver.disconnect();
    }
  },
}
}
</script>
