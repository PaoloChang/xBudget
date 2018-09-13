import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Button,
    AsyncStorage
 } from 'react-native';

export default class PlanCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            newData: {
                title: '',
                income: '',
                period: ''
            }
        };
        
    }

    static navigationOptions = {
        title: 'Create Budget Plan',
        headerStyle: {
            backgroundColor: '#1e90ff',
        },
        headerTintColor: '#fff'
        // headerTitleStyle: {
            
        // }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Create Plan</Text>
                <Button 
                    onPress={() => this.props.navigation.navigate('PlanList')}
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