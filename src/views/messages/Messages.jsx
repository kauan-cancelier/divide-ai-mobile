import { StyleSheet, Text } from "react-native"
import Template from "../../components/Template"
import Title from "../../components/Title"
import MessageCard from "../../components/cards/MessageCard"

export default (props) => {
    return (
        <Template>
            <Title>
                Caixa de entrada
            </Title>

            <MessageCard
                imageSource={require("../../resources/imgs/profile.png")}
                username="ChatGpt"
                message=""
                onPress={() => props.navigation.navigate("ShowMessage")}
            />
        </Template>
    )
}

const styles = StyleSheet.create({
})
