import { ReactNode } from "react";

const AuthLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" bg-[#C0FE04] min-h-screen rounded-md m-1">
      <div className="auth-layout"> {children}</div>
    </div>
  );
};

export default AuthLayout;
