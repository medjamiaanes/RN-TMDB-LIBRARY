import React from "react";
import { AppContext } from "./utils/types";

const Context = React.createContext<AppContext>({
  context: { activeGenre: "fetchTrending", shows: [], loading: false },
  setContext: (ctx) => ctx,
});

export default Context;
