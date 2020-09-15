module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
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
        position: 'top-right',
        singleton: true,
        duration: 2500,
      },
    },
  ],
};
