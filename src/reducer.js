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
    default:
      return state;
  }
};
