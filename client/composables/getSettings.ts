import { settingsQuery } from "~/query/settings"

export const getSettings = async() => {
    const graphql = useStrapiGraphQL();
    const { data } = await useAsyncData('settings-data', () => graphql(settingsQuery))
    
    
    const result = data.value as Result;
    if (!result) {
      console.log('%cCMS not running or no settings found', 'color: green; background: yellow; font-size: 20px');
    }

    if(result.data.globalSetting.data === null) {
      return document.write('<h3>Welcome to Nuxt3 + Strapi! Please configure your global settings in the CMS. Content > Global Settings.</h3>');
    }
   
    const attributes = result.data.globalSetting.data.attributes;
    if (!attributes) {
      console.log('%cCMS not running or no settings found', 'color: green; background: yellow; font-size: 20px');
    }

    const ga4code = attributes.GA4PropertyID
    const address = attributes.Address
    const logo = {
      data: {
        attributes: {
          url: attributes.logo.data ? attributes.logo.data.attributes.url : 'https://placehold.co/200x100',
          alternativeText: attributes.logo.data ? attributes.logo.data.attributes.alternativeText : 'Logo',
          formats: {
            small: {
              width: attributes.logo.data ? attributes.logo.data.attributes.width : 200,
              height: attributes.logo.data ? attributes.logo.data.attributes.height : 100
            }
          },
          hash: attributes.logo.data ? attributes.logo.data.attributes.hash : '',
          ext: attributes.logo.data ? attributes.logo.data.attributes.ext : 'svg',
        }
      }
    }
    const PrimaryColor = attributes.PrimaryColor;
    const SecondaryColor = attributes.SecondaryColor;
    const PrimaryAccesibleColor = getAccessibleColor(PrimaryColor);

    const mounted = async() => {
      await nextTick();
      const isPreview = import.meta.env.VITE_PUBLISHED_STATE === 'PREVIEW' ? true : false;
      // TODO: update data domain to client's domain
      if(!isPreview) {
        useHead({
          script: [
            {
              src: 'https://plausible.io/js/script.tagged-events.js',
              defer: true,
              'data-domain': import.meta.env.VITE_STRAPI_URL,
            },
          ],
        })

        useHead({
          script: [
            {
              innerHTML: 'window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }',
            },
          ],
        })
      }

      const root = document.querySelector(':root') as HTMLElement;
      root.style.setProperty(
          '--color-primary', 
          getRGBColor(PrimaryColor)
      );
      root.style.setProperty(
          '--color-primaryAccColor', 
          getRGBColor(PrimaryAccesibleColor)
      );
      root.style.setProperty(
          '--color-secondary',
          getRGBColor(SecondaryColor)
      );
    };

        return {
            mounted,
            ga4code,
            logo, 
            PrimaryColor,
            PrimaryAccesibleColor, 
            SecondaryColor,
            address,
            linkedinLink: attributes.linkedinLink,
            twitterLink: attributes.twitterLink,
            facebookLink: attributes.facebookLink,
            instagramLink: attributes.instagramLink
        }
}

interface Result {
  data: {
    globalSetting: {
      data: {
        attributes: {
          GA4PropertyID: string;
          PrimaryColor: string;
          SecondaryColor: string;
          linkedinLink: string;
          twitterLink: string;
          facebookLink: string;
          instagramLink: string;
          Address: string;
          logo: {
            data: {
              attributes: {
                url: string;
                alternativeText: string;
                width: number;
                height: number;
                hash: string;
                ext: string;
              }
            }
          }
        }
      }
    }
  };
};