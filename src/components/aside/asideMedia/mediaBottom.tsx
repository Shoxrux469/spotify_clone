import { useEffect, useRef, useState } from "react";
import "../index.scss";
import useService from "../../../hooks/useService";
import MyPlayLists from "../../common/myPlayLists";
import { IPlaylist } from "../../../types/types";

const MediaBottom = () => {
  const { getPlayLists, token } = useService();
  const [isHiddenSearch, setIsHiddenSearch] = useState<boolean>(true);
  const [playLists, setPlayLists] = useState<IPlaylist[] | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    getPlayLists("me/playlists?", 50).then((res) => {
      setPlayLists(res?.items);
    });
  }, [token]);

  const handleInputClick = () => {
    setIsHiddenSearch(false);
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleInputOnFocusOut = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    if (!value.trim()) {
      setIsHiddenSearch(true);
    }
  };

  return (
    <div>
      <div className="pb-2 px-2">
        <div className="flex justify-between items-center pt-[2px] pr-[2px] pl-2">
          <div className="relative">
            <input
              ref={inputRef}
              type="text"
              placeholder={"Искать в плейлистах"}
              className="media_search"
              style={
                isHiddenSearch === false
                  ? {
                      opacity: "1",
                      width: "188px",
                      padding: "8px 20px 8px 32px",
                      transition: "ease-in-out .3s",
                    }
                  : {
                      opacity: "0",
                      width: "32px",
                      padding: "0",
                    }
              }
              onBlur={handleInputOnFocusOut}
            />
            <div onClick={handleInputClick} className="absolute top-0">
              <button className="p-2 hover:bg-white/10 rounded-full">
                <svg className="w-4 h-4 fill-white/70" viewBox="0 0 16 16">
                  <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
                </svg>
              </button>
            </div>
          </div>
          <span>
            <button className="recents_btn">
              <span className="text-sm">Недавно прослушано</span>
              <span>
                <svg viewBox="0 0 16 16" className="w-4 h-4">
                  <path d="M15 14.5H5V13h10v1.5zm0-5.75H5v-1.5h10v1.5zM15 3H5V1.5h10V3zM3 3H1V1.5h2V3zm0 11.5H1V13h2v1.5zm0-5.75H1v-1.5h2v1.5z"></path>
                </svg>
              </span>
            </button>
          </span>
        </div>
        <div className="flex flex-col h-full items-center">
          {playLists &&
            playLists.map((item, i) => (
              <div key={i} className="hover:bg-white/5 w-full rounded-lg p-2">
                <MyPlayLists item={item} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MediaBottom;
