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
  upload: {
    config: {
      provider: "strapi-provider-upload-ipfs-storage",
      providerOptions: {
        defaultStorage: "filebase",
        filebase: {
          // https://console.filebase.com/keys
          key: env("FILEBASE_KEY"),
          secret: env("FILEBASE_SECRET"),
          bucket: env("FILEBASE_BUCKET"),
        },
      },
    },
  },
  seo: {
    enabled: true,
  },
});
