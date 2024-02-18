import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import BackButtonHandler from "./components/BackButtonHandler";

import Accueil from "./screens/Accueil";
import Login from "./screens/account/Login";
import Register from "./screens/account/Register";
import NewStudent from "./screens/NewStudent";
import Hub from "./screens/teacher/Hub";
import Class from "./screens/teacher/Class";
import ManageLesson from "./screens/teacher/ManageLesson";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <BackButtonHandler />
      <Tab.Navigator
        initialRouteName="Connexion"
        screenOptions={{
          tabBarStyle: { display: "none" },
        }}
      >
        <Tab.Screen name="Connexion" component={Login} />
        <Tab.Screen name="Attente" component={NewStudent} />
        <Tab.Screen name="Accueil" component={Accueil} />
        <Tab.Screen name="Inscription" component={Register} />
        <Tab.Screen name="Hub" component={Hub} />
        <Tab.Screen name="Classe" component={Class} />
        <Tab.Screen name="Gestion du cours" component={ManageLesson} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
