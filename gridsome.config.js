module.exports = {
  siteName: 'Gridsome',
  plugins: [{
    use: '@gridsome/vue-remark',
    options: {
      typeName: 'Product',
      baseDir: './content/products',
      resolveAbsolutePaths: true,
    },
  }, ],
};