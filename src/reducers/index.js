import { combineReducers } from "redux"
import { AMOUNT_DEPOSIT, DECREMENT, INCREMENT, RESET, RESET_AMOUNT } from "../actions"


let initialState={count:0,amount:2000}

function counterReducer(state=initialState,action)
{
    let {count}=state
    switch(action.type)
    {
        case INCREMENT:return {count:count+1}
        case DECREMENT:return {count:count-1}
        case RESET:return {count:0}
         default:return state
    }
}
function amountReducer(state=initialState,action)
{
    let {amount}=state
    
    switch(action.type)
    {
        case AMOUNT_DEPOSIT:return {amount:amount+1000}
        case RESET_AMOUNT:return {amount:2000}
        
         default:return state
    }
}
//export default combineReducers({counterReducer},{amountReducer})
export default combineReducers({amountReducer,counterReducer})