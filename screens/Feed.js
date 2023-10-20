import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const Feed = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Feed</Text>
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
