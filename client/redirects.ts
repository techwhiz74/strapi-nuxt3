const strapiBaseUri = process.env.VITE_STRAPI_URL || "http://localhost:1337";
const fse = require('fs-extra');
import axios from 'axios';

// Get redirects from Strapi and write to dist/_redirects for Netlify 
// This will not redirect a user using nuxt link or nuxt router ie /blog to /blog2/ on a nuxt link, 

export const getRedirects = () => {
    return axios.get(strapiBaseUri + '/api/redirects?pagination[start]=0&pagination[limit]=-1')
        .then(function (response) {
            let redirects = '';
            
            response.data.data.forEach((redirect: { attributes: { type: string; from: string; to: string; }; }) => {
            if(redirect.attributes.type === 'permanent') {
                redirects += redirect.attributes.from + ' ' + redirect.attributes.to + ' 301 \n';
            } else if (redirect.attributes.type === 'temporary') {
                redirects += redirect.attributes.from + ' ' + redirect.attributes.to + ' 302 \n';
            }
            });
        
            fse.outputFile('dist/_redirects', redirects);
            console.log('/_redirects has been created!');
        })
        .catch(function (error) {
            console.log('Cannot get redirects is it insalled in strapi?', error);
        })
}


