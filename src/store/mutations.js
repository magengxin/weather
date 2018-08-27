import {CITY, DECREMENT, GETDATA, INCREMENT} from "./types";

export default {
  [INCREMENT](state) {
    state.count++
  },
  [DECREMENT](state) {
    state.count--
  },
  [GETDATA](state, list) {
    state.weather = list
  },
  [CITY](state,v) {
    // console.log(this);
    // console.log(arguments);
    // console.log(typeof this._actions.getdata);
    // console.log(this._actions.getdata);
    state.city = v;
    // console.log(this._actions.getdata[0]());
    // this._actions.getdata()
    // this.dispatch('GETDATA')
  }
}
