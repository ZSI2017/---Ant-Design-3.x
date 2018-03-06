import {takeEvery} from "redux-saga"
import {put,call} from "redux-saga/effects"

export const delay = ms => new Promise(resolve => setTimeout(resolve,ms));

export function* incrementAsync() {
   yield call(delay,1000)
   yield put({type:"INCREMENT"})
}

export function* watchIncrementAsync() {
  yield* takeEvery('INCREMENT_ASYNC',incrementAsync)
}

export function* helloSage() {
  yield  console.log("Hello Sages!")

}

export default function* rootSaga() {
  yield [
    helloSage(),
    watchIncrementAsync()
  ]
}
