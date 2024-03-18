'use strict';

module.exports = {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) {},

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap({ strapi }) {
    // var convert = require('xml-js');
    // var xml = require('fs').readFileSync('src/data.xml', 'utf8');
    // var result = convert.xml2json(xml, { compact: true, spaces: 4 });
    // const data = JSON.parse(result);
    // const axios = require('axios');

    // let hostedImages = [];

    // const getImages = async () => {
    //   try {
    //     const response = await axios.get('http://localhost:1337/api/upload/files');
    //     const data = response.data;
    //     return data;
    //   } catch (error) {
    //     console.error(error);
    //     return null;
    //   }
    // };

    // const replaceImg = (content, hostedImages) => {

    //   // Todo: Update this to correct imagekit URL
    //   const imagekitUrl = 'https://ik.imagekit.io/qz2wviunq/';
    //   // Step 1: Find all the image URLs in the content
    //   const imageUrls = content.match(/<img[^>]+src="([^">]+)"/g);
    
    //   if (imageUrls) {
    //     // Step 3: Extract hash and extension from each image URL
    //     imageUrls.forEach((imageUrl) => {
    //       const urlParts = imageUrl.match(/src="([^"]+)"/); 

    //       if (urlParts) {
    //         const imageUrl = urlParts[1];
    //         const urlName = imageUrl.split("/").pop();
            
    //         // Step 4: Find the corresponding hosted image object
    //         const hostedImage = hostedImages.find((image) => image.name === urlName);
    
    //         if (hostedImage) {
    //           // Step 5: Replace the image URL in the content
    //           const newUrl = imagekitUrl + hostedImage.hash + hostedImage.ext;
    //           content = content.replace(imageUrl, `src="${newUrl}"`);
    //         }
    //       }
    //     });
    //   }

    //   return content;
    // };

    // const findImage = (content, hostedImages) => {
    //   // Step 1: Find the first the image URLs in the content
    //   const imageRegex = /<img[^>]+src="([^">]+)"/;
    //   const match = content.match(imageRegex);

    //   if (match) {
    //     const imageUrl = match[1];
    //     const urlName = imageUrl.split("/").pop();
    //     // Find the corresponding hosted image object
    //     const hostedImage = hostedImages.find((image) => image.name === urlName);

    //     if(hostedImage === undefined) {
    //       console.log('Image not found in strapi:', urlName);
    //     }

    //     return hostedImage;
    //   } else {
    //     console.log('No image found in the text.');
    //     return null;
    //   }

    // };
    
    // const sortData = async () => {
    //   // Get the images from strapi
    //   hostedImages = await getImages();

    //   // Go through the data in the XMl file
    //   data.rss.channel.item.forEach(entry => {

    //     // Get the link and remove the trailing slash if it exists
    //     var linkText = entry.link._text;
    //     if (linkText.endsWith('/')) {
    //       linkText = linkText.substring(0, linkText.length - 1);
    //     }
    //     const link = linkText.substring(linkText.lastIndexOf('/') + 1);

    //     // Replace the image URLs in the content and find the featured image on strapi
    //     const content = replaceImg(entry['content:encoded']._cdata, hostedImages);
    //     const featuredImage = findImage(entry['content:encoded']._cdata, hostedImages);

    //     // Get all the tags and convert them to a string
    //     let tags = [];
    //     if (entry.category) {
    //       entry.category.forEach(tag => {
    //         tags.push(tag._attributes.nicename);
    //       });
    //     }

    //     const tagsString =tags.toString();
  
    //     // Get the SEO description and image
    //     let seoDescription = entry.description._text ? entry.description._text : entry.title._cdata;
    //     let seoImage = featuredImage;
    //     let seoKeywords = '';
    //     let seoTitle = entry.title._cdata;
    //     const seoData = entry['wp:postmeta'];
  
    //     seoData.forEach(entry => {
    //       if (entry['wp:meta_key']._cdata === '_yoast_wpseo_metadesc') {
    //         seoDescription = entry['wp:meta_value']._cdata;
    //       }

    //       if(entry['wp:meta_key']._cdata === '_yoast_wpseo_title') {
    //         seoTitle = entry['wp:meta_value']._cdata;
    //       }

    //       if(entry['wp:meta_key']._cdata === '_yoast_wpseo_opengraph-image') {
    //         const metaImage = '<img src="' + entry['wp:meta_value']._cdata + '" />';
    //         seoImage = findImage(metaImage, hostedImages);
    //       }

    //       if(entry['wp:meta_key']._cdata === '_yoast_wpseo_focuskw') {
    //         seoKeywords = entry['wp:meta_value']._cdata;
    //       }
    //     });
  
    //     strapi.service('api::blog.blog').create({
    //       populate: ['Image'],
    //       data: {
    //         Title: entry.title._cdata,
    //         publishedAt: Date.parse(entry.pubDate._text),
    //         pubDate: entry.pubDate._text,
    //         url: link,
    //         Description: entry.description._text,
    //         Content: content,
    //         Image: { id: featuredImage ? featuredImage.id : null },
    //         Tags: tagsString,
    //         seo: {
    //           metaTitle: seoTitle,
    //           metaDescription: seoDescription,
    //           metaImage: { id: seoImage ? seoImage.id : null},
    //           keywords: seoKeywords,
    //         },
    //       },
    //       },
    //     )
    //       .then((createdBlog) => {
    //         // Handle the successful creation of the blog entry
    //         console.log('Blog entry created:', createdBlog.id);
    //       })
    //       .catch((error) => {
    //         // Handle any errors that occur during the creation process
    //         console.error('Error creating blog entry:', error.message);
    //       });
    //   });
    // };
    
    // sortData();
  },
};
