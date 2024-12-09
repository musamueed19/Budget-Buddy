'use client'

import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Logo from "./Logo"

const Header = () => {

  const { isSignedIn , user } = useUser();


  return (
    <header className="w-full bg-[#111]">
      {/* Inner Header container - section */}
      <div className="flex items-center justify-between w-[90%] md:w-[90%] mx-auto py-3">
        {/* Logo - Section */}
        <Logo />

        {/* Conditional State - Authentication Section */}
          {isSignedIn ? <UserButton /> : <SignInButton />}

      </div>
    </header>
  );
}

export default Header