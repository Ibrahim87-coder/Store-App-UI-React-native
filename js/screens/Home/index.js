import {chunk} from 'lodash';
import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {Icon} from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors} from '../../colors';
import styles from './styles';

const Home = () => {
  let data = [
    {
      image: require('../../images/veggie.png'),
      title: 'veggie',
    },
    {
      image: require('../../images/potato-chips.png'),
      title: 'snack',
    },
    {
      image: require('../../images/stationery.png'),
      title: 'stationery',
    },
    {
      image: require('../../images/medical-care.png'),
      title: 'medical',
    },
    {
      image: require('../../images/coffee-maker.png'),
      title: 'coffee maker',
      price: 699.9,
    },
    {
      image: require('../../images/pitcher.png'),
      title: 'pitcher',
      price: 13.25,
    },
    {
      image: require('../../images/cannabis-oil.png'),
      title: 'oil',
      price: 19.99,
    },
    {
      image: require('../../images/microwave.png'),
      title: 'microwave',
      price: 99.99,
    },
    {
      image: require('../../images/salad.png'),
      title: 'caesar salad',
      price: 9.99,
    },
    {
      image: require('../../images/croissant.png'),
      title: 'croissant',
      price: 2,
    },
  ];
  data = chunk(data, 4);

  const renderStoreItems = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.storeItem}>
        <Image source={item.image} style={{width: 75, height: 75}} />
        <Text style={{color: colors.black, fontWeight: 'bold'}}>
          {item.title}
        </Text>
      </TouchableOpacity>
    );
  };

  const renderFeaturedProducts = ({item, index}) => {
    return (
      <TouchableOpacity style={styles.featuredProducts}>
        <Text style={styles.new}>new</Text>
        <View style={styles.featuredProductsContainer}>
          <Image
            source={item.image}
            style={{width: 75, height: 75, marginTop: 5}}
          />
          <View style={styles.divider} />
          <Text style={{color: colors.black, fontWeight: 'bold'}}>
            {item.title}
          </Text>
          <Text style={{fontWeight:'bold'}}>${item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  };

  const renderDailyDeals = ({item, index}) => {
    return (
      <View style={styles.dailyDeals}>
        <View style={{flexDirection: 'row', padding: 5}}>
          <View>
            <Text
              style={{color: colors.black, fontWeight: 'bold', paddingTop: 20}}>
              {item.title}
            </Text>
            <Text
              style={{color: colors.black, fontWeight: 'bold', paddingTop: 5}}>
              ${item.price}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    backgroundColor: 'green',
                    borderRadius: 12,
                    width: 30,
                    textAlign: 'center',
                    margin: 5,
                    color: colors.white,
                  }}>
                  {'-'}
                </Text>
              </TouchableOpacity>
              <Text style={{fontWeight: 'bold', color: colors.black}}>01</Text>
              <TouchableOpacity>
                <Text
                  style={{
                    fontSize: 20,
                    backgroundColor: 'green',
                    borderRadius: 12,
                    width: 30,
                    textAlign: 'center',
                    margin: 5,
                    color: colors.white,
                  }}>
                  {'+'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <Image
              source={item.image}
              style={{width: 85, height: 85, marginLeft: 15}}
            />
          </View>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.greenContainer} />
      {/* Title and logo */}
      <View style={styles.titleView}>
        <Text style={styles.title}>Store Market</Text>
        <Image
          source={require('../../images/icons/location.png')}
          style={{width: 25, height: 25}}
        />
      </View>

      {/* Search bar */}
      <View style={styles.searchBarView}>
        <Image
          source={require('../../images/search.png')}
          style={{width: 25, height: 25, marginHorizontal: 8}}
        />
        <TextInput
          placeholder="What do you want to shop?"
          placeholderTextColor={colors.black}
        />
        <View
          style={{
            marginHorizontal: 50,
            backgroundColor: colors.white,
            paddingVertical: 10,
            borderRadius: 10,
          }}>
          <Image
            source={require('../../images/adjust.png')}
            style={{width: 30, height: 30, marginHorizontal: 8}}
          />
        </View>
      </View>

          <FlatList
              showsHorizontalScrollIndicator={false}
        data={data[0]}
        horizontal
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderStoreItems}
        style={{marginLeft: 10}}
      />
      {/* Featured Products */}
      {/* <View> */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <Text style={{color: colors.black, fontWeight: 'bold'}}>view all</Text>
      </View>
          <FlatList
              showsHorizontalScrollIndicator={false}
        data={data[1]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderFeaturedProducts}
        horizontal
        style={{marginLeft: 10}}
      />
      {/* </View> */}

      {/* Daily Deals */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Daily Deals</Text>
        <Text style={{color: colors.black, fontWeight: 'bold'}}>view all</Text>
      </View>

          <FlatList
              showsHorizontalScrollIndicator={false}
        data={data[2]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderDailyDeals}
        horizontal
        style={{marginLeft: 10}}
      />
    </View>
  );
};

export default Home;
