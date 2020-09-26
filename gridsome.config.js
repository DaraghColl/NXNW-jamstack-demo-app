module.exports = {
  siteName: 'NXNW Jamstack',
  siteDescription: 'NXNW Jamstack Demo Site',
  plugins: [{
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'Product',
        baseDir: './content/products',
        resolveAbsolutePaths: true,
      },
    },
    {
      use: 'gridsome-plugin-vue-toasted',
      options: {
        position: 'top-center',
        singleton: true,
        duration: 1500,
      },
    },
  ],
};