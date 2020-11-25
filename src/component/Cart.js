import {observer} from 'mobx-react';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Helpers from '../theme/Helpers';

const Cart = ({count}) => {
  const {container, cartItemText} = styles;
  return (
    <View style={container}>
      <Text style={cartItemText}>{count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginRight: 10,
    width: 20,
    height: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    ...Helpers.center,
  },
  cartItemText: {fontSize: 10},
});

export default observer(Cart);
