import { StyleSheet, View, Text, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function NewStudent({ navigation }) {
  const handlePressLogOut = () => {
    navigation.navigate("Accueil");
  };

  return (
    <View style={styles.page}>
      <LinearGradient colors={["#FFFFFF", "#C0B1FF"]} style={styles.gradient}>
        <View style={styles.content}>
          <Text style={styles.textTitle}>Oups...</Text>
          <Text style={styles.textParaFirst}>
            Un professeur ne t'a pas encore mis dans sa classe.
          </Text>
          <Text style={styles.textParaEnd}>
            Donne lui ce code pour qu'il t'ajoute :
          </Text>
          <View style={styles.markdown}>
            <Text style={styles.markdownText}>IDÉTUDIANT</Text>
          </View>
          <Pressable
            style={[styles.buttonConnect, styles.shadowBox]}
            onPress={handlePressLogOut}
          >
            <Text style={styles.textButton}>Se déconnecter</Text>
          </Pressable>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
    backgroundColor: "#C9BEBE",
  },
  gradient: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    position: "relative",
  },
  shadowBox: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  buttonConnect: {
    marginTop: 40,
    height: 45,
    width: 140,
    backgroundColor: "#BBAAF6",
    borderRadius: 22.5,
    justifyContent: "center",
    marginRight: "auto",
    marginLeft: "auto",
  },
  textButton: {
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
  },
  textTitle: {
    fontSize: 32,
    marginBottom: 10,
  },
  textParaFirst: {
    marginBottom: 10,
  },
  textParaEnd: {
    marginBottom: 10,
  },
  markdown: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 6,
    marginBottom: 50,
    alignSelf: "center",
    maxWidth: "80%",
    borderWidth: 1,
    borderColor: "#ddd",
  },
  markdownText: {
    fontFamily: "monospace",
    fontSize: 16,
    textAlign: "center",
  },
});
