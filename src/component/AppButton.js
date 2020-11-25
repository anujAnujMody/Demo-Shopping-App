import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Colors from '../theme/Colors';

const AppButton = ({children, onClick}) => {
  const {container, text} = styles;
  return (
    <TouchableOpacity style={container} activeOpacity={0.7} onPress={onClick}>
      <Text style={text}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontWeight: '500',
  },
});

export default AppButton;
