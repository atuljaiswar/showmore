import React from 'react';
import { SOCIAL_ICON } from 'utils/constants';

import { MAIL } from 'assets/images';
const Footer = () => {
  return (
    <footer className='footer'>
      <div className='wrapper'>
        <ul>
          <li>
            <h5>about simbla</h5>
            <p>
              {' '}
              Was certainty remaining engrossed applauded sir how discovery.
              Settled opinion how enjoyed greater joy adapted too shy. Now
              properly surprise expenses interest nor replying she she. Bore
              tall nay many many time yet less. Doubtful for answered one fat
              indulged margaret sir shutters together. Ladies so in wholly
              around whence in at. Warmth he up giving oppose if. Impossible is
              dissimilar entreaties oh on terminated. Was certainty remaining
              engrossed applauded sir how discovery. Settled opinion how enjoyed
              greater joy adapted too shy.
            </p>
            <span>
              Ladies so in wholly around whence in at. Warmth he up giving
              oppose if. Impossible is dissimilar entreaties oh on terminated.
            </span>
          </li>
          <li>
            <h5>contact</h5>
            <div className='contact'>
              <MAIL className='mail' />
              <a href='#' title='mail'>
                Support@simbla.com
              </a>
            </div>
          </li>
          <li className='icon'>
            <h5>social</h5>
            <ul>
              {SOCIAL_ICON.map(item => {
                return (
                  <li>
                    <item.svg />
                  </li>
                );
              })}
            </ul>
          </li>
        </ul>
        <div className='copyright'>
          <a>articles</a>
          <span>all rights reserved to simbla inc</span>
        </div>
        <span>2017</span>
      </div>
    </footer>
  );
};

export default Footer;
