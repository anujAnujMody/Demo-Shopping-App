import {observer} from 'mobx-react';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../theme/Colors';
import Helpers from '../theme/Helpers';

const Quantity = ({quantity, onMinusPress, onAddPress}) => {
  const {container, incDecContainer, addMinus, quantityText} = styles;
  return (
    <View style={container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onMinusPress}
        style={incDecContainer}>
        <Text style={addMinus}>-</Text>
      </TouchableOpacity>
      <Text style={quantityText}>{quantity}</Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onAddPress}
        style={incDecContainer}>
        <Text style={addMinus}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Helpers.rowCenter,
  },
  incDecContainer: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: Colors.divider,
    ...Helpers.center,
  },
  addMinus: {
    fontSize: 20,
    fontWeight: '800',
  },
  quantityText: {
    paddingHorizontal: 10,
    fontSize: 20,
  },
});

export default observer(Quantity);
