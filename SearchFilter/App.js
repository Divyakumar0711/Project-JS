import {
  Button,
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

const App = () => {
  const [productList, setProductList] = useState([]);
  const [searchTxt, setSearchTxt] = useState();
  const [filterData, SetFilterData] = useState([]);

  useEffect(() => {
    GetProducts();
  }, []);

  const GetProducts = () => {
    const URL = 'https://fakestoreapi.com/products';
    fetch(URL)
      .then(res => res.json())
      .then(data => {
        setProductList(data);
        SetFilterData(data);
      });
    console.log(productList);
  };

  const SearchFilter = text => {
    if (text) {
      const filtered = productList.filter(item =>
        item.title.toUpperCase().includes(text.toUpperCase()),
      );
      SetFilterData(filtered);
    } else {
      SetFilterData(productList);
    }
  };
  const renderProducts = item => {
    return (
      <View style={styles.renderMainContainer}>
        <View style={styles.ImageContainer}>
          <Image
            source={{uri: item.item.image}}
            style={{width: 120, height: 120, borderRadius: 20}}
          />
        </View>

        <View style={styles.TextContainer}>
          <Text style={styles.ProductTitle}>{item.item.title}</Text>
          <Text style={styles.ProductPrice}>{item.item.price} CAD</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={{flex: 1, backgroundColor: '#FEECE2'}}>
      <View style={styles.SearchContainer}>
        <View style={styles.SearchImageContainer}>
          <Image
            style={{width: 20, height: 20}}
            source={require('./assets/images/search.png')}
          />
        </View>

        <TextInput
          placeholder="Search"
          value={searchTxt}
          onChangeText={txt => {
            SearchFilter(txt);
            setSearchTxt(txt);
            
          }}
          style={styles.SearchTextInput}
        />
      </View>

      <FlatList
        data={filterData}
        style={{marginTop: 20}}
        renderItem={renderProducts}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};
export default App;

const styles = StyleSheet.create({
  renderMainContainer: {
    width: Dimensions.get('window').width - 60,
    flexDirection: 'row',
    backgroundColor: 'white',
    marginBottom: 20,
    alignItems: 'center',
    marginLeft: 30,
    marginRight: 30,
    borderRadius: 20,
  },
  ImageContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
  },
  TextContainer: {
    width: Dimensions.get('window').width - 210,
    marginLeft: 10,
  },
  ProductTitle: {
    fontFamily: 'NotoSans_Condensed-Bold',
    fontSize: 16,
    letterSpacing: 0.5,
    color: 'black',
  },
  ProductPrice: {
    fontFamily: 'NotoSans_Condensed-Medium',
    fontSize: 14,
    letterSpacing: 0.5,
    color: 'black',
  },
  SearchContainer: {
    width: Dimensions.get('window').width - 60,
    flexDirection: 'row',
    marginLeft: 30,
    marginRight: 30,
    alignItems: 'center',
    height: 40,
    borderRadius: 20,
    backgroundColor: 'white',
    marginTop: 20,
  },
  SearchImageContainer: {
    width: 20,
    height: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 5,
  },
  SearchTextInput: {
    width: Dimensions.get('window').width - 100,
    marginLeft: 5,
    marginRight: 5,
  },
  FilterOuterContainer: {
    //width: Dimensions.get('window').width - 60,
    // marginLeft: 30,
    marginRight: 30,
    marginTop: 20,
    marginBottom: 20,
  },
  FilterInnerContainer: {
    height: 30,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  FilterTitle: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'NotoSans_Condensed-Regular',
    fontSize: 14,
  },
});
