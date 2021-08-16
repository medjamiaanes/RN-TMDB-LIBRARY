import React from "react";
import { View, FlatList, ActivityIndicator } from "react-native";
import Context from "../Context";
import tw from "../tailwind";
import ShowCard from "./ShowCard";
import { Data } from "../utils/types";

type Props = {
  results: Array<Data>;
};
const Results: React.FC<Props> = ({ results }: Props) => {
  const appContext = React.useContext(Context);
  return appContext?.context.loading ? (
    <View style={tw("w-full h-full items-center justify-center")}>
      <ActivityIndicator color="#49bdc2" size={32} />
    </View>
  ) : (
    <FlatList
      data={results}
      renderItem={({ item }) => <ShowCard data={item} />}
      keyExtractor={(item) => item.title}
      contentContainerStyle={tw("px-3 pb-4")}
    />
  );
};

export default Results;
