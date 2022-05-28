const path = require("path");
//引入插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require("clean-webpack-plugin")

module.exports = {
  //指定入口文件
  entry: "./src/index.ts",
  mode: "development",
  //指定打包文件所在目录
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    environment:{
      arrowFunction:false
    }
  },

  //指定webpack打包时要使用模块
  module: {
    //指定要加载的规则
    rules: [
      {
        //test指定规则生效的文件

        test: /\.ts$/,
        //要使用的loader
        use: [{
            //指定要用的加载器
            loader:"babel-loader",
            options:{
              //设置预定环境
              presets:[
                [
                  "@babel/preset-env",
                  {
                    //要兼容的目标浏览器
                    targets:{
                      "chrome" :"58",
                      "ie": "11"
                    },
                    //指定的corejs版本
                    "corejs":"3",
                    //使用corejs的方式，usage按需加载
                    "useBuiltIns":"usage"
                  }
                ],
               
                
              ]
            }
          },{loader:"ts-loader"}] ,
     
        //要排除的文件
        exclude: /node_modules/,
        },
        {
          test:/.\less$/,
          use:[
            "style-loader",
            'css-loader',
            //引入postcss
            {
              loader:"postcss-loader",
              options:{
                postcssOptions:{
                  plugins:()=>
                    [
                      [
                        "postcss-preset-env",
                        {
                          browsers:"last 2 versions"
                        }
                      ]
                    ]
                  
                }
              }
            },
            'less-loader'
          ]
        }
    ]
  },



  //配置webpack插件
  plugins: [
    new HTMLWebpackPlugin({
      // title:"这是一个自定义title"
      template:'./src/index.html'
    }),new CleanWebpackPlugin()
  ],

  //用来引入模块
  resolve:{
    extensions:[".ts",".js"]
  }
}
