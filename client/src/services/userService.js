import axios from 'axios';

export default {
  	getAll: async () => {
	    let res = await axios.get(`/api/user`);
	    return res.data || [];
	},

	updateById:  async (id) => {
	  	let res = await axios.put(`/api/user/${id}`);
	  	return res.data || [];
	},
	
	create: async (user) => {
	    let res = await axios.post(`/api/user`,user);
	    return res.data || [];
	 },

}