import { ReactNode } from "react";
import GetToken from "../hooks/getToken";
import LogIn from "../components/common/logIn";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { token } = GetToken();

  return (
    <>
      {token ? (
        <>
          <main>{children}</main>
        </>
      ) : (
        <LogIn />
      )}
    </>
  );
};

export default Layout;
