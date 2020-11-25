import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import Colors from '../theme/Colors';
import Helpers from '../theme/Helpers';

export default function AppLoader() {
  const {container} = styles;
  return (
    <View style={container}>
      <ActivityIndicator color={Colors.primary}></ActivityIndicator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Helpers.fillCenter,
  },
});
