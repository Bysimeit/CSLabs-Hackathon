import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Dialog from "react-native-dialog";

export default function GestionCours({ navigation }) {
  const [dialogVisible, setDialogVisible] = useState(false);
  const [dialogPointVisible, setDialogPointVisible] = useState(false);
  const [isLesson, setIsLesson] = useState(false);
  const [newLesson, setNewLesson] = useState("");
  const [newEvent, setNewEvent] = useState("");
  const [points, setPoints] = useState(0);
  const [lessons, setLessons] = useState(["Leçon 1", "Leçon 2"]);
  const [events, setEvents] = useState(["Événement 1", "Événement 2"]);

  const handleAddLesson = () => {
    setIsLesson(true);
    showDialog();
  };

  const handleAddEvent = () => {
    setIsLesson(false);
    showDialog();
  };

  const editItem = (type, index) => {
    Alert.alert(
      "Édition",
      `Éditer ${type === "lesson" ? "leçon" : "événement"} ${index + 1}`
    );
  };

  const deleteItem = (type, index) => {
    Alert.alert(
      "Suppression",
      `Voulez-vous vraiment supprimer cette ${
        type === "lesson" ? "leçon" : "événement"
      }?`,
      [
        { text: "Annuler", style: "cancel" },
        {
          text: "Supprimer",
          onPress: () => {
            if (type === "lesson") {
              setLessons((current) => current.filter((_, i) => i !== index));
            } else {
              setEvents((current) => current.filter((_, i) => i !== index));
            }
          },
        },
      ]
    );
  };

  const showDialog = () => {
    setDialogVisible(true);
  };

  const handleCancel = () => {
    setDialogVisible(false);
  };

  const handleOk = () => {
    setDialogVisible(false);
    setDialogPointVisible(true);
  };

  const handleCancelPoint = () => {
    setDialogPointVisible(false);
  };

  const handleOkPoint = () => {
    // ADD Lesson or Event
    setDialogPointVisible(false);
  };

  return (
    <View style={styles.page}>
      <LinearGradient colors={["#FFFFFF", "#C0B1FF"]} style={styles.gradient}>
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          <Pressable
            style={styles.backButton}
            onPress={() => navigation.navigate("Hub")}
          >
            <MaterialCommunityIcons name="arrow-left" size={24} color="white" />
          </Pressable>

          {/* Section Leçons */}
          <Text style={styles.sectionTitle}>Leçons</Text>
          {lessons.map((lesson, index) => (
            <View key={index} style={styles.itemContainer}>
              <Text style={styles.itemText}>{lesson}</Text>
              <View style={styles.iconsContainer}>
                <Pressable onPress={() => editItem("lesson", index)}>
                  <MaterialCommunityIcons
                    name="pencil"
                    size={24}
                    color="black"
                  />
                </Pressable>
                <Pressable onPress={() => deleteItem("lesson", index)}>
                  <MaterialCommunityIcons
                    name="trash-can"
                    size={24}
                    color="red"
                  />
                </Pressable>
              </View>
            </View>
          ))}
          <Pressable style={styles.addButton} onPress={handleAddLesson}>
            <Text style={styles.buttonText}>Ajouter une leçon</Text>
          </Pressable>

          <View style={styles.separator} />

          {/* Section Événements */}
          <Text style={styles.sectionTitle}>Événements</Text>
          {events.map((event, index) => (
            <View key={index} style={styles.itemContainer}>
              <Text style={styles.itemText}>{event}</Text>
              <View style={styles.iconsContainer}>
                <Pressable onPress={() => editItem("event", index)}>
                  <MaterialCommunityIcons
                    name="pencil"
                    size={24}
                    color="black"
                  />
                </Pressable>
                <Pressable onPress={() => deleteItem("event", index)}>
                  <MaterialCommunityIcons
                    name="trash-can"
                    size={24}
                    color="red"
                  />
                </Pressable>
              </View>
            </View>
          ))}
          <Pressable style={styles.addButton} onPress={handleAddEvent}>
            <Text style={styles.buttonText}>Ajouter un événement</Text>
          </Pressable>
        </ScrollView>
        <Dialog.Container visible={dialogVisible}>
          <Dialog.Title>
            {isLesson ? "Ajout d'une lesson" : "Ajout d'un événement"}
          </Dialog.Title>
          <Dialog.Description>
            {isLesson
              ? "Quel est le nom de la leçon ?"
              : "Quel est le nom de l'événement ?"}
          </Dialog.Description>
          <Dialog.Input
            placeholder={`${
              isLesson
                ? "Exemple : Les divisions"
                : "Exemple : Donner un point bonus"
            }`}
            onChangeText={(text) =>
              isLesson ? setNewLesson(text) : setNewEvent(text)
            }
          />
          <Dialog.Button label="Annuler" onPress={handleCancel} />
          <Dialog.Button label="OK" onPress={handleOk} />
        </Dialog.Container>
        <Dialog.Container visible={dialogPointVisible}>
          <Dialog.Title>Points à dépenser </Dialog.Title>
          <Dialog.Description>
            Combien de points coûtent à cette action ?
          </Dialog.Description>
          <Dialog.Input
            keyboardType="numeric"
            placeholder="Exemple : 50"
            onChangeText={(text) => setPoints(text)}
          />
          <Dialog.Button label="Annuler" onPress={handleCancelPoint} />
          <Dialog.Button label="OK" onPress={handleOkPoint} />
        </Dialog.Container>
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
    paddingTop: 20,
  },
  backButton: {
    alignSelf: "flex-start",
    marginLeft: 20,
    backgroundColor: "#BBAAF6",
    padding: 5,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 22,
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EDE7F6",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    width: "90%",
  },
  itemText: {
    color: "#333333",
  },
  iconsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: 60,
  },
  addButton: {
    backgroundColor: "#BBAAF6",
    borderRadius: 20,
    padding: 10,
    alignItems: "center",
    marginBottom: 20,
    alignSelf: "center",
    width: "90%",
  },
  buttonText: {
    color: "#FFFFFF",
  },
  separator: {
    borderBottomColor: "#BBBBBB",
    borderBottomWidth: 1,
    width: "80%",
    alignSelf: "center",
    marginVertical: 20,
  },
});
