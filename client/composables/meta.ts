interface Page{
    attributes: {
        seo: {
            metaTitle: string;
            metaDescription: string;
            keywords: string;
            metaRobots: string;
            metaSocial: any[];
            metaViewport: string;
        }
    }
}

export function setMeta(page: Page) {

    if(page.attributes.seo) {
        useHead ({
            title: page.attributes.seo.metaTitle,
            meta: [
                { hid: 'og:type', property: 'og:type', content: 'website' }, 
                { hid: 'og:url', property: 'og:url', content: import.meta.env.VITE_URL }, 
                { hid: 'og:site_name', property: 'og:site_name', content: import.meta.env.VITE_TITLE },
                { hid: 'description', name: 'description', content: page.attributes.seo.metaDescription},
                { hid: 'keywords', name: 'keywords', content: page.attributes.seo.keywords},
                { hid: 'robots', name: 'robots', content: page.attributes.seo.metaRobots},
            ],
        })

        const socials = page.attributes.seo.metaSocial;

        if(!socials) return;

        socials?.forEach(social => {
            if(social.socialNetwork === 'Twitter') {
                useHead({
                    meta: [
                        { hid: 'twitter:title', name: 'twitter:title', content: social.title },
                        { hid: 'twitter:description', name: 'twitter:description', content: social.description },
                        { hid: 'twitter:image', name: 'twitter:image', content: social.image.data.attributes.url },
                        { hid: 'twitter:card', name: 'twitter:card', content: 'summary_large_image' },
                    ]
                })
            } else if(social.socialNetwork === 'Facebook') {
                useHead({
                    meta: [
                        { hid: 'og:title', property: 'og:title', content: social.title },
                        { hid: 'og:description', property: 'og:description', content: social.description },
                        { hid: 'og:image', property: 'og:image', content: social.image?.data.attributes.url ? social.image.data.attributes.url : '' },
                    ]
                })
            }
        });
    }
}
    
    