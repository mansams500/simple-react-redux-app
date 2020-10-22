import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake,returnCake } from '../redux/cake/cakeActions'

import store from '../redux/store'




function HooksCakeContainer () {
//console.log(store.getState().numOfCakes);
  const numOfCakes = useSelector(state =>{ 
    console.log('State: ', state);  
    return state.numOfCakesItems
    });
  const dispatch = useDispatch()
  return (
    <div>
      <h2>Number of cakes - {numOfCakes} </h2>
      <button onClick={() => dispatch(buyCake())}>Add Cake</button>
      <img src={require('../assets/cake.png')} className="imageContainer" />
      <button onClick={() => dispatch(returnCake())}>Remove Cake</button>
    </div>
  )
}

export default HooksCakeContainer
