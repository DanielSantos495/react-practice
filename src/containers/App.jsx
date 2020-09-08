import React from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouseItem from '../components/CarouselItem';
import Footer from '../components/Footer';
import useInitialState from '../hooks/useInitialState';

import '../assets/styles/App.scss';

const API_URL = 'http://localhost:3000/initalState';

const App = () => {

  const initialState = useInitialState(API_URL);

  console.log(initialState);
  return initialState.length === 0 ? <h1>Loading...</h1> : (
    <div className='App'>
      <Header />
      <Search />

      {initialState.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            <CarouseItem />
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencia'>
        <Carousel>
          {initialState.trends.map((item) =>

            <CarouseItem key={item.id} {...item}/>
          )}
        </Carousel>
      </Categories>

      <Categories title='Originales de PlatziVideo'>
        <Carousel>
          {initialState.originals.map((item) =>
            <CarouseItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;

