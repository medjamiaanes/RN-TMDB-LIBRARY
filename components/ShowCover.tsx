import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Image from "./LoadingImage";
import tw from "../tailwind";
import { Ionicons as Icon } from "@expo/vector-icons";

type Props = { cover: string; title: string; rating: number };
const ShowCover: React.FC<Props> = ({ cover, title, rating }: Props) => {
  return (
    <View style={tw("w-full h-52 bg-black mt-4")}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original${cover}`,
        }}
        style={{
          flex: 1,
          resizeMode: "cover",
        }}
      />
      <LinearGradient
        colors={["#rgba(0,0,0,0.8)", "transparent"]}
        start={{ x: 1, y: 1 }}
        end={{ x: 1, y: 0.5 }}
        style={tw("absolute w-full h-full flex justify-end py-3 px-3")}
      >
        <View style={tw("flex-row items-end flex-1")}>
          <Text style={tw("text-white text-base font-opensans-bold")}>
            {title}
          </Text>
        </View>
        <View style={tw("flex-row items-center mt-1")}>
          <Icon name="ios-star" size={16} style={tw("text-success")} />
          <Text style={tw("text-success font-opensans-bold ml-2 text-xs")}>
            {rating}/10
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ShowCover;
