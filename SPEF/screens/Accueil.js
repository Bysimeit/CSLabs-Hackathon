import { StyleSheet, Text, View, ImageBackground } from 'react-native';

// GUI configuration 
var myGUIConfig = {
  backgroundImage: require("../assets/map/mapSP1.png"),
  Texts: [
    {
      content: "Année 2023-204",
      size: 30,
      color: '#000000ff',
      underline: true,
      bold: true,
      x: 80,
      y: 40
    },
  ]
}

export default function Accueil({ navigation }) {
    return (
        <ImageBackground source={myGUIConfig.backgroundImage} resizeMode="cover" style={styles.image}>
            {myGUIConfig.Texts.map((textConfig, index) => (
                <Text key={index} style={getTextStyle(textConfig)}>{textConfig.content}</Text>
            ))}
        </ImageBackground>
    );
}

const getTextStyle = (textConfig) => {
  return {
    fontSize: textConfig.size,
    color: textConfig.color,
    textDecorationLine: textConfig.underline ? 'underline' : 'none',
    fontWeight: textConfig.bold ? 'bold' : 'normal',
    position: 'absolute',
    left: textConfig.x,
    top: textConfig.y
  };
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        width: '100%',
    },
});