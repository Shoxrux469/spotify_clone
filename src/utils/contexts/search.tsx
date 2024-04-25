import { createContext, Dispatch, SetStateAction } from "react";

interface ISearchContext {
  searchText: string;
  setSearchText: Dispatch<SetStateAction<string>>;
}

const defaultSearchContext: ISearchContext = {
  searchText: "",
  setSearchText: () => {},
};

const searchContext = createContext<ISearchContext>(defaultSearchContext);

export default searchContext;
