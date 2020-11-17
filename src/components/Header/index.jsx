import React from 'react';
import { HEAD_NAV } from 'utils/constants';
import { DROPDOWN } from 'assets/images';
const Header = () => {
  return (
    <>
      <header className='header'>
        <div className='wrapper'>
          <div className='login-register'>
            <h1>simbla</h1>
            <div className='regiter-btn'>
              <a href='#' target='_blank' className='signin'>
                Sign in
              </a>
              <a href='#' target='_blank' className='reg'>
                register
              </a>
            </div>
          </div>

          <nav>
            <span className='line'>line</span>
            <div className='humburger'>
              <span>ham</span>
              <span>ham</span>
              <span>ham</span>
            </div>
            <ul className='navigation'>
              {HEAD_NAV.map((item, index) => (
                <li key={index}>
                  <a href='#' title={item}>
                    {item}
                    {index === 0 ? <DROPDOWN className='dropdown' /> : null}
                  </a>
                  {item === 'website builder' ? (
                    <ul className='inner-nav'>
                      {HEAD_NAV.map((item1, index1) => (
                        <li key={index1}>
                          <a href='#' title={item1}>
                            {item1}
                          </a>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
