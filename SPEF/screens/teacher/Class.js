import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  Pressable,
  ScrollView,
  Alert,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Dialog from "react-native-dialog";

export default function Class({ navigation }) {
  const [students, setStudents] = useState([
    "Henry",
    "Éric",
    "Louane",
    "Pierre",
    "Isabelle",
  ]);
  const [newStudent, setNewStudent] = useState("");
  const [dialogVisible, setDialogVisible] = useState(false);

  const addStudent = (name) => {
    setStudents((current) => [...current, name]);
  };

  const removeStudent = (index) => {
    setStudents((current) => current.filter((_, i) => i !== index));
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
        <Pressable style={styles.addButton} onPress={showDialog}>
          <Text style={styles.addButtonText}>Ajouter un élève</Text>
        </Pressable>
        <Dialog.Container visible={dialogVisible}>
          <Dialog.Title>Ajout d'un élève</Dialog.Title>
          <Dialog.Description>
            Quelle est l'identifiant de l'élève ?
          </Dialog.Description>
          <Dialog.Input
            placeholder="Exemple: 1543"
            onChangeText={(text) => setNewStudent(text)}
          />
          <Dialog.Button label="Annuler" onPress={handleCancel} />
          <Dialog.Button label="OK" onPress={handleOk} />
        </Dialog.Container>
        <ScrollView style={styles.studentsList}>
          {students.map((student, index) => (
            <View key={index} style={styles.studentContainer}>
              <Text style={styles.studentName}>{student}</Text>
              <Pressable onPress={() => removeStudent(index)}>
                <Text style={styles.deleteIcon}>🗑️</Text>
              </Pressable>
            </View>
          ))}
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
    alignItems: "center",
    paddingTop: 20, // Ajoutez un peu d'espace pour le bouton
  },
  addButton: {
    backgroundColor: "#BBAAF6",
    padding: 10,
    borderRadius: 20,
    marginBottom: 20,
  },
  addButtonText: {
    color: "#FFFFFF",
  },
  studentsList: {
    width: "100%",
  },
  studentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#EDE7F6",
    borderRadius: 10,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 20,
  },
  studentName: {
    color: "#333",
  },
  deleteIcon: {
    fontSize: 24,
  },
});
