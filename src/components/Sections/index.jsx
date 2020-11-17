import React from 'react';
import Container from './container';
import Banner from 'components/Banner';
import { SLIDER_IMAGES } from 'utils/constants';

const NUMBERS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const MainSection = props => {
  const { sliderImg, handleSlideChange, currentSlide } = props;
  const SLIDE = (sliderImg.length && sliderImg) || SLIDER_IMAGES;
  console.log('props', SLIDE);
  return (
    <main>
      <Banner />
      <section className='ease-to-use'>
        <div className='wrapper'>
          <h3>Easy to use bootstrap responsive website template</h3>
          <div className='number'>
            {NUMBERS.map((item, index) => (
              <span
                className={`${currentSlide === item ? 'current-slide' : ''}`}
                key={index}
                onClick={() => handleSlideChange(item)}
              >
                {item}
              </span>
            ))}
          </div>
          <ul className='slides'>
            {SLIDE.map((item, index) => (
              <li key={index}>
                <img src={item.path} alt={item.alt} />
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='about'>
        <div className='wrapper'>
          <h4>About our responsive website templates</h4>
          <p>
            Was certainty remaining engrossed applauded sir how discovery.
            Settled opinion how enjoyed greater joy adapted too shy. Now
            properly surprise expenses interest nor replying she she. Bore tall
            nay many many time yet less. Doubtful for answered one fat indulged
            margaret sir shutters together. Ladies so in wholly around whence in
            at. Warmth he up giving oppose if. Impossible is dissimilar
            entreaties oh on terminated. Earnest studied article country ten
            respect showing had. But required offering him elegance son improved
            informed. Written enquire painful ye to offices forming it. Then so
            does over sent dull on. Likewise offended humoured mrs fat trifling
            answered. On ye position greatest so desirous.
          </p>
          <span>
            Cultivated who resolution connection motionless did occasional.{' '}
          </span>
        </div>
      </section>
    </main>
  );
};

export default Container(MainSection);
