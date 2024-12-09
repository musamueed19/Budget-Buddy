import Logo from "@/components/Logo";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative flex h-screen items-center justify-center w-full flex-col">
      <Logo />
      <div className="mt-12">{children}</div>
    </div>
  );
};

export default AuthLayout;
