import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, View, Pressable } from "react-native";
import TweetContent from "./TweetContent";

const Tweet = () => {
  const { navigate } = useNavigation();
  return (
    <Pressable onPress={() => {
        navigate('')
    }}>
      <TweetContent />
    </Pressable>
  );
};

export default Tweet;

const styles = StyleSheet.create({});
