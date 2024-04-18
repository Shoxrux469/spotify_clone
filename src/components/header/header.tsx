import "./index.scss";
import {
  MdOutlineKeyboardArrowLeft,
  MdOutlineKeyboardArrowRight,
} from "react-icons/md";
import { FiArrowDownCircle } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import useService from "../../hooks/service";
import { useEffect, useState } from "react";
import { IoSearchOutline } from "react-icons/io5";

interface IUser {
  images: [
    {
      url: string;
    }
  ];
}

interface ITypesBtns {
  title: string;
}

const Header = () => {
  const { getUser, token } = useService();
  const [user, setUser] = useState<IUser>();
  const [isFocused, setIsFocused] = useState(false);
  useEffect(() => {
    getUser().then((res) => {
      setUser(res);
    });
  }, [token]);

  const typesBtns: ITypesBtns[] = [
    {
      title: "Все",
    },
    {
      title: "Музыка",
    },
    {
      title: "Подкасты",
    },
  ];

  return (
    <header className="header">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <button className="arrows_btn">
            <MdOutlineKeyboardArrowLeft className="w-7 h-7" />
          </button>
          <button className="arrows_btn">
            <MdOutlineKeyboardArrowRight className="w-7 h-7" />
          </button>
          <label htmlFor="search">
            <div
              className={`flex items-center gap-1 bg-[#242424] px-3 py-[14px] rounded-full ${
                isFocused
                  ? "border border-white"
                  : "hover:border hover:border-white/10"
              }`}
            >
              <IoSearchOutline size="20" color="rgba(255, 255, 255, 0.7)" />
              <input
                type="text"
                autoComplete="off"
                className="w-[300px] bg-transparent text-[0.8125rem] text-white font-semibold"
                id="search"
                placeholder="Что хочешь включить?"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              />
            </div>
          </label>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-4 hover:scale-105 py-[6px] flex items-center bg-white rounded-full">
            <span className="text-sm font-bold text-black">
              Узнать больше о Premium
            </span>
          </button>
          <a
            href="https://open.spotify.com/download"
            rel="noreferrer"
            target="_blank"
            className="flex gap-1 hover:scale-105 items-center text-sm font-bold px-3 py-[6px] bg-black/60 rounded-full"
          >
            <span className="hover:scale-105">
              <FiArrowDownCircle size="18" />
            </span>
            Установить приложение
          </a>
          <button className="rounded-full hover:scale-105 bg-black/60 p-2">
            <GoBell className="w-[18px] h-[18px] fill-white/70" />
          </button>
          <button className="bg-black/30 rounded-full">
            <figure className="m-1">
              <img
                src={user?.images[0].url}
                className="w-6 h-6 rounded-full"
                alt=""
              />
            </figure>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {typesBtns.map((item, i) => (
          <button
            key={i}
            className="px-3 py-1 bg-white/10 hover:bg-white/15 rounded-2xl"
          >
            <span className="text-sm">{item.title}</span>
          </button>
        ))}
      </div>
    </header>
  );
};
export default Header;
