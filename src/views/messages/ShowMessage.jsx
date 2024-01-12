import React, { Component } from 'react';
import { StyleSheet, View, TextInput, TouchableOpacity, Text } from 'react-native';
import MessageSender from '../../components/messages/MessageSender';
import TopCardMessage from '../../components/messages/TopCardMessage';
import Template from '../../components/Template';
import api from '../../services/Api';
import MessageReceiver from '../../components/messages/MessageReceiver';

export default class YourComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
            isSentByUser: true,
            messages: [],
        };
    }

    handleSendButtonPress = () => {
        const { inputValue, messages, isSentByUser } = this.state;

        if (inputValue.trim() !== '') {
            this.setState({
                messages: [...messages, { text: inputValue, isSentByUser }],
                inputValue: '',
            }, () => {
                this.sendMessageGpt(inputValue);
                this.setState({ isSentByUser: true });
            });
        }
    }

    async sendMessageGpt(message) {
        try {
            const response = await api.post('chat', { message });
            const gptResponse = response.data.reply;
            this.setState((prevState) => ({
                messages: [...prevState.messages, { text: gptResponse, isSentByUser: false }],
            }));
        } catch (error) {
            console.error('Erro na requisição:', error);
        }
    }

    renderMessages = () => {
        return this.state.messages.map((msg, index) => {
            if (msg.isSentByUser) {
                return <MessageSender key={index} message={msg.text} />;
            } else {
                return <MessageReceiver key={index} message={msg.text.toString()} />;
            }
        });
    }

    render() {
        return (
            <Template>
                <View style={styles.container}>
                    <TopCardMessage
                        imageSource={require('../../resources/imgs/profile.png')}
                        username="ChatGpt"
                        message="Eai tudo certo para nos mudarmos?? :D "
                        onPressBack={() => this.props.navigation.goBack()}
                        onPressProfile={() => this.props.navigation.navigate('Profile')}
                    />
                    {this.renderMessages()}
                </View>

                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Digite a mensagem"
                        onChangeText={(text) => this.setState({ inputValue: text })}
                        value={this.state.inputValue}
                    />
                    <TouchableOpacity style={styles.button} onPress={this.handleSendButtonPress}>
                        <Text style={styles.buttonText}>Enviar</Text>
                    </TouchableOpacity>
                </View>
            </Template>
        );
    }
}

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    container: {
        flex: 1,
    },
    input: {
        flex: 1,
        padding: 8,
        backgroundColor: '#1c1c1c',
        borderWidth: 1,
        marginRight: 10,
        borderRadius: 10,
        color: 'white',
    },
    button: {
        backgroundColor: '#305c3b',
        borderRadius: 10,
        alignItems: 'center',
        padding: 5,
    },
    buttonText: {
        fontSize: 20,
        color: 'white',
    },
});
