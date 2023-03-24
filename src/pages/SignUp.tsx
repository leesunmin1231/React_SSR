import React from 'react';
import Signup from '../components/Signup';
import { AuthFrame } from '../styles/frame';

export default function SignUp() {
  return (
    <AuthFrame>
      <Signup />
    </AuthFrame>
  );
}
