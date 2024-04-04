import AsideMedia from "./asideMedia/Media";
import AsideMenu from "./Menu";

const Aside = () => {
  return (
    <aside className="flex w-[320px] flex-col h-full min-h-0 gap-2">
      <AsideMenu />
      <AsideMedia />
    </aside>
  );
};
export default Aside;