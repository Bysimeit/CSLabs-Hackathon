import { useEffect } from "react";
import { BackHandler, Alert } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function BackButtonHandler() {
  const navigation = useNavigation();

  useEffect(() => {
    const backAction = () => {
      if (navigation.canGoBack()) {
        navigation.goBack();
        return true;
      } else {
        Alert.alert(
          "Quitter l'application",
          "Êtes-vous sûr de vouloir quitter l'application ?",
          [
            {
              text: "Non",
              onPress: () => null,
              style: "cancel",
            },
            { text: "Oui", onPress: () => BackHandler.exitApp() },
          ]
        );
        return true;
      }
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, [navigation]);

  return null;
}
