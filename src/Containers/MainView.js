import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class MainView extends Component {
    static navigationOptions = {
        title: 'Main Menu',
        // drawewrLabel: 'Main',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>MainView</Text>
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