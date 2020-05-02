import React, {Component} from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link,  BrowserRouter as Router } from 'react-router-dom';
import './NavMenu.css';

export default class Header extends Component {
  constructor (props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle () {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render () {
    return (
    <div className="container">

    
          <header className="blog-header pt-3">
        <div className="row flex-nowrap justify-content-between align-items-center">
          <div className="col-4 pt-1">
            <Link className="text-muted" to="/">Subscribe</Link>
          </div>
          <div className="col-4 text-center">
            <Link className="blog-header-logo text-dark"  to="/">Large</Link>
          </div>
          <div className="col-4 d-flex justify-content-end align-items-center">
            <Link className="text-muted" to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-3"><circle cx="10.5" cy="10.5" r="7.5"></circle><line x1="21" y1="21" x2="15.8" y2="15.8"></line></svg>
            </Link>
            <Link className="btn btn-sm btn-outline-secondary" to="/">Sign up</Link>
          </div>
        </div>
      </header>
      <hr className="mt-2 mb-0" />
      <div className="nav-scroller mb-2 mt-0 pt-0">
          
        <nav className="nav d-flex justify-content-around">
          <Link className="p-2 text-muted" to='/'>Home page</Link>
          <Link className="p-2 text-muted" to='/info'>Info page</Link>
          <Link className="p-2 text-muted" to='/list-products'>Products</Link>
          <Link className="p-2 text-muted" to='/add-product'>Add product</Link>

          {/* <a className="p-2 text-muted" href="#">U.S.</a>
          <a className="p-2 text-muted" href="#">Technology</a>
          <a className="p-2 text-muted" href="#">Design</a>
          <a className="p-2 text-muted" href="#">Culture</a>
          <a className="p-2 text-muted" href="#">Business</a>
          <a className="p-2 text-muted" href="#">Politics</a>
          <a className="p-2 text-muted" href="#">Opinion</a>
          <a className="p-2 text-muted" href="#">Science</a>
          <a className="p-2 text-muted" href="#">Health</a>
          <a className="p-2 text-muted" href="#">Style</a>
          <a className="p-2 text-muted" href="#">Travel</a> */}
        </nav>
      </div>


      </div>
        // {/* <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light >
        //   <Container>
        //     <NavbarBrand tag={Link} to="/">LinkaProj</NavbarBrand>
        //     <NavbarToggler onClick={this.toggle} className="mr-2" />
        //     <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={this.state.isOpen} navbar>
        //       <ul className="navbar-nav flex-grow">
        //        <Router>

               
              
        //         </Router>
        //       </ul>
        //     </Collapse>
        //   </Container>
        // </Navbar> */}
   
    );
  }
}
