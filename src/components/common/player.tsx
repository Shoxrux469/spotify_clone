import { LuPlusCircle } from "react-icons/lu";
import { FaRandom, FaPlayCircle, FaPauseCircle } from "react-icons/fa";

import "../../index.scss";
import { useState } from "react";

interface PlayerState {
  [key: string]: boolean;
}

interface IControlsArr {
  path: string;
  addPath?: string;
  state: boolean;
  stateFn: string;
}

const Player = () => {
  const [playerState, setPlayerState] = useState<PlayerState>({
    isRandom: false,
    isPlaying: false,
    isRepeat: false,
    isRepeatInf: false,
    isOutlineQueueList: false,
    isMicrophone: false,
    isText: false,
    isDevice: false,
  });

  // Функция toggleState предназначена для переключения состояния определенного ключа в объекте состояния компонента.
  // Она принимает аргумент key, который должен быть ключом объекта состояния PlayerState.
  // setPlayerState - функция из React Hooks, которая используется для обновления состояния компонента.
  // Функция обратного вызова prevState => ({ ...prevState, [key]: !prevState[key] }) принимает предыдущее состояние компонента prevState и возвращает новый объект состояния.
  // Оператор ...prevState используется для создания поверхностной копии предыдущего состояния, чтобы избежать мутации предыдущего состояния напрямую.
  // [key]: !prevState[key] обновляет значение для указанного ключа key. Значение инвертируется с помощью оператора !. Если предыдущее значение было true, то после инверсии оно становится false, и наоборот.
  const toggleState = (key: keyof PlayerState) => {
    setPlayerState((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const controlsArr: IControlsArr[] = [
    {
      path: "M11.196 8 6 5v6l5.196-3z",
      addPath:
        "M15.002 1.75A1.75 1.75 0 0 0 13.252 0h-10.5a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.783 1.75 1.75 1.75h10.5a1.75 1.75 0 0 0 1.75-1.75V1.75zm-1.75-.25a.25.25 0 0 1 .25.25v12.5a.25.25 0 0 1-.25.25h-10.5a.25.25 0 0 1-.25-.25V1.75a.25.25 0 0 1 .25-.25h10.5z",
      state: playerState.isOutlineQueueList,
      stateFn: "isOutlineQueueList",
    },
    {
      path: "M13.426 2.574a2.831 2.831 0 0 0-4.797 1.55l3.247 3.247a2.831 2.831 0 0 0 1.55-4.797zM10.5 8.118l-2.619-2.62A63303.13 63303.13 0 0 0 4.74 9.075L2.065 12.12a1.287 1.287 0 0 0 1.816 1.816l3.06-2.688 3.56-3.129zM7.12 4.094a4.331 4.331 0 1 1 4.786 4.786l-3.974 3.493-3.06 2.689a2.787 2.787 0 0 1-3.933-3.933l2.676-3.045 3.505-3.99z",
      state: playerState.isMicrophone,
      stateFn: "isMicrophone",
    },
    {
      path: "M15 15H1v-1.5h14V15zm0-4.5H1V9h14v1.5zm-14-7A2.5 2.5 0 0 1 3.5 1h9a2.5 2.5 0 0 1 0 5h-9A2.5 2.5 0 0 1 1 3.5zm2.5-1a1 1 0 0 0 0 2h9a1 1 0 1 0 0-2h-9z",
      state: playerState.isText,
      stateFn: "isText",
    },
    {
      path: "M6 2.75C6 1.784 6.784 1 7.75 1h6.5c.966 0 1.75.784 1.75 1.75v10.5A1.75 1.75 0 0 1 14.25 15h-6.5A1.75 1.75 0 0 1 6 13.25V2.75zm1.75-.25a.25.25 0 0 0-.25.25v10.5c0 .138.112.25.25.25h6.5a.25.25 0 0 0 .25-.25V2.75a.25.25 0 0 0-.25-.25h-6.5zm-6 0a.25.25 0 0 0-.25.25v6.5c0 .138.112.25.25.25H4V11H1.75A1.75 1.75 0 0 1 0 9.25v-6.5C0 1.784.784 1 1.75 1H4v1.5H1.75zM4 15H2v-1.5h2V15z",
      addPath:
        "M13 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm-1-5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z",
      state: playerState.isDevice,
      stateFn: "isDevice",
    },
  ];

  return (
    <div className="h-[72px] w-full player">
      <div className="w-full flex">
        <div className="w-[30%] flex">
          <img src="" alt="" />
          <div>
            <p className="song_name"></p>
            <span className="singer_name"></span>
          </div>
          <button>
            <LuPlusCircle />
          </button>
        </div>
        <div className="w-[40%] flex flex-col items-center">
          <div className="player_controls flex items-center gap-2">
            <div className="player_controls_left flex gap-2">
              <button className="controls_btn">
                <FaRandom
                  onClick={() => toggleState("isRandom")}
                  className={
                    playerState.isRandom
                      ? "fill-[#1db954]"
                      : "fill-white/70 hover:fill-white"
                  }
                />
              </button>
              <button className="controls_btn">
                <svg className="w-4 h-4 fill-white/70 hover:fill-white">
                  <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
                </svg>
              </button>
            </div>
            <button
              onClick={() => toggleState("isPlaying")}
              className="player_controls_pause hover:scale-110"
            >
              {playerState.isPlaying ? (
                <FaPauseCircle size="32px" />
              ) : (
                <FaPlayCircle size="32px" />
              )}
            </button>
            <div className="player_controls_right flex gap-2">
              <button className="controls_btn">
                <svg className="w-4 h-4 fill-white/70 hover:fill-white">
                  <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
                </svg>
              </button>
              <button className="controls_btn">
                {playerState.isRepeatInf ? (
                  <svg
                    onClick={() => toggleState("isRepeatInf")}
                    className="w-4 fill-[#1db954] h-4"
                  >
                    <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h.75v1.5h-.75A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5zM12.25 2.5h-.75V1h.75A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25z"></path>
                    <path d="M9.12 8V1H7.787c-.128.72-.76 1.293-1.787 1.313V3.36h1.57V8h1.55z"></path>
                  </svg>
                ) : (
                  <svg
                    onClick={() => toggleState("isRepeat")}
                    className="w-4 h-4 hover:fill-white"
                    style={
                      playerState.isRepeat
                        ? { fill: "#1db954" }
                        : { fill: "rgba(255, 255, 255, 0.7)" }
                    }
                  >
                    <path d="M0 4.75A3.75 3.75 0 0 1 3.75 1h8.5A3.75 3.75 0 0 1 16 4.75v5a3.75 3.75 0 0 1-3.75 3.75H9.81l1.018 1.018a.75.75 0 1 1-1.06 1.06L6.939 12.75l2.829-2.828a.75.75 0 1 1 1.06 1.06L9.811 12h2.439a2.25 2.25 0 0 0 2.25-2.25v-5a2.25 2.25 0 0 0-2.25-2.25h-8.5A2.25 2.25 0 0 0 1.5 4.75v5A2.25 2.25 0 0 0 3.75 12H5v1.5H3.75A3.75 3.75 0 0 1 0 9.75v-5z"></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div className="w-[520px] mt-2">
            <audio className="w-full" src="" controls autoPlay></audio>
          </div>
        </div>
        <div className="w-[30%] flex items-center">
          {controlsArr.map((item, i) => (
            <button
              key={i}
              onClick={() => toggleState(item.stateFn)}
              className="controls_btn"
            >
              <svg className={item.state ? "player_btn_active" : "player_btn"}>
                <path d={item.path}></path>
                <path d={item.addPath}></path>
              </svg>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Player;
