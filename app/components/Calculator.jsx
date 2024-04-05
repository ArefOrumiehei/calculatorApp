import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    if (value === '=') {
      try {
        const evalResult = eval(input);
        setResult(evalResult.toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter expression"
        keyboardType="numeric"
        value={input}
        onChangeText={text => setInput(text)}
      />
      <View style={styles.buttonContainer}>
        <Button title="7" onPress={() => handlePress('7')} />
        <Button title="8" onPress={() => handlePress('8')} />
        <Button title="9" onPress={() => handlePress('9')} />
        <Button title="/" onPress={() => handlePress('/')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="4" onPress={() => handlePress('4')} />
        <Button title="5" onPress={() => handlePress('5')} />
        <Button title="6" onPress={() => handlePress('6')} />
        <Button title="*" onPress={() => handlePress('*')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="1" onPress={() => handlePress('1')} />
        <Button title="2" onPress={() => handlePress('2')} />
        <Button title="3" onPress={() => handlePress('3')} />
        <Button title="-" onPress={() => handlePress('-')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="0" onPress={() => handlePress('0')} />
        <Button title="." onPress={() => handlePress('.')} />
        <TouchableOpacity style={styles.equalButton} onPress={() => handlePress('=')}>
          <Text style={styles.equalButtonText}>=</Text>
        </TouchableOpacity>
        <Button title="+" onPress={() => handlePress('+')} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.clearButton} onPress={() => handlePress('C')}>
          <Text style={styles.clearButtonText}>Clear</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.result}>{result}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
    width: "100%",
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: 300,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: 300,
    marginBottom: 10,
  },
  equalButton: {
    backgroundColor: 'blue',
    padding: 20,
    borderRadius: 50,
  },
  equalButtonText: {
    color: 'white',
    fontSize: 20,
  },
  clearButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 5,
  },
  clearButtonText: {
    color: 'white',
    fontSize: 16,
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
