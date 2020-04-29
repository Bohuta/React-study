import React from 'react';
import { Container } from 'reactstrap';
import Header from "./Header";
import Footer from './Footer';

export default props => (
  <div>
    <Header />
    <Container id="container">
      {props.children}
    </Container>
    {/* <Footer/> */}
  </div>
);
