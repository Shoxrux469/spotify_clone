import MediaBottom from "./mediaBottom";
import MediaTop from "./mediaTop";

const AsideMedia = () => {
  return (
    <div className="bg-white/5 h-full rounded-lg">
      <div className="h-full">
        <MediaTop />
        <MediaBottom />
      </div>
    </div>
  );
};
export default AsideMedia;
