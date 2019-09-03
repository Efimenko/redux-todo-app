export default (state = {}, action) => {
  console.log({state})
  switch (action.type) {
    case "ADD_ITEM":
      return { ...state, items: [...(state.items || []), action.payload] };
    case "TOGGLE_ITEM":
      return {
        ...state,
        items: state.items.map(item => {
          return item.id === action.payload.id
            ? { ...item, 'isComplete': action.payload.isComplete }
            : item
        })
      };
    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      }
    case "CHANGE_FILTER":
      return {...state, activeFilter: action.payload}
    default:
      return state;
  }
};
