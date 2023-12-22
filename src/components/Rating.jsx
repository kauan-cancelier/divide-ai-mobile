import { SafeAreaView, StyleSheet, Text, View } from "react-native"

export default (props) => {
    return (
        <>
            <View style={style.AlignInRow}>
                <Text style={style.NameText}>
                    {props.username}
                </Text>

                <Text style={style.LocateText}>
                    {props.adress}
                </Text>

            </View>

            <Text>
                {props.comment}
            </Text>
        </>
    )
}

const style = StyleSheet.create({
    NameText: {
        fontSize: 18,
        marginRight: 5
    },
    LocateText: {
        fontSize: 10,
    },
    AlignInRow: {
        marginTop: 5,
        flexDirection: "row",
        alignItems: "baseline"
    }
})
