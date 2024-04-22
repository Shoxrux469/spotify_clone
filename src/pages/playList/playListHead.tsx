import { useContext, useEffect, useRef } from "react";
import bgContext from "../../modules/contexts/setBg";
import { getAverageRGB } from "../../hooks/getImgBg";
import { ITrack } from "../../types/types";

interface IPlaylist {
  name: string;
  type: string;
  images: {
    url: string;
  }[];
}

interface IPalyList {
  track: ITrack;
}

const PlayListHead: React.FC<{
  playList: IPlaylist;
  tracks: ITrack[] | IPalyList[];
  artists: string;
}> = ({ playList, tracks, artists }) => {
  let bgColor = useContext(bgContext);

  const { images, name, type } = playList;
  console.log(name);

  const imgEl = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgEl.current) {
      bgColor = getAverageRGB(imgEl.current);
      // console.log(getAverageRGB(imgEl.current));
    }
  }, []);

  return (
    <div className="flex mx-5 items-end" style={{ backgroundColor: bgColor }}>
      <img
        ref={imgEl}
        className="max-w-[240px] rounded-xl mr-6"
        src={images[0].url}
        alt="Playlist"
      />
      <div className="text-white">
        <p className="text-lg font-medium">{type}</p>
        <h1 className="text-7xl font-bold mb-6 mt-3">{name}</h1>
        {type === "playlist" ? (
          <p className="text-white text-lg my-3 cursor-pointer truncate">
            {artists}
          </p>
        ) : null}
        <div className="flex text-base">
          {type === "playlist" || type === "album" ? (
            <span className="text-[#a4a4a4]">
              {`Spotify ${tracks && tracks.length} songs, 2hr 01 min`}
            </span>
          ) : (
            <span className="text-xl text-[#a4a4a4]">10 followers</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default PlayListHead;
