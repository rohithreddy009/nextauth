"use client";
import { signIn, signOut } from "next-auth/react"

export const Appbar = () => {
  return (
    <div className="flex items-center justify-end space-x-4">
      <button onClick={() => signIn()} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700 focus:outline-none">
        Signin
      </button>
      <button onClick={() => signOut()} className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 focus:outline-none">
        Sign out
      </button>
    </div>
  );
};
