import  store from "./redux/app/store.js"; 
import {increase, decrease, reset} from "./redux/features/counter/counterSlice.js";

// console.log(increase)

console.log("initial value", store.getState()); // 0

console.log("dispatching increase"); 
store.dispatch(increase(5)); 
console.log("current value 1", store.getState()); // 5

store.dispatch(increase()); 
console.log("current value 2", store.getState()); // 6

console.log("dispatching decrease");
store.dispatch(decrease()); 
console.log("current value 3", store.getState());// 5

console.log("dispatching reset");
store.dispatch(reset()); // 0
console.log("current value 4", store.getState()); // 0



