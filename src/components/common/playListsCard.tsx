import { useNavigate } from "react-router-dom";

interface IMergedData {
  name: string;
  images: {
    url: string;
  }[];
  id: string;
  description?: string;
  tracks?: {
    href: string;
  };
}

const PlayListsCard: React.FC<{ item: IMergedData }> = ({ item }) => {
  const { images, name, description, id, tracks } = item;
  console.log(item);
  const navigate = useNavigate();

  const goToPlaylist = (item: IMergedData) => {
    navigate(`../playlist/${id}`, {
      state: {
        track: tracks?.href,
        playlist: item,
        name: name,
        img: images[0].url,
      },
    });
  };
  return (
    <div
      onClick={() => goToPlaylist(item)}
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
