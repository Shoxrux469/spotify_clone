import { useCallback, useState } from "react";
import axios, { AxiosResponse } from "axios";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = useCallback(
    async (url: string, headers: object = {}): Promise<AxiosResponse<any>> => {
      setLoading(true);
      try {
        const response = await axios.get(url, headers);
        setLoading(false);
        console.log(response);
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

  const clearError = useCallback(() => setError(null), []);

  return { loading, error, request, clearError };
};

export default useHttp;
