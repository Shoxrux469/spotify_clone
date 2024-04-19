import { ReactNode } from "react";
import GetToken from "../hooks/getToken";
// import LogIn from "../components/common/logIn";
import { useLocation } from "react-router-dom";
import LogIn from "../components/common/logIn";
import Aside from "../components/aside/aside";
import "../index.scss";
import Player from "../components/common/player";
import Header from "../components/header/header";
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
    <div className="max-h-screen h-screen bg-black p-2 relative">
      <main className="h-[84%] flex gap-2 relative">
        <Aside />
        <div className="main relative h-full">
          <Header />
          {children}
        </div>
      </main>
      <Player />
    </div>
  );
};

export default Layout;
