import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { IoChevronUpCircle } from 'react-icons/io5';

function BackToTop() {
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const scrollEvent = window.addEventListener('scroll', () => {
      console.log(document.documentElement.scrollHeight, window.scrollY);
      if (window.scrollY >= document.documentElement.scrollHeight - 1500) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    });

    return () => window.removeEventListener('scroll', scrollEvent);
  }, []);

  return (
    <Wrapper>
      <IoChevronUpCircle
        className={isAtBottom ? 'show' : 'up'}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .show {
    display: inline-block;
    position: fixed;
    bottom: 10rem;
    right: 3rem;
    font-size: 4.8rem;
    z-index: 99;
    color: var(--primary);
    cursor: pointer;

    @media (max-width: 480px) {
      right: 2rem;
    }
  }

  .up {
    display: none;
  }
`;

export default BackToTop;
