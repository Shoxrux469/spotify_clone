import "../index.scss";

interface IMediaCategories {
  title: string;
}

const MediaTop = () => {
  const mediaCategories: IMediaCategories[] = [
    { title: "Плейлисты" },
    { title: "Исполнители" },
  ];

  return (
    <div>
      <header className="flex flex-col gap-2 px-4 py-2">
        <div className="flex items-center justify-between w-full h-10">
          <div className="">
            <button className="text-white/70 hover:text-white ease-out duration-300 px-2 py-1">
              <span className="flex font-semibold items-center gap-3">
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="icon_default"
                >
                  <path d="M3 22a1 1 0 0 1-1-1V3a1 1 0 0 1 2 0v18a1 1 0 0 1-1 1zM15.5 2.134A1 1 0 0 0 14 3v18a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V6.464a1 1 0 0 0-.5-.866l-6-3.464zM9 2a1 1 0 0 0-1 1v18a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1z"></path>
                </svg>
                Моя медиатека
              </span>
            </button>
          </div>
          <div className="flex items-center gap-2">
            <span className="media_btns_style">
              <svg
                data-encore-id="icon"
                role="img"
                aria-hidden="true"
                viewBox="0 0 16 16"
              >
                <path d="M15.25 8a.75.75 0 0 1-.75.75H8.75v5.75a.75.75 0 0 1-1.5 0V8.75H1.5a.75.75 0 0 1 0-1.5h5.75V1.5a.75.75 0 0 1 1.5 0v5.75h5.75a.75.75 0 0 1 .75.75z"></path>
              </svg>
            </span>
            <button className="media_btns_style">
              <span>
                <svg
                  data-encore-id="icon"
                  role="img"
                  aria-hidden="true"
                  viewBox="0 0 16 16"
                >
                  <path d="M7.19 1A.749.749 0 0 1 8.47.47L16 7.99l-7.53 7.521a.75.75 0 0 1-1.234-.815.75.75 0 0 1 .174-.243l5.72-5.714H.75a.75.75 0 1 1 0-1.498h12.38L7.41 1.529a.749.749 0 0 1-.22-.53z"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>
        <div>
          <div className="my-2">
            <div className="scroll-smooth">
              <div className="flex gap-2 text-white">
                {mediaCategories.map((item, i) => (
                  <button key={i} className="bg-transparent">
                    <span className="media_categories_span">{item.title}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};
export default MediaTop;
