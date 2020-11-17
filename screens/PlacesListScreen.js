import React, {useEffect} from 'react';
import { View, Text, StyleSheet, Platform, FlatList, ImageBackground } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector, useDispatch } from 'react-redux';

import HeaderButton from '../components/HeaderButton';
import PlaceItem from '../components/PlaceItem';
import * as placesActions from '../store/places-actions'

import homeBg from '../assets/homeBG.jpg'

const PlacesListScreen = props => {
   const dispatch = useDispatch()

   const places = useSelector(state => state.places.places);


   useEffect(() => {
      dispatch(placesActions.loadPlaces())
      
   }, [dispatch])


   return (
      
      <ImageBackground source={homeBg} style={styles.image}>
         <View style={styles.home}>
         <FlatList
            data={places}
            keyExtractor={item => item.id}
            renderItem={itemData => (
            <PlaceItem
               image={itemData.item.imageUri}
               title={itemData.item.title}
               address={itemData.item.address}
               onSelect={() => {
                  props.navigation.navigate('PlaceDetail', {
                  placeTitle: itemData.item.title,
                  placeId: itemData.item.id
                  });
               }}
            />
            )}
         />
      </View>
      </ImageBackground>
   );
};


PlacesListScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Scenic Spots',
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Add Place"
          iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
          onPress={() => {
              navData.navigation.navigate('NewPlace');
          }}
        />
      </HeaderButtons>
    )
  };
};

const styles = StyleSheet.create({
   home: {
      height: '100%'
   },
   image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
   }
});

export default PlacesListScreen;
