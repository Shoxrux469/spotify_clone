import { useEffect, useRef, useState } from "react";
import "../index.scss";
import useService from "../../../hooks/service";

interface IPlaylist {
  name: string;
  owner: { display_name: string };
}

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
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  className="w-4 h-4 fill-white/70"
                  viewBox="0 0 16 16"
                >
                  <path d="M7 1.75a5.25 5.25 0 1 0 0 10.5 5.25 5.25 0 0 0 0-10.5zM.25 7a6.75 6.75 0 1 1 12.096 4.12l3.184 3.185a.75.75 0 1 1-1.06 1.06L11.304 12.2A6.75 6.75 0 0 1 .25 7z"></path>
                </svg>
              </button>
            </div>
          </div>
          <span>
            <button className="recents_btn">
              <span className="text-sm">Недавно прослушано</span>
              <span>
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                  className="w-4 h-4"
                >
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
                <div className="flex w-full">
                  <div className="bg-white/50 rounded-md min-w-12 min-h-12 mr-3"></div>
                  <div className="flex justify-between items-center pr-2 w-full">
                    <div>
                      <p className="text-green-500 font-semibold">
                        {item.name}
                      </p>
                      <span className="text-sm text-white/70">
                        {item.owner.display_name}
                      </span>
                    </div>
                    <span>
                      <svg
                        data-encore-id="icon"
                        role="img"
                        aria-hidden="true"
                        className="fill-green-500 w-4 h-4 hidden"
                        viewBox="0 0 16 16"
                      >
                        <path d="M10.016 1.125A.75.75 0 0 0 8.99.85l-6.925 4a3.639 3.639 0 0 0 0 6.299l6.925 4a.75.75 0 0 0 1.125-.65v-13a.75.75 0 0 0-.1-.375zM11.5 5.56a2.75 2.75 0 0 1 0 4.88V5.56z"></path>
                        <path d="M16 8a5.752 5.752 0 0 1-4.5 5.614v-1.55a4.252 4.252 0 0 0 0-8.127v-1.55A5.752 5.752 0 0 1 16 8z"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MediaBottom;
