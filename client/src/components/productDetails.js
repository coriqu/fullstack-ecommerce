import React from "react";
import { createBrowserHistory } from "history";
// import {
//   useParams
// } from "react-router-dom";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import {
  deleteProdcut,
  getProductById,
  updateProduct
} from '../actions/productActions';

// import { createBrowserHistory } from "history";
const history = createBrowserHistory()


class ProductDetails extends React.Component {
  constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            valueName: '',
            valueDescription: ''
        }
        this.editProduct = this.editProduct.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);

        // this.getProductById = this.getProductById.bind(this);
    }
    
  editProduct(product) {
    console.log('edit');
    this.setState(state => ({
              isEditing: true,
              valueName: product.name,
              valueDescription: product.description


        }));
  }
  handleChange(e) {
    console.log('onChange',e);

    const target = e.target;
      // const value = target.type === 'checkbox' ? target.checked : target.value;
      const value = target.value;
      const name = target.name;


      this.setState({
        [name]: value
      });
    // this.setState({
    //  valueName: e.target.value,
    //  valueDescription: e.target.value
    // });

  }
  handleCancel() {
    console.log('cancel');
    this.setState({
        isEditing: false
      });

  }
  handleDelete(id) {
    this.props.deleteProdcut(id);
    // history.push('/');
    // history.go();
    // this.props.getProducts();

  }
  async handleSubmit(e,id) {
    let product = {
      name: this.state.valueName,
      description: this.state.valueDescription
      }
    // console.log('submit');
    // let res = await productService.updateById(id,product);
      this.props.updateProduct(id,product)
      console.log('submit',id,product);
      this.setState({
        isEditing: false
      });

      // this.props.getProducts();
      // this.props.getProductById(id)

      
  }
  //如果某个请求不会依赖属性变化，而是只在组件创建时执行，那么可以在 didMout。放在 didUpdate 则需要根据状态变化来判断是否要真的发起 ajax 请求。
  //这里如果放在componentDidUpdate中，每次都会更新state.product，就会一直刷新页面
  componentDidMount() {
      let {id} = this.props.match.params;
      console.log(id);

      this.props.getProductById(id);
  }

    render() {
      
        const {productGetByIdReducer} = this.props;
        // const {product} = this.props.productGetByIdReducer;
        // console.log(this.props.productGetByIdReducer,product)
        // let history = createBrowserHistory();
        // console.log(this.props);
        // let {id} = this.props.match.params;
        // this.props.getProductById(id);
        if(!productGetByIdReducer.product||productGetByIdReducer.loading) {
          return (
            <div>loading</div>
          )
        }
        let {product} = productGetByIdReducer
        

        if (this.state.isEditing) {
          return (
            <div>
            <button type="button" onClick={() => history.goBack()}>
              back
            </button>
            <h3>ID: {product._id}</h3>
            <li className="list__item product">
               <input 
                  name = "valueName"
                  type="text"
                  value={this.state.valueName} 
                  onChange = {e=>this.handleChange(e)}
               />
               <input 
                  name = "valueDescription"
                  type="text"
                  value={this.state.valueDescription} 
                  onChange = {e=>this.handleChange(e)}
               />
            </li>
            <button onClick={e => this.handleCancel()}>Cancel</button>
            <button onClick={e => this.handleSubmit(e,product._id)}>Save</button>
        </div>
        )
          
      }

   
     
    return (
      

      <div>
       <button type="button" onClick={() => history.goBack()}>
        back
      </button>

        <h3>ID: {product._id}</h3>
        <h3 className="product__name">{product.name}</h3>
        <p className="product__description">{product.description}</p>
        
        <button onClick={e=>this.props.deleteProdcut(product._id)}>delete</button>
        <button onClick={e => this.handleDelete(product._id)}>delete</button>
        <button onClick={e => this.editProduct(product)}>edit</button>
      </div>
    );
  }
  
}

function mapStateToProps(state) {
  //store里需要用的的state
  const {productGetByIdReducer} = state;
  console.log(productGetByIdReducer);
  return {
    productGetByIdReducer
  };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators( {deleteProdcut,getProductById,updateProduct} , dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);


// export default ProductDetais;