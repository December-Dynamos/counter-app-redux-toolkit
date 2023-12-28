import {createSlice} from '@reduxjs/toolkit'; 


const initialState = 0

const counterSlice = createSlice({
     name: 'counter',
     initialState: initialState,
     reducers : {
         increase : (state, action) => state + (action.payload || 1), 
         decrease : state => state - 1,
         reset : state => initialState
     }
})

// console.log(counterSlice); 

// actions creators  

// reducers


export const {increase, decrease, reset} = counterSlice.actions; // will generate action creators

export default counterSlice.reducer; 

// This is not that reeucers key inside the obj above, 
// create slice is geenrating reducer function , then we are expoting the generated one







