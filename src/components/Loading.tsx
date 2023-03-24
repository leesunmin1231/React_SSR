import React from 'react';
import styled from '@emotion/styled';
import ReactLoading from 'react-loading';

export default function Loading() {
  return (
    <Loader>
      <ReactLoading type="spin" color="#5A85E3" />
    </Loader>
  );
}
export const Loader = styled.div`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;
