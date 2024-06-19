const initialState = {
    products: [],
  };
  
  const productsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_PRODUCTS':
        return { ...state, products: action.payload };
      case 'FILTER_PRODUCTS_BY_CATEGORY':
        return { ...state, products: state.products.filter(product => product.category === action.payload) };
      default:
        return state;
    }
  };
  
  export default productsReducer;
  