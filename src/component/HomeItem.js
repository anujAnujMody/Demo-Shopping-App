import {get} from 'lodash';
import {inject, observer} from 'mobx-react';
import moment from 'moment';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {color} from 'react-native-reanimated';
import Colors from '../theme/Colors';
import Helpers from '../theme/Helpers';
import {utils} from '../utils/Utils';
import AppButton from './AppButton';

const HomeItem = ({item, onPress}) => {
  const {
    container,
    imageContainer,
    image,
    descContainer,
    descTopViewContainer,
    leaderAvatarContainer,
    leaderName,
    name,
    itemPrice,
    groupPrice,
  } = styles;

  var test = new moment(new Date());
  var test1 = new moment(item.expireAt);
  // utils.printLog(item)

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress} style={container}>
      <View style={imageContainer}>
        <FastImage
          style={image}
          source={{
            uri: get(item, 'itemDTO.images[0]'),
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}></FastImage>
      </View>
      <View style={descContainer}>
        <View style={descTopViewContainer}>
          <View style={[descTopViewContainer, {flex: 1}]}>
            <View style={leaderAvatarContainer}>
              <FastImage
                style={image}
                source={{
                  uri: get(item, 'leaderAvatar'),
                  priority: FastImage.priority.normal,
                }}
                resizeMode={FastImage.resizeMode.contain}></FastImage>
            </View>
            <Text numberOfLines={1} style={leaderName}>
              {item.leaderName}
            </Text>
          </View>
          <Text style={{flex: 2, textAlign: 'right'}}>{item.elapsedTime}</Text>
        </View>

        <Text style={name}>{get(item, 'itemDTO.name')}</Text>
        <View style={[descTopViewContainer, {marginTop: 30, marginLeft: 5}]}>
          <View>
            <Text style={itemPrice}>{`RP. ${item.itemPrice}`}</Text>
            <Text style={groupPrice}>{`RP. ${item.groupPrice}`}</Text>
          </View>
          <AppButton onClick={() => {}}>Beli Bareng</AppButton>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Helpers.row,
    padding: 10,
    marginVertical: 5,
    borderWidth: 1,
    borderColor: Colors.divider,
    width: '100%',
  },
  imageContainer: {
    flexBasis: '30%',
  },
  image: {
    width: '100%',
    height: 100,
  },
  descContainer: {
    flexBasis: '70%',
    padding: 10,
  },

  descTopViewContainer: {
    ...Helpers.rowCross,
    justifyContent: 'space-between',
  },
  leaderAvatarContainer: {
    width: 26,
    height: 26,
    borderRadius: 13,
    ...Helpers.center,
    marginRight: 3,
    padding: 3,
  },
  leaderName: {
    fontSize: 12,
  },
  name: {
    marginTop: 5,
    fontWeight: '500',
    fontSize: 16,
    marginLeft: 5,
  },
  itemPrice: {
    fontSize: 15,
    textDecorationLine: 'line-through',
    color: Colors.divider,
  },
  groupPrice: {
    fontSize: 15,
    fontWeight: '600',
    marginTop: 3,
    color: Colors.primary,
  },
});

export default observer(HomeItem);
