module.exports={
    chainWebpack:config=>{
      //删除编译后的独立js文件上的预获取操作
      config.plugins.delete("prefetch")
    }
}
const webpack = require("webpack")

module.exports = {

    // 配置插件参数

    configureWebpack: {

        plugins: [

            // 配置 jQuery 插件的参数

            new webpack.ProvidePlugin({

                $: 'jquery',

                jQuery: 'jquery',

                'window.jQuery': 'jquery',

                Popper: ['popper.js', 'default']

            })

        ]

    }

}

