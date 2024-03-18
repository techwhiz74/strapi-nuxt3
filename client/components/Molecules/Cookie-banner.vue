<template>
  <div class="text-center lg:text-left lg:ml-0 mb-4">
    <button @click="showBanner = !showBanner" class="text-xs hover:underline text-white">
    Manage cookies
    </button>
  </div>

  <div v-show="showBanner" id="cookie-banner" :data-ga="ga4code" class="w-full md:w-10/12 lg:w-1/3 fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ease-in transition-all duration-200 z-[11]">
      <div class="rounded-lg bg-white p-4 md:p-8 shadow-2xl">
        <p class="font-bold text-center">Manage cookies</p>
        <p v-if="dataCookieIsAccepted !== null"> Your current cookies is set to {{ dataCookieIsAccepted === true ? "Accepted" : "Declined"}}</p>
        <p v-if="cookieBanner.description" class="mt-2 text-sm text-gray-500">
            {{ cookieBanner.description }}
        </p>
        <div class="mt-4 flex gap-2">
            <button @click="initialize(), enableAnalytics(), cookieIsAccepted = 'Yes', dataCookieIsAccepted = true, showBanner = false"
            type="button"
            class="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-800"
            >
            Accept
            </button>

            <button
            @click="cookieIsAccepted = 'No', dataCookieIsAccepted = false, disableAnalytics(), showBanner = false"
            type="button"
            class="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
            >
            Decline
            </button>

            <NuxtLink to="/cookie-policy" class="text-sm font-medium self-center text-gray-600">
            Read Cookie Policy
            </NuxtLink>
        </div>
      </div>
  </div>
</template>

<script setup>
import { cookieBannerQuery } from '~/query/cookieBanner';
const { ga4code } = await getSettings();
const { gtag, initialize, disableAnalytics, enableAnalytics } = useGtag()

const graphql = useStrapiGraphQL();
const { data } = await useAsyncData('cookie-banner-data', () => graphql(cookieBannerQuery));
const result = data.value;

let cookieBanner = null;

if (result.data.cookiePopups?.data[0]) {
  cookieBanner = result.data.cookiePopups.data[0].attributes;
} else {
  cookieBanner = {
    title: 'Cookies',
    description: 'This website uses cookies to improve your experience. Functional cookies will be on by default, please accept or decline for 3rd party cookies. We use 3rd party tools to track your page visits, actions and demographics.',
  };
}

const cookieIsAccepted = useCookie('cookieIsAccepted');
cookieIsAccepted.value = cookieIsAccepted.value ? cookieIsAccepted.value : 'null';
</script>

<script>
export default {
  data() {
    return {
      dataCookieIsAccepted: useCookie('cookieIsAccepted').value ? true : null,  
      showBanner: false,  
    };
  },
  watch: {
    dataCookieIsAccepted(newValue) {
      if (newValue !== true) {
        this.runFunctionOnDataCookieDeclined();
      }
    },
  },
  methods: {
    runFunctionOnDataCookieDeclined() {
      // Remove google analytics
      const ga4code = document.getElementById('cookie-banner').getAttribute("data-ga");
      const allCookies = document.cookie.split('; ');
      for (let i = 0; i < allCookies.length; i++) {
        const cookie = allCookies[i].split('=');
        const cookieName = cookie[0].trim(); // Trim any leading/trailing spaces in the cookie name
        if (cookieName.startsWith('_ga')) {
          const domain = window.location.hostname;
          const path = "/"; // Set the appropriate path for your use case
          document.cookie = `${cookieName}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; domain=${domain}; path=${path};`;
        }
      }

      this.removeScriptBySrc('https://www.googletagmanager.com/gtag/js?id=' + ga4code)
    },
    removeScriptBySrc(src) {
      var scripts = document.getElementsByTagName("script");

      for (var i = scripts.length - 1; i >= 0; i--) {
        var script = scripts[i];
        if (script.src === src) {
          script.parentNode.removeChild(script);
        }
      }
    }
  },
  async mounted() {
    if (this.dataCookieIsAccepted === null) {
      await this.$nextTick();
      this.showBanner = true;
    } else {
      this.showBanner = false;
    }
  },
};
</script>
