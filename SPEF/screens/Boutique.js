import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; 

const backButtonConfig = {
    imageSource: require('../assets/icons/backLeft.png'),
    width: 50,
    height: 50,
};

const trophyButtonConfig = {
    imageSource: require('../assets/icons/trophy.png'),
    width: 100,
    height: 100,
};

/**
 * Component for displaying rewards screen.
 * @param {object} route - The route object containing parameters.
 * @returns {JSX.Element} - Rewards screen component.
 */
export default function Boutique({ route }) {
    const { rewards } = route.params;

    var backgroundImage = require("../assets/map/sousMapSP3.png");
    var title = "Math 2023";

    const navigation = useNavigation(); 

    const handleBackButtonPress = () => {
        navigation.goBack(); 
    };

    return (
        <ImageBackground source={backgroundImage} resizeMode="cover" style={styles.image}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.backButton} onPress={handleBackButtonPress}>
                    <Image source={backButtonConfig.imageSource} style={{ width: backButtonConfig.width, height: backButtonConfig.height }} />
                </TouchableOpacity>
                <Image source={trophyButtonConfig.imageSource} style={styles.trophyIcon} />
                <Text style={styles.title}>{title}</Text>
                <View style={styles.rewardsContainer}>
                    {rewards.map((reward, index) => (
                        <Text key={`reward-${index}`} style={styles.rewardItem}>
                            {`${reward.cost}: ${reward.result}`}
                        </Text>
                    ))}
                </View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        width: '100%',
    },
    container: {
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        padding: 20,
        borderRadius: 10,
        width: '95%', 
        height: '95%',
        alignItems: 'center',
    },
    backButton: {
        position: 'absolute',
        top: 20,
        left: 20,
        zIndex: 1,
    },
    trophyIcon: {
        width: trophyButtonConfig.width,
        height: trophyButtonConfig.height,
        marginBottom: 10, 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    rewardsContainer: {
        marginTop: 10,
    },
    rewardItem: {
        fontSize: 18,
        marginBottom: 5,
    },
});
