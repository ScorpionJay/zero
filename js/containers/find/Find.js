import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';

import ToolBar from '../common/ToolBar'
// import CarouselCompont from '../../common/RNCarousel'
// import ListCompontent from './ListCompontent'

import { connect } from 'react-redux'


import { articleAPI } from '../../actions/article'

class App extends Component {

  componentDidMount(){
    const { dispatch } = this.props
    dispatch(articleAPI())
  }
  
  detail(id){
    //ToastAndroid.show(id, ToastAndroid.SHORT)
    this.props.navigator.push({
       title:'详情',
       id:'web',
       params: {
        id: id
      }
    })
  }

  render() {
    const { article } = this.props
    return (
      <View style={styles.container}>
        <ToolBar navigator={this.props.navigator} route={this.props.route}/>
        {
          article.map((item) => {
            return (
                  <TouchableOpacity style={{ padding: 10 }}  onPress={ this.detail.bind(this,item._id)}>
                    <Text style={{ fontSize: 18 ,color:'#666'}}>  {item.title}  </Text>
                    <Text style={{ paddingLeft: 10,fontSize: 14 }}>{item.date}</Text>
                  </TouchableOpacity>
                  )
          })
        }
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
    article: state.article.article
  }
}

export default connect(map)(App)