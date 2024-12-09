import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="w-full bg-[#111]">
      {/* Inner Header container - section */}
      <div className="flex items-center justify-between w-[90%] md:w-[90%] mx-auto py-3">
        {/* Logo - Section */}
        <Logo />

        {/* Conditional State - Authentication Section */}
        <>
          <SignedIn>
            <UserButton />
          </SignedIn>

          <SignedOut>
            <SignInButton />
          </SignedOut>
        </>
      </div>
    </header>
  );
}

export default Header