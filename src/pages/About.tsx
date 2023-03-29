import React from 'react';
import { Link } from 'react-router-dom';
import { AboutFrame } from '../styles/frame';
import { MiddleButton } from '../styles/common';

export default function About() {
  return (
    <AboutFrame>
      <div>About</div>
      <Link to="/">
        <MiddleButton>Todo</MiddleButton>
      </Link>
    </AboutFrame>
  );
}
