import React , { Component } from 'react'
import { Navigator,View } from 'react-native'

import Splash from './containers/Splash'
import Login from './containers/Login'
import Main from './containers/Main'
// import Register from './containers/Register'
import Home from './containers/home/Home'
// import Detail from './containers/home/Detail'
import Find from './containers/find/Find'
import Me from './containers/me/Me'
import Account from './containers/me/Account'
import Nickname from './containers/me/Nickname'
import Sign from './containers/me/Sign'
import Setting from './containers/me/Setting'
import About from './containers/me/About'


import Web from './containers/common/Web'
// import Post from './containers/post/Post'
// import Posts from './containers/post/Posts'
// import DynamicDetial from './containers/post/DynamicDetial'
// import Webview from './common/Webview'


import Music from './containers/music/Music'

import { tab } from './actions/navigation'

import { connect } from 'react-redux'


class ZeroNavigator extends Component {

  constructor(props) {
    super(props);
  
    const { dispatch ,select } = this.props

    this.state = {};

   

  }

  _renderScene(route, navigator){
    const { dispatch } = this.props
    dispatch(tab(route.id))
    switch(route.id){
        case 'splash':
             return <Splash navigator={navigator} route={route}/>
             break;
        case 'login':
             return <Login navigator={navigator} route={route}/>
             break;
      // case 'register':
      //       return <Register navigator={navigator} route={route}/>
      //       break;
      case 'main':
            return <Main navigator={navigator} route={route}/>
            break;

      // home
      case 'home':
            return <Home navigator={navigator} route={route}/>
            break;
      // case  'detail':
      //       return <Detail navigator={navigator} route={route}/>
      //       break;

      // // me
      case  'me':
            return <Me navigator={navigator} route={route}/>
            break;
      case  'nickname':
            return <Nickname navigator={navigator} route={route}/>
            break;
      case  'sign':
            return <Sign navigator={navigator} route={route}/>
            break;

            
      // // me
      case  'find':
            return <Find navigator={navigator} route={route}/>
            break;
      case  'music':
            return <Music navigator={navigator} route={route}/>
            break;
      case  'account':
            return <Account navigator={navigator} route={route}/>
            break;
      case  'about':
            return <About navigator={navigator} route={route}/>
            break;
      case  'setting':
            return <Setting navigator={navigator} route={route}/>
            break;
      case  'web':
            return <Web navigator={navigator} route={route}/>
            break;

      // case  'post':
      //       return <Post navigator={navigator} route={route}/>
      //       break;
      // case  'posts':
      //       return <Posts navigator={navigator} route={route}/>
      //       break;
      // case  'CreateDynamic':
      //       return <CreateDynamic navigator={navigator} route={route}/>
      //       break
      // case 'dynamicDetail':
      //       return <DynamicDetial navigator={navigator} route={route}/>
      //       break


      // case 'webview':
      //       return <Webview navigator={navigator} route={route}/>
      //       break
    }
  }
  render() {
     const { dispatch ,select } = this.props
     // initialRoute={{  id: this.props.tab }}
    return (
        <Navigator
            initialRoute={{  id: 'splash' }}
           configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump }
            renderScene={this._renderScene.bind(this)}
        />    
    );
  }
}


function select(store) {
  return {
    tab: store.navigation.tab,
  };
}

export default connect(select)(ZeroNavigator)