export const BUY_CAKE = 'BUY_CAKE'
export const RETURN_CAKE = 'RETURN_CAKE'

const initialState = {
    numOfCakesItems: 0
  }

const RootReducer = (state = initialState, action) => {
    console.log("Inside Reducer ", action.type);
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakesItems: state.numOfCakesItems + action.payload,
      }
      case RETURN_CAKE:
        return {
          ...state,
          numOfCakesItems: state.numOfCakesItems - action.payload,
        };

      default: return state;
  }
};

export default RootReducer;
