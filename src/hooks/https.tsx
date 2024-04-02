import { useCallback, useState } from "react";
import axios, { Method } from "axios";

const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const request = useCallback(
    async (
      url: string,
      method: Method = "GET",
      headers: object = {},
      body: any = null
    ) => {
      setLoading(true);
      try {
        const response = await axios({
          method,
          url,
          headers,
          data: body,
        });

        setLoading(false);
        return response.data;
      } catch (e: unknown) {
        if (e instanceof Error) {
          setLoading(false);
          setError(e.message);
          throw e;
        } else {
          console.log(`Some another error with ${e}`);

          // Handle other types of errors if needed
        }
      }
    },
    []
  );

  const clearError = useCallback(() => setError(null), []);

  return { loading, error, request, clearError };
};

export default useHttp;
