import React from 'react';
import Layout from '../../components/Layout';
//import { Jumbotron, Row, Col, Container } from 'react-bootstrap';
import './style.css';
//import { NavLink } from 'react-router-dom';

/**
* @function Home
**/

const Home = () => {

  return (
    <Layout sidebar>
      <div class="container">
        <div class="row">
          <div class="col-md-4 col-xl-3">
            <div class="card order-card">
              <div class="card-block">
                <h6 class="m-b-20">Orders Received</h6>
                <h2 class="text-right"><i class="fa fa-cart-plus f-left"></i><span>23</span></h2>
                <p class="m-b-0"><button type="button" class="btn btn-outline-success btn-sm btn-block">View Orders</button></p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card order-card">
              <div class="card-block">
                <h6 class="m-b-20">Notices</h6>
                <h2 class="text-right"><i class="fa fa-rocket f-left"></i><span>01</span></h2>
                <p class="m-b-0"><button type="button" class="btn btn-outline-primary btn-sm btn-block">View Notices</button></p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card order-card">
              <div class="card-block">
                <h6 class="m-b-20">Expiring</h6>
                <h2 class="text-right"><i class="fa fa-refresh f-left"></i><span>21</span></h2>
                <p class="m-b-0"><button type="button" class="btn btn-outline-warning btn-sm btn-block">View Products</button></p>
              </div>
            </div>
          </div>

          <div class="col-md-4 col-xl-3">
            <div class="card order-card">
              <div class="card-block">
                <h6 class="m-b-20">Expired</h6>
                <h2 class="text-right"><i class="fa fa-credit-card f-left"></i><span>09</span></h2>
                <p class="m-b-0"><button type="button" class="btn btn-outline-danger btn-sm btn-block">View Products</button></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )

}

export default Home