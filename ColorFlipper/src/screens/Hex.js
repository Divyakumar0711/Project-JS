import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useState} from 'react';
import Simple from './Simple';

const Hex = () => {
  const [color, setColor] = useState('#ffff');
  const ButtonHandler = () => {
    const color_temp = [];
    for (let i = 0; i < 3; i++) {
      const getColor = Math.floor(Math.random() * 256)
        .toString(16)
        .toUpperCase()
        .padStart();
      color_temp.push(getColor);
    }

    const generateColor = `#${color_temp[0]}${color_temp[1]}${color_temp[2]}`;
    console.log(generateColor);
    setColor(generateColor);
  };
  return (
    <View style={[styles.MainContainer, {backgroundColor: color}]}>
      <Text style={[styles.TextColor]}>Background Color:{color} </Text>
      <TouchableOpacity style={styles.ButtonContainer} onPress={ButtonHandler}>
        <Text style={{color: 'white', fontSize: 18}}>Click me</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Hex;

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
