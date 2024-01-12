import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default ({ message }) => {
    const [isPressed, setIsPressed] = useState(false);

    const handleLongPress = () => {
        setIsPressed(!isPressed);
    };

    const containerStyle = {
        ...styles.container,
        backgroundColor: isPressed ? '#add8e6' : 'transparent',
    };

    return (
        <View style={containerStyle}>
            <TouchableOpacity
                style={styles.sender}
                onPress={null}
                onLongPress={handleLongPress}
                delayLongPress={500}
            >
                <Text style={styles.text}>{message}</Text>
                <Text style={styles.time}>18:48</Text>


            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 15,
    },
    sender: {
        borderRadius: 10,
        backgroundColor: '#44753c',
        marginLeft: 'auto',
        maxWidth: '50%',
        padding: 10,
    },
    text: {
        fontSize: 16,
        color: 'white',
        fontWeight: 'bold',
    },
    time: {
        textAlign: 'right',
        fontSize: 10,
    }
});
