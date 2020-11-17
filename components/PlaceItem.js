import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Colors from '../constants/Colors';

const PlaceItem = props => {
  return (
    <TouchableOpacity onPress={props.onSelect} style={styles.placeItem}>
      <Image style={styles.image} source={{ uri: props.image }} />
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{props.title}</Text>
        <Text style={styles.address}>{props.address}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    width: Dimensions.get('window').height > 600 ? 100: 70,
    height: Dimensions.get('window').height > 600 ? 100: 70,
    borderRadius: Dimensions.get('window').height > 600 ? 50: 35,
    backgroundColor: '#ccc',
    borderColor: Colors.primary,
    borderWidth: 2
  },
  infoContainer: {
    marginLeft: 25,
    width: Dimensions.get('window').height > 600 ? 550: 300,
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  title: {
    color: 'black',
    fontSize: 22,
    marginBottom: 8,
    fontWeight: 'bold'
  },
  address: {
    color: '#1611E2',
    fontSize: 18
  }
});

export default PlaceItem;
