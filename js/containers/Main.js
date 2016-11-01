import React, { Component } from 'react'
import {
  StyleSheet,
} from 'react-native'
import TabNavigator from 'react-native-tab-navigator'
import Icon from 'react-native-vector-icons/FontAwesome'

import Home from './home/Home'
import Find from './find/Find'
import Me from './me/Me'
import Config from '../Config'


export default class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedTab:Config.initTab
    }
  }

  render() {
    return (
      <TabNavigator>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'home'}
          title="首页"
          renderIcon={() => <Icon name="star-o" size={25} color="#aaa" />}
          renderSelectedIcon={() => <Icon name="star" size={25} color="#238CFE" />}
          onPress={() => {this.setState({ selectedTab: 'home' });this.props.route.title='首页'}}>
          <Home navigator={this.props.navigator} route={this.props.route}/>
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'find'}
          title="发现"
          renderIcon={() => <Icon name="dot-circle-o" size={25} color="#aaa" />}
          renderSelectedIcon={() => <Icon name="dot-circle-o" size={25} color="#238CFE" />}
          onPress={() => {this.setState({ selectedTab: 'find' });this.props.route.title='发现'}}>
          <Find navigator={this.props.navigator} route={this.props.route}/>
        </TabNavigator.Item>

        <TabNavigator.Item
          selected={this.state.selectedTab === 'me'}
          title="我的"
          renderIcon={() => <Icon name="user" size={25} color="#aaa" />}
          renderSelectedIcon={() => <Icon name="user" size={25} color="#238CFE" />}
          onPress={() => {this.setState({ selectedTab: 'me' });this.props.route.title='我'}}>
          <Me navigator={this.props.navigator} route={this.props.route}/>
        </TabNavigator.Item>
        
        
      
      </TabNavigator>
    )
  }
}

const styles = StyleSheet.create({

})