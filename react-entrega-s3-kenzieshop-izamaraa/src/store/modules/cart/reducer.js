const initialState = [];
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "@cart/ADD":
      const { product } = action;
      return [...state, product];

    case "@cart/ADD+1":
      const aumentar = state.find((product) => product.id === action.id);
      const filter = state.filter((product) => product.id !== action.id);
      aumentar.quantidade++;
      return [...filter, aumentar];

    case "@cart/REMOVE-1":
      const { products } = action;
      return [...products];

    case "@cart/REMOVE":
      const { id } = action;
      const newList = state.filter((product) => product.id !== id);
      return [...newList];
    default:
      return state;
  }
};
export default cartReducer;
