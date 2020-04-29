import React, { Component } from 'react';
import ProductItem from "./ProductItem";
class ListProductsPage extends Component {
    state = {  }
    render() { 
        return ( 
            <React.Fragment>
                <div className="row">

                
                <ProductItem image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ausgewachsenes_Wildschwein_beim_Suhlen.JPG/1200px-Ausgewachsenes_Wildschwein_beim_Suhlen.JPG"
                title="Kaban"
                text="Kaban is cool!!!"
                id='1'/>
                <ProductItem image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ausgewachsenes_Wildschwein_beim_Suhlen.JPG/1200px-Ausgewachsenes_Wildschwein_beim_Suhlen.JPG"
                title="Kaban"
                text="Kaban is cool!!!"
                id='12'/>
                <ProductItem image="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Ausgewachsenes_Wildschwein_beim_Suhlen.JPG/1200px-Ausgewachsenes_Wildschwein_beim_Suhlen.JPG"
                title="Kaban"
                text="Kaban is cool!!!"
                id='13'/>



                </div>
            </React.Fragment>
         );
    }
}
 
export default ListProductsPage;