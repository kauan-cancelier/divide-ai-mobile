import { StyleSheet, View } from "react-native"

export default (props) => {
    return (
        <View style={styles.Row}>
            {props.children}
        </View>
    )
}
const styles = StyleSheet.create({
    Row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
})
