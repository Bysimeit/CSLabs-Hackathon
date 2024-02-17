import {
  StyleSheet,
  View,
  Text,
  Pressable,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import Dialog from "react-native-dialog";

export default function Hub({ navigation }) {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [inputLesson, setInputLesson] = useState("");

  const handleManageClass = () => {
    navigation.navigate("Classe");
  };

  const showDialog = () => {
    setDialogVisible(true);
  };

  const handleCancel = () => {
    setDialogVisible(false);
  };

  const handleOk = () => {
    setDialogVisible(false);
  };

  return (
    <View style={styles.page}>
      <LinearGradient colors={["#FFFFFF", "#C0B1FF"]} style={styles.gradient}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <View style={styles.content}>
            <Pressable
              style={styles.manageClassButton}
              onPress={handleManageClass}
            >
              <Text style={styles.buttonText}>Gérer la classe</Text>
            </Pressable>
            <View style={styles.separator} />
            <View style={styles.coursesContainer}>
              {/* Tuile pour ajouter un nouveau cours */}
              <TouchableOpacity style={styles.courseTile} onPress={showDialog}>
                <Text style={styles.addCourseText}>+</Text>
              </TouchableOpacity>
              <Dialog.Container visible={dialogVisible}>
                <Dialog.Title>Création du cours</Dialog.Title>
                <Dialog.Description>
                  Quelle est le nom de votre cours ?
                </Dialog.Description>
                <Dialog.Input
                  placeholder="Exemple: Math"
                  onChangeText={(text) => setInputLesson(text)}
                />
                <Dialog.Button label="Annuler" onPress={handleCancel} />
                <Dialog.Button label="OK" onPress={handleOk} />
              </Dialog.Container>
              {/* Exemple de tuile pour un cours existant - dupliquez pour plus de cours */}
              <TouchableOpacity style={styles.courseTile}>
                <Text style={styles.courseText}>Cours 1</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    width: "100%",
  },
  gradient: {
    flex: 1,
  },
  scrollViewContent: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  content: {
    width: "90%",
  },
  manageClassButton: {
    backgroundColor: "#BBAAF6",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#FFFFFF",
  },
  separator: {
    borderBottomColor: "#BBBBBB",
    borderBottomWidth: 1,
    marginVertical: 20,
    width: "100%",
  },
  coursesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  courseTile: {
    backgroundColor: "#EDE7F6",
    borderRadius: 10,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    margin: 10,
  },
  addCourseText: {
    fontSize: 24,
    color: "#BBAAF6",
  },
  courseText: {
    color: "#333333",
  },
});
