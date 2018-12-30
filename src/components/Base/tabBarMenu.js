import React from 'react'
import {
  View,
  Text
} from 'react-native'

import { TabBar } from 'react-native-tab-view'

class TabBatMenu extends React.Component {
  render() {
    return (
      <View>
        <Text>Whatsapp Clone</Text>
        <TabBar {...props} />
      </View>
    )
  }
}

export default TabBatMenu