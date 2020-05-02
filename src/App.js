import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';

//components
import HomePage from "./components/MainPage/HomePage";
import InfoPage from "./components/Info/InfoPage";
import ListProductsPage from "./components/Products/ListProductsPage"
import ProductInfoPage from "./components/ProductInfo";
import AddProduct from "./components/AddProduct"

function App() {
  return (
    <Layout>
      <Route exact path='/' component={HomePage} />
      <Route path='/info' component={InfoPage} />
      <Route path='/list-products' component={ListProductsPage} />
      <Route path='/product/:id' component={ProductInfoPage} />
      <Route path='/add-product' component={AddProduct} />
    </Layout>
  );
}

export default App;
