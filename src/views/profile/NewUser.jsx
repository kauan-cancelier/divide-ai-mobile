import { StyleSheet, Text } from "react-native"
import Input from "../../components/Input"
import Row from "../../components/Row"
import { TouchableOpacity } from "react-native-gesture-handler"
import Template from "../../components/Template"

export default (props) => {
    return (
        <Template>
            <Text style={style.Title}>
                Cadastro
            </Text>

            <Input placeholder="Nome" />
            <Input placeholder="Email" />
            <Input placeholder="Gênero" />
            <Input placeholder="Data de nascimento" />

            <Row>
                <TouchableOpacity style={style.ButtonPers} onPress={() => props.navigation.goBack()}>
                    <Text style={style.ButtonText}>
                        Cancelar
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={style.ButtonPers} onPress={() => props.navigation.navigate('NewProfile')}>
                    <Text style={style.ButtonText}>
                        Próximo
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
