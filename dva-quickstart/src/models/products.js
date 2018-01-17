import dva from 'dva';

export default {
  namespace: 'products',
  state: [],
  reducers: {
    'delete'(state, { payload: id }) {
      console.log("from products delete: ---- ----- "+id)
      return state.filter(item => item.id !== id);
    },
  },
};
