import React, { useState, useEffect } from 'react';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouseItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const App = () => {
  // Maneja el estado, videos (this.state) y setVideos (this.setSatet()) pero lo nombramos como queremos
  const [videos, setVideos] = useState({ mylist: [], trends: [], originals: [] });
  const API_URL = 'http://localhost:3000/initalState';

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setVideos(data));
  }, []);

  console.log(videos.mylist);
  return (
    <div className='App'>
      <Header />
      <Search />

      {videos.mylist.length > 0 && (
        <Categories title='Mi lista'>
          <Carousel>
            <CarouseItem />
          </Carousel>
        </Categories>
      )}

      <Categories title='Tendencia'>
        <Carousel>
          {videos.trends.map((item) =>

            <CarouseItem key={item.id} {...item}/>
          )}
        </Carousel>
      </Categories>

      <Categories title='Originales de PlatziVideo'>
        <Carousel>
          {videos.originals.map((item) =>
            <CarouseItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>

      <Footer />
    </div>
  );
};

export default App;

