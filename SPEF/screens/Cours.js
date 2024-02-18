import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const backButtonConfig = {
    imageSource: require('../assets/icons/backLeft.png'),
    x: 13,
    y: 13,
    width: 50,
    height: 50,
};



/**
 * Component for displaying a course screen.
 * @param {object} route - The route object containing parameters.
 * @returns {JSX.Element} - Course screen component.
 */
export default function CourseScreen({ route }) {
    const navigation = useNavigation();
    // Extracting the course object from the route parameters
    const { course } = route.params;

    // If course is not provided, return null
    // todo: return an error message to the user
    if (!course) {
        return null;
    }

    // Rendering the course screen
    return (
        <ImageBackground source={course.backgroundImage} resizeMode="cover"style={styles.image}>

        {/* Rendering back button */}
        <TouchableOpacity style={[styles.backButton, { left: backButtonConfig.x, top: backButtonConfig.y }]}
            onPress={() => navigation.navigate('Accueil')} >
            <Image source={backButtonConfig.imageSource} style={{ width: backButtonConfig.width, height: backButtonConfig.height }}/>
        </TouchableOpacity>


            {/* Mapping through elements of the course */}
            {course.elements.map((element, index) => {
                if (element.type === 'text') {
                    // Rendering text element
                    return (
                        <Text
                            key={`text-${index}`}
                            style={getTextStyle(element)}
                        >
                            {element.content}
                        </Text>
                    );
                } else if (element.type === 'rectangle') {
                    // Rendering rectangle element
                    return (
                        <View
                            key={`rectangle-${index}`}
                            style={getRectangleStyle(element)}
                        ></View>
                    );
                }
            })}

            {/* Rendering character image */}
            <Image
                key="character"
                source={course.character.imagePath}
                style={getCharacterStyle(course.character)}
            />
        </ImageBackground>
    );
}

/**
 * Gets the text style based on provided configuration.
 * @param {object} textConfig - Configuration object for text style.
 * @returns {object} - Style object for text.
 */
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

/**
 * Gets the style for the rectangle element based on provided configuration.
 * @param {object} rectConfig - Configuration object for rectangle style.
 * @returns {object} - Style object for rectangle.
 */
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

/**
 * Gets the style for the character image based on provided configuration.
 * @param {object} charConfig - Configuration object for character image style.
 * @returns {object} - Style object for character image.
 */
const getCharacterStyle = (charConfig) => {
    return {
        position: 'absolute',
        left: charConfig.position.x,
        top: charConfig.position.y,
        width: charConfig.size.width,
        height: charConfig.size.height,
    };
};

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        width: '100%',
    },
    backButton: {
        position: 'absolute',
        width: backButtonConfig.width,
        height: backButtonConfig.height,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
