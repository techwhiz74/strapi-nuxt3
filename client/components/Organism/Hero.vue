<template>
  <section
    v-bind:style="content.Image.data ? 'background-image: url(https://ik.imagekit.io/qz2wviunq/' + content.Image.data.attributes.hash + content.Image.data.attributes.ext + ');' : 'nothing'"
    class="relative bg-no-repeat bg-cover bg-center bg-slate-300 lg:bg-top">
    <div class="text-5xl whiteText">background</div>
    <div class="relative mx-auto componentWidth pt-44 px-4 md:px-11 py-20 sm:px-6 lg:flex lg:items-center lg:px-11">
      <div class="max-w-xl text-left w-2/3 lg:py-40">
        <h1 class="text-4xl sm:text-5xl !leading-tight" v-html="content.Title"></h1>

        <p class="mt-4 text-lg max-w-lg sm:text-xl/relaxed">
          {{ content.Description }}
        </p>

        <div class="mt-8 flex flex-wrap gap-4 text-center">
          <AtomsPrimaryButton :style="{ backgroundColor: PrimaryColor, color: PrimaryAccesibleColor }"
            v-if="content.CTA" :link="content.CTA.url" :text="content.CTA.text" class="w-auto" />
        </div>
      </div>
    </div>
  </section>
  
</template>

<script setup>
const { PrimaryColor, PrimaryAccesibleColor } = await getSettings();
const props = defineProps({ content: Object });

if (props.content.Image.data !== null) {
  useHead({
    link: [
      {
        as: 'image',
        href: 'https://ik.imagekit.io/yof11vec3/lightbeam/' + props.content.Image.data.attributes.hash + props.content.Image.data.attributes.ext,
      }
    ]
  })
}

</script>
