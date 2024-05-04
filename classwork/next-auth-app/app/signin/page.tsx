"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();
  return (
    <div>
      <button onClick={async () => await signIn("google")}>
        Login with Google
      </button>
      <form>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button
          onClick={async (e) => {
            e.preventDefault();
            const res = await signIn("credentials", {
              username: "ggg",
              password: "ggg",
              redirect: false,
            });
            console.log(res);
            router.push("/");
          }}
        >
          Login with email
        </button>
      </form>
    </div>
  );
}
