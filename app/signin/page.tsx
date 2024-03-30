"use client"
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Signin() {
  const router = useRouter();

  const handleGoogleSignIn = async () => {
    await signIn("google");
  };

  const handleEmailSignIn = async () => {
    const res = await signIn("credentials", {
      username: "",
      password: "",
      redirect: false,
    });
    console.log(res);
    router.push("/");
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button className="w-half px-8 py-4 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none" onClick={handleGoogleSignIn}>
        Login with Google
      </button>
    </div>
  );
}

