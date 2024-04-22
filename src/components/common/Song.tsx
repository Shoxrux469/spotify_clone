// import { useContext } from "react";
// import currentTrack from "../../contexts/currentTrack";

import { AiOutlineHeart } from "react-icons/ai";
import currentTrack from "../../modules/contexts/currTrack";
import { useContext } from "react";
import { ITrack } from "../../types/types";

const Song: React.FC<{
  track: ITrack;
  index: number;
  img: string;
}> = ({ track, index, img }) => {
  const Track = useContext(currentTrack);
  const duration = (track.duration_ms / 1000 / 60).toFixed(2).split(".");

  // console.log(track);
  const clickSong = () => {
    localStorage.setItem("lastTrack", JSON.stringify(track));
    let updatedTrack = {
      isPlaying: true,
      track: track,
    };
    Track.isPlaying = updatedTrack.isPlaying;
    Track.track = updatedTrack.track;
  };

  return (
    <tr
      className="px-3 py-2 flex gap-5 items-center text-white hover:bg-[#55555550] ease-in-out duration-200 rounded-md"
      onClick={clickSong}
    >
      <td className="min-h-[56%] flex-1 flex items-center">
        <span className=" text-[#B3B3B3] font-medium w-7">{index}</span>
        <img
          src={track.album?.images[0].url || img}
          alt="song"
          className="max-h-[46px] rounded-lg ml-1 mr-5"
        />
        <div>
          <p className="text-base hover:underline">{track.name}</p>
          <span className=" text-[#B3B3B3] hover:underline">
            {track.artists[0].name}
          </span>
        </div>
      </td>
      <td className="w-[30%] text-[#B3B3B3]">{track.album?.name}</td>
      <td className="flex-0 flex items-center gap-7">
        <button>
          <AiOutlineHeart color="#b3b3b3" size="24px" />
        </button>
        <p>{`${duration[0]} : ${duration[1]}`}</p>
      </td>
    </tr>
  );
};

export default Song;
