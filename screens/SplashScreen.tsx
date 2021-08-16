import React from "react";
import { View, Image } from "react-native";
import tw from "../tailwind";
import splash from "../assets/splash.jpeg";
import Context from "../Context";
import handler from "../utils/handler";

type Props = {
  setReady: (state: boolean) => void;
};
const SplashScreen: React.FC<Props> = ({ setReady }: Props) => {
  const appContext = React.useContext(Context);

  React.useEffect(() => {
    handler(appContext.context.activeGenre || "fetchTrending")
      .then((shows) => {
        appContext.setContext((prevData) => ({ ...prevData, shows }));
        setTimeout(() => {
          setReady(true);
        }, 3000);
      })
      .catch((err) => alert("Oups, Something went wrong"));
  }, []);
  return (
    <View
      style={tw("w-full h-full bg-primary flex justify-center items-center")}
    >
      <Image
        source={splash}
        style={{ width: 180, height: 150, resizeMode: "contain" }}
      />
    </View>
  );
};

export default SplashScreen;
