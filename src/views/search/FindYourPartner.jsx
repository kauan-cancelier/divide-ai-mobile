import { Image, StyleSheet, Text, View } from "react-native"
import Template from "../../components/Template"
import Input from "../../components/Input"
import Card from "../../components/cards/Card"
import Button from "../../components/buttons/Button"

export default (props) => {
    return (
        <Template>
            <Text style={styles.Title}>
                Encontre {'\n'} seu {'\n'} parceiro
            </Text>
            <Image source={require('../../resources/imgs/findYourPartner.png')}/>
            <Card>
                <Input type='black' placeholder="Para onde?"/>
                <Input type='black' placeholder="Dividir para quantos?"/>

                <View style={styles.Center}>
                    <Button label="Buscar" onPress={() => props.navigation.navigate("SwipeCarousel")}/>
                </View>
            </Card>
        </Template>
    )
}

const styles = StyleSheet.create({
    Title: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 36,
        fontWeight: "bold",
        color: 'white',
    },
    Center: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
        marginBottom: 20
    }
})
