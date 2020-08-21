import React from 'react';

import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import '../assets/styles/components/CarouselItem.scss';

const CarouselItem = () => (
  <div className='carousel-item'>
    <img className='carousel-item__img' src='../assets/foto1.jpeg' alt='People' />
    <div className='carousel-item__details'>
      <img src={playIcon} alt='Play' />
      <img src={plusIcon} alt='Add' />
      <p className='carousel-item__details--title'>Título descriptivo</p>
      <p className='carousel-item__details--subtitle'>2019 16+ 114 minutos</p>
    </div>
  </div>
);

export default CarouselItem;
