import MediaBottom from "./mediaBottom";
import MediaTop from "./mediaTop";

const AsideMedia = () => {
  return (
    <div className="bg-white/5 rounded-lg">
      <div>
        <MediaTop />
        <MediaBottom />
      </div>
    </div>
  );
};
export default AsideMedia;
