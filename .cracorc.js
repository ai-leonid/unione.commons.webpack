module.exports = {
    webpack: {
       configure: (webpackConfig, { env, paths }) => {
           console.log('--------------');
           console.log(webpackConfig);

           webpackConfig.entry = webpackConfig.entry.replace(new RegExp("index.js$"), 'index-app.js');

           console.log('222222--------------');
           console.log(webpackConfig);

           return webpackConfig; }
    },
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
