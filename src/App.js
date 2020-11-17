import React from 'react';
import './app.scss';
import './assets/style/reset.scss';
import Container from './container';

import Header from 'components/Header';
import Footer from 'components/Footer';
import Sections from 'components/Sections';
import 'style/style.scss';
function App(props) {
  // const { switchIcon, isIconClicked } = props;

  //const index = !isIconClicked ? 4 : DATA.length;
  //const DATATOSHOW = DATA.filter((_, i) => i <= index);

  return (
    <div className='app'>
      <Header />
      <Sections />
      <Footer />
      {/* {DATATOSHOW.map(({ name, path }, index) => {
        return (
          <div key={index}>
            {path ? (
              <img src={path} alt={name} />
            ) : (
              <span>{name.charAt(0).toUpperCase()}</span>
            )}
            {DATATOSHOW.length - 1 === index ? (
              <span className='arrow' onClick={switchIcon}>
                {
                  <span className='icon'>
                    <i
                      className={`fa fa-chevron-down ${
                        isIconClicked ? 'swap' : ''
                      }`}
                      aria-hidden='true'
                    ></i>
                  </span>
                }
              </span>
            ) : null}
          </div>
        );
      })} */}
    </div>
  );
}

export default Container(App);
