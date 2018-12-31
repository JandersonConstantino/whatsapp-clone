import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  TouchableHighlight,
  ListView,
  ImageBackground,
} from 'react-native'
import { connect } from 'react-redux'

import {
  changeMessage,
  sendMessage,
  meetUserFetch,
} from '../actions/MeetAction'

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

const renderRow = data => {
  const localStyle = {
    styleRow: {
      alignItems: data.type == `s` ? 'flex-end' : 'flex-start',
      marginTop: 5,
      marginBottom: 5,
      marginLeft: data.type === `s` ? 40 : 0,
      marginRight: data.type === `s` ? 0 : 40,
      backgroundColor: data.type === `s` ? '#dbf5b4' : '#fff',
      borderRadius: 10,
      elevation: 1,
    },
    styleText: {
      fontSize: 18,
      padding: 10,
    }
  }

  return (
    <View style={localStyle.styleRow}>
      <Text style={localStyle.styleText}>{data.message}</Text>
    </View>
  )
}

class FormMeet extends React.Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    let { meetUserFetch, currentContact, listMeet } = this.props

    meetUserFetch(currentContact.email)
    this._makeDataSource(listMeet)
  }

  _makeDataSource(arr) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })

    this.dataSource = ds.cloneWithRows(arr)
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.currentContact.email !== this.props.currentContact.email)
      meetUserFetch(nextProps.currentContact.email)

    this._makeDataSource(nextProps.listMeet)
  }

  render() {
    let { changeMessage, Meet, currentContact, sendMessage } = this.props

    return (
      <ImageBackground source={require('../../assets/bg.png')} style={{flex: 1}}>
        <View style={styles.styleViewContainer}>
          <View style={styles.containerListView}>
            <ListView
              enableEmptySections
              dataSource={this.dataSource}
              renderRow={renderRow}
            />
          </View>
          <View style={styles.containerInputMessage}>
            <TextInput style={styles.textMessage}
              placeholder='Digite aqui...'
              value={Meet.meetMessage}
              onChangeText={value => changeMessage(value)}
            />

            <TouchableHighlight onPress={() => sendMessage({
              message: Meet.meetMessage,
              name: currentContact.name,
              email: currentContact.email
            })} underlayColor='#fff'>
              <Image source={require('../../assets/send_message.png')} width='30' />
            </TouchableHighlight>
          </View>
        </View>
      </ImageBackground>
    )
  }
}

const mapStateToProps = state => ({
  Meet: state.Meet,
  listMeet: state.Meet.listMeet,
})

export default connect(mapStateToProps, {
  changeMessage,
  sendMessage,
  meetUserFetch,
})(FormMeet)