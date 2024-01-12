import React, { useState, useEffect } from "react"
import { StyleSheet, Image, View, Text, TouchableOpacity, Platform } from "react-native"

export default ({ imageSource, username, message, onPress, qtdeMsgs }) => {
    const [msg, setMessage] = useState(message)

    useEffect(() => {
        if (message.length > 50) {
            setMessage(message.slice(0, 50) + "...")
        } else {
            setMessage(message)
        }
    }, [message])

    return (
        <TouchableOpacity style={styles.contentContainer} onPress={onPress}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.message}>{msg}</Text>
                <Text style={styles.numberOfMessages}>{qtdeMsgs}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        borderRadius: 10,
        padding: 10,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 100,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    username: {
        fontSize: 18,
        color: "white",
        marginBottom: 5,
    },
    message: {
        fontSize: 14,
        color: "white",
    },
    numberOfMessages: {
        fontWeight: '200'
    }
})
