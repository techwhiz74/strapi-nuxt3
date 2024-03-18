module.exports = ({ env }) => ({
    "netlify-deployments": {
      enabled: true,
      config: {
        accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
        sites: [
          {
            name: 'lightbeam',
            id: "a0445bb5-1dd1-4a87-aff1-e001f47ee027",
            buildHook: "https://api.netlify.com/build_hooks/65eaf225dac45411a8f510b8",
            branch: 'main' // optional
          }
        ]
      },
    },
    'preview-button': {
      config: {
        contentTypes: [
          {
            uid: 'api::page.page',
            draft: {
              url: env('PREVIEW_LINK') + '{url}',
            },
            published: {
              url: env('LIVE_LINK') + '{url}',
            },
          },
          {
            uid: 'api::blog.blog',
            draft: {
              url: env('PREVIEW_LINK') + 'blog/{url}',
            },
            published: {
              url: env('LIVE_LINK') + 'blog/{url}',
            },
          },
        ],
      },
    },
    seo: {
        enabled: true,
    },
    'navigation': { enabled: true },
    'graphql': { enabled: true },
    gql: {
      navigationItemRelated: ['Page', 'Blog'],
    },
    plausible: {
      config: {
        sharedLink: env("PLAUSIBLE_SHARED_LINK")
      }
    },
    upload: {
      config: {
        provider: env('UPLOAD_PROVIDER'),
        providerOptions: {
          s3Options : {
            accessKeyId: env('AWS_ACCESS_KEY_ID'),
            secretAccessKey: env('AWS_ACCESS_SECRET'),
            endpoint: env('DO_SPACE_ENDPOINT'),
            params: {
              Bucket: env('AWS_BUCKET'),
            },
          },
        },
        actionOptions: {
          upload: {},
          uploadStream: {},
          delete: {},
        },
      },
    },
    'cookie-manager': {
      enabled: true,
      config: {
        localization: false
      }
    },
    email: {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: 'melissa@wearepf.com',
          defaultReplyTo: 'melissa@wearepf.com',
        },
      },
    },
    ezforms:{
      config:{
        enableFormName: true,
        captchaProvider: {
          name: 'recaptcha',
          config: {
            secretKey: env('RECAPTCHA_SECRET_KEY'),
            minimumScore: 0.5
          }
        },
        notificationProviders: [{          
          name: 'email',
          enabled: true,
          config: {
            subject: "New form submission", // Optional
            from: 'melissa@wearepf.com' // Required
          },
        },]
      }
    },
  });
