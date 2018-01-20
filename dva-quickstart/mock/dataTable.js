const Mock = require("mockjs")

const config = require('../utils/config')

const { API } = config

const dataSource =
  [{
      name: 'dva',
      id: 1
    },
    {
      name: 'antd',
      id: 2
}]


module.exports = {
  [`GET ${API}/user/data`](req,res) {
    res.json(dataSource)
  },
}
