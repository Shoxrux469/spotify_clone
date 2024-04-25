import { ReactNode, useState } from "react";
import GetToken from "../utils/api/getToken";
import { useLocation } from "react-router-dom";
import LogIn from "../components/common/logIn";
import Aside from "../components/aside/aside";
import "../assets/styles/index.scss";
import bgContext from "../utils/contexts/setBg";
import Player from "../components/common/player";
import Header from "../components/header/header";
import currentTrack from "../utils/contexts/currTrack";
import { ITrack } from "../types/types";
import searchContext from "../utils/contexts/search";
interface ITrackData {
  isPlaying: boolean;
  track: ITrack | null;
}

const Layout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { token } = GetToken();
  const location = useLocation();
  const [bgColor, setBgColor] = useState<string>("");
  const [currTrack, setCurrTrack] = useState<ITrackData>({
    isPlaying: false,
    track: null,
  });
  const [searchText, setSearchText] = useState<string>("");

  if (!token && location.pathname !== "/login") {
    return <LogIn />;
  }

  return (
    <bgContext.Provider value={{ bgColor, setBgColor }}>
      <currentTrack.Provider value={{ currTrack, setCurrTrack }}>
        <searchContext.Provider value={{ searchText, setSearchText }}>
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
        </searchContext.Provider>
      </currentTrack.Provider>
    </bgContext.Provider>
  );
};

export default Layout;
