<template>
    <section class="bg-dark-grey">
        <div class="componentWidth relative text-center relative py-6 lg:flex lg:py-16 lg:px-32 xl:pt-44 xl:pl-56 xl:pb-44">
            <div class="mx-auto w-[114px] lg:w-2/12 xl:mr-12">
                <svg width="212" height="182" class="w-full" viewBox="0 0 212 182" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.3">
                    <path d="M100.4 136C118 124 130.8 108.4 136.8 89.2H113.6V24.8H170.8V71.2C170.8 101.6 154.8 128.8 130.4 143.6H100.4V136ZM21.2 143.6V136C38.8 124 52 108.4 58 89.2H34.8V24.8H92V71.2C92 101.6 76 128.8 51.6 143.6H21.2Z" fill="white"/>
                    </g>
                </svg>
            </div>

            <Swiper class="!pb-16 lg:w-10/12 2xl:!pb-0"
                :modules="[SwiperAutoplay, SwiperEffectCreative, SwiperPagination]"
                :slides-per-view="1"
                :loop="true"
                :effect="'creative'"
                :pagination= "{
                    clickable: true,
                }" 
                :autoplay="{
                    delay: 5000,
                    disableOnInteraction: true,
                }"
                :creative-effect="{
                prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
                }"
            >
                <SwiperSlide v-for="item in zone.Quote" :key="item.id + 'slide'">
                    <blockquote v-if="item.quote" :class="item.quote.length > 100 ? 'w-10/12 md:w-8/12 lg:w-11/12 lg:text-[30px] 2xl:w-8/12 lg:text-left xl:mr-auto lg:mt-4 lg:text-4xl' : 'w-10/12 md:w-8/12 lg:w-9/12 2xl:w-8/12 lg:text-left xl:mr-auto lg:mt-4 lg:text-4xl'">
                        {{ item.quote }}
                        <cite class="w-full mt-8 not-italic text-lg text-primary block">{{ item.author }}</cite>
                    </blockquote>
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
</template>

<script setup>
const props = defineProps({zone: Object});
</script>

<style>
.swiper-slide {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
  font-weight: bold;
  visibility: hidden;
  width: 100% !important;
}
.swiper-slide-visible {
    visibility: visible;
}
.swiper-wrapper {
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}
.swiper-pagination {
    display: flex;
    justify-content: flex-start;
    gap: 1rem;
    bottom: 0;
}

@media screen and (min-width: 1400px) {
    .swiper {
        overflow: visible !important;
    }
    .swiper-pagination {
        bottom: -50px !important;
    }
}

.swiper-pagination-bullet {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 12.5px 24px 12.5px;
    border-color: transparent transparent #ffffff transparent;
    margin: 0 0.5rem;
    transition: all 0.3s ease;
    border-radius: 0 !important;
    background: transparent !important;
}
</style>