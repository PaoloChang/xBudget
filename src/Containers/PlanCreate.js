import React, { Component } from 'react';
import { 
    StyleSheet, 
    View,
    Text,
    TextInput,
    Picker,
    Button,
    AsyncStorage
 } from 'react-native';

import {
    FormLabel,
    FormInput,
    FormValidationMessage
} from 'react-native-elements';

export default class PlanCreate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: '',
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

    handleTitle = (e) => {
        let nextState = {};
        nextState[e.target.newData.title] = e.target.value;
        this.setState(prevState => ({
            data: {
                title: nextState,
                ...prevState
            }
        }));
    }

    handleAmount = (e) => {
        let nextState = {};
        nextState[e.target.newData.amount] = e.target.value;
        this.setState(prevState => ({
            data: {
                ...prevState,
                amount: nextState
            }
        }));
    }

    render() {
        return (
            <View style={styles.container}>
                <FormLabel>Type:</FormLabel>
                <Picker
                    selectedValue={this.state.type}
                    style={{ height: 50, width: 200 }}
                    onValueChange={(planType, itemIndex) => this.setState({type: planType})}>
                    <Picker.Item label="Budget" value="budget" />
                    <Picker.Item label="Saving" value="saving" />
                </Picker>

                <FormLabel>Title:</FormLabel>
                <FormInput onChangeText={this.handleTitle}/> 
                <FormValidationMessage>Error message</FormValidationMessage>

                <FormLabel>Amount:</FormLabel>
                <FormInput onChangeText={this.handleAmount}/> 
                <FormValidationMessage>Error message</FormValidationMessage>
                
                <FormLabel>Period:</FormLabel>
                
                <Picker
                    selectedValue={this.state.period}
                    style={{ height: 50, width: 200 }}
                    onValueChange={(planPeriod, itemIndex) => this.setState({period: planPeriod})}>
                    <Picker.Item label="One time" value="onetime" />
                    <Picker.Item label="Weekly" value="weekly" />
                    <Picker.Item label="Bi-weekly" value="biweekly" />
                    <Picker.Item label="Monthly" value="monthly" />
                </Picker>
                <FormValidationMessage>Error message</FormValidationMessage>

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