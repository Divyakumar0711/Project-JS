import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

const App = () => {
  const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://www.course-api.com/images/people/person-1.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://www.course-api.com/images/people/person-2.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://www.course-api.com/images/people/person-4.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://www.course-api.com/images/people/person-3.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const rightClick = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
  };

  const leftClick = () => {
    setCurrentIndex(
      prevIndex => (prevIndex - 1 + reviews.length) % reviews.length,
    );
    console.log(currentIndex);
  };

  const surpriceButtonHandler = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);

    if (randomIndex == currentIndex) {
      setCurrentIndex(prevIndex => (prevIndex + 1) % reviews.length);
    } else {
      setCurrentIndex(randomIndex);
    }
  };

  const renderData = () => {
    const item = reviews[currentIndex];
    return (
      <View
        style={{
          width: Dimensions.get('window').width - 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.ImageContianer}>
          <Image
            source={{uri: item.img}}
            style={{height: 80, width: 80, borderRadius: 40}}
          />
        </View>
        <Text style={styles.NameTitle}>{item.name}</Text>
        <Text style={styles.DepartmentTitle}>{item.job}</Text>
        <Text style={styles.DescriptionText}>{item.text}</Text>

        <View style={styles.ArrowContainer}>
          <View>
            <TouchableOpacity onPress={leftClick}>
              <Image
                source={require('./src/assets/images/left-arrow.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          </View>

          <View style={{paddingLeft: 10}}>
            <TouchableOpacity onPress={rightClick}>
              <Image
                source={require('./src/assets/images/right-arrow.png')}
                style={{width: 30, height: 30}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity onPress={surpriceButtonHandler}>
          <View style={styles.SubscribeButtonContainer}>
            <Text style={styles.SubscribeButtonText}>Surprice Me</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={styles.MainContainer}>
      <Text style={styles.Title}>Our Reviews</Text>
      <View style={styles.CardBoxContainer}>
        <FlatList data={reviews} renderItem={renderData} horizontal />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    width: Dimensions.get('window').width,
    backgroundColor: '#D4F1F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    fontSize: 30,
    color: 'black',
    fontFamily: 'Poppins-Bold',
    letterSpacing: 2,
  },
  CardBoxContainer: {
    width: Dimensions.get('window').width - 50,
    backgroundColor: 'white',
    marginTop: 20,
    borderRadius: 30,
    alignItems: 'center',
  },
  ImageContianer: {
    width: 100,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  NameTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 20,
    color: 'black',
    letterSpacing: 0.5,
  },
  DepartmentTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: '#189AB4',
    letterSpacing: 0.5,
  },
  DescriptionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: 'black',
    textAlign: 'center',
  },
  ArrowContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  SubscribeButtonContainer: {
    marginTop: 10,
    marginBottom: 10,
    width: 100,
    height: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#189AB4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  SubscribeButtonText: {
    color: '#189AB4',
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    textAlign: 'center',
  },
});
