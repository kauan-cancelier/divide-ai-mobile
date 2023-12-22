import { SafeAreaView, StyleSheet, Text } from "react-native"

export default (props) => {
    return (
        <SafeAreaView style={style.Card}>
            {props.children}
        </SafeAreaView>
    )
}

const style = StyleSheet.create({
    Card: {
        backgroundColor: "#1c1c1c",
        borderRadius: 10,
        padding: 10,
        marginBottom: 10
      },
})
