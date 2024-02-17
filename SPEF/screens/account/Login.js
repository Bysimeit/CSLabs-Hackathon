import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  Alert,
  Switch,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function Login({ navigation }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isTeacher, setIsTeacher] = useState(false);

  const handlePressConnect = () => {
    if (userName != "") {
      if (password != "") {
        setUserName("");
        setPassword("");
      } else {
        Alert.alert("Attends !", "N'oublie pas de mettre ton mot de passe.");
      }
    } else {
      Alert.alert("Attends !", "N'oublie pas de mettre ton pseudo.");
    }
  };

  const toggleSwitch = () => setIsTeacher((previousState) => !previousState);

  const handlePressRegister = () => {
    navigation.navigate("Inscription");
  };

  return (
    <View style={styles.page}>
      <LinearGradient colors={["#FFFFFF", "#C0B1FF"]} style={styles.gradient}>
        <View style={styles.content}>
          <View style={styles.inputView}>
            <Text>Pseudo :</Text>
            <TextInput
              style={[styles.input, styles.shadowBox]}
              autoCapitalize="none"
              onChangeText={setUserName}
              value={userName}
            />
          </View>
          <View style={styles.inputView}>
            <Text>Mot de passe :</Text>
            <TextInput
              style={[styles.input, styles.shadowBox]}
              secureTextEntry={true}
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <View style={styles.switchContainer}>
            <Text>Es-tu un professeur ?</Text>
            <Switch
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isTeacher ? "#C0B1FF" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isTeacher}
            />
          </View>
          <Pressable
            style={[styles.buttonConnect, styles.shadowBox]}
            onPress={handlePressConnect}
          >
            <Text style={styles.textButton}>Se connecter</Text>
          </Pressable>
          <Pressable
            style={[styles.buttonConnect, styles.shadowBox]}
            onPress={handlePressRegister}
          >
            <Text style={styles.textButton}>S'inscrire</Text>
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
  inputView: {
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: 25,
  },
  input: {
    backgroundColor: "#EDE7F6",
    width: 300,
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginTop: 10,
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
  textButton: {
    textAlign: "center",
    marginTop: "auto",
    marginBottom: "auto",
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
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 300,
    marginVertical: 20,
    marginLeft: "auto",
    marginRight: "auto",
  },
});
