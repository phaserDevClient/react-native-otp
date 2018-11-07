import React from 'react';
import {StyleSheet, View} from 'react-native';
import LoginScreen from './app/components/login/index';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          {/*<Text>Open up App.js to start working on your app!</Text>*/}
          <LoginScreen/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
