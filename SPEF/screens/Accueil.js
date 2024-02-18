import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native';

// GUI configuration 
var myGUIConfig = {
  backgroundImage: require("../assets/map/mapSP1.png"),
  elements: [
    {
      type: 'text',
      content: "Année 2023-2024",
      size: 36,
      color: '#000000ff',
      underline: true,
      bold: true,
      shadow: true,
      x: 35,
      y: 50
    },
    {
      type: 'rectangle',
      color: '#6945F899',
      width: 55,
      height: 55,
      x: 165,
      y: 170,
      borderRadius: 45,
      course : {
		backgroundImage: require("../assets/map/sousMapSP3.png"),
		rewards:[
			{cost:40,
			result:"Paquet de bonbons"},
			{cost:70,
			result:"Game de Smash Bros avec le prof"},
			{cost:100,
			result:"Cours fini 10min plus tôt"},
			{cost:1000,
			result:"Le prof se rase les cheveux"}, 
		],
		elements: [
			{
				type: 'text',
				content: "Math 2023",
				size: 33,
				color: '#000000ff',
				underline: true,
				bold: true,
				shadow: true,
				x: 100,
				y: 15
			},
			{
				type: 'text',
				content: "1. Trigonométrie",
				size: 23,
				color: '#ffffffff',
				underline: false,
				bold: false,
				shadow: false,
				x: 20,
				y: 570
			},
			{
				type: 'text',
				content: "[7/10]",
				size: 23,
				color: '#ffffffff',
				underline: false,
				bold: false,
				shadow: false,
				x: 70,
				y: 602
			},
			{
				type: 'text',
				content: "2. Géométrie",
				size: 23,
				color: '#ffffffff',
				underline: false,
				bold: false,
				shadow: false,
				x: 30,
				y: 470
			},
			{
				type: 'text',
				content: "[5/10]",
				size: 23,
				color: '#ffffffff',
				underline: false,
				bold: false,
				shadow: false,
				x: 78,
				y: 502
			},
			{
				type: 'rectangle',
				color: '#26F31499',
				width: 115,
				height: 115,
				x: 230,
				y: 560,
				borderRadius: 65,
			},
			{
				type: 'rectangle',
				color: '#26F31499',
				width: 95,
				height: 95,
				x: 218,
				y: 447,
				borderRadius: 65,
			},
			{
				type: 'rectangle',
				color: '#F3141499',
				width: 60,
				height: 60,
				x: 118,
				y: 389,
				borderRadius: 65,
			},
			{
				type: 'text',
				content: "3. Algèbre",
				size: 23,
				color: '#ffffffff',
				underline: false,
				bold: false,
				shadow: false,
				x: 198,
				y: 400
			},
		],
		character: {
			imagePath: require("../assets/skins/Jenny.png"),
			position: {
			  x: 50,
			  y: 360
			},
			size: {
			  width: 60,
			  height: 90
			}
		}
      }
    }
  ],
  character: {
    imagePath: require("../assets/skins/Jenny.png"),
    position: {
      x: 150,
      y: 310
    },
    size: {
      width: 40,
      height: 60
    }
  },
}

export default function Accueil({ navigation }) {
	const handleRectanglePress = (course) => {
	  if (course) {
		navigation.navigate('Cours', { course: course });
	  }
	};
  
	return (
		<ImageBackground source={myGUIConfig.backgroundImage} resizeMode="cover" style={styles.image}>
			{myGUIConfig.elements.map((element, index) => {
			if (element.type === 'text') {
				return (
				<Text key={index} style={getTextStyle(element)}>{element.content}</Text>
				);
			} else if (element.type === 'rectangle') {
				return (
				<TouchableOpacity key={index} onPress={() => handleRectanglePress(element.course)} style={getRectangleStyle(element)}>
				</TouchableOpacity>
				);
			}
			})}
			<Image source={myGUIConfig.character.imagePath} style={getCharacterStyle()} />
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

const getCharacterStyle = () => {
  return {
      position: 'absolute',
      left: myGUIConfig.character.position.x,
      top: myGUIConfig.character.position.y,
      width: myGUIConfig.character.size.width,
      height: myGUIConfig.character.size.height,
  };
};

const styles = StyleSheet.create({
	image: {
		flex: 1,
		justifyContent: "flex-start",
		alignItems: "flex-start", 
		width: '100%',
	},
});
