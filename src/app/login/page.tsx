"use client"

import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { getUsers } from "@/utils/getUsers";

export default function login() {
  const [nameEmail, setNameEmail] = useState('');
  const [password, setPassword] = useState('');

  async function loginUser(nameEmail: string, password: string) {
    await fetch('/api/login', {method: 'POST', body: JSON.stringify({nameEmail: nameEmail, password: password})});
  };

  return (
    <main className='h-screen w-full flex items-center justify-center'>
      <form className='flex flex-col w-96 gap-2 p-5 border-solid border-2 rounded-md border-gray-300 bg-gray-200'>
        <Typography variant='h4'>Sign in</Typography>
        <TextField required onChange={e => setNameEmail(e.target.value)} variant='filled' label='Username or email' />
        <TextField required onChange={e => setPassword(e.target.value)} variant='filled' label='Password' type='password' />
        <Button onClick={() => loginUser(nameEmail, password)} variant='contained'>Login</Button>
      </form>
    </main>
  );
};