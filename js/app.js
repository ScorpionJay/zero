import React , { Component } from 'react'
import { View,Text,StyleSheet} from 'react-native'
import { connect } from 'react-redux'

import Navigator from './Navigator'
// import Message from './components/Message'
// import { hideMessage } from './actions/message'

class App extends Component {

  render() {
    const { dispatch,message } = this.props

    return (
        <View style={styles.container}>
          <Navigator/>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#EEEEF3',
    
  },
  message: {
    zIndex:100
  }
})

function map(state) {
  return {
    
  }
}

export default connect(map)(App)