import React, { Component } from 'react'
import { Provider } from 'react-redux'

import App from './app'
import configureStore from './store'
// 禁掉黄色警告
console.disableYellowBox = true;
export default class Setup extends Component {

  constructor() {
    super();
    this.state = {
      store: configureStore()
    }
  }

  render() {
    return (
      <Provider store={this.state.store}>
        <App/>
      </Provider>
    );
  }
}


