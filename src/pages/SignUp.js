import React from 'react';
import styled from 'styled-components';
import { Form } from '../components';

function SignUp() {
  return (
    <Wrapper>
      <Form />
    </Wrapper>
  );
}

const Wrapper = styled.main`
  padding-top: 5rem;
`;

export default SignUp;
