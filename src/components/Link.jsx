import { StyleSheet, Text, TouchableHighlight } from "react-native"

export default (props) => {

    return (
        <TouchableHighlight onPress={props.onPress}>
            <Text style={styles.Link}>
                {props.label}
            </Text>
        </TouchableHighlight >)
}

const styles = StyleSheet.create({
    Link: {
        textAlign: 'center',
        margin: 5,
        textDecorationLine: 'underline',
    },
})
