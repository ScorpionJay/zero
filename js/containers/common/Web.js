import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  WebView
} from 'react-native';

import ToolBar from '../common/ToolBar'

import { connect } from 'react-redux'
import { logoutAPI } from '../../actions/login'

import Config from '../../Config'

class Web extends Component {

  componentDidMount(){
    const { dispatch } = this.props
  }
 
  render() {
    let url = Config.articleDetail + this.props.route.params.id
    return (
      <View style={styles.container}>
          <ToolBar navigator={this.props.navigator} route={this.props.route}/>
          <WebView source={{uri: url}} style={styles.webView}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


function map(state) {
  return {
    data: state.home.fetchList,
    login: state.login.login,
    account: state.account.account
  }
}

export default connect(map)(Web)