export const BUY_CAKE = 'BUY_CAKE'
export const RETURN_CAKE = 'RETURN_CAKE'

export const buyCake = (number = 1) => {
    console.log("Inside Action")
  return {
    type: BUY_CAKE,
    payload: number
  }
}

export const returnCake = (number =1) =>{
    console.log("Inside Action")
    return {
      type: RETURN_CAKE,
      payload: number
    }
}