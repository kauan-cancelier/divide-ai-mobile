import { Image, StyleSheet, Text, View } from "react-native"
import commomStyle from "../../resources/styles/commomStyle"
import Title from "../../components/Title"
import Template from "../../components/Template"
import Subtitle from "../../components/Subtitle"
import Card from "../../components/cards/Card"
import { Component } from "react"
import AsyncStorage from "@react-native-async-storage/async-storage"
import api from "../../services/Api"

export default class Profile extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: '',
            aboutYou: '',
            location: ''
        }
    }

    async componentDidMount() {
        try {
            const userDataString = await AsyncStorage.getItem('userData');
            if (userDataString) {
                const userData = JSON.parse(userDataString);
                const response = await api.get(`profiles/id/${userData.id}`)

                const profile = response.data
                const user = profile.user
                this.setState({
                    name: user.name,
                    aboutYou: profile.aboutYou
                })
            }
            return null;
        } catch (error) {
            console.error(error);
            return null;
        }
    }

    render() {
        const { name, aboutYou } = this.state
        return (
            <Template>
                <Title>
                    Perfil
                </Title>

                <View style={commomStyle.Center}>
                    <Image source={require('../../resources/imgs/profile.png')} style={commomStyle.RoudendImage} />
                </View>

                <View style={style.Center}>
                    <Subtitle label={name} />
                    <Text>
                        Cursando alguma coisa
                    </Text>
                </View>

                <Card>
                    <View>
                        <Subtitle label="Disponibilidade para morar" />

                        <Text style={commomStyle.mb5}>
                            Tubarão, Sc
                        </Text>
                        <Subtitle label="Localidade" />

                        <Text style={commomStyle.mb5}>
                            Monte Castelo
                        </Text>

                        <Subtitle label="Idade" />
                        <Text style={commomStyle.mb5}>
                            18 anos
                        </Text>

                    </View>
                </Card>

                <Card>
                    <View>
                        <Subtitle label="Sobre você" />
                        <Text style={commomStyle.mb5}>
                            {aboutYou}
                        </Text>
                    </View>
                </Card>

                {/* <Card>
                    <View>
                        <Subtitle label="Avaliações" />
                        <Rating username="Felipe Drugovich" adress="Rio de Janeiro" comment="Cara legal, mas não gostava de formula 1." />
                        <Rating username="Eduarda Manenti" adress="Santa Catarina" comment="Odeiei, ele não gosta de ouvir BTS." />
                    </View>
                </Card> */}

            </Template>
        )

    }
}
const style = StyleSheet.create({
    Center: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: 50
    }
})
