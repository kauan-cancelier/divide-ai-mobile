import { Image, SafeAreaView, StyleSheet, Text, View } from "react-native"
import Input from "../../components/Input"
import commomStyle from "../../resources/styles/commomStyle"
import Row from "../../components/Row"
import { TouchableOpacity } from "react-native-gesture-handler"
import Template from "../../components/Template"

export default (props) => {
    return (
        <Template>
            <Text style={style.Title}>
                Cadastro
            </Text>

            <View style={commomStyle.Center}>
                <Image source={require('../../resources/imgs/profile.png')} style={style.RoudendImage}/>
            </View>

            <Text style={style.Subtitle}>
                Adicione uma foto de perfil
            </Text>

            <Input placeholder="Onde você mora?" />
            <Input placeholder="Onde você quer morar?" />
            <Input placeholder="Status de relacionamento" />
            <Input placeholder="Conte nos um pouco sobre você" />
            <Input placeholder="Instagram" />

            <Row>
                <TouchableOpacity style={style.ButtonPers} onPress={() => props.navigation.goBack()}>
                    <Text style={style.ButtonText}>
                        Cancelar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.ButtonPers} onPress={() => props.navigation.navigate('Home')}>
                    <Text style={style.ButtonText}>
                        Salvar
                    </Text>
                </TouchableOpacity>
            </Row>
        </Template>
    )
}

const style = StyleSheet.create({
    Title: {
        fontSize: 36,
        marginBottom: 50,
        color: 'white'
    },
    Subtitle: {
        fontSize: 16,
        marginBottom: 40,
        color: 'white'
    },
    RoudendImage: {
        borderRadius: 130,
        marginBottom: 50

    },
    ButtonPers: {
        marginTop: 20,
        backgroundColor: '#1c1c1c',
        paddingVertical: 10,
        paddingHorizontal: 40,
        borderRadius: 5,
        marginHorizontal: 10,
        borderWidth: 2,
        borderColor: '#0E94C9',
    },
    ButtonText: {
        color: 'white',
        fontSize: 16,
    }
})
