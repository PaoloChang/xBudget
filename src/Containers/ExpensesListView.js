import React, { Component } from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// var today = new Date();
// today.toLocaleDateString('zh-Hans-CN');
// "2018/9/15"

const demoData = [
    {
        date: '2018/9/15', 
        data: [
            { store: 'Starbucks', item: [{ name: 'coffee', qty: 1, cost: 1.99 }], tax: 0.26, total: 2.25 }
        ] 
    },
    { 
        date: '2018/9/14', 
        data: [
            {   title: 'McDonald\'s', item: [
                        { name: 'McDoule', qty: 1, cost: 1.99 },
                        { name: 'Junior Chicken', qty: 1, cost: 1.99}
                    ], 
                tax: 0.51, total: 4.49 }
        ] 
    }
]

export default class ExpensesViewList extends Component {
    static navigationOptions = {
        title: 'Expenses List',
        // drawewrLabel: 'ExpensesViewList',
    };
    
    render() {
        return (
            <View style={styles.container}>
                <Text>ExpensesListView</Text>
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