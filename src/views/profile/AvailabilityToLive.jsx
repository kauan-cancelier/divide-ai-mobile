import React, { Component } from "react"
import { StyleSheet, Text } from "react-native"
import Input from "../../components/Input"
import Row from "../../components/Row"
import { TouchableOpacity } from "react-native-gesture-handler"
import Template from "../../components/Template"
import Title from "../../components/Title"

export default class AvailabilityToLive extends Component {
	constructor(props) {
		super(props)
		this.state = {
            state: '',
            city: '',
            preferences: '',
			errorMessage: ''
		}
	}

	async newAvailabilityToLive() {
	}

	render() {
		const { errorMessage } = this.state

		return (
			<Template>
				<Title>Onde deseja morar?</Title>

				{errorMessage ? <Text style={style.ErrorMessage}>{errorMessage}</Text> : ''}

				<Input
					placeholder="Qual estado você deseja morar"
					onChangeText={(state) => this.setState({ state })}
				/>

				<Input
					placeholder="Qual cidade você deseja morar?"
					onChangeText={(city) => this.setState({ city })}
				/>

				<Input
					placeholder="Alguma preferência de local? (coloque o que você quiser neste campo)"
					onChangeText={(preferences) => this.setState({ preferences })}
				/>

				<Row>
					<TouchableOpacity style={style.ButtonPers} onPress={() => this.props.navigation.goBack()}>
						<Text style={style.ButtonText}>Cancelar</Text>
					</TouchableOpacity>

					<TouchableOpacity style={style.ButtonPers} onPress={() => this.newAvailabilityToLive()}>
						<Text style={style.ButtonText}>Próximo</Text>
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
		color: "white",
	},
	ButtonPers: {
		marginTop: 20,
		backgroundColor: "#1c1c1c",
		paddingVertical: 10,
		paddingHorizontal: 40,
		borderRadius: 5,
		marginHorizontal: 10,
		borderWidth: 2,
		borderColor: "#0E94C9",
	},
	ButtonText: {
		color: "white",
		fontSize: 16,
	},
	DateInput: {
		backgroundColor: '#1c1c1c',
		borderRadius: 5,
		marginBottom: 10,
		paddingLeft: 20,
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
