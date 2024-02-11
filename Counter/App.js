import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };
  const decrement = () => {
    {
      counter == 0 ? setCounter(0) : setCounter(counter - 1);
    }
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <View style={styles.mainView}>
      <Text style={{fontSize: 20, color: 'black'}}>{counter}</Text>
      <View style={styles.ButtonContainer}>
        <TouchableOpacity
          onPress={increment}
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white'}}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={reset}
          style={{
            width: 60,
            height: 40,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <Text style={{color: 'white'}}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={decrement}
          style={{
            width: 40,
            height: 40,
            backgroundColor: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 10,
          }}>
          <Text style={{color: 'white'}}>-</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonContainer: {
    display: 'flex',
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
