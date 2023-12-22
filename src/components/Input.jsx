import { StyleSheet, TextInput } from "react-native"

export default (props) => {
    return (
        <TextInput placeholder={props.placeholder} style={styles.Input} />
    )
}
const styles = StyleSheet.create({
    Input: {
        backgroundColor: '#1c1c1c',
        borderRadius: 10,
        marginBottom: 10
    },
})
