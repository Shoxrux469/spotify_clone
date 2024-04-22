import { useEffect, useState } from "react";
import useHttps from "./https";

interface ISettings {
  headers: {
    Authorization: string;
  };
}

const useService = () => {
  const { request, error, loading } = useHttps();
  const [token, setToken] = useState<string | null>("");

  const _apiBase = "https://api.spotify.com/v1/";
  const settings: ISettings = {
    headers: { Authorization: "Bearer " + token },
  };

  useEffect(() => {
    setToken(localStorage.getItem("token"));
  }, []);

  const getPlayLists = async (path: string, limit: number) => {
    if (token) {
      const res = await request(
        `${_apiBase}${path}limit=${limit}&offset=0`,
        settings
      );
      return res.data;
    }
  };
  const getAlbums = async (id: string) => {
    if (token) {
      const res = await request(`${_apiBase}albums/${id}`, settings);
      return res.data;
    }
  };
  const getUser = async () => {
    if (token) {
      const res = await request(`${_apiBase}me`, settings);
      return res.data;
    }
  };

  const getSearch = async (
    searchText: string,
    limit: number,
    type: string = "track"
  ) => {
    if (token) {
      const res = await request(
        `${_apiBase}search?q=${searchText}&type=${type}&market=UZ&limit=${limit}&offset=0`,
        settings
      );
      return res.data;
    }
  };

  const getPlayList = async (id: string) => {
    if (token) {
      const res = await request(`${_apiBase}playlists/${id}`, settings);
      return res.data;
    }
  };

  const getAlbum = async (id: string) => {
    if (token) {
      const res = await request(`${_apiBase}albums/${id}`, settings);
      return res.data;
    }
  };

  const getTracks = async (url: string) => {
    if (token) {
      const res = await request(url, settings);
      return res.data;
    }
  };

  return {
    getPlayLists,
    getPlayList,
    getAlbums,
    getSearch,
    getTracks,
    getAlbum,
    getUser,
    loading,
    error,
    token,
  };
};

export default useService;
