import { StyleSheet, Image, View, Text, TouchableOpacity } from "react-native";

export default ({ imageSource, title, description, onPress }) => {
    return (
        <TouchableOpacity style={styles.contentContainer} onPress={onPress}>
            <Image source={imageSource} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    contentContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: '#1c1c1c',
        marginBottom: 20,
        borderRadius: 10,
        padding: 10
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 5,
        marginRight: 10,
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 18,
        color: "white",
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: "white",
    },
});

