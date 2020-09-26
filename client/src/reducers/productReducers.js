

function productGetAllReducer(state = { products: [] ,sortedProducts:[]}, action) {
  console.log('productGetAllReducer');
  switch (action.type) {
    case 'PRODUCT_GETALL_REQUEST':
      return { loading: true };
    case 'PRODUCT_GETALL_SUCCESS':
      return { loading: false, products: action.payload, success: true ,sortedProducts:action.payload};
    case 'PRODUCT_GETALL_FAIL':
      return { loading: false, error: action.payload };
    case 'SORT_BY_NAME':
    //   return Object.assign({}, state, {sortedProducts: action.payload })
      return {...state, sortedProducts: action.payload };
    case 'FILTER_PRODUCTS_BY_VALUE':
    //   return Object.assign({}, state, {sortedProducts: action.payload })
      return {...state, sortedProducts: action.payload };
    default:
      return state;
  }
}

function productGetByIdReducer(state = { product: {} }, action) {
  console.log('productGetByIdReducer');
  switch (action.type) {
    case 'PRODUCT_GETBYID_REQUEST':
      return { loading: true };
    case 'PRODUCT_GETBYID_SUCCESS':
      return { loading: false, product: action.payload, success: true };
    case 'PRODUCT_GETBYID_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
// let initialProductsState = async () => {
//   let res = await productService.getAll();
//   return res;
// }
// console.log(initialProductsState);


function productCreateReducer(state = { product: {} }, action) {
  console.log('productCreateReducer');
  switch (action.type) {
    case 'PRODUCT_CREATE_REQUEST':
      return { loading: true };
    case 'PRODUCT_CREATE_SUCCESS':
      return { loading: false, product: action.payload, success: true };
    case 'PRODUCT_CREATE_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}

function productUpdateReducer(state = { product: {} }, action) {
  console.log('productUpdateReducer');
  switch (action.type) {
    case 'PRODUCT_UPDATE_REQUEST':
      return { loading: true };
    case 'PRODUCT_UPDATE_SUCCESS':
      return { loading: false, product: action.payload, success: true };
    case 'PRODUCT_UPDATE_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}


function productDeleteReducer(state = { product: {} }, action) {
  console.log('productDeleteReducer');
  switch (action.type) {
    case 'PRODUCT_DELETE_REQUEST':
      return { loading: true };
    case 'PRODUCT_DELETE_SUCCESS':
      return { loading: false, product: action.payload, success: true };
    case 'PRODUCT_DELETE_FAIL':
      return { loading: false, error: action.payload };
    default:
      return state;
  }
}
// function filterProductReducer(state = {}, action) {

// }

// function sortProductReducer(state = { sortedProducts: [] }, action) {
//   console.log('sortProductReducer',state.sortedProducts,action);
//   switch (action.type) {
//     case 'SORT_BY_PRICE':
//       return {sortedProducts: action.payload};
//     case 'SORT_BY_NAME':
//       return {sortedProducts: action.payload};
//     default: 
//       return state;
//   }
// }

export {
    productDeleteReducer,
    productCreateReducer,
    productGetAllReducer,
    productGetByIdReducer,
    productUpdateReducer

    // ,sortProductReducer
}






