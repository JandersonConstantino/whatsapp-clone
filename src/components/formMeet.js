import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
} from 'react-native'
import { connect } from 'react-redux'

const styles = StyleSheet.create({
  styleViewContainer: {
    flex: 1,
    padding: 10,
    backgroundColor: '#eee4dc',
  },
  containerListView: {
    flex: 1
  },
  containerInputMessage: {
    flexDirection: 'row',
    height: 60,
  },
  textMessage: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginRight: 10,
    borderRadius: 30,
  },
})

class FormMeet extends React.Component {
  render() {
    return (
      <View style={styles.styleViewContainer}>
        <View style={styles.containerListView}>
          <Text>Component FormMeet</Text>
        </View>
        <View style={styles.containerInputMessage}>
          <TextInput style={styles.textMessage} placeholder='Digite aqui...' onChange={() => false} />
          <TouchableHighlight onPress={() => false} underlayColor='#fff'>
            <Image source={require('../../assets/send_message.png')} width='30' />
          </TouchableHighlight>
        </View>
      </View>
    )
  }
}

const mapStateToProps = state => {
  return state
}

export default connect(mapStateToProps, null)(FormMeet)