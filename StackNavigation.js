import Feed from "./screens/Feed";
import { NavigationContainer } from "@react-navigation/native";

const StackNavigation = () => {


  return (
    <NavigationContainer>
      <Stack.Screen name="Feed" component={Feed} />
    </NavigationContainer>
  );
};

export default StackNavigation;
