import React from 'react'
import {
  View,
  ImageBackground,
  Image,
  Button,
  Text,
  StyleSheet,
} from 'react-native'

import { Actions, } from 'react-native-router-flux'

const styles = StyleSheet.create({
  background: {
    flex: 1
  },
  containerBemVindo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textBemVindo: {
    color: '#fff',
    fontSize: 20,
    marginBottom: 10,
  },
})

class BoasVindas extends React.Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/bg.png')}
        style={styles.background}
      >
        <View style={styles.containerBemVindo}>
          <Text style={styles.textBemVindo}>
            Bem vindo
          </Text>
          <Image source={require('../../assets/logo.png')} />
        </View>
        <View style={{flex: 1}}>
          <Button 
            title='Fazer Login'
            onPress={() => Actions.login()}
          />
        </View>
      </ImageBackground>
    )
  }
}

export default BoasVindas