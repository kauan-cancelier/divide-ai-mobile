import React, { Component } from "react"
import { StyleSheet, Text } from "react-native"
import Input from "../../components/Input"
import Row from "../../components/Row"
import { TouchableOpacity } from "react-native-gesture-handler"
import Template from "../../components/Template"
import Title from "../../components/Title"
import { TextInputMask } from "react-native-masked-text"
import SelectDropdown from "react-native-select-dropdown"

export default class NewUser extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			email: "",
			birth: "",
			maritalStatus: "",
			password: "",
			open: false,
			errorMessage: ''
		}
	}

	async newProfile() {
		const { name, email, birth, maritalStatus, password } = this.state


		if (!name && !email && !birth && !maritalStatus && !password) {
			return this.setState({ errorMessage: 'Todos os campos são obrigatórios. ' })

		} else if (!name) {
			return this.setState({ errorMessage: 'O nome é obrigatório. ' })

		} else if (!email) {
			return this.setState({ errorMessage: 'O email é obrigatório e deve seguir o padrao example@example.com. ' })

		} else if (!birth) {
			return this.setState({ errorMessage: 'A data de nascimento é obrigatória. ' })

		} else if (!maritalStatus) {
			return this.setState({ errorMessage: 'O estado civil é obrigatório. ' })

		} else if (!password) {
			return this.setState({ errorMessage: 'A senha é obrigatória. ' })

		}


		await this.props.navigation.navigate("NewProfile", {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			birth: this.state.birth,
			maritalStatus: this.state.maritalStatus,
		})
	}

	render() {
		const { birth, errorMessage } = this.state
		const maritalStatusEnum = ["SINGLE", "FALLING_IN_LOVE", "MARRIED", "PREFER_NOT_TO_SAY"]

		return (
			<Template>
				<Title>Cadastro</Title>
				{errorMessage ? <Text style={style.ErrorMessage}>{errorMessage}</Text> : ''}
				<Input
					placeholder="Nome"
					onChangeText={(name) => this.setState({ name })}
				/>

				<Input
					placeholder="Email"
					onChangeText={(email) => this.setState({ email })}
				/>

				<Input
					placeholder="Senha"
					onChangeText={(password) => this.setState({ password })}
				/>

				<TextInputMask
					placeholder="Data de nascimento"
					type={"datetime"}
					options={{ format: "DD-MM-YYYY" }}
					value={birth}
					style={style.DateInput}
					onChangeText={(formatted) => this.setState({ birth: formatted })}
				/>

				<SelectDropdown
					data={maritalStatusEnum}

					buttonStyle={{ backgroundColor: '#1c1c1c', borderRadius: 5, width: '100vh', marginBottom: 10 }}
					buttonTextStyle={{ color: 'white', textAlign: "left", fontSize: 14, fontWeight: "normal" }}
					rowStyle={{ backgroundColor: '#1c1c1c', borderColor: 'black' }}
					defaultButtonText="Estado civil"
					selectedRowStyle={{ backgroundColor: 'black' }}
					rowTextStyle={{ color: 'white' }}
					dropdownStyle={{ borderRadius: 10 }}

					onSelect={(selectedItem) => {
						this.setState({ maritalStatus: selectedItem })
					}}
					buttonTextAfterSelection={(selectedItem) => {
						return selectedItem
					}}
					rowTextForSelection={(item) => {
						return item
					}}
				/>

				<Row>
					<TouchableOpacity style={style.ButtonPers} onPress={() => this.props.navigation.goBack()}>
						<Text style={style.ButtonText}>Cancelar</Text>
					</TouchableOpacity>

					<TouchableOpacity style={style.ButtonPers} onPress={() => this.newProfile()}>
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
