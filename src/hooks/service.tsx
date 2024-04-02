import { useEffect, useState } from "react";
import useHttp from "./https";
// import { execFileSync } from "child_process";

const useService = () => {
  const [token, setToken] = useState<string | null>("");
  const { loading, error, request } = useHttp();

  const _apiBase = "https://api.spotify.com/v1/";

  useEffect(() => {
    const token = localStorage.getItem("token");
    setToken(token);
  }, []);

  const getPlatLists = async (path: string) => {
    if (token) {
      const res = await request(`${_apiBase}${path}`, "GET", {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    }
  };

  return {
    getPlatLists,
  };
};

export default useService;
