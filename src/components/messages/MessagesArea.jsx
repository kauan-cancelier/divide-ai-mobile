import { StyleSheet, View } from "react-native"

export default ({ message }) => {

    return (
        <View style={styles.Sender}>
            <Text>
                {message}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    Sender: {
        justifyContent: "flex-end",
        backgroundColor: '#00eb3f'
    }
})
