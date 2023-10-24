import {View, Text, StyleSheet, Image} from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      {/* Render Product Component */}
      <View style={styles.root}>
        <Image
          style={styles.image}
          source={{
            uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/products/cleanarchitecture.jpg',
          }}
        />
        <View>
          <Text style={styles.title}>
            "Logitech MX Master 3 Advanced Wireless Mouse for Mac -
            Bluetooth/USB"
          </Text>
          {/* Ratings */}
          <Text style={styles.price}>from $13.57</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {

  },
  image: {
    width: 150,
    height: 150,
  },
  title: {

  },
  price: {
    
  },
});

export default HomeScreen;
