import React from 'react';
import { pic12, place } from 'assets/images/index';
// import '../../style/style.scss';
const Banner = () => {
  return (
    <div className='banner'>
      <figure>
        <img src={place} alt='Banner' />
      </figure>
      <div className='wrapper'>
        <div className='banner-content'>
          <h2>responsive website template</h2>
          <span>Take a tour in our responsive website templates gallery.</span>
          <a href='#' title={'Start For Free'}>
            start for <span>free</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
