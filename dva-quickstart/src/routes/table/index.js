import {Table,Icon,Divider} from "antd";
import {Link} from "react-router-dom"
import { Tabdom,Radiotop} from 'components'

const columns = [
  {
    title:"运营图名称",
    dataIndex:"name",
    key:"name",
  },{
    title:"运营图",
    dataIndex:"name",
    key:"name",
    render:text => <img src={text} width={40} height={40}/>,
},{
  title:"链接",
  dataIndex:"name",
  key:"name",
},{
  title:"覆盖地区",
  dataIndex:"name",
  key:"name",
},{
  title:"创建时间",
  dataIndex:"name",
  key:"name",
},{
  title:"修改时间",
  dataIndex:"name",
  key:"name",
},{
  title:"有效时段",
  dataIndex:"name",
  key:"name",
},{
  title:"排序值",
  dataIndex:"age",
  key:"age",
},{
  title:"状态",
  dataIndex:"age",
  key:"age",
},{
  title:"审核状态",
  dataIndex:"address",
  key:"address"
},{
  title:"操作",
  key:"action",
  render:(text,record) => (
    <span>
     <Link to={`/mytable/${record.key}`}>Edit</Link>
     <Divider type="vertical" />
     <a href="javascript:void(0)" >Delete </a>
     <Divider type="vertical" />
     <a href="javascript:void(0)" className="ant-dropdown-link">
       More actions <Icon type="down"/>
     </a>
    </span>
  )
}]


const data = [];
for (let i = 0; i < 36; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`,
  });
}


const Mytable = ()=>{
    return (
      <div>
       <Tabdom />
       <Radiotop />
        <Table
         bordered
         columns={columns}
         dataSource={data}
         pagination={{
              showQuickJumper:true,
              showSizeChanger:true,
              defaultPageSize:5,
              pageSizeOptions:["5","10","20","30"]
            }}
         />
       </div>
    )
}

export default Mytable;
