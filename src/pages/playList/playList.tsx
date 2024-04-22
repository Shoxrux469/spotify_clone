import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import useService from "../../hooks/service";
import PlayListHead from "./playListHead";
import Loader from "../../components/common/loader";
import SongsList from "./songsList";
import { ITrack } from "../../types/types";

interface IPalyList {
  track: ITrack;
}

const PlayListPage = () => {
  const { getTracks, token, loading, error } = useService();
  const { state } = useLocation();

  const [tracks, setTracks] = useState<ITrack[] | IPalyList[]>([]);
  // const [playListTracks, setPlayListTracks] = useState<IPalyList[]>([]);

  console.log(state);
  console.log(tracks);
  // console.log(albumTracks);
  // console.log(playListTracks);

  useEffect(() => {
    if (state.track) {
      getTracks(state.track).then((res) => {
        setTracks(res?.items);
        // console.log(res);
      });
    } else {
      getTracks(state.playlist.href + "/tracks").then((res) => {
        setTracks(res?.items);
        // console.log(res);
      });
    }
  }, [token, state]);

  const getArtistsNames = () => {
    let names: string[] = [];
    if (Array.isArray(tracks)) {
      names = tracks.map((item) => {
        if ("track" in item) {
          return item.track.artists[0]?.name;
        } else {
          // item is of type IAlbum
          return item.artists[0]?.name;
        }
      });
    }
    let stringifyed = names.slice(0, 4).join(", ") + "...";

    return stringifyed;
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <p className="text-red-600 text-3xl">ERROR.</p>;
  }

  return (
    <div>
      {tracks && (
        <PlayListHead
          artists={getArtistsNames()}
          tracks={tracks}
          playList={state.playlist}
        />
      )}
      {tracks && (
        <SongsList
          tracks={tracks.map((item) => ("track" in item ? item.track : item))}
          img={state.img}
        />
      )}
    </div>
  );
};
export default PlayListPage;
