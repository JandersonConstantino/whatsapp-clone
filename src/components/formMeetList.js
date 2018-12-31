import React from 'react'
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
  getMyMeetsHeader,
} from '../actions/MeetAction'

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

class formMeetList extends React.Component {

  componentWillMount() {
    let { listMeetHeader, getMyMeetsHeader } = this.props
    getMyMeetsHeader()
    this._makeDataSource(listMeetHeader)
  }

  componentWillReceiveProps(nextProps) {
    this._makeDataSource(nextProps.listMeetHeader)
  }

  _makeDataSource(arr) {
    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 })
    this.dataSource = ds.cloneWithRows(arr)
  }

  _renderRowHeader(data) {
    return (
      <TouchableHighlight
        onPress={() => {
          Actions.meet({
            title: data.name,
            currentContact: {
              name: data.name,
              email: data.email
            }
          })
        }}
        underlayColor='#E6E6E6'
      >
        <View style={styles.containerRowListView}>
          <Text style={styles.nameContactListView}>{data.name}</Text>
        </View>
      </TouchableHighlight>
    )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ListView
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this._renderRowHeader}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    listMeetHeader: state.Meet.listMeetHeader
  }
}
export default connect(mapStateToProps, {
  getMyMeetsHeader,
})(formMeetList)