import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Feed from "./screens/Feed";

const StackNavigation = () => {
  const Tab = createBottomTabNavigator();

  const TabGroup = () => {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
      </Tab.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
};

export default StackNavigation;
