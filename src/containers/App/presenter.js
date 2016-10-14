import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native'

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>
          Welcome to Principium!
        </Text>
        <Text>
          Check out github.com/KensoDev/principium
        </Text>
      </View>
    );
  }
}

module.exports = App;
