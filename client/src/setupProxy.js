const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://charityconcert.kanisius.sch.id/',
      changeOrigin: true
    })
  );
};