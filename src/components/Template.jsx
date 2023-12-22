import React from 'react'
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native'

export default (props) => {
	return (
		<SafeAreaView style={styles.Container}>
			<ScrollView contentContainerStyle={styles.ScrollContent}>
                {props.children}
			</ScrollView>
		</SafeAreaView>
	);
};

const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: 'black',
	},
	ScrollContent: {
		flexGrow: 1,
		justifyContent: 'center',
        padding: 10,
        marginBottom: 50
	},
})
