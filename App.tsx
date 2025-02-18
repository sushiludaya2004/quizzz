import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeStackParamList } from "./src/screens/types";
import { HomeScreen, ResultScreen, TestScreen } from "./src/screens"; // Removed CourseDetailScreen as it is not exported
import { CourseDetailScreen } from "./src/screens/CourseDetail/CourseDetailScreen";

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          animation: "slide_from_right",
        }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen
          name="Test"
          component={TestScreen}
          options={{
            headerShown: true,
            header: () => null,
          }}
        />
        <Stack.Screen name="Result" component={ResultScreen} />
        <Stack.Screen name="CourseDetail" component={CourseDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
