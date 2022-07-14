import React from 'react';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import MenuHeader from '../../components/MenuHeader';
import DemoCarousel from '../../components/Democarousel';
import Multicarousel from '../Multicarousel';
import Brandslider from '../Brandslider';

/**
* @function HomePage
**/

const HomePage = (props) => {
  return (
    <Layout>
      <DemoCarousel />
      <hr />
      <h4 style={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Fira Sans' }}>Shop by Category</h4>
      <hr />
      <Multicarousel />
      <hr />
      <h4 style={{ fontWeight: 'bold', textAlign: 'center', fontFamily: 'Fira Sans' }}>Shop by Brands</h4>
      <hr />
      <Brandslider />
      <hr />
      <div class="card">
        <div class="card-body">
          <h5 class="card-title">Healthcare</h5>
          <a href="#" class="btn btn-primary">Order Now</a>
        </div>
      </div>
    </Layout>
  )
}

export default HomePage