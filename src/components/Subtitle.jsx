import { StyleSheet, Text } from "react-native"

export default (props) => {
    return (
        <Text style={style.Title}>
            {props.label}
        </Text>
    )
}

const style = StyleSheet.create({
    Title: {
        fontSize: 20,
        color: 'white'
    }
})
