<template>
    <div class="mx-auto max-w-screen-xl px-4 pt-64">
        <h1 class="mb-4">Cookie Policy</h1>
        <article class="mb-8">
           <b>What are Cookies?</b> 

            <p>Cookies are small text files that are stored on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide a better user experience. Cookies can be "persistent" or "session" cookies. Persistent cookies remain on your device for a specified period of time or until you manually delete them, while session cookies are deleted when you close your web browser.</p>
            <p class="mt-4"><b>How We Use Cookies</b></p>

            <p>We use Google Analytics, Hotjar and Netlify to collect information about how visitors use our website. These 3rd part companies use cookies to gather anonymous information, such as the number of visitors to our website, the pages they visit, and the actions they take while on the site. This data helps us analyze and improve the performance of our website.</p>
        </article>
        <div v-for="category in cookieList" :key="category.id" class="py-6">
            <h2 class="mb-4">Category: {{ category.attributes.name }}</h2>
            <p>{{ category.attributes.description }}</p>
            <div class="my-4" v-for="cookie in category.attributes.cookies" :key="cookie.id">
                <div v-for="item in cookie" :key="item.id">
                    <h4 class="mt-4">{{ item.attributes.name }}</h4>
                    <p>{{ item.attributes.description }}</p>
                    <p>Duration: {{ item.attributes.duration.days }} day(s)</p>
                    <p>Party: {{ item.attributes.party }}</p>
                    <p>Host: {{ item.attributes.host }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { cookieListQuery } from '~/query/cookieList';

const graphql = useStrapiGraphQL()
const { data } = await useAsyncData('cookie-data', () => graphql(cookieListQuery));
const result = data.value;
let cookieList = null;

if(result.data.cookieCategories?.data.length > 0) {
    cookieList = result.data.cookieCategories.data;
} else {
    console.log('No cookie polices found');
}

const page = {
    attributes: {
        seo: {
            metaTitle: 'Cookie Policy',
            metaDescription: 'Cookie Policy, a collection of all cookies used on our website.',
            keywords: 'Cookie, cookies, policy, Cookie policy', 
            metaRobots: 'index, follow',
            metaSocial: [
                {
                    socialNetwork: 'Facebook',
                    title: 'Facebook | Cookie Policy',
                    description: 'Cookie Policy, a collection of all cookies used on our website.',
                    image: null,
                }
            ]
        },
    }
}

setMeta(page);

const {mounted} = await getSettings();

onMounted(async() => {
  mounted();
});
</script>
