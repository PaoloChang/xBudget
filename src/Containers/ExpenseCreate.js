import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class PlanCreate extends React.Component {
    static navigationOptions = {
        title: 'Create Expense History',
        headerStyle: {
            backgroundColor: '#1e90ff',
        },
        headerTintColor: '#fff'
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Create Expense History</Text>
                <Button 
                    onPress={() => this.props.navigation.navigate('ExpenseList')}
                    title='Submit'/>
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