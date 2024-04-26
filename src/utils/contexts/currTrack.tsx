import { Dispatch, SetStateAction, createContext } from "react";
import { ITrack } from "../../types/types";

interface ICurrTrack {
  isPlaying: boolean;
  track: ITrack | null;
}

interface ISearchContext {
  currTrack: ICurrTrack;
  setCurrTrack: Dispatch<SetStateAction<ICurrTrack>>;
}

const lastTrackString = localStorage.getItem("lastTrack");
const defaultTrack: ISearchContext = {
  currTrack: { isPlaying: false, track: null },
  setCurrTrack: () => {},
};

const lastTrack: ISearchContext = lastTrackString
  ? JSON.parse(lastTrackString)
  : defaultTrack;

const currentTrack = createContext<ISearchContext>(lastTrack);

export default currentTrack;
