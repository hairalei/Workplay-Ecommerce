import React from 'react';
import styled from 'styled-components';
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
} from 'react-icons/io5';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <Wrapper>
      <div className='container'>
        <div className='infoDiv'>
          <h5>Call us:</h5>
          <p>+6397 7777 7777</p>
          <p>+6391 3131 3131</p>
          <p>+6392 2222 2222</p>
        </div>

        <div className='infoDiv'>
          <h5>Working Days | Hours:</h5>
          <p>Mon - Thurs | 8AM - 4PM</p>
          <p>Fri - Sat | 9AM - 5PM</p>
        </div>

        <div className='infoDiv'>
          <h5>E-mail address:</h5>
          <p>support@workplay.com</p>
        </div>

        <div className='infoDiv'>
          <h5>Follow us</h5>
          <div className='social'>
            <IoLogoFacebook className='icon' />
            <IoLogoInstagram className='icon' />
            <IoLogoTwitter className='icon' />
          </div>
        </div>
      </div>

      <footer>
        &copy; Workplay eCommerce - <span>{year}</span>. All rights reserved.
      </footer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  background-color: var(--blue-shade-5);
  color: var(--grey-3);
  padding: 5rem 12rem;
  padding-bottom: 1rem;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6.4rem;

  .container {
    display: flex;
    align-items: start;
    justify-content: center;
    gap: 10rem;
  }

  .infoDiv {
    h5 {
      font-size: 1.4rem;
      font-weight: normal;
      margin-bottom: 1rem;
      text-transform: uppercase;
    }

    p {
      font-weight: bold;
      margin-bottom: 0.5rem;
      letter-spacing: 1px;
    }
  }

  .social .icon {
    font-size: 2.4rem;
    margin-right: 1rem;
    cursor: pointer;
  }

  footer {
    justify-self: end;
    color: var(--grey-5);
    font-size: 1.4rem;
  }
`;

export default Footer;
