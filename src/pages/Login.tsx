import React from 'react';
import Login from '../components/Login';
import { AuthFrame } from '../styles/frame';

export default function SignUp() {
  return (
    <AuthFrame>
      <Login />
    </AuthFrame>
  );
}
