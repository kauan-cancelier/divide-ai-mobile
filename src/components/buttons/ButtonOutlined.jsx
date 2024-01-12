
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default (props) => {
    const buttonStyle = getButtonStyle(props.type);

    return (
        <TouchableOpacity style={buttonStyle} onPress={props.onPress}>
            <Text style={styles.ButtonText}>{props.label}</Text>
        </TouchableOpacity>
    );
};

const getButtonStyle = (type) => {
    switch (type) {
        case 'primary':
            return styles.ButtonPrimary;
        case 'black':
            return styles.ButtonBlack;
        case 'success':
            return styles.ButtonSuccess;
        case 'cancel':
            return styles.ButtonCancel
        default:
            return styles.ButtonPrimary;
    }
};

const styles = StyleSheet.create({
    ButtonPrimary: {
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        borderColor: '#2196F3',
        borderWidth: 1,
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
    },
    ButtonSuccess: {
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        borderColor: '#00eb3f',
        borderWidth: 1,
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
    },
    ButtonCancel: {
        alignItems: 'center',
        backgroundColor: '#1c1c1c',
        borderColor: 'red',
        borderWidth: 1,
        marginVertical: 10,
        padding: 10,
        borderRadius: 10,
    },
    ButtonText: {
        color: 'white',
    },
});
