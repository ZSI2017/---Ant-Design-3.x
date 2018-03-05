import dva from 'dva';
import './index.css';
import 'babel-polyfill'
// import createHistory from 'history/createBrowserHistory'
import createLoading from "dva-loading";

import createHistory from 'history/createHashHistory'

// 1. Initialize
// const app = dva();
const app = dva({
  ...createLoading({
    effects:true,
  }),
  history:createHistory(),
  onError(e,dispatch) {
    console.log(e.message);
  }
});

// 2. Plugins
// app.use({
//   ...createLoading({
//     effects:true,
//   })
// });

// 3. Model
// app.model(require('./models/example').default);
// app.model(require('./models/products').default);
app.model(require('./models/app').default)

// 4. Router
app.router(require('./router').default)

// 5. Start
app.start('#root')
