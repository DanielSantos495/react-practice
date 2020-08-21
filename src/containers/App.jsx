import React from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouseItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => (
  <div className='App'>
    <Header />
    <Search />

    <Categories title='Mi lista'>
      <Carousel>
        <CarouseItem />
        <CarouseItem />
        <CarouseItem />
        <CarouseItem />
        <CarouseItem />
        <CarouseItem />
      </Carousel>
    </Categories>

    <Categories title='Tendencia'>
      <Carousel>
        <CarouseItem />
        <CarouseItem />
        <CarouseItem />
        <CarouseItem />
        <CarouseItem />
        <CarouseItem />
      </Carousel>
    </Categories>

    <Categories title='Originales de PlatziVideo'>
      <Carousel>
        <CarouseItem />
        <CarouseItem />
        <CarouseItem />
        <CarouseItem />
        <CarouseItem />
        <CarouseItem />
      </Carousel>
    </Categories>

    <Footer />
  </div>
);

export default App;

