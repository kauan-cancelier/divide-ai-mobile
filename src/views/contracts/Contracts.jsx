import React from "react";
import CardWithImage from "../../components/cards/CardWithImagem";
import Title from "../../components/Title";
import Template from "../../components/Template";

export default (props) => {
    return (
        <Template>
            <Title>
                Contratos
            </Title>

            <CardWithImage
                imageSource={require("../../resources/imgs/predio.jpeg")}
                title="Edificio por do sol"
                description="De 18 de março de 2020 até 18 de março de 2021."
                onPress={() => props.navigation.navigate("ShowContract")}
            />

        </Template>
    );
};
