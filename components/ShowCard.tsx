import React from "react";
import { TouchableOpacity } from "react-native";
import { Data } from "../utils/types";
import { useNavigation } from "@react-navigation/native";
import ShowCover from "./ShowCover";
type Props = {
  data: Data;
};

const ShowCard: React.FC<Props> = ({ data }: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("SingleShow", { data })}
    >
      <ShowCover title={data.title} cover={data.cover} rating={data.rating} />
    </TouchableOpacity>
  );
};

export default ShowCard;
