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

	createadmin: async () => {
	    let res = await axios.post(`/api/user/createadmin`);
	    return res.data || [];
	},
	register: async (user) => {
	    let res = await axios.post(`/api/user/register`,user);
	    return res.data || [];
	},
	login: async (email, password) => {
		// console.log(email, password);
	    let res = await axios.post(`/api/user/login`,{email, password});
	    return res.data || [];
	}


}