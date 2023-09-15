'use client';

import { AppBar, Avatar, Button, Toolbar } from '@mui/material';

import { useSession, signIn, signOut } from 'next-auth/react';
import { deepPurple } from '@mui/material/colors';

function LoginOrAvatar() {
  const { data: session } = useSession();
  console.log(session);
  if (!session) {
    return <Button color="inherit" onClick={() => signIn()}>Login</Button>;
  } else {
    let avatarChar;
    if (session.user?.name) {
      avatarChar = session.user.name.charAt(0);
    } else {
      avatarChar = '?';
    }

    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ bgcolor: deepPurple[500] }}>{avatarChar}</Avatar>
        <Button color="inherit" onClick={() => signOut()}>Sign out</Button>
      </div>
    );
  }
}

export default function MenuBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <LoginOrAvatar />
      </Toolbar>
    </AppBar>
  );
}