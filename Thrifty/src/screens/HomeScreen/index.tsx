import {View, Text, StyleSheet, Image} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const HomeScreen = () => {
  return (
    <View style={styles.page}>
      {/* Render Product Component */}
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
          }}
        />
        <View style={styles.rightContainer}>
          <Text style={styles.title}>Woman's T-Shirt Brown Medium - Zara</Text>
          {/* Ratings */}
          <View style={styles.ratingsContainer}>
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star-half-full"
              size={18}
              color={'#e47911'}
            />
            <FontAwesome
              style={styles.star}
              name="star-o"
              size={18}
              color={'#e47911'}
            />
            <Text>Quality Rating</Text>
          </View>
          <Text style={styles.price} numberOfLines={3}>
            from $4.57
          </Text>
          <Text style={styles.oldPrice}> was $6.25</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
  root: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#d1d1d1',
    borderRadius: 10,
    backgroundColor: '#fff',
  },
  image: {
    flex: 2,
    height: 150,
    resizeMode: 'contain',
  },
  rightContainer: {
    padding: 10,
    flex: 3,
  },
  title: {
    fontSize: 18,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  oldPrice:{
    fontSize: 12,
    fontWeight: 'normal',
    textDecorationLine: 'line-through',
  },
  ratingsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  star: {
    margin: 2,
  },
});

export default HomeScreen;
