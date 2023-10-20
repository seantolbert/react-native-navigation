// navigation
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

// components
import { Pressable, Image, useColorScheme } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

// screens
import SettingsScreen from "./screens/SettingsScreen";
import NotificationsScreen from "./screens/NotificationsScreen";
import FeedScreen from "./screens/FeedScreen";
import TweetDetailsScreen from "./screens/TweetDetailsScreen";
import Payments from "./screens/Payments";
import { StatusBar } from "expo-status-bar";

// top tabs
const TopTab = createMaterialTopTabNavigator();
function TopTabGroup({ navigation }) {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontWeight: "bold",
          textTransform: "capitalize",
        },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
          backgroundColor: "#197278",
        },
      }}
    >
      <TopTab.Screen name="main" component={FeedScreen} />
      <TopTab.Screen name="following" component={Payments} />
      <TopTab.Screen name="🥸" component={Payments} />
    </TopTab.Navigator>
  );
}

// stack
const HomeStack = createNativeStackNavigator();
function HomeStackGroup() {
  return (
    <HomeStack.Navigator screenOptions={{ headerShown: false }}>
      <HomeStack.Screen name="TabGroup" component={TabGroup} />
      <HomeStack.Screen
        name="TweetDetailsScreen"
        component={TweetDetailsScreen}
        options={{
          presentation: "modal",
          headerShown: true,
          headerTitle: "Tweet Details",
        }}
      />
    </HomeStack.Navigator>
  );
}

// tab bottom
const Tab = createBottomTabNavigator();
function TabGroup({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        tabBarIcon: ({ color, focused, size }) => {
          const iconsNames = {
            Feed: focused ? "home" : "home-outline",
            Settings: focused ? "cog" : "cog-outline",
            Notifications: focused ? "bell" : "bell-outline",
          };

          const iconName = iconsNames[route.name];

          return (
            <MaterialCommunityIcons name={iconName} size={size} color={color} />
          );
        },
        tabBarActiveTintColor: "#1B998B",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Feed"
        component={TopTabGroup}
        options={{
          headerLeft: () => (
            <Pressable onPress={() => navigation.openDrawer()}>
              <Image
                source={require("./assets/beto.jpeg")}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 100,
                  marginLeft: 15,
                }}
              />
            </Pressable>
          ),
        }}
      />
      <Tab.Screen name="Notifications" component={NotificationsScreen} />
      <Tab.Screen name="Settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

// drawer
const Drawer = createDrawerNavigator();
function DrawerGroup() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Drawer.Screen name="HomeStackGroup" component={HomeStackGroup} />
      <Drawer.Screen
        name="Payments"
        component={Payments}
        options={{
          headerShown: true,
        }}
      />
    </Drawer.Navigator>
  );
}

const StackNavigation = () => {
  const currentTheme = useColorScheme();

  return (
    <NavigationContainer
      theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <StatusBar style="auto" />
      {/* <HomeStackGroup /> */}
      <DrawerGroup />
    </NavigationContainer>
  );
};

export default StackNavigation;
