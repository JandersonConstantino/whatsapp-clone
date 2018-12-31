import React from 'react'
import {
  View,
  Text,
  StatusBar,
} from 'react-native'
import { TabBar } from 'react-native-tab-view'

class TabBatMenu extends React.Component {
  render() {
    return (
      <View style={{ backgroundColor: '#115E54', elevation: 4, marginBottom: 6 }}>
        <StatusBar backgroundColor='#11D444' />
        <View style={{ height: 50, justifyContent: 'center', color: '#fff', }}>
          <Text >Whatsapp Clone</Text>
        </View>
        <TabBar {...props} />
      </View>
    )
  }
}

export default TabBatMenu