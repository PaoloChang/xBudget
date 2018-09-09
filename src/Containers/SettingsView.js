import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class SettingsView extends Component {
    static navigationOptions = {
        drawewrLabel: 'SettingsView',
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Text>SettingsView</Text>
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