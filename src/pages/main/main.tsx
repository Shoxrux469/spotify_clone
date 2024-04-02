import useService from "../../hooks/service";

const Main = () => {
  const { getPlatLists } = useService();

  getPlatLists("playlists");

  return (
    <div>
      <div>{}</div>
    </div>
  );
};

export default Main;
