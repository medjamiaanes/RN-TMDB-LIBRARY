import React from "react";
import { Image, ActivityIndicator, View, ImageProps } from "react-native";
import tw from "../tailwind";

const LoadingImage: React.FC<ImageProps> = (props: ImageProps) => {
  const [loading, setLoading] = React.useState(false);
  return (
    <View style={tw("flex-1 justify-center")}>
      <Image
        {...props}
        onLoadEnd={() => setLoading(false)}
        onLoadStart={() => setLoading(true)}
      />
      {loading ? (
        <ActivityIndicator
          style={tw("z-10 self-center absolute")}
          color="#49bdc2"
          size={32}
        />
      ) : null}
    </View>
  );
};

export default LoadingImage;
