import { Dispatch, SetStateAction, createContext } from "react";

interface IBgContext {
  bgColor: string;
  setBgColor: Dispatch<SetStateAction<string>>;
}

const defaultTrack: IBgContext = {
  bgColor: "",
  setBgColor: () => {},
};

const bgContext = createContext<IBgContext>(defaultTrack);

export default bgContext;
