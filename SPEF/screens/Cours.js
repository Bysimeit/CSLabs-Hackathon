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

const trophyButtonConfig = {
    imageSource: require('../assets/icons/trophy.png'),
    x: 320,
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
    const { course } = route.params;

    if (!course) {
        return null;
    }

    const handleTrophyPress = () => {
        if (course.rewards) {
            navigation.navigate('Boutique', {rewards: course.rewards});
        }
    };

    return (
        <ImageBackground source={course.backgroundImage} resizeMode="cover" style={styles.image}>
            {/* Back button */}
            <TouchableOpacity style={[styles.backButton, { left: backButtonConfig.x, top: backButtonConfig.y }]}
                onPress={() => navigation.navigate('Accueil')}>
                <Image source={backButtonConfig.imageSource} style={{ width: backButtonConfig.width, height: backButtonConfig.height }} />
            </TouchableOpacity>

            {/* Trophy button */}
            {course.rewards != null &&
                <TouchableOpacity style={[styles.trophyButton, { left: trophyButtonConfig.x, top: trophyButtonConfig.y }]}
                    onPress={handleTrophyPress}>
                    <Image source={trophyButtonConfig.imageSource} style={{ width: trophyButtonConfig.width, height: trophyButtonConfig.height }} />
                </TouchableOpacity>
            }

            {/* Course elements */}
            {course.elements.map((element, index) => {
                if (element.type === 'text') {
                    return (
                        <Text key={`text-${index}`} style={getTextStyle(element)}>
                            {element.content}
                        </Text>
                    );
                } else if (element.type === 'rectangle') {
                    return (
                        <View key={`rectangle-${index}`} style={getRectangleStyle(element)}></View>
                    );
                }
            })}

            {/* Character image */}
            <Image key="character" source={course.character.imagePath} style={getCharacterStyle(course.character)} />
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
    trophyButton: {
        position: 'absolute',
        width: trophyButtonConfig.width,
        height: trophyButtonConfig.height,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
