import { useDebugValue, useEffect, useState } from "react";
import useService from "../../hooks/service";
import Header from "../../components/header/header";
import PlaylistsTypes from "./playlistsTypes";
import "./index.scss";

interface IMergedData {
  name: string;
  images: {
    url: string;
  }[];
  description: string;
}

const Main = () => {
  const { token, getPlayLists } = useService();
  // const [filters, setFilters] = useState<IMergedData[]>([]);
  const [playLists, setPlayLists] = useState<IMergedData[]>([]);
  const [albums, setAlbums] = useState<IMergedData[]>([]);
  let date = new Date();
  let month = date.getMonth() + 1;
  let timestamp =
    date.getFullYear() +
    "-" +
    month +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    " UTC";
  timestamp = timestamp.replace(/-/g, "/");

  useEffect(() => {
    // Promise.all([
    // getPlayLists(
    //   `browse/featured-playlists?country=UZ&locale=uz&timestamp=${timestamp}&`,
    //   5
    // );
    //   getPlayLists("browse/new-releases?country=UZ&", 10),
    //   getPlayLists("browse/categories/dinner/playlists?", 10),
    // ]).then(([featured, new_releases, dinner]) => {
    //   const mergedData: IMergedData[] = []
    //     .concat(featured?.playlists)
    //     .concat(new_releases)
    //     .concat(dinner)
    //     .filter((item) => item !== undefined);
    //   setFilters(mergedData);
    //   console.log(mergedData);
    //   console.log(filters);
    // });
    getPlayLists(
      `browse/featured-playlists?country=UZ&timestamp=${timestamp}&`,
      5
    ).then((res) => {
      const result = res?.playlists?.items.filter(
        (item: object) => item !== undefined
      );
      setPlayLists(result);
      console.log(playLists);
    });
    getPlayLists("browse/new-releases?country=UZ&", 5).then((res) => {
      const result = res?.playlists?.items.filter(
        (item: object) => item !== undefined
      );
      setAlbums(result);
      console.log(albums);
    });
  }, [token]);

  return (
    <div className="main">
      <div className="relative">
        <Header />
        <div className="">
          <div className="main_content">
            <PlaylistsTypes />
            <h2 className="text-2xl font-bold">Специально для тебя</h2>
          </div>
          <div className="px-3 pt-4 pb-6">
            <div className="flex item-center">
              {playLists &&
                playLists.map((item, i) => (
                  <div
                    key={i}
                    className="p-3 bg-transparent ease-in duration-200 w-full min-w-12 min-h-12 items-center hover:bg-white/5 cursor-pointer rounded-lg"
                  >
                    <img
                      className="w-full custom-shadow rounded-md"
                      src={item.images[0].url}
                      alt=""
                    />
                    <div>
                      <p className="text-white text-base font-bold pt-2">
                        {item.name}
                      </p>
                      <span className="text-[#B3B3B3] text-base leading-5 block">
                        {item.description.slice(0, 20)}
                      </span>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
