import React from "react";
import Context from "./Context";
import Navigator from "./Navigator";
import SplashScreen from "./screens/SplashScreen";
import {
  OpenSans_700Bold as OpensansBold,
  OpenSans_400Regular as Opensans,
  useFonts,
} from "@expo-google-fonts/open-sans";
import { AppState } from "./utils/types";

export default function App() {
  const [context, setContext] = React.useState<AppState>({
    activeGenre: "fetchTrending",
    shows: [],
    loading: false,
  });

  const [ready, setReady] = React.useState(false);
  const [fontsLoaded] = ([] = useFonts({
    Opensans,
    OpensansBold,
  }));

  return (
    <Context.Provider value={{ context, setContext }}>
      {ready && fontsLoaded ? (
        <Navigator />
      ) : (
        <SplashScreen setReady={setReady} />
      )}
    </Context.Provider>
  );
}
