import React from 'react';
import { Route } from 'react-router';
import Layout from './components/Layout';

//components
import HomePage from "./components/MainPage/HomePage";
import InfoPage from "./components/Info/InfoPage";
import ListProductsPage from "./components/Products/ListProductsPage"
import ProductInfoPage from "./components/ProductInfo";


function App() {
  return (
    <Layout>
      <Route exact path='/' component={HomePage} />
      <Route  path='/info' component={InfoPage} />
      <Route path='/list-products' component={ListProductsPage} />
      <Route path='/product/:id' component={ProductInfoPage} />
    </Layout>
  );
}

export default App;
