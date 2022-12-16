module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: "slug",
          references: "title",
        },
      },
    },
  },
  "vercel-deploy": {
    enabled: true,
    config: {
      deployHook: process.env.VERCEL_DEPLOY_PLUGIN_HOOK,
      apiToken: process.env.VERCEL_DEPLOY_PLUGIN_API_TOKEN,
      appFilter: process.env.VERCEL_DEPLOY_PLUGIN_APP_FILTER,
      teamFilter: process.env.VERCEL_DEPLOY_PLUGIN_TEAM_FILTER,
      roles: ["strapi-super-admin"],
    },
  },
  upload: {
    config: {
      // provider: "strapi-provider-upload-ipfs-storage",
      // providerOptions: {
      //   defaultStorage: "filebase",
      //   filebase: {
      //     // https://console.filebase.com/keys
      //     key: env("FILEBASE_KEY"),
      //     secret: env("FILEBASE_SECRET"),
      //     bucket: env("FILEBASE_BUCKET"),
      //   },
      // },
      // provider: "strapi-provider-upload-cloudflare-2",
      // providerOptions: {
      //   accountId: env("STRAPI_UPLOAD_CLOUDFLARE_ACCOUNT_ID"),
      //   apiKey: env("STRAPI_UPLOAD_CLOUDFLARE_API_KEY"),
      //   variant: "cms",
      // },
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("CLOUDINARY_NAME"),
        api_key: env("CLOUDINARY_KEY"),
        api_secret: env("CLOUDINARY_SECRET"),
      },
      actionOptions: {
        upload: {},
        uploadStream: {},
        delete: {},
      },
    },
  },
  seo: {
    enabled: true,
  },
});
