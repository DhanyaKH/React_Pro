import React from 'react'
import { useSelector,useDispatch } from 'react-redux'

import { INCREMENT,DECREMENT,RESET ,AMOUNT_DEPOSIT,RESET_AMOUNT} from './actions'



export const Counter = () => {
    let count=useSelector(state=>state.counterReducer.count)
    let amount=useSelector(state=>state.amountReducer.amount)
   
   let dispatch=useDispatch()
  return (
    <>
 
    <div>Counter</div>
    <button onClick={()=>dispatch({type:INCREMENT})}>+</button>
    {count}
    <button onClick={()=>dispatch({type:DECREMENT})}>-</button>
    <button onClick={()=>dispatch({type:RESET})}>RESET</button>
    <div>
      <p>AMOUNT COUNTER</p>
      {amount}
      <button onClick={()=>dispatch({type:AMOUNT_DEPOSIT})}>DEPOSIT</button>
      <button onClick={()=>dispatch({type:RESET_AMOUNT})}>RESET AMOUNT</button>
    </div>
    </>
  )
}
