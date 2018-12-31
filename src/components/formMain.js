import React from 'react'
import {
  View,
  Animated,
  TouchableOpacity,
  StyleSheet,
  Text,
  Platform,
  TouchableHighlight,
  Image,
} from 'react-native'
import { TabView, SceneMap } from 'react-native-tab-view'
import { Constants } from 'expo'

import FormMeetList from './formMeetList'
import FormContact from './formContact'
import { Actions } from 'react-native-router-flux';

const MeetRoute = () => (
  <FormMeetList />
);

const ContactRoute = () => (
  <FormContact />
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
      <View style={{ paddingTop: Platform.OS === 'ios' ? 30 : 0, backgroundColor: '#115E54', elevation: 4, marginBottom: 6 }}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={{ fontSize: 16, color: '#fff', marginLeft: 10 }}>
            WhatsApp Clone
          </Text>
          <View style={{flexDirection: 'row', marginRight: 10}}>
            <TouchableHighlight onPress={() => Actions.addContact()} underlayColor='transparent'>
              <Image source={require('../../assets/add-contact.png')} />
            </TouchableHighlight>

            <TouchableHighlight onPress={() => false}>
              <Text style={{fontSize: 20, color: '#fff', marginLeft: 20}}>Sair</Text>
            </TouchableHighlight>
          </View>
        </View>

        <View style={styles.tabBar}>

          {props.navigationState.routes.map((route, i) => {
            const color = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map(
                inputIndex => (inputIndex === i ? '#FFF' : '#b3afaf')
              ),
            })

            return (
              <TouchableOpacity
                key={i}
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
    paddingBottom: 10,
  },
})