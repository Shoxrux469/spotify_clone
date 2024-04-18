interface IPlaylist {
  name: string;
  owner: { display_name: string };
}

const MyPlayLists: React.FC<{ item: IPlaylist }> = ({ item }) => {
  return (
    <div className="flex w-full">
      <div className="bg-white/50 rounded-md min-w-12 min-h-12 mr-3"></div>
      <div className="flex justify-between items-center pr-2 w-full">
        <div>
          <p className="text-green-500 font-semibold">{item.name}</p>
          <span className="text-sm text-white/70">
            {item.owner.display_name}
          </span>
        </div>
        <span>
          <svg className="fill-green-500 w-4 h-4 hidden" viewBox="0 0 16 16">
            <path d="M10.016 1.125A.75.75 0 0 0 8.99.85l-6.925 4a3.639 3.639 0 0 0 0 6.299l6.925 4a.75.75 0 0 0 1.125-.65v-13a.75.75 0 0 0-.1-.375zM11.5 5.56a2.75 2.75 0 0 1 0 4.88V5.56z"></path>
            <path d="M16 8a5.752 5.752 0 0 1-4.5 5.614v-1.55a4.252 4.252 0 0 0 0-8.127v-1.55A5.752 5.752 0 0 1 16 8z"></path>
          </svg>
        </span>
      </div>
    </div>
  );
};

export default MyPlayLists;
