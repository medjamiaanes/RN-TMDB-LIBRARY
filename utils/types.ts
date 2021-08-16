import { Dispatch, SetStateAction } from "react";
export type Data = {
  title: string;
  overview: string;
  cover: string;
  releaseDate: Date;
  rating: number;
  likes: number;
};

export type AppState = {
  activeGenre: string;
  shows: Array<Data>;
  loading: boolean;
};

export type AppContext = {
  context: AppState;
  setContext: Dispatch<SetStateAction<AppState>>;
};
