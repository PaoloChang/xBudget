import React, { Component } from 'react';
import { 
    StyleSheet, 
    View, 
    Text, 
    Button,
    AsyncStorage
 } from 'react-native';


const planData = [{
                 
    title: 'Starbucks part-time income',
    income: '$1000',
    period: 'bi-weekly'
}, 
{ 
    title: 'Tutor part-time income',
    income: '$100',
    period: 'bi-weekly'
}]

export default class PlansViewList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            planData
        }
    }

    static navigationOptions = {
        title: 'Budget Plans',
        drawewrLabel: 'PlansViewList',
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>PlansViewList</Text>
                <Button 
                    title='Create Plan'
                    onPress={() => this.props.navigation.navigate('PlanCreate')}/>
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