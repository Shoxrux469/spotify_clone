import AsideMedia from "./asideMedia/Media";
import AsideMenu from "./Menu";

const Aside = () => {
  return (
    <aside className="flex min-w-[300px] max-w-[480px] flex-col h-full min-h-0 gap-2">
      <AsideMenu />
      <AsideMedia />
    </aside>
  );
};
export default Aside;
