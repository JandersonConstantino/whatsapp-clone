import React, { Component } from 'react'
import {
  View,
  Text,
} from 'react-native'
import { connect } from 'react-redux'

import {
  changeNewContactEmail,
  addNewContact,
} from '../actions/AppAction'

class FormContato extends Component {
  render() {

    return (
        <View style={{flex: 1, justifyContent: 'center', padding: 20, }}>
          <Text>Component Contact</Text>
        </View>
    )
  }
}

const mapStateToProps = state => ({
  newContactEmail: state.App.newContactEmail
})
export default connect(mapStateToProps, {
  changeNewContactEmail,
  addNewContact,
})(FormContato)