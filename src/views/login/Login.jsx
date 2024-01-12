import { Image, Text, View } from "react-native";
import Input from "../../components/Input";
import Row from "../../components/Row";
import Link from "../../components/Link";
import styles from "../../resources/styles/commomStyle";
import Template from "../../components/Template";
import Button from "../../components/buttons/Button";
import React from "react";
import api from "../../services/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: '',
            authenticationStatus: null,
            errorMessage: '',
            emailIsRequired: '',
            passwordIsRequired: ''
        }
    }

    async login() {
        const { email, password } = this.state

        if (!password && !email) {
            return this.setState({ errorMessage: 'Todos os campos são obrigatórios. ' })
        } else if (!email) {
            return this.setState({ emailIsRequired: 'O email é obrigatório. ' })
        } else if (!password) {
            return this.setState({ passwordIsRequired: 'A senha é obrigatória. ' })
        }

        const trimmedEmail = email.trim()
        const trimmedPassword = password.trim()

        try {

            const response = await api.post('login', {
                email: 'kauanm1600@gmail.com',
                password: '123',
            })
                const userResponseData = await api.get(response.data)
                await AsyncStorage.setItem('userData', JSON.stringify(userResponseData.data));

                this.setState({ authenticationStatus: response.status, errorMessage: '' });
                this.props.navigation.navigate('Home');

        } catch (error) {
            if (error.response && error.response.data) {
                const errorMessage = error.response.data.erros
                console.warn(errorMessage)
                this.setState({ authenticationStatus: null, errorMessage: 'errorMessage' })
            } else {
                this.setState({ authenticationStatus: null, errorMessage: 'Erro na requisição.' })
            }
        }
    }

    async componentDidMount() {
        try {
            await AsyncStorage.clear()
        } catch (error) {
            console.error('Erro ao limpar cache: ' + error)
        }
    }

    render() {
        const { errorMessage, emailIsRequired, passwordIsRequired } = this.state

        return (
            <Template>

                <View style={styles.Center}>
                    <Image source={require('../../resources/imgs/logo.png')} />
                </View>

                {errorMessage ? <Text style={styles.mb5}>{errorMessage}</Text> : ''}

                <Input
                    placeholder="Email"
                    onChangeText={(email) => this.setState({ email })}
                />

                {emailIsRequired ? <Text style={styles.mb5}>{emailIsRequired}</Text> : ''}

                <Input
                    placeholder="Senha"
                    onChangeText={(password) => this.setState({ password })}
                />

                {passwordIsRequired ? <Text style={styles.mb5}>{passwordIsRequired}</Text> : ''}

                <View style={styles.mt5}>
                    <Button onPress={() => this.login()} label="Entrar" />
                </View>

                <Row>
                    <Link label="Cadastre-se" onPress={() => this.props.navigation.navigate('NewUser')} />
                    <Link label="Esqueceu sua senha?" onPress={() => console.warn('lembrando')} />
                </Row>

            </Template>
        )
    }
}
