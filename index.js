// /index.js
const express = require('express');
const mongoose = require('mongoose');
//this package will allow us to parse the json http request into our server and make sure
const bodyParser = require('body-parser');

// IMPORT MODELS
const Product = require('./models/Product');
const User = require('./models/User');

const app = express();

mongoose.Promise = global.Promise;
mongoose.set('useUnifiedTopology', true);
const connect = mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/fullstack-setup`, { useNewUrlParser: true });


// connect.then((db) => {

//     console.log('Connected correctly to server');

//     var newProduct = Product({
//         name: 'Uthappizzaaaa',
//         description: 'test3'
//     });

//     newProduct.save()
//         .then((dish) => {
//             console.log(dish);

//             return Product.find({});
//         })
//         // .then((dishes) => {
//         //     console.log(dishes);

//         //     return Product.remove({});
//         // })
//         // .then(() => {
//         //     return mongoose.connection.close();
//         // })
//         .catch((err) => {
//             console.log(err);
//         });
// });




app.use(bodyParser.json());


//IMPORT ROUTES
require('./routes/productRoutes')(app);
require('./routes/userRoutes')(app);

// const productRoutes = require('./routes/productRoutes');
// const usersRouter = require('./routes/userRoutes');


// app.use('/', productRoutes);
// app.use('/user', usersRouter);



//This will redirect all the requests to our frontend application, unless we specify any route before this code.
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req,res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  })

}




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});