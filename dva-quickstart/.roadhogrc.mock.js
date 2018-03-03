export default {
  // 支持值为 Object 和 Array
  'GET /api/sourceData': [{
      name: 'dva',
      id: 1
    },
    {
      name: 'antd@3.x',
      id: 2
    }],

'GET /api/menuList':[
           {
            id:'1',
            bpid:"1",
            route:"subnav 1"
          },{
            id:"21",
            bpid:"2",
            mpid:"1",
            name:"mytable",
            icon:"",
            route:'/mytable'
          },{
            id:"22",
            bpid:"2",
            mpid:"1",
            name:"products",
            icon:"",
            route:'/products'
          },{
            id:"23",
            bpid:"3",
            mpid:"1",
            name:"IndexPage",
            icon:"",
            route:'/router'
          },{
            id:"24",
            bpid:"4",
            mid:"1",
            name:"myformlayout",
            route:"/myformlayout"
          },{
            id:"2",
            bpid:"2",
            name:"sub2"
          }
    ],

  // GET POST 可省略
  '/api/users/1': { id: 1 },

  // 支持自定义函数，API 参考 express@4
  'POST /api/users/create': (req, res) => { res.end('OK'); },
};
