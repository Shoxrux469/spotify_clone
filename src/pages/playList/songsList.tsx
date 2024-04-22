import { BiTime } from "react-icons/bi";
import { TbDots } from "react-icons/tb";
import { IoPlaySharp } from "react-icons/io5";
import { FiHeart, FiSearch } from "react-icons/fi";
import { HiArrowRight } from "react-icons/hi";
import Song from "../../components/common/Song";
import { ITrack } from "../../types/types";

const SongsList: React.FC<{ tracks: ITrack[]; img: string }> = ({
  tracks,
  img,
}) => {
  console.log(tracks);

  const shouldShowAlbumColumn = tracks.some((item) => item.album);

  return (
    <div>
      <div className="mt-8 mx-5">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <button className="w-[60px] h-[60px] mr-6 bg-[#65D36E] rounded-full flex justify-center items-center">
              <IoPlaySharp size="30px" />
            </button>
            <div className="flex items-center gap-x-4">
              <button>
                <FiHeart size="28px" color="white" />
              </button>
              <button className="p-1 h-fit rounded-full border-[3px]">
                <HiArrowRight
                  className="rotate-[90deg]"
                  size="16px"
                  color="white"
                />
              </button>
              <button className="w-10 h-10 rounded-full flex justify-center items-center gap-[5px]">
                <TbDots size="30px" color="white" />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-9">
            <button>
              <FiSearch size="22px" color="white" />
            </button>
            <select className="bg-transparent text-white text-[18px] font-medium">
              <option className="bg-[#121212] text-base">Custom order</option>
              <option className="bg-[#121212] text-base">Custom order</option>
              <option className="bg-[#121212] text-base">Custom order</option>
            </select>
          </div>
        </div>
      </div>
      <table className="w-[96%] mx-auto mt-11">
        <thead className="block border-b-2 border-[#666666] py-2 mb-7">
          <tr className="px-3 flex gap-5 text-base text-[#B3B3B3]">
            <td className="flex-1 min-w-[56%] flex gap-5 items-center">
              <span className="text-[22px]">#</span>
              <p>Title</p>
            </td>
            {shouldShowAlbumColumn && (
              <td className="min-w-[30%] flex-1">Album</td>
            )}
            <td className="w-[99px] flex justify-end">
              <BiTime size="24px" />
            </td>
          </tr>
        </thead>
        <tbody>
          {tracks.map((item, i) => (
            <Song key={i} track={item} index={i + 1} img={img} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SongsList;
