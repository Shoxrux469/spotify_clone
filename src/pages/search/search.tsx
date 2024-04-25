import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
// import { Helmet } from "react-helmet";
import searchContext from "../../utils/contexts/search";
import useService from "../../hooks/useService";
import Loader from "../../components/common/loader";
import SearchResult from "../../components/search/searchRes";
import RecentSearches from "../../components/search/recentSearch";
import BrowseAll from "../../components/search/BrowseAll";
import { ITrack } from "../../types/types";

interface IArtist {
  images: {
    url: string;
  }[];
  id: string;
  name: string;
  tracks: {
    href: string;
  };
  type?: string;
}

interface ISeachArtists {
  artists: {
    items: [];
  };
  images: {
    url: string;
  }[];
  tracks: {
    href: string;
  };
  id: string;

  name: string;
  type?: string;
}
interface ISeachTrack {
  tracks: {
    items: [];
  };
}

const Search = () => {
  const [tracks, setTracks] = useState<ITrack[]>([]);
  const [artist, setArtist] = useState<ISeachArtists[]>([]);
  const { searchText } = useContext(searchContext);
  const { getSearch, loading, error } = useService();
  const navigate = useNavigate();

  console.log(tracks);
  console.log(artist);

  console.log(searchText);

  useEffect(() => {
    if (searchText.length > 0) {
      getSearch(searchText, 1, "artist").then((res: ISeachArtists) => {
        console.log(res);
        setArtist(res?.artists?.items);
      });
      getSearch(searchText, 4).then((res: ISeachTrack) => {
        console.log(res);
        setTracks(res?.tracks?.items);
      });
    }
  }, [searchText]);

  const goToPlaylist = (item: ISeachArtists) => {
    let img = item?.images[0]?.url;
    navigate(`../artist/${item.id}`, {
      state: {
        track: item?.tracks?.href,
        playlist: item,
        name: item.name,
        img,
      },
    });
  };

  if (loading) {
    return <Loader />;
  }
  if (error) {
    return <p className="text-red-600 text-3xl">ERROR.</p>;
  }

  return (
    <>
      <title>Spotify ― Search</title>
      <section>
        {searchText ? (
          <SearchResult
            tracks={tracks}
            artist={artist[0]}
            goToPlaylist={goToPlaylist}
          />
        ) : (
          <RecentSearches />
        )}
        {/* <BrowseAll /> */}
        <div></div>
      </section>
    </>
  );
};

export default Search;
