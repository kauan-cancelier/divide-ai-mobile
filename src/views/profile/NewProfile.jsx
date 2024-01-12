import { Image, SafeAreaView, StyleSheet, Text, TextInput, View } from "react-native"
import Input from "../../components/Input"
import commomStyle from "../../resources/styles/commomStyle"
import Row from "../../components/Row"
import { TouchableOpacity } from "react-native-gesture-handler"
import Template from "../../components/Template"
import Title from "../../components/Title"
import { Component } from "react"
import api from "../../services/Api"

export default class NewProfile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            gender: '',
            aboutYou: '',
            errorMessage: ''

        }
    }

    async save() {
        try {
            const { gender, aboutYou } = this.state
            const { name, email, birth, maritalStatus, password } = this.props.route.params

            if (!gender) {
                return this.setState({ errorMessage: 'O gênero é obrigatório. ' })
            }

            const responseUser = await api.post('users', {
                name: name,
                email: email,
                password: password,
                birth: birth,
                maritalStatus: maritalStatus
            })
            const location = responseUser.headers.location

            const userGetResponse = await api.get(location)

            const user = userGetResponse.data

            const responseProfile = await api.post('profiles', {
                gender,
                aboutYou,
                user
            })

            this.props.navigation.navigate('Profile', {message: "Perfil criado"})

        } catch (error) {
            console.error('Erro ao salvar perfil:', error);
            // Trate o erro de acordo com suas necessidades
        }
    }


    render() {
        const { errorMessage } = this.state
        return (
            <Template>
                <Title>
                    Cadastro
                </Title>

                <View style={commomStyle.Center}>
                    <Image source={require('../../resources/imgs/profile.png')} style={style.RoudendImage} />
                </View>

                <Text style={style.Subtitle}>
                    * Adicione uma foto de perfil
                </Text>

                {errorMessage ? <Text style={style.ErrorMessage}>{errorMessage}</Text> : ''}

                <Input
                    placeholder="Qual seu gênero?"
                    onChangeText={(gender) => this.setState({ gender })}
                />

                <TextInput
                    style={style.textInput}
                    multiline={true}
                    placeholder="Fale um pouco sobrê você"
                    onChangeText={(aboutYou) => this.setState({ aboutYou })}
                />

                <Row>
                    <TouchableOpacity style={style.ButtonPers} onPress={() => this.props.navigation.goBack()}>
                        <Text style={style.ButtonText}>
                            Voltar
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={style.ButtonPers} onPress={() => this.save()}>
                        <Text style={style.ButtonText}>
                            Salvar
                        </Text>
                    </TouchableOpacity>
                </Row>

            </Template>
        )
    }
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
    },
    textInput: {
        borderWidth: 1,
        backgroundColor: '#1c1c1c',
        borderRadius: 5,
        marginBottom: 10,
    },
    ErrorMessage: {
        fontSize: 15,
        backgroundColor: 'rgba(255, 0, 0, 0.64)',
        borderRadius: 5,
        padding: 10,
        color: 'white',
        marginBottom: 10
    }
})
