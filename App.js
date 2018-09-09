import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

import AppNavigator from './src/Containers/Navigation/AppNavigator';


export default class App extends React.Component {

  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
      // <View style={styles.container}>
      //   <Text>Testing</Text>
      // </View>
      // <Provider store={store}>
      
      <AppNavigator />
      
      // </Provider>
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
