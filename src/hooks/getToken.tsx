import { useEffect, useState } from "react";

const GetToken = () => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const hash: string | string[] = window.location.hash;
    let tokenStore = window.localStorage.getItem("token");

    if (!token && typeof hash === "string") {
      const tokenParam = hash
        .substring(1)
        .split("&")
        .find((elem) => elem.startsWith("access_token"));

      if (tokenParam) {
        const tokenValue = tokenParam.split("=")[1];

        window.localStorage.setItem("token", tokenValue);

        window.location.hash = "";

        setToken(tokenValue);
      }
    } else if (!token && tokenStore) {
      setToken(tokenStore);
    }
  }, [token]);

  return {
    token,
  };
};

export default GetToken;
