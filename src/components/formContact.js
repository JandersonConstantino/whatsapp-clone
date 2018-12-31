import React, { Component } from 'react'
import {
  View,
  Text,
  ListView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'
import { connect } from 'react-redux'
import { Actions } from 'react-native-router-flux'

import {
  listContactsFetch,
} from '../actions/AppAction'

const styles = StyleSheet.create({
  containerRowListView: {
    flex: 1,
    padding: 20,
    borderBottomWidth: 1,
    color: '#E6E6E6'
  },
  nameContactListView: {
    fontSize: 25,
  },
  emailContactListView: {
    fontSize: 18
  },
})

class FormContato extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    let { listContactsFetch, listContacts, } = this.props
    listContactsFetch()

    this._makeDataSource(listContacts)
  }

  componentWillReceiveProps(nextProps) {
    this._makeDataSource(nextProps.listContacts)
  }

  _makeDataSource(contacts) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.dataSource = ds.cloneWithRows(contacts)
  }

  _onPressContact(rowData) {
    Actions.meet({
      title: rowData.name,
      currentContact: {
        name: rowData.name,
        email: rowData.email
      }
    })
  }

  render() {
    return (
      <ListView
        enableEmptySections
        dataSource={this.dataSource}
        renderRow={rowData => {
          return (
            <TouchableHighlight
              onPress={() => this._onPressContact(rowData)}
              underlayColor='#E6E6E6'
            >
              <View style={styles.containerRowListView}>
                <Text style={styles.nameContactListView}>{rowData.name}</Text>
                <Text style={styles.emailContactListView}>{rowData.email}</Text>
              </View>
            </TouchableHighlight>
          )
        }}
      />
    )
  }
}

const mapStateToProps = state => ({
  listContacts: state.Contact.listContacts,
})
export default connect(mapStateToProps, {
  listContactsFetch,
})(FormContato)