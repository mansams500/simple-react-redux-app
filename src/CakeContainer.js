import React from 'react'
import { connect } from 'react-redux'
import { buyCake,returnCake } from './redux/cake/cakeActions'


function CakeContainer (props) {
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <button onClick={props.buyCake}>Add Cake</button>
      <img src={require('./assets/cake3.png')} className="imageContainer" />
      <button onClick={props.returnCake}>Remove Cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakesItems
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake()),
    returnCake: () => dispatch(returnCake())
  }
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CakeContainer)
//export default  CakeContainer;