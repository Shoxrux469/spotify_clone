import { useNavigate } from "react-router";
import { IMergedData } from "../../types/types";

const PlayListsCard: React.FC<{
  item: IMergedData;
}> = ({ item }) => {
  const { images, name, description, id, tracks } = item;
  const navigate = useNavigate();

  const state = {
    track: tracks?.href,
    playlist: item,
    name: name,
    img: images[0].url,
  };

  const goToPlaylist = () => {
    navigate(`playlist/${id}`, { state });
  };

  return (
    <div
      onClick={goToPlaylist}
      className="p-3 bg-transparent ease-in duration-200 w-full min-w-12 min-h-12 items-center hover:bg-white/5 cursor-pointer rounded-lg"
    >
      <img
        className="w-full custom-shadow rounded-md"
        src={images[0].url}
        alt=""
      />
      <div>
        <p className="text-white text-base font-bold pt-2">{name}</p>
        <span className="text-[#B3B3B3] text-base leading-5 block">
          {description?.slice(0, 20)}
        </span>
      </div>
    </div>
  );
};
export default PlayListsCard;
