<template>
    <section class="tabs py-11 px-10 lg:px-11 lg:py-14 xl:px-32">
        <h2 class="text-center mb-6 2xl:max-w-[80%] mx-auto">{{zone.Title}}</h2>
        <h4 class="text-center text-primary text-lg mb-6 hidden lg:block">{{zone.SubTitle}}</h4>

        <tabs class="flex-col w-10/12 mx-auto mt-20 hidden lg:flex">
            <tab v-for="item in zone.TabFields" :key="item.id + 'tab'" :name="item.TabTitle" >
                <div class="w-full lg:w-1/3 flex justify-center">
                        <AtomsImage loading="lazy" :image="item.Image" class="w-full max-w-[125px]" />
                </div>
                <div class="w-full flex flex-col gap-6 lg:w-2/3">
                    <h3 class="text-primary text-2xl" v-if="item.Title">
                        {{ item.Title }}
                    </h3>
                    <AtomsRichText :content="item.Description" v-if="item.Description" />
                </div>
            </tab>
        </tabs>


        <div class="lg:hidden mobile">
            <h4 class="text-center text-primary text-lg mb-6 lg:hidden">Swipe to explore our plans</h4>
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
                <SwiperSlide class="flex flex-col" v-for="item in zone.TabFields" :key="item.id + 'slide'">
                    <h4 class="text-lg text-purple bg-white rounded-md w-full text-center py-6">{{item.TabTitle}}</h4>
                    <div class="w-full flex justify-center">
                        <AtomsImage loading="lazy" :image="item.Image" class="w-full max-w-[125px]" />
                    </div>
                    <div class="w-full flex flex-col gap-6">
                        <h3 class="text-primary text-center text-2xl" v-if="item.Title">
                            {{ item.Title }}
                        </h3>
                
                        <p class="text-center">{{ item.Description }}</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>

        <div class="text-center flex justify-center w/1-3 mx-auto mt-10">
            <AtomsPrimaryButton v-if="zone.TabsCTA" :link="zone.TabsCTA.url" :text="zone.TabsCTA.text" class="w-auto"/>
        </div>
    </section>
</template>

<script setup>
  import {Tabs, Tab} from 'vue3-tabs-component';

  const props = defineProps({zone: Object});
</script>

<style>
.tabs-component-tabs {
    display: flex;
    gap: 2rem;
    align-items: center;
    width: 100%;
    justify-content: center;
}

.tabs-component-tab a {
    color: #412E8B;
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
    padding: 22px 40px;
    background-color: #69539f;
    border-radius: 5px;
    min-width: 200px;
    text-align: center;
    position: relative;
    display: block;
}

.tabs-component-tab a:hover {
    background-color: #fff;
    color: #69539f;
}

.tabs-component-tab.is-active a::after {
    content: "";
    width: 80%;
    background-color: #69539f;
    position: absolute;
    bottom: -36px;
    height: 36px;
    left: 50%;
    transform: translate(-50%, 0);
}

.is-active a {
    background-color: #F68C33;
    color: #fff;
}

.tabs-component-panel {
    display: flex;
    gap: 2rem;
    align-items: center;
    width: 100%;
    justify-content: center;
    margin-top: 36px;
    border: 6px solid #69539f;
    padding: 120px 60px;
    border-radius: 20px;
}


.tabs .swiper-slide {
  display: flex;
  gap: 2rem;
  flex-direction: column;
  align-items: center;
  height: auto;
  font-weight: bold;
  visibility: hidden;
  width: 100% !important;
  border: 6px solid #69539f;
  padding: 25px;
  border-radius: 10px;
}
.tabs .swiper-slide-visible {
    visibility: visible;
}
.tabs .swiper-wrapper {
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
}
.tabs .swiper-pagination {
    display: flex;
    justify-content: center;
    gap: 1rem;
    bottom: 0;
}

@media screen and (min-width: 821px) {
    .tabs .swiper-pagination {
        display: none !important;
    }
}

.tabs .swiper-pagination-bullet {
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