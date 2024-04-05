import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CalcBtn = ({bgColor = "green", text, onPress, textColor = "#F6C90E"}) => {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: bgColor}]} onPress={onPress}>
      <Text style={[styles.text, {color: textColor}]}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CalcBtn

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    width: 90,
    height: "100%",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#B9D2D2",
  },
  text: {
    fontSize: 24,
    fontFamily: "ubuntuM"
  }
})