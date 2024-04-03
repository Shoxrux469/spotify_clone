import { ReactNode } from "react";
import GetToken from "../hooks/getToken";
// import LogIn from "../components/common/logIn";
import { useLocation } from "react-router-dom";
import LogIn from "../components/common/logIn";
import Aside from "../components/aside/aside";
import "../index.scss";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { token } = GetToken();
  const location = useLocation();

  if (!token && location.pathname !== "/login") {
    return <LogIn />;
  }

  return (
    <div className="">
      <div className="bg-black p-2 h-screen relative">
        <aside className="w-[420px] min-h-0 h-full gap-2">
          <Aside />
          <main>{children}</main>
        </aside>
      </div>
    </div>
  );
};

export default Layout;
