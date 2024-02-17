import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

// GUI configuration 
var myGUIConfig = {
  backgroundImage: require("../assets/map/mapSP1.png"),
  elements: [
    {
      type: 'text',
      content: "Année 2023-2024",
      size: 33,
      color: '#000000ff',
      underline: true,
      bold: true,
      shadow: true,
      x: 50,
      y: 80
    },
    {
      type: 'rectangle',
      color: '#6945F899',
      width: 60,
      height: 60,
      x: 165,
      y: 170,
      borderRadius: 45
    }
  ]
}

export default function Accueil({ navigation }) {
  return (
      <ImageBackground source={myGUIConfig.backgroundImage} resizeMode="cover" style={styles.image}>
          {myGUIConfig.elements.map((element, index) => {
              if (element.type === 'text') {
                  return (
                      <Text key={index} style={getTextStyle(element)}>{element.content}</Text>
                  );
              } else if (element.type === 'rectangle') {
                  return (
                      <View key={index} style={getRectangleStyle(element)}></View>
                  );
              }
          })}
      </ImageBackground>
  );
}

const getTextStyle = (textConfig) => {
  return {
      fontSize: textConfig.size,
      color: textConfig.color,
      textDecorationLine: textConfig.underline ? 'underline' : 'none',
      fontWeight: textConfig.bold ? 'bold' : 'normal',
      textShadowColor: textConfig.shadow ? '#00000080' : 'transparent',
      textShadowOffset: { width: 2, height: 2 },
      textShadowRadius: 4,
      position: 'absolute',
      left: textConfig.x,
      top: textConfig.y
  };
};

const getRectangleStyle = (rectConfig) => {
  return {
      position: 'absolute',
      left: rectConfig.x,
      top: rectConfig.y,
      width: rectConfig.width,
      height: rectConfig.height,
      backgroundColor: rectConfig.color,
      borderRadius: rectConfig.borderRadius,
  };
};

const styles = StyleSheet.create({
  image: {
      flex: 1,
      justifyContent: "center",
      width: '100%',
  },
});