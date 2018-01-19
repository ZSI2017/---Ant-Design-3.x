import dva from 'dva';

export default {
  namespace: 'product',
  state: [
          { name: 'dva', id: 1 },
          { name: 'antd', id: 2 },
        ],
  reducers: {
    'delete'(state, { payload: id }) {
      console.log("from products delete: ---- ----- "+id)
      return state.filter(item => item.id !== id);
    },
  },
};
