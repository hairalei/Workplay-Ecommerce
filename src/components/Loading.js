import React from 'react';
import styled from 'styled-components';
import { RiGameLine } from 'react-icons/ri';
import { BiGhost } from 'react-icons/bi';

function Loading() {
  return (
    <Wrapper>
      <div className='loading'>
        <RiGameLine className='pacman' />
        <BiGhost className='ghost' />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(254, 254, 254, 0.3);
  z-index: 99999;

  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15rem;
    height: 15rem;
    border-radius: 50%;
    border: 5px dotted var(--grey-6);
    animation: pacman 5s linear infinite;

    .pacman {
      position: absolute;
      top: 0%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 3.6rem;
    }

    .ghost {
      position: absolute;
      top: 10%;
      left: 100%;
      transform: translate(-100%, -50%) rotate(45deg);
      font-size: 3.6rem;
    }
  }

  @keyframes pacman {
    from {
      transform: translate(-50%, -50%) rotate(-60deg);
    }

    to {
      transform: translate(-50%, -50%) rotate(720deg);
    }
  }
`;

export default Loading;
