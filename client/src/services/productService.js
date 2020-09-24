//  /client/src/services/productService.js
//Axios - allows us to send http request from out react frontend to our API run npm install axios in the todo-frontend directory
import axios from 'axios';

export default {
  getAll: async () => {
    let res = await axios.get(`/api/product`);
    return res.data || [];
  },
  create: async (product) => {
    let res = await axios.post(`/api/product`,product);
    return res.data || [];
  },
  deleteById: async (id) => {
    let res = await axios.delete(`/api/product/${id}`);
    return res.data || [];
  },

 updateById:  async (id,product) => {
  	let res = await axios.put(`/api/product/${id}`,product);
  	return res.data || [];
  },
  getById:  async (id) => {
  	let res = await axios.get(`/api/product/${id}`);
  	return res.data || [];
  }
}