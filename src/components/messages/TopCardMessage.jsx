import React, { useState, useEffect } from "react";
import { StyleSheet, Image, View, Text, TouchableOpacity, SafeAreaView } from "react-native";

import img from "../../resources/imgs/backButton.png"
export default ({ imageSource, username, message, onPressBack, onPressProfile }) => {
    const [msg, setMessage] = useState(message);

    return (
        <SafeAreaView style={styles.contentContainer}>
            <TouchableOpacity style={styles.backButtonContainer} onPress={onPressBack}>
                <Image style={styles.imageBackButton} source={img}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contentContainer} onPress={onPressProfile}>
                <Image source={imageSource} style={styles.imageProfile} />
                <View style={styles.textContainer}>
                    <Text style={styles.username}>{username}</Text>
                </View>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
    },
    backButtonContainer: {
        paddingBottom: 20
    },
    imageProfile: {
        width: 40,
        height: 40,
        borderRadius: 100,
        marginRight: 10,
    },
    imageBackButton: {
        width: 40,
        height: 40,
    },
    textContainer: {
        flex: 1,
    },
    username: {
        fontSize: 18,
        color: "white",
        marginBottom: 5,
    },
});
