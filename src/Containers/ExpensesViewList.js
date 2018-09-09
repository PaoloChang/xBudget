import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class ExpensesViewList extends Component {
    static navigationOptions = {
        title: 'Expenses List',
        // drawewrLabel: 'ExpensesViewList',
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Text>ExpensesViewList</Text>
                <Button 
                    onPress={() => this.props.navigation.navigate('ExpenseCreate')}
                    title='Create Expense History'/>
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