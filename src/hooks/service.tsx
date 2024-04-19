import { useEffect, useState } from "react";
import useHttps from "./https";

interface ISettings {
  headers: object;
}

const useService = () => {
  const { loading, error, request } = useHttps();
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

  return {
    getPlayLists,
    getPlayList,
    getAlbums,
    getAlbum,
    getUser,
    token,
  };
};

export default useService;
