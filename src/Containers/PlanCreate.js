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
            type: 'budget',
            oldData: [ { type: 'budget', data: [{}] }, { type: 'saving', data: [{}] } ],
            newData: {
                title: '',
                amount: '',
                period: 'onetime',
            },
            test: [
                "1", "2", "3"
            ]
        };
        
        // this.handleSubmitButton = this.handleSubmitButton.bind(this);
    }

    componentDidMount = async () => {
        try {
            let fetched = await AsyncStorage.getItem('plansData');
            
            this.setState({
                oldData: JSON.parse(fetched)
            });
        }
        catch(error) {
            alert("Error detected: loading AsyncStorage plansData failed.");
        }
    }

    static navigationOptions = {
        title: 'Create Budget Plan',
        headerStyle: {
            backgroundColor: '#1e90ff',
        },
        headerTintColor: '#fff'
    };

    handleTitleInput = (input) => {
        this.setState(prevState => ({
            newData: {
                ...prevState.newData,
                title: input
            }
        }));
    }

    handleAmountInput = (input) => {
        this.setState(prevState => ({
            newData: {
                ...prevState.newData,
                amount: input
            }
        }));
    }

    handlePeriodPicker = (value) => {
        this.setState(prevState => ({
            newData: {
                ...prevState.newData,
                period: value
            }
        }));
    }

    updateListItems = (type) => {

        if(type == "budget") {

            let newState = Object.assign({}, this.state);
            let planAdded = this.state.oldData[0].data.concat(this.state.newData);

            console.log("\n\n\nPLAN ADDED\n\n\n");
            console.log(planAdded);
            
            newState.oldData[0].data = planAdded;

            this.setState(newState);
        }
        else {

            let newState = Object.assign({}, this.state);
            let planAdded = this.state.oldData[1].data.concat(this.state.newData);

            console.log("\n\n\nPLAN ADDED\n\n\n");
            console.log(planAdded);

            newState.oldData[1].data = planAdded;

            this.setState(newState);
        }
    }

    // handleSubmitButton = async () => {

    //     try {

    //         this.updateListItems(this.state.type);

    //         console.log("\n\n\n NEW UPDATED OLDDATA\n\n\n")

    //         console.log(this.state.oldData);

    //         await AsyncStorage.setItem('plansData', JSON.stringify(this.state.oldData));
            
    //         this.props.navigation.navigate('PlanList');
    //     }
    //     catch (error) {
    //         alert("Error detected: saving AsyncStorage plansData failed.\nError: " + error);
    //         console.log("handleSubmitButton() error: " + error);
    //     }
    // }

    handleSubmitButton() {
        // const { navigation } = this.props;
        // const { params } = this.props.navigation.state;
        // const { newData } = params ? params: null;
        // this.props.navigation.setParams({ newData: this.state.newData })

        this.props.navigation.state.params.handleUpdate({ newData: this.state.newData });
        console.log("in PlanCreate handleSubmitButton(), newData: " + this.state.newData );
        this.props.navigation.goBack();
    }

    render() {
        return (
            <View style={styles.container}>

                <View style={styles.inputGroup}>
                    <FormLabel>Type:</FormLabel>
                    <Picker
                        selectedValue={this.state.type}
                        style={{ height: 50, width: 120 }}
                        onValueChange={(planType) => this.setState({type: planType})}>
                        <Picker.Item label="Budget" value="budget" />
                        <Picker.Item label="Saving" value="saving" />
                    </Picker>
                </View>

                <View style={styles.inputGroup} >
                    <Text>Title:</Text>
                    <TextInput style={styles.textInput} onChangeText={this.handleTitleInput}/> 
                </View>
                <Text id="validateTitle" style={styles.validation }>Error message</Text>

                <View style={styles.inputGroup} >
                    <Text>Amount:</Text>
                    <TextInput style={styles.textInput} onChangeText={this.handleAmountInput}/> 
                </View>
                <Text id="validateAmount" style={styles.validation} >Error message</Text>
                
                <View style={styles.inputGroup} >
                    <FormLabel>Period:</FormLabel>
                    <Picker
                        selectedValue={this.state.newData.period}
                        style={{ height: 50, width: 150 }}
                        onValueChange={this.handlePeriodPicker} >
                        <Picker.Item label="One time" value="onetime" />
                        <Picker.Item label="Weekly" value="weekly" />
                        <Picker.Item label="Bi-weekly" value="biweekly" />
                        <Picker.Item label="Monthly" value="monthly" />
                    </Picker>
                </View>
                
                <Button
                    onPress={this.handleSubmitButton.bind(this)}
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
    inputGroup: {
        flexDirection: "row"
    },
    textInput: {
        width: "50%",
        borderBottomColor: "#555",
    },
    validation: {
        color: "#f00",
        fontSize: 11,
    }
});

//for review