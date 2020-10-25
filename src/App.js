import React from 'react';
import './app.scss';
import './assets/style/reset.scss';
import Container from './container';
import { Shinchan, Hagemaroo } from './assets/images/index';

function App(props) {
  console.log('props', props);
  const { switchIcon, isIconClicked } = props;

  const DATA = [
    {
      path: Shinchan,
      name: 'Atul Jaiswar',
    },
    {
      path: '',
      name: 'Rahul Gupta',
    },
    {
      path: Hagemaroo,
      name: 'Hagemaroo',
    },
    {
      path: '',
      name: 'Vitthal Jadhav',
    },
    {
      path: '',
      name: 'Deva Gupta',
    },
    {
      path: '',
      name: 'Vitthal Jadhav',
    },
    {
      path: '',
      name: 'Deva Gupta',
    },
    {
      path: '',
      name: 'Vitthal Jadhav',
    },
    {
      path: '',
      name: 'Deva Gupta',
    },
    {
      path: '',
      name: 'Vitthal Jadhav',
    },
    {
      path: '',
      name: 'Deva Gupta',
    },
    {
      path: '',
      name: 'Vitthal Jadhav',
    },
    {
      path: '',
      name: 'Deva Gupta',
    },
    {
      path: '',
      name: 'Vitthal Jadhav',
    },
    {
      path: '',
      name: 'Deva Gupta',
    },

    {
      path: '',
      name: 'Anil Jaiswar',
    },
    {
      path: Hagemaroo,
      name: 'Hagemaroo',
    },
  ];

  const index = !isIconClicked ? 4 : DATA.length;
  const DATATOSHOW = DATA.filter((_, i) => i <= index);
  const test = '<h1>Hello</h1><p>Hello Atul</p>';
  const test1 = () => {
    return { __html: test };
  };
  return (
    <div className='app'>
      <p>kjdfhgjusdhfju</p>
      {DATATOSHOW.map(({ name, path }, index) => {
        return (
          <div>
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
                      class={`fa fa-chevron-down ${
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
      })}
    </div>
  );
}

export default Container(App);
