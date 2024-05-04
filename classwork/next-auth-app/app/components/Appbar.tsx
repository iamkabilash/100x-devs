"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export const Appbar = () => {
  const session = useSession();

  return (
    <nav>
      <div>{JSON.stringify(session)}</div>
      <button onClick={() => signIn()}>Sign In</button>
      <button onClick={() => signOut()}>Logout</button>
    </nav>
  );
};
