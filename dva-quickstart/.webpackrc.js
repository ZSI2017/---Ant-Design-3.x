export default {
  extraBabelPlugins:[
      ["import",{"libraryName":"antd","libraryDirectory":"es","style":"css"}]
  ],
  alias:{
    components: `${__dirname}/src/components`,
    services:`${__dirname}/src/services`,
    utils: `${__dirname}/src/utils`,
  }
}
