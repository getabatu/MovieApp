import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';

import { color } from '../../utils/globalStyle'
import HeaderMenu from '../../components/header/headerMenu'

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export function HomeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: color.backgroundColor }} >
      <HeaderMenu title />
      <ImageBackground style={{ width: '100%', height: '50%' }} source={require('../../assets/images/background.jpeg')} >
        <ScrollView>

        </ScrollView>
      </ImageBackground>
    </View>
  );
}
