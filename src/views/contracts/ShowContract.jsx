import Card from "../../components/cards/Card"
import Template from "../../components/Template"
import Title from "../../components/Title"
import Row from "../../components/Row"
import Button from "../../components/buttons/Button"
import { StyleSheet, Text, View } from "react-native"
import commomStyle from "../../resources/styles/commomStyle"
import RowLine from "../../components/RowLine"
import ButtonOutlined from "../../components/buttons/ButtonOutlined"

export default () => {
    return (
        <Template>
            <Title>
                Edificio Milano
            </Title>
            <Card>

                <Button type="black" label="Renovar Plano" />
                <Button type="black" label="Assinatura" />
                <Button type="black" label="Locatório" />

                <Text style={[commomStyle.CenterText, style.Title]}>
                    Detalhes
                </Text>

                <RowLine>
                    <Text style={style.PrimaryText}>Status</Text>
                    <Text style={style.ActiveText}>Status</Text>
                </RowLine>

                <RowLine>
                    <Text style={style.PrimaryText}>Duração</Text>
                    <Text>12 meses</Text>
                </RowLine>

                <RowLine>
                    <Text style={style.PrimaryText}>Valor Total</Text>
                    <Text>R$ 123,34</Text>
                </RowLine>

                <View style={style.CancelFooter}>
                    <ButtonOutlined type="cancel" label="Cancelar" />
                </View>

            </Card>
        </Template>
    )
}

const style = StyleSheet.create({
    Title: {
        fontSize: 25,
        margin: 25,
        color: 'white',
        fontWeight: "bold",
    },
    PrimaryText: {
        color: 'white',
        fontSize: 18,
        fontWeight: "bold",
    },
    ActiveText: {
        color: '#00eb3f',
        fontWeight: "bold",
    },
    CancelFooter: {
        marginTop: 100
    }

})

