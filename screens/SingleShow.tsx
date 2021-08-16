import React from "react";
import { ScrollView, View, Text } from "react-native";
import tw from "../tailwind";
import { Data } from "../utils/types";
import Header from "../components/Header";
import { useRoute, RouteProp } from "@react-navigation/native";
import ShowCover from "../components/ShowCover";
import { Ionicons as Icon } from "@expo/vector-icons";

type Params = { [x: string]: { data: Data } };
const SingleShow: React.FC = () => {
  const route = useRoute<RouteProp<Params, string>>();
  const { data } = route.params;

  return (
    <ScrollView style={tw("bg-primary flex-1")}>
      <Header backButton />
      <View style={tw("")}>
        <ShowCover title={data.title} cover={data.cover} rating={data.rating} />
      </View>
      <View style={tw("flex-row items-center mt-2 px-3")}>
        <Icon name="calendar" style={tw("text-success text-sm")} />
        <Text style={tw("text-secondary text-xs font-opensans-bold ml-2")}>
          {data.releaseDate}
        </Text>
        <Icon name="thumbs-up-sharp" style={tw("text-success ml-2 text-sm")} />
        <Text style={tw("text-secondary font-opensans-bold ml-2 text-xs")}>
          {data.likes}
        </Text>
      </View>
      <View style={tw("mt-2 px-3")}>
        <Text style={tw("text-secondary font-opensans text-base")}>
          {data.overview}
        </Text>
      </View>
    </ScrollView>
  );
};

export default SingleShow;
