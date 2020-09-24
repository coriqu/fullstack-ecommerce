
import productService from '../services/productService';
import { createBrowserHistory } from "history";
// import axios from 'axios';

const history = createBrowserHistory()



export const getAllProducts = () => async (dispatch, getState) => {

  try {
    dispatch({ type: 'PRODUCT_GETALL_REQUEST'});
    // const {products} = await productService.getAll();
    const products = await productService.getAll();
    // console.log(products);
    dispatch({ type: 'PRODUCT_GETALL_SUCCESS', payload: products, success: true });
  } catch (error) {
    dispatch({ type: 'PRODUCT_GETALL_FAIL', payload: error.message });
  }

};


export const getProductById = (productId) => async (dispatch, getState) => {
	console.log(productId)
  try {
    dispatch({ type: 'PRODUCT_GETBYID_REQUEST'});
    const product = await productService.getById(productId);
    console.log(product);
    dispatch({ type: 'PRODUCT_GETBYID_SUCCESS', payload: product, success: true });
  } catch (error) {
    dispatch({ type: 'PRODUCT_GETBYID_FAIL', payload: error.message });
  }

};

export const deleteProdcut = (productId) => async (dispatch, getState) => {

  try {
    dispatch({ type: 'PRODUCT_DELETE_REQUEST', payload: productId });
    const { product } = await productService.deleteById(productId);
    console.log(product);
    dispatch({ type: 'PRODUCT_DELETE_SUCCESS', payload: product, success: true });
    history.push('/');
    history.go();
  } catch (error) {
    dispatch({ type: 'PRODUCT_DELETE_FAIL', payload: error.message });
  }

};


export const createProduct = (Product) => async (dispatch, getState) => {

  try {
    dispatch({ type: 'PRODUCT_CREATE_REQUEST', payload: Product });
    const { product } = await productService.create(Product);

    dispatch({ type: 'PRODUCT_CREATE_SUCCESS', payload: product, success: true });
  } catch (error) {
    dispatch({ type: 'PRODUCT_CREATE_FAIL', payload: error.message });
  }

};

export const updateProduct = (productId,Product) => async (dispatch, getState) => {
  try {
    dispatch({ type: 'PRODUCT_UPDATE_REQUEST', payload: Product });
    const { product } = await productService.updateById(productId,Product);

    dispatch({ type: 'PRODUCT_UPDATE_SUCCESS', payload: product, success: true });
    history.go();
  } catch (error) {
    dispatch({ type: 'PRODUCT_UPDATE_FAIL', payload: error.message });
  }

};





const compare = (a,b,type) => {
	console.log(a[type], b[type]);
	if(a[type]>b[type]) 
		console.log(1);
		return -1;
	if(a[type]<b[type]) 
		console.log(-1);
		return 1;
	return 0;
}
export const sortProduct = (currentProducts, sortType) => (dispatch) => {
	let sortedProducts = currentProducts.slice();//返回新的数组对象
	// console.log(currentProducts);
	switch(sortType) {
		case 'SORT_BY_NAME':
			// sortedProducts.sort((a,b)=>(a.name>b.name?1:-1));
			sortedProducts.sort((a,b)=>(compare(a,b,'_id')));
			console.log(sortedProducts);
			dispatch({ type: 'SORT_BY_NAME', payload: sortedProducts });
			break;
		default:
			dispatch({type: '', payload: sortedProducts });

  	}

};


export const filterProducts = (products, value) => async (dispatch) => {
	console.log(products,value);
	if(!value) {
		await getAllProducts;
		return;
	}
	let newProducts = Object.assign({}, products);
    let filteredValues = products.filter(product => {
        return (
          product.name.toLowerCase().includes(value) ||
          product.description.toLowerCase().includes(value)
        );
      });
	dispatch({
		type: 'FILTER_PRODUCTS_BY_VALUE',
		payload: filteredValues,
	});

};