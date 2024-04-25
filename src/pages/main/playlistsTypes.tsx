import useService from "../../hooks/useService";
import { useEffect, useState } from "react";
import "./index.scss";
import { IMergedData } from "../../types/types";

const PlaylistsTypes = () => {
  const { getPlayLists, getAlbums, token } = useService();
  const [filters, setFilters] = useState<IMergedData[]>([]);
  const [showPlayers, setShowPlayers] = useState<boolean[]>([]);
  const [showPlaylist, setShowPlaylist] = useState<boolean>();

  useEffect(() => {
    Promise.all([
      getPlayLists("me/playlists?", 10),
      getAlbums("4KvNYZHRuNDQ3Xx6ZxkePp?si=Thzu7iTTR8yu6o7N9iDQFQ"),
      getAlbums("6E8lxwX7KMAO9nCx4A5tAR?si=hdERDOJCQyWqkPtpkhqDQQ"),
    ]).then(([playlistsResponse, albumsResponse1, albumsResponse2]) => {
      const mergedData: IMergedData[] = []
        .concat(playlistsResponse?.items || [])
        .concat(albumsResponse1)
        .concat(albumsResponse2)
        .filter((item) => item !== undefined);
      setFilters(mergedData);
      setShowPlayers(Array(mergedData.length).fill(false));
    });
  }, [token]);

  const toggleShowPlayer = (index: number) => {
    setShowPlayers((prevShowPlayers) => {
      const updatedShowPlayers = [...prevShowPlayers];
      updatedShowPlayers[index] = !updatedShowPlayers[index];
      return updatedShowPlayers;
    });
  };

  return (
    <div className="flex gap-5 w-full">
      <div
        className="filters_div"
        onMouseEnter={() => setShowPlaylist(true)}
        onMouseLeave={() => setShowPlaylist(false)}
      >
        <div className="bg-white/50 rounded-l-md min-w-12 min-h-12 mr-3"></div>
        <span className="text-sm">Любимые треки</span>
        <button style={{ display: showPlaylist ? "block" : "none" }}>
          <svg className="w-4 h-4">
            <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
          </svg>
        </button>
      </div>
      {filters && (
        <>
          {filters.map((item, i) => (
            <div
              key={i}
              className="filters_div"
              onMouseEnter={() => toggleShowPlayer(i)}
              onMouseLeave={() => toggleShowPlayer(i)}
            >
              <img
                src={item?.images?.[0]?.url}
                className="w-12 h-12 mr-3 rounded-l-md"
                alt=""
              />
              <span className="w-[50%] text-start text-sm">{item.name}</span>
              <button style={{ display: showPlayers[i] ? "block" : "none" }}>
                <svg className="w-4 h-4">
                  <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
                </svg>
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default PlaylistsTypes;
