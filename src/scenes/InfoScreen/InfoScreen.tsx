import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  Dimensions,
  ScrollView,
} from 'react-native';
import { Card } from "native-base";

import { color } from '../../utils/globalVariable'
import HeaderMenu from '../../components/header/headerMenu'

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

export function InfoScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: color.backgroundColor }} >
      <HeaderMenu title={"Information"} />
      <ImageBackground imageStyle={{}} style={{ width: '100%', height: '100%' }} source={require('../../assets/information.jpg')} >
        <ScrollView>
          <Card style={{ alignSelf: 'center', width: width - 30, padding: 20, borderRadius: 10 }} >
            <Text style={{ fontSize: 25 }} >Movie App</Text>
            <Text style={{ marginTop: 20, width: '100%' }} >i add this information page just to make the app more interesting because if the app only have one page its gonna be boring i think, therefore this page exist to inform nothing actually but because its interesting you keep on reading right ?</Text>
            <Text style={{ marginTop: 40, fontSize: 10, textAlign: 'center', alignSelf: 'flex-end' }} >Created and develop by Anis Najib{'\n'}</Text>
          </Card>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
