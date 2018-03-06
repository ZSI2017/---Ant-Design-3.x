import React from 'react';
import { connect } from 'dva';
import {ProductList} from "components"
import PropTypes from "prop-types"

const Products = ({ dispatch, product }) => {
  // dispatch({ type: 'product/data', payload: "" })
  function handleDelete(id) {
    dispatch({
      type: 'products/delete',
      payload: id,
    });
  }
  return (
    <div>
      <h2>List of Products</h2>
      <ProductList onDelete={handleDelete} products={product} />
    </div>
  );
};

Products.propTypes = {
  dispatch:PropTypes.func,
  product:PropTypes.object
}
// export default Products;
export default connect(({ product }) => ({
  product,
}))(Products);
