import React from "react";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import {
  createStackNavigator,
  StackNavigationOptions,
} from "@react-navigation/stack";
import { SafeAreaProvider } from "react-native-safe-area-context";
import "react-native-gesture-handler";
import Home from "./screens/Home";
import SingleShow from "./screens/SingleShow";
import { BackHandler, Alert } from "react-native";

const Navigator: React.FC = () => {
  const Stack = createStackNavigator();
  const options: StackNavigationOptions = {
    headerShown: false,
    gestureEnabled: true,
  };
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} options={options} />
          <Stack.Screen
            name="SingleShow"
            component={SingleShow}
            options={options}
          />
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
};

export default Navigator;
