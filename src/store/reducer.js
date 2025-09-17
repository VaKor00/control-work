const initialState = {
  counter: {
  }
};

  const reducer = (state = initialState, action) => {

  if ((action.type === "INCREMENT"))
    {
      return {
        ...state,
        counter: {
          ...state.counter,
          [action.id]: (state.counter[action.id] || 0) + 1
        }
      }
    }

   if ((action.type === "DECREMENT" && state.counter[action.id] > 0))
    {
        return {
        ...state,
        counter: {
          ...state.counter,
          [action.id]: (state.counter[action.id] || 0) - 1
        }
      }
    }

    if ((action.type === "DELETE"))
    {
      return {
        ...state,
        counter: {
          ...state.counter,
          [action.id]:  0
        }
      }
    }

  return state;
};

export default reducer;
export { initialState };