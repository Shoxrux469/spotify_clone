import { ReactNode, useState } from "react";
import GetToken from "../hooks/getToken";
import { useLocation } from "react-router-dom";
import LogIn from "../components/common/logIn";
import Aside from "../components/aside/aside";
import "../index.scss";
import bgContext from "../modules/contexts/setBg";
import Player from "../components/common/player";
import Header from "../components/header/header";
import currentTrack from "../modules/contexts/currTrack";
import { ITrack } from "../types/types";
interface ITrackData {
  isPlaying: boolean;
  track: ITrack | string;
}

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { token } = GetToken();
  const location = useLocation();
  const [bgColor, setBgColor] = useState<string>("");
  const [Track, setTrack] = useState<ITrackData>({
    isPlaying: false,
    track: "",
  });

  if (!token && location.pathname !== "/login") {
    return <LogIn />;
  }

  return (
    <bgContext.Provider value={bgColor}>
      <currentTrack.Provider value={Track}>
        <div className="max-h-screen h-screen bg-black p-2 relative">
          <main className="h-[84%] flex gap-2 relative">
            <Aside />
            <div className="main relative h-full">
              <Header />
              {location.pathname === "/" ? (
                <div
                  className="bg-spotify"
                  style={{ backgroundColor: bgColor }}
                ></div>
              ) : null}
              {children}
            </div>
          </main>
          <Player />
        </div>
      </currentTrack.Provider>
    </bgContext.Provider>
  );
};

export default Layout;
