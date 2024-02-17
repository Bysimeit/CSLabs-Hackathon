import { StyleSheet, Text, View } from "react-native";

export default function Accueil({ navigation }) {
  return (
    <View style={styles.page}>
      <Text>Je suis une catin</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    backgroundColor: "#C9BEBE",
    elevation: -1,
  },
});
