"use client"

import { Button, TextField, Typography } from '@mui/material';
import { useState } from 'react'
import { db } from '@/utils/db';


export default function register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  async function insertUser(name: string, email: string, password: string) {
    if (password === confirmPassword) {
      await fetch('/api/register', {method: 'POST', body: JSON.stringify({name: name, email: email, password: password})});
    } else {
      console.log('password does not match');
    }
  };

  return (
    <main className='h-screen w-full flex items-center justify-center'>
      <form className='flex flex-col w-96 gap-2 p-5 border-solid border-2 rounded-md border-gray-300 bg-gray-200'>
        <Typography variant='h4'>Create an account</Typography>
        <TextField required onChange={e => setName(e.target.value)} variant='filled' label='Username' />
        <TextField required onChange={e => setEmail(e.target.value)} variant='filled' label='Email' type='email' />
        <TextField required onChange={e => setPassword(e.target.value)} variant='filled' label='Create password' type='password' />
        <TextField required onChange={e => setConfirmPassword(e.target.value)} variant='filled' label='Confirm password' type='password' />
        <Button onClick={() => insertUser(name, email, password)} variant='contained'>Register</Button>
      </form>
    </main>
  );
};