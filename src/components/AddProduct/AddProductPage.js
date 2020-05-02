import React, { Component } from 'react';
import AddProducServices from "./AddProducServices";

class AddProductPage extends Component {
    state = {
        title: '',
        text: '',
        image: ''
    }


    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
        console.log(this.state);
    }

    onSubmitForm = (e) => {

        e.preventDefault();

        const { title, text, image } = this.state;

        AddProducServices.AddProduct({ title, text, image })
        .then(()=>{
            console.log("Success")
            this.setState({
                title: '',
                text: '',
                image: ''});
        });

    }

    render() {
        const { title, text, image } = this.state;

        return (

            <form onSubmit={ this.onSubmitForm }>
                <div className="form-group" >
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title" autoComplete="off"
                        onChange={ this.handleChange }
                        value={ title } />
                </div>
                <div className="form-group">
                    <label htmlFor="text">Text</label>
                    <input type="text" className="form-control" id="text" name="text" autoComplete="off"
                        onChange={ this.handleChange }
                        value={ text } />
                </div><div className="form-group">
                    <label htmlFor="image">Image</label>
                    <input type="text" className="form-control" id="image" name="image" autoComplete="off"
                        onChange={ this.handleChange }
                        value={ image } />
                </div>

                <button className="btn btn-primary" >Submit</button>
            </form>
        );
    }
}

export default AddProductPage;