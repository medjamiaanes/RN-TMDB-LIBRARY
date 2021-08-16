import React from "react";
import { View } from "react-native";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import Context from "../Context";
import tw from "../tailwind";

const Home: React.FC = () => {
  const appContext = React.useContext(Context);
  return (
    <View style={tw("h-full w-full flex flex-col")}>
      <View style={tw("bg-primary-1")}>
        <Header />
        <Nav />
      </View>
      <View style={tw("flex-1 bg-primary")}>
        <Results results={appContext?.context.shows} />
      </View>
    </View>
  );
};

export default Home;
