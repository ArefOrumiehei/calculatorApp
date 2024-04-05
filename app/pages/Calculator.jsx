import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  StatusBar,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

//Components
import CalcBtn from "../components/CalcBtn";

export default function Calculator() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handlePress = (value) => {
    if (value === "=") {
      try {
        const evalResult = eval(input);
        setResult(evalResult.toString());
      } catch (error) {
        setResult("Error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else {
      setInput(input + value);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        style={styles.flex}
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset={
          Platform.OS === "ios" ? 0 : -StatusBar.currentHeight
        }
      >
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter expression"
            placeholderTextColor={"#EEEEEE"}
            keyboardType="numeric"
            value={input}
            onChangeText={(text) => setInput(text)}
          />
          <Text style={styles.result}>{result}</Text>
        </View>
        <View style={styles.keysContainer}>
          <View style={styles.buttonRow}>
            <CalcBtn
              text={"7"}
              onPress={() => handlePress("7")}
              bgColor="#115173"
            />
            <CalcBtn
              text={"8"}
              onPress={() => handlePress("8")}
              bgColor="#54A4AF"
            />
            <CalcBtn
              text={"9"}
              onPress={() => handlePress("9")}
              bgColor="#115173"
            />
            <CalcBtn
              text={"/"}
              onPress={() => handlePress("/")}
              bgColor="#0D63A5"
            />
          </View>
          <View style={styles.buttonRow}>
            <CalcBtn
              text={"4"}
              onPress={() => handlePress("4")}
              bgColor="#54A4AF"
            />
            <CalcBtn
              text={"5"}
              onPress={() => handlePress("5")}
              bgColor="#115173"
            />
            <CalcBtn
              text={"6"}
              onPress={() => handlePress("6")}
              bgColor="#54A4AF"
            />
            <CalcBtn
              text={"*"}
              onPress={() => handlePress("*")}
              bgColor="#0D63A5"
            />
          </View>
          <View style={styles.buttonRow}>
            <CalcBtn
              text={"1"}
              onPress={() => handlePress("1")}
              bgColor="#115173"
            />
            <CalcBtn
              text={"2"}
              onPress={() => handlePress("2")}
              bgColor="#54A4AF"
            />
            <CalcBtn
              text={"3"}
              onPress={() => handlePress("3")}
              bgColor="#115173"
            />
            <CalcBtn
              text={"-"}
              onPress={() => handlePress("-")}
              bgColor="#0D63A5"
            />
          </View>
          <View style={styles.buttonRow}>
            <CalcBtn
              text={"0"}
              onPress={() => handlePress("0")}
              bgColor="#54A4AF"
            />
            <CalcBtn
              text={"."}
              onPress={() => handlePress(".")}
              bgColor="#115173"
            />
            <CalcBtn
              text={"="}
              onPress={() => handlePress("=")}
              bgColor="#F0A500"
              textColor="#000000"
            />
            <CalcBtn
              text={"+"}
              onPress={() => handlePress("+")}
              bgColor="#0D63A5"
            />
          </View>
          <View style={styles.buttonRow}>
            <CalcBtn
              text={"Clear"}
              onPress={() => handlePress("C")}
              bgColor="#FF004D"
              textColor="#EEEEEE"
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  flex: {
    flex: 1,
  },
  inputContainer: {
    padding: 20,
    height: "40%",
    width: "100%",
    marginTop: StatusBar.currentHeight,
  },
  input: {
    padding: 5,
    width: "100%",
    height: "auto",
    fontSize: 40,
    fontFamily: "digitalMono",
    color: "#EEEEEE",
  },
  keysContainer: {
    backgroundColor: "black",
    width: "100%",
    flex: 1,
    gap: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRow: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "space-between",
    gap: 5,
  },
  result: {
    fontSize: 60,
    fontFamily: "ubuntuR",
    color: "#F0A500",
  },
});
