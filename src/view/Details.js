import {get} from 'lodash';
import {inject, observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Share,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Quantity from '../component/Quantity';
import Colors from '../theme/Colors';
import Helpers from '../theme/Helpers';
import {utils} from '../utils/Utils';

const Details = ({homeStore, navigation, route}) => {
  const {item} = route.params;
  const {
    container,
    image,
    descContainer,
    name,
    itemPrice,
    groupPrice,
    priceContainer,
    descText,
    shareText,
  } = styles;

  useEffect(() => {
    homeStore.getItemCount(item.itemId);
    // onShare();
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <TouchableOpacity>
            <Text
              onPress={() => {
                const msg = `Get ${get(item, 'itemDTO.name')} for Rp.${
                  item.groupPrice
                }`;
                utils.onShare(msg);
              }}
              style={shareText}>
              Share
            </Text>
          </TouchableOpacity>
        );
      },
    });
  }, []);

  return (
    <ScrollView>
      <View style={container}>
        <FastImage
          style={image}
          source={{
            uri: get(item, 'itemDTO.images[0]'),
            priority: FastImage.priority.normal,
          }}
          resizeMode={FastImage.resizeMode.contain}></FastImage>
      </View>
      <View style={descContainer}>
        <Text style={name}>{get(item, 'itemDTO.name')}</Text>
        <View style={priceContainer}>
          <View>
            <Text style={itemPrice}>{`Rp. ${item.itemPrice}`}</Text>
            <Text style={groupPrice}>{`Rp. ${item.groupPrice}`}</Text>
          </View>
          <Quantity
            quantity={homeStore.itemCount}
            onAddPress={() => {
              homeStore.addToCart(item);
            }}
            onMinusPress={() => {
              homeStore.removeFromCart(item);
            }}></Quantity>
        </View>
        <Text style={descText}>
          {get(item, 'itemDTO.description.description')}
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Helpers.fill,
  },
  image: {
    width: '100%',
    height: 300,
  },
  descContainer: {
    marginHorizontal: 20,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: 20,
  },
  priceContainer: {
    ...Helpers.rowCross,
    justifyContent: 'space-between',

    marginTop: 10,
  },

  itemPrice: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: Colors.divider,
  },
  groupPrice: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 3,
    color: Colors.primary,
  },
  descText: {
    marginTop: 20,
  },
  shareText: {
    marginRight: 10,
    color: 'white',
  },
});

export default inject('homeStore')(observer(Details));
