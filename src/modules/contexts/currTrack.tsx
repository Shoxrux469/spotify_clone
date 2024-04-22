import { createContext } from "react";
import { ITrack } from "../../types/types";
interface ITrackData {
  isPlaying: boolean;
  track: ITrack | string;
}

const lastTrackString = localStorage.getItem("lastTrack");
const defaultTrack: ITrackData = {
  isPlaying: false,
  track: "",
};

const lastTrack: ITrackData = lastTrackString
  ? JSON.parse(lastTrackString)
  : defaultTrack;

const currentTrack = createContext<ITrackData>(lastTrack);

export default currentTrack;
