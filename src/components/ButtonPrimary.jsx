import { StyleSheet, Text, TouchableOpacity } from "react-native"

export default (props) => {
    return (
        <TouchableOpacity style={styles.Button} onPress={props.onPress}>
            <Text style={styles.ButtonText}>
                {props.label}
            </Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    Button: {
        alignItems: 'center',
        backgroundColor: '#2196F3',
        padding: 10,
        borderRadius: 10
    },
    ButtonText: {
        color: 'white',
    },
})
