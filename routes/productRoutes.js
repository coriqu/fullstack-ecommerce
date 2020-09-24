// /routes/productRoutes.js
const mongoose = require('mongoose');
const Product = mongoose.model('products');

module.exports = (app) => {

  app.get(`/api/product`, async (req, res) => {
    let products = await Product.find();
    return res.status(200).send(products);
  });
  //- 200 OK请求成功。
  
  
  app.get(`/api/product/:id`, async (req, res) => {
  	const {id} = req.params;
  	// console.log(id);
  	try {
  		let product = await Product.findById(id);
  		// return res.status(200).send(product);
  		if (product) {
		      res.send(product);
	    }
	    res.status(404).send("Link Not Found - does not exists");
	} catch (err) {
	    res.status(500).send(err.message);
	}

    
    
  });
  //- 200 OK请求成功。
  


  app.post(`/api/product`, async (req, res) => {
    let product = await Product.create(req.body);
    return res.status(201).send({
      error: false,
      product
    })
  })

  //- 201 Created
  //该请求已成功，并因此创建了一个新的资源。这通常是在POST请求，或是某些PUT请求之后返回的响应。
  


  app.put(`/api/product/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndUpdate(id, req.body);
    return res.status(202).send({
      error: false,
      product
    })

  });
  //- 202 Accepted
  //请求已经接收到，但还未响应，没有结果。意味着不会有一个异步的响应去表明当前请求的结果，预期另外的进程和服务去处理请求，或者批处理。


  app.delete(`/api/product/:id`, async (req, res) => {
    const {id} = req.params;

    let product = await Product.findByIdAndDelete(id);

    return res.status(202).send({
      error: false,
      product
    })


 //    try {
	//     await db.Todo.findByIdAndRemove(req.params.id)
	//     return success(res, "todo deleted!")
	// } catch (err) {
	//     next({ status: 400, message: "failed to delete todo" })
	// }

  })

}