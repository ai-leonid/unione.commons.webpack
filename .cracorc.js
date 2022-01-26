module.exports = {
   /* webpack: {
       configure: (webpackConfig, { env, paths }) => {
           webpackConfig.entry = webpackConfig.entry.replace(new RegExp("index.js$"), 'index-app.js');
           return webpackConfig;
       }
    },*/
    plugins: [
        {
            plugin: require("craco-less"),
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {},
                        javascriptEnabled: true,
                    },
                },
                noIeCompat: true
            },
        },
    ],
};
