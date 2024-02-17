import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {useState, useRef} from 'react';

const Hex = () => {
  const [color, setColor] = useState();
  const changeColorRef = useRef();

  //Method 1
  // const color_temp = [];
  // for (let i = 0; i < 3; i++) {
  //   const getColor = Math.floor(Math.random() * 256)
  //     .toString(16)
  //     .toUpperCase()
  //     .padStart();
  //   color_temp.push(getColor);
  // }

  // const generateColor = `#${color_temp[0]}${color_temp[1]}${color_temp[2]}`;
  // console.log(generateColor);
  // setColor(generateColor);

  //Method 2


  const StartButtonHandler = () => {
    const generateColor = () => {
      const hex = '0123456789ABCDEF';
      let colorHex = '#';
      for (let i = 0; i < 6; i++) {
        colorHex += hex[Math.floor(Math.random() * 16)];
      }
      setColor(colorHex);
    };
      changeColorRef.current = setInterval(generateColor, 2000);
    
  };

  const StopButtonHandler = () => {
    clearInterval(changeColorRef.current); 
  };

  return (
    <View style={[styles.MainContainer, {backgroundColor: color}]}>
      <Text style={[styles.TextColor]}>Background Color:{color} </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <TouchableOpacity
          style={styles.ButtonContainer}
          onPress={StartButtonHandler}>
          <Text style={{color: 'white', fontSize: 18}}>Start</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.ButtonContainer}
          onPress={StopButtonHandler}>
          <Text style={{color: 'white', fontSize: 18}}>Stop</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Hex;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
  },
  TextColor: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
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
