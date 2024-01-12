import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default ({ onPress, placeholder, label }) => {
  const [inputValue, setInputValue] = useState('');

  const handlePress = () => {
    if (onPress) {
      onPress(inputValue); // Certifique-se de que esta função está sendo chamada
    }
  };

  return (
    <View style={styles.InputWithButtonContainer}>
      <TextInput
        style={styles.Input}
        placeholder={placeholder}
        value={inputValue}
        onChangeText={(text) => {
          setInputValue(text);
          console.log('Input Value:', text); // Verifique se este log está sendo acionado corretamente
        }}
      />
      <TouchableOpacity style={styles.Button} onPress={handlePress}>
        <Text style={styles.ButtonText}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  InputWithButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
  },
  Input: {
    flex: 1,
    padding: 8,
    backgroundColor: '#1c1c1c',
    borderWidth: 1,
    marginRight: 10,
    borderRadius: 10,
    color: 'white',
  },
  Button: {
    backgroundColor: '#305c3b',
    borderRadius: 10,
    alignItems: 'center',
    padding: 5,
  },
  ButtonText: {
    fontSize: 20,
    color: 'white',
  },
});
