import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const Simple = () => {
  const [color, setColor] = useState('rgb(255,255,255)');

  const ButtonHandler = () => {
    const color_temp = [];
    for (let i = 0; i < 3; i++) {
      const randomNumber = Math.random() * 100;
      const r = Math.floor(randomNumber);
      
      color_temp.push(r);
    }

    const generateColor = `rgb(${color_temp[0]},${color_temp[1]},${color_temp[2]})`;
    setColor(generateColor);
  };

  return (
    <View style={[styles.MainContainer, {backgroundColor: color}]}>
      <Text style={styles.TextColor}>Background Color: {color}</Text>
      <TouchableOpacity style={styles.ButtonContainer} onPress={ButtonHandler}>
        <Text style={{color: 'white', fontSize: 18}}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Simple;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',
  },
  TextColor: {
    fontSize: 22,
    color: 'black',
  },
  ButtonContainer: {
    width: 160,
    height: 40,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});
