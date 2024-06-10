'use client'
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Login from "@/components/Login";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

const signinErrors = {
  // ...
  "default": ""
};

export default async function Signin({ searchParams }) {
  const { callbackUrl, error } = searchParams;
  const session = await getServerSession(authOptions);
  if (session) {
    redirect(callbackUrl || "/");
  }
  return (
    <div>
      {error && <div>
        {signinErrors[error.toLowerCase()]}
      </div>}
      <Login />
    </div>
  );
}
