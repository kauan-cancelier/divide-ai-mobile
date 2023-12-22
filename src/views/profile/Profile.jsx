import { Image, StyleSheet, Text, View } from "react-native"
import commomStyle from "../../resources/styles/commomStyle"
import Title from "../../components/Title"
import Template from "../../components/Template"
import Subtitle from "../../components/Subtitle"
import Card from "../../components/Card"
import Rating from "../../components/Rating"

export default () => {
    return (
        <Template>
            <Title label="Perfil" />

            <View style={commomStyle.Center}>
                <Image source={require('../../resources/imgs/profile.png')} style={commomStyle.RoudendImage} />
            </View>

            <View style={style.Center}>
                <Subtitle label="Kauan Mello Cancelier" />
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
                        Sou programador, gosto de ficar até tarde codando e odeio pessoas.
                    </Text>
                </View>
            </Card>

            <Card>
                <View>
                    <Subtitle label="Avaliações" />
                    <Rating username="Felipe Drugovich" adress="Rio de Janeiro" comment="Cara legal, mas não gostava de formula 1."/>
                    <Rating username="Eduarda Manenti" adress="Santa Catarina" comment="Odeiei, ele não gosta de ouvir BTS."/>
                </View>
            </Card>
        </Template>
    )
}
const style = StyleSheet.create({
    Center: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginBottom: 50
    }
})
