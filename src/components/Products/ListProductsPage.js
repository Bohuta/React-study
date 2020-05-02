import React, { Component } from 'react';
import ProductItem from "./ProductItem";
import ProductsServices from "./ProductsServices";


class ListProductsPage extends Component {
    state = {
        products:[{}]
      }
    
    componentDidMount(){
        ProductsServices.getProducts()
        .then((responce)=>{
        //   console.log(  responce);
            this.setState({products:responce.data});
        })

    }


    render() { 
       // console.log(this.state.products);

        const listProducts = this.state.products.map((item, index)=>{
            return(
                <ProductItem key={index} image={item.image} title={item.title} text={item.text} id={item.id} />
            );
        });

        return ( 
            <React.Fragment>
                <div className="row">
                    {listProducts}
                </div>
            </React.Fragment>
         );
    }
}
 
export default ListProductsPage;