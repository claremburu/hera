import * as React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import MenuComponent from "./MenuComponent";
import DashboardScreen from "../screens/DashboardScreen";
import StaffScreen from "../screens/StaffScreen";
import ContinentScreen from "../screens/ContinentScreen";

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
};

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName="Login"
        >
          <Stack.Screen
            name="Dashboard"
            component={MenuComponent}
            options={{ title: "Dashboard" }}
          />
          <Stack.Screen name="Login" component={LoginScreen} />

          <Stack.Screen
            name="Staff"
            component={StaffScreen}
            options={{ title: "Staff" }}
          />
          <Stack.Screen
            name="Continents"
            component={ContinentScreen}
            options={{ title: "Continents" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

{
  /* // <Stack.Navigator
    //   initialRouteName="Login"
    //   screenOptions={{
    //     headerShown: false,
    //   }}>
    //   <Stack.Screen name="Home" component={HomeScreen} />
    //   <Stack.Screen name="Login" component={LoginScreen} />
    // </Stack.Navigator> */
}

export default Navigation;
