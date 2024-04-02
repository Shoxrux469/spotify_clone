import axios from "axios";
import { useCallback, useEffect } from "react";

const CallBack = () => {
  const CLIENT_ID = "8f70713120c44e6b97c86a195f843af0";
  const REDIRECT_URI = "http://localhost:3000";

  const exchangeCodeForToken = useCallback(
    async (authorization: string) => {
      try {
        const res = await axios.post("http://localhost:3000/spotify-token", {
          code: authorization,
          redirect_uri: REDIRECT_URI,
          client_id: CLIENT_ID,
          client_secret: "ce64f3944e554cd5a8b469aa6fe2b6b9",
        });
        return res.data.access_token;
      } catch (error) {
        console.log("Ошибка при обмене кода на токен:", error);
      }
    },
    [CLIENT_ID, REDIRECT_URI]
  );

  exchangeCodeForToken("code");

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    if (code) {
      exchangeCodeForToken(code);
    }
  }, [exchangeCodeForToken]);
};

export default CallBack;
