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
  // "vercel-deploy": {
  //   enabled: true,
  //   // config: {
  //   //   deployHook:
  //   //     "https://api.vercel.com/v1/integrations/deploy/prj_OfY9vfxFklzc6Y7IpTxDClNvfk5z/LZDOP00lmh",
  //   //   apiToken: "6DGnWuS1Y5XT2toosrpIoTvJ",
  //   //   appFilter: "cooks",
  //   //   teamFilter: "khuongldk",
  //   //   roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
  //   // },
  // },
  seo: {
    enabled: true,
  },
});
