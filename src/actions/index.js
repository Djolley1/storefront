export const setCategories = categories => ({
    type: 'SET_CATEGORIES',
    payload: categories,
  });
  
  export const setActiveCategory = category => ({
    type: 'SET_ACTIVE_CATEGORY',
    payload: category,
  });
  
  export const setProducts = products => ({
    type: 'SET_PRODUCTS',
    payload: products,
  });
  
  export const filterProductsByCategory = category => ({
    type: 'FILTER_PRODUCTS_BY_CATEGORY',
    payload: category,
  });
  