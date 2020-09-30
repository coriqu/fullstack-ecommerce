// /routes/productRoutes.js
const mongoose = require('mongoose');
const User = mongoose.model('users');

module.exports = (app) => {

  	app.get(`/api/user`, async (req, res) => {
		let users = await User.find();
		return res.status(200).send(users);
  	});
 	 //- 200 OK请求成功。
  
 

	
	//update user info
 	app.put(`/api/user/:id`, async (req, res) => {
		const {id} = req.params;
		let user = await User.findByIdAndUpdate(id, req.body);
		return res.status(202).send({
		 	error: false,
		  	user
		})

  	});

 	app.post(`/api/user/createadmin`, async (req, res) => {

 		const admin = new User({
 			name: 'cori',
 			password: 'coriisadminstrator',
 			isAdmin: true
 		})
  		let user = await User.create(admin);

		return res.status(201).send({
		 	error: false,
		  	user
		})

  	});
  	//- 201 Created
	//该请求已成功，并因此创建了一个新的资源。这通常是在POST请求，或是某些PUT请求之后返回的响应。
	


  	app.post(`/api/user/register`, async (req, res) => {
  		let user = await User.create(req.body);

		return res.status(201).send({
		 	error: false,
		  	user
		})

  	});


  	app.post(`/api/user/login`, async (req, res) => {
  		// console.log(req.body.email, req.body, req.params);
		const user = await User.findOne({
		    email: req.body.email,
		    password: req.body.password,
		});
		if (user) {
		    res.send({

		    	error: false,
		    	user
				// _id: loginUser._id,
				// name: loginUser.username,
				// email: loginUser.email,
				// isAdmin: signinUser.isAdmin,
				// token: getToken(signinUser),
		    });
		} else {

			//The success message example is in the shape of an object with the property of message while the failure response is just a string
		    res.status(401).send({ message: 'Invalid Email or Password.' });
		}

  	});

}