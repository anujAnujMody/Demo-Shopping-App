import {inject, observer} from 'mobx-react';
import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useLayoutEffect} from 'react/cjs/react.production.min';
import AppLoader from '../component/AppLoader';
import Cart from '../component/Cart';
import HomeItem from '../component/HomeItem';
import Helpers from '../theme/Helpers';
import {utils} from '../utils/Utils';

const Home = ({homeStore, navigation}) => {
  useEffect(() => {
    homeStore.getData();
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return homeStore.cartTotalCount > 0 ? (
          <Cart count={homeStore.cartTotalCount}></Cart>
        ) : null;
      },
    });
  }, [homeStore.cartTotalCount]);

  const {container, errorView} = styles;

  const renderItem = ({item}) => {
    homeStore.calcElapsedTime(item);
    return (
      <HomeItem
        item={item}
        onPress={() => {
          navigateToDetailView(item);
        }}></HomeItem>
    );
  };

  const emptyData = () => (
    <View style={errorView}>
      <Text>Something went wrong, please try again later</Text>
    </View>
  );

  const navigateToDetailView = (item) => {
    navigation.push('Detail', {
      item: item,
    });
  };

  const displayList = () => (
    <FlatList
      style={{marginHorizontal: 10}}
      data={homeStore.data && homeStore.data.slice()}
      renderItem={renderItem}
      keyExtractor={(item, index) => index.toString()}
      ListEmptyComponent={emptyData}
    />
  );

  return (
    <View style={container}>
      {homeStore.isLoading ? <AppLoader></AppLoader> : displayList()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...Helpers.fill,
  },
  errorView: {
    ...Helpers.fillCenter,
    marginTop: 20,
  },
});

export default inject('homeStore')(observer(Home));
