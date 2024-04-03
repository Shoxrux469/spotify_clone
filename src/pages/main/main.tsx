import { useEffect, useState } from "react";
import useService from "../../hooks/service";
import axios from "axios";

interface ISettings {
  headers: object;
}
const Main = () => {
  // const _apiBase = "https://api.spotify.com/v1/";
  // const { token, getPlayLists } = useService();
  // const [token, setToken] = useState<string | null>("");

  // const settings: ISettings = {
  //   headers: { Authorization: "Bearer " + token },
  // };

  // useEffect(() => {
  //   setToken(localStorage.getItem("token"));
  // }, []);

  // useEffect(() => {
  //   getPlayLists("browse/new-releases?country=UZ&", 20).then((res) => {
  //     console.log(res);
  //   });
  // }, [token]);
  // const getData = axios
  //   .get(
  //     `${_apiBase}browse/new-releases?country=UZ&limit=10&offset=0`,
  //     settings
  //   )
  //   .then((res) => {
  //     console.log(res.data);
  //   });
  return (
    <div>
      <div></div>
    </div>
  );
};

export default Main;
