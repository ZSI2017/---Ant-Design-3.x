import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button } from 'antd';
import {Loader} from "components"
import {connect} from "dva"
import styles from "./productlist.scss"

const ProductList = ({ onDelete, products,loading }) => {

  const columns = [{
    title: 'Name',
    dataIndex: 'name',
    key:"name"
  }, {
    title: 'Actions',
    key:"Actions",
    render: (text, record) => {
      return (
        <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
          <Button>Delete</Button>
        </Popconfirm>
      );
    },
  }];
  return (
    <div className={styles.main}>
      <Loader spinning = {loading.effects['product/data']}/>
      <Table
        dataSource={products}
        columns={columns}
      />
    </div>
  );
};

ProductList.propTypes = {
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.array.isRequired,
};

export default connect(({loading}) => ({loading}))(ProductList);
