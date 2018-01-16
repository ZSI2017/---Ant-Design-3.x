import {Table,Icon,Divider} from "antd";

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
     <a href="#">Action -- {record.name}</a>
     <Divider type="vertical" />
     <a href="#" >Delete </a>
     <Divider type="vertical" />
     <a href="#" className="ant-dropdown-link">
       More actions <Icon type="down"/>
     </a>
    </span>
  )
}]


const data = [];
for (let i = 0; i < 46; i++) {
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
       pagination={{showQuickJumper:true}}
       />
    )
}

export default Mytable;
