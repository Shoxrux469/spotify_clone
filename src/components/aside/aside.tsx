import AsideMedia from "./asideMedia/Media";
import AsideMenu from "./Menu";

const Aside = () => {
  return (
    <div className="flex flex-col gap-2">
      <AsideMenu />
      <AsideMedia />
    </div>
  );
};
export default Aside;
