import { Image, View } from "react-native";
import Input from "../../components/Input";
import Row from "../../components/Row";
import ButtonPrimary from "../../components/ButtonPrimary";
import Link from "../../components/Link";
import styles from "../../resources/styles/commomStyle";
import Template from "../../components/Template";

export default (props) => {
    return (
        <Template>

            <View style={styles.Center}>
                <Image source={require('../../resources/imgs/logo.png')} />
            </View>

            <Input placeholder="Login" />
            <Input placeholder="Senha" />

            <View style={styles.mt5}>
                <ButtonPrimary onPress={() => props.navigation.navigate('Home')} label="Entrar" />
            </View>

            <Row>
                <Link label="Cadastre-se" onPress={() => props.navigation.navigate('NewUser')} />
                <Link label="Esqueceu sua senha?" onPress={() => console.warn('lembrando')} />
            </Row>

        </Template>
    )
}
