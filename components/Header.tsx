import React from "react";
import { Image, TouchableOpacity } from "react-native";
import logo from "../assets/logo.png";
import tw from "../tailwind";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons as Icon } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

type Props = {
  backButton?: boolean;
};
const Header: React.FC<Props> = ({ backButton }: Props) => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      style={tw("w-full py-3 px-3 flex-row justify-between items-center")}
    >
      {backButton ? (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={28} color="#49bdc2" />
        </TouchableOpacity>
      ) : null}
      <Image
        source={logo}
        style={{ width: 60, height: 30, resizeMode: "contain" }}
      />
    </SafeAreaView>
  );
};

export default Header;
