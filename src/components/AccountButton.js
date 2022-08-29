import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoPersonAdd, IoPersonRemove, IoPerson } from 'react-icons/io5';
import { useUserContext } from '../context/userContext';

function AccountButton() {
  const { currentUser } = useUserContext();

  return (
    <Wrapper>
      <Link className='linkName' to={currentUser ? '/logout' : '/login'}>
        {currentUser ? 'logout' : 'login'}
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export default AccountButton;
