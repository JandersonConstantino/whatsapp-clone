import React from 'react'
import {
  View,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform
} from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import { Constants } from 'expo'

const MeetRoute = () => (
  <View style={[styles.container, { backgroundColor: '#ff4081' }]} />
);

const ContactRoute = () => (
  <View style={[styles.container, { backgroundColor: '#673ab7' }]} />
);

export default class TabViewExample extends React.Component {
  state = {
    index: 0,
    routes: [
      { key: 'meet', title: 'Conversas' },
      { key: 'contact', title: 'Contatos' },
    ],
  };

  _handleIndexChange = index => this.setState({ index });

  _renderTabBar = props => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return (
      <View style={{marginTop: Platform.OS === 'ios' ? 30 : 0, }}>
        <Text style={{ alignItems: 'center', justifyContent: 'center', fontSize: 20, marginLeft: 20}}>
          WhatsApp Clone
        </Text>
        <View style={styles.tabBar}>
          
          {props.navigationState.routes.map((route, i) => {
            const color = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map(
                inputIndex => (inputIndex === i ? '#D6356C' : '#222')
              ),
            })

            return (
              <TouchableOpacity
                style={styles.tabItem}
                onPress={() => this.setState({ index: i })}>
                <Animated.Text style={{ color }}>{route.title}</Animated.Text>
              </TouchableOpacity>
            )
          })}
        </View>
      </View>
    );
  };

  _renderScene = SceneMap({
    meet: MeetRoute,
    contact: ContactRoute,
  });

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderScene={this._renderScene}
        renderTabBar={this._renderTabBar}
        onIndexChange={this._handleIndexChange}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    flexDirection: 'row',
    paddingTop: Constants.statusBarHeight,
  },
  tabItem: {
    flex: 1,
    alignItems: 'center',
    padding: 16,
  },
})