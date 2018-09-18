import React, { Component } from 'react';
import {
    FlatList,
    StyleSheet
} from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class Plans extends Component {

    constructor(props) {
        super(props);
        state = {
            plans: []
        }
    }
    
    render() {
        return (
            <List>
                <FlatList
                    data={plans} 
                    renderItem={({plan}) => (
                        <ListItem 
                            title={plan.name}
                            subtitle={plan.amount} />
                    
                    )}
                    keyExtractor={i => i.key} />
            </List>
        )
    }
}