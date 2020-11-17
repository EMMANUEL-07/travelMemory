import React, { useState, useCallback } from 'react';
import { ScrollView, View, Button, Text, TextInput, StyleSheet, ImageBackground } from 'react-native';
import { useDispatch } from "react-redux";

import ImagePicker from '../components/ImagePicker'
import LocationPicker from '../components/LocationPicker'
import Colors from '../constants/Colors';
import * as placesActions from '../store/places-actions'
import newBg from '../assets/newBG.png'

const NewPlaceScreen = props => {
  
  const dispatch = useDispatch()

  const [titleValue, setTitleValue] = useState('');
  const [selectedImage, setSelectedImage] = useState();
  const [selectedLocation, setSelectedLocation] = useState();

  const titleChangeHandler = text => {
    // you could add validation
    setTitleValue(text);
  };

  const locationPickedHandler = useCallback(location => {
    setSelectedLocation(location)
  },[])

  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleValue, selectedImage, selectedLocation))
    props.navigation.goBack()

  }

  const imageTakenHandler = imagePath => {
     setSelectedImage(imagePath)
  }

  return (
    <ImageBackground source={newBg} style={styles.image}>
    <ScrollView style={styles.home}>
      <View style={styles.form}>
        <Text style={styles.label}>Title</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={titleChangeHandler}
          value={titleValue}
          placeholder='enter title here'
        />
        <ImagePicker onImageTaken={imageTakenHandler} />
        <LocationPicker onLocationPicked={locationPickedHandler}  navigation={props.navigation} />
        <Button title="Save Spot" color={Colors.primary} onPress={savePlaceHandler} />
      </View>
    </ScrollView>
    </ImageBackground>
  );
};

NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add Spot'
};

const styles = StyleSheet.create({
  form: {
    margin: 30
  },
  label: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: '#ddd',
    marginBottom: 15
  },
  textInput: {
    borderBottomColor: '#ddd',
    borderBottomWidth: 2,
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2
  },
  home: {
    height: '100%'
 },
 image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
 }
});

export default NewPlaceScreen;
