const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use('/auth',
        createProxyMiddleware({
            target: 'http://localhost:8111',
            changeOrigin: true,
        })
    );
    app.use('/todo',
        createProxyMiddleware({
            target: 'http://localhost:8111',
            changeOrigin: true,
        }),
    );
};
