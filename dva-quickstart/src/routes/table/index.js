import {Table,Icon,Divider} from "antd";
import {Link} from "react-router-dom"

const columns = [{
  title:"Name",
  dataIndex:"name",
  key:"name",
  render:text => <img src={text} width={40} height={40}/>,
},{
  title:"Age",
  dataIndex:"age",
  key:"age",
},{
  title:"Address",
  dataIndex:"address",
  key:"address"
},{
  title:"Action",
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
    )
}

export default Mytable;
