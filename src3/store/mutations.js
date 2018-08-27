import {DECREMENT, GETDATA, INCREMENT} from "./types";

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
}
