import React, { Component } from 'react';

class ProductInfoPage extends Component {
    state = {  }

    componentDidMount(){
        console.log(this.props.match.params.id);
    }

    render() { 
        const {id} = this.props.match.params;
    return ( <h1>dsdsd {id}</h1> );
    }
}
 
export default ProductInfoPage;