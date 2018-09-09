import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default class ReportView extends Component {
    static navigationOptions = {
        drawewrLabel: 'ReportView',
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Text>ReportView</Text>
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