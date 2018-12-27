import React from 'react'
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Platform,
  TouchableHighlight,
} from 'react-native'
import { Actions, } from 'react-native-router-flux'
import { connect, } from 'react-redux'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'ios' ? 30 : 10,
  },
  containerTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerContent: {
    flex: 2,
  },
  containerBottom: {
    flex: 2,
  },
  styleTitle: {
    fontSize: 25,
  },
  textInput: {
    fontSize: 20,
    height: 45,
  },
  textCadastre: {
    fontSize: 20,
  },
  styleButton: {
    color: '#115E54',
  }
})

class Formlogin extends React.Component {
  render() {
    let { email, password, } = this.props
    return (
      <View style={styles.container}>
        <View style={styles.containerTitle}>
          <Text style={styles.styleTitle}>WhatsApp Clone</Text>
        </View>
        <View style={styles.containerContent}>
          <TextInput style={styles.textInput} placeholder='E-mail' value={email} />
          <TextInput style={styles.textInput} placeholder='Senha' value={password}/>
          <TouchableHighlight onPress={() => Actions.cadastro()}>
            <Text style={styles.textCadastre}>Ainda não tem cadastro? Cadastre-se</Text>
          </TouchableHighlight>
        </View>
        <View style={styles.containerBottom}>
          <Button style={styles.styleButton} title="Acessar" onPress={() => false} />
        </View>
      </View>
    )
  }
} 

const mapStateToProps = state => (
  {
    email: state.Auth.email,
    password: state.Auth.password
  }
)
export default connect(mapStateToProps, null)(Formlogin)