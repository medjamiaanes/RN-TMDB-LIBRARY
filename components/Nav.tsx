import React from "react";
import { TouchableOpacity } from "react-native";
import { View, Text, FlatList } from "react-native";
import Context from "../Context";
import tw from "../tailwind";
import handler from "../utils/handler";
import requests from "../utils/_requests";

const Nav: React.FC = () => {
  const appContext = React.useContext(Context);

  const handlePress = async (genre: string) => {
    try {
      appContext?.setContext((ctx) => ({
        ...ctx,
        activeGenre: genre,
        loading: true,
      }));
      const shows = await handler(genre);
      appContext?.setContext((prevData) => ({
        ...prevData,
        shows,
        loading: false,
      }));
    } catch (error) {
      alert("Oups, Something went wrong !");
    }
  };
  return (
    <View
      style={tw("w-full h-12 border-b border-secondary flex justify-center")}
    >
      <FlatList
        contentContainerStyle={tw("items-center py-4 px-3")}
        horizontal
        data={Object.entries(requests)}
        renderItem={({ item }) => {
          const [key, { title }] = item;
          return (
            <TouchableOpacity
              style={tw("mr-4")}
              onPress={(): Promise<void> => handlePress(key)}
            >
              <Text
                style={tw(
                  `text-secondary font-opensans-bold ${
                    key === appContext?.context.activeGenre
                      ? "text-success"
                      : ""
                  }`
                )}
              >
                {title}
              </Text>
            </TouchableOpacity>
          );
        }}
        keyExtractor={([key]) => key}
      />
    </View>
  );
};

export default Nav;
