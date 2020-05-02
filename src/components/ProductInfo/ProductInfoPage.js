import React, { Component } from 'react';
import { Card, CardHeader, CardBody } from 'reactstrap';
import ProductInfoServices from "./ProductInfoServices";


class ProductInfoPage extends Component {
    state = { 
        product: {}
     }

    componentDidMount(){
        //console.log(this.props.match.params.id);
        const {id} = this.props.match.params;
        ProductInfoServices.getProduct(id)
        .then((response)=>{
            this.setState({product:response.data});
        })
    }

    render() { 
        // const {id} = this.props.match.params;
       const {image, title, text} = this.state.product;
    return ( 
        <div className="row">
            <div className="col-12 col-md-6 col-lg-8">
                <img src={image} width="100%" height="100%"></img>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
                <Card>
                    <CardHeader>
                        <h1>{title}</h1>
                    </CardHeader>
                    <CardBody>
                        <p>
                        {text}
                        </p>
                    </CardBody>
                </Card>
            </div>

        </div>

        );
    }
}
 
export default ProductInfoPage;