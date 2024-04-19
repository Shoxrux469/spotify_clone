import { useCallback, useState } from "react";
import axios, { AxiosResponse } from "axios";
// import { useMutation } from "react-query";

const useHttps = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = useCallback(
    async (url: string, headers: object = {}): Promise<AxiosResponse<any>> => {
      setLoading(true);
      try {
        const response = await axios.get(url, headers);
        setLoading(false);
        return response;
      } catch (e) {
        if (e instanceof Error) {
          setLoading(false);
          setError(e.message);
          throw e;
        } else {
          console.log(`Some another error with ${e}`);
        }
        throw e;
      }
    },
    []
  );

  //   const getData = useMutation(async (path) => {
  //     const base_url = "http://localhost:3001";
  //     try {
  //         const res = await axios.get(base_url + path);
  //         return res.data;
  //     } catch (error) {
  //         console.error("Error fetching data:", error);
  //         throw error;
  //     }
  // });
  // }

  const clearError = useCallback(() => setError(null), []);

  return { loading, error, request, clearError };
};

export default useHttps;
