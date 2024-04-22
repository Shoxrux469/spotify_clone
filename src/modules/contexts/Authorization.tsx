import { createContext } from "react";

interface IAuthorization {
  CLIENT_ID: string;
  REDIRECT_URI: string;
  AUTH_ENDPOINT: string;
  RESPONSE_TYPE: string;
}

const Authorization = createContext<IAuthorization>({
  CLIENT_ID: "8f70713120c44e6b97c86a195f843af0",
  REDIRECT_URI: "http://localhost:3000",
  AUTH_ENDPOINT: "https://accounts.spotify.com/authorize",
  RESPONSE_TYPE: "token",
});

export default Authorization;
