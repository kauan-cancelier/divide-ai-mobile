import { StyleSheet, TextInput } from "react-native"

export default (props) => {
    const inputStyle = getButtonStyle(props.type);
    return (
        <TextInput
            placeholder={props.placeholder}
            style={inputStyle}
            onChangeText={props.onChangeText}
        />
    )
}

const getButtonStyle = (type) => {
    switch (type) {
        case 'black':
            return styles.InputBlack;
        default:
            return styles.InputDefault;
    }
};

const styles = StyleSheet.create({
    InputDefault: {
        backgroundColor: '#1c1c1c',
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 20,

    },
    InputBlack: {
        backgroundColor: 'black',
        borderRadius: 5,
        marginBottom: 10,
        paddingLeft: 20,
    },
})
