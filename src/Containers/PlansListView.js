import React, { Component } from 'react';
import { 
    AppRegistry,
    StyleSheet,
    SectionList,
    TouchableOpacity,
    View, 
    Text, 
    Button,
    Platform,
    AsyncStorage
 } from 'react-native';
 import { List, ListItem, colors } from 'react-native-elements';
 import Icon from 'react-native-vector-icons/FontAwesome';


// const demoData = [
//     {
//         num: 1,
//         title: 'Starbucks part-time income',
//         amount: '1000',
//         period: 'bi-weekly',
//         type: 'income'
//     }, 
//     { 
//         num: 2,
//         title: 'Tutor part-time income',
//         amount: '100',
//         period: 'bi-weekly',
//         type: 'income'
//     }, 
//     { 
//         num: 3,
//         title: 'Coffee plan',
//         amount: '2',
//         period: 'daily',
//         type: 'plan'
//     }, 
//     { 
//         num: 4,
//         title: 'Snack plan',
//         amount: '5',
//         period: 'daily',
//         type: 'plan'
//     }
// ]

const demoData = [
    {
        type: 'budget', 
        data: [
            { title: 'Starbucks', amount: 1000, period: 'bi-weekly'},
            { title: 'Tutor', amount: 200, period: 'bi-weekly'}
        ] 
    },
    { 
        type: 'saving', 
        data: [
            { title: 'Coffee', amount: 2, period: 'daily' },
            { title: 'Snack', amount:5 , period: 'daily' }
        ] 
    }
]

export default class PlansListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            selectedItemType: '',
            planData: []
        };

        this.handlePressItem = this.handlePressItem.bind(this);
    }

    // LOOK FOR expo vector-icons
    // https://expo.github.io/vector-icons/

    static navigationOptions = {
        // header: null,
        title: 'Budget Plans',
        drawewrLabel: 'PlansViewList',
        headerRight: (
            <Button
                icon={
                    <Icon
                        name='plus'
                        size={30}
                        color='yellow'
                        />
                }
                // style={ styles.headerButton }
                title=''
                onPress={ () => alert('This is a button!') }
            />
          ),
    };

    componentWillMount() {

        this.setState({
            planData: demoData
        })

        // if(!this.state.budgetDate.lenght) {
        //     AsyncStorage.setItem('budgetData', JSON.stringify(this.state.budgetData));
        // }
        // if(!this.state.planData.length) {
        //     AsyncStorage.setItem('planData', JSON.stringify(this.state.planData));
        // }
    }

    componentDidMount() {

        // if(!this.state.planData.length) {
        //     let tmp = AsyncStorage.getItem('planData');
        //     setState({ planDate: JSON.parse(tmp) });
        // }

        // const planListView = AsyncStorage.planListView;

        // if(planListView) {
        //     this.setState({
        //         planData: JSON.parse(planData)
        //     })
        // }

        // Enable demoData
        // AsyncStorage.setItem('planListView', JSON.stringify(demoData));
    }

    // componentDidUpdate(prevState) {

    //     if(JSON.stringify(prevState.budgetData) != JSON.stringify(this.state.budgetData)) {
    //         AsyncStorage.setItem('budgetData', JSON.stringify(this.state.budgetData));
    //     }
    //     if(JSON.stringify(prevState.planData) != JSON.stringify(this.state.planData)) {
    //         AsyncStorage.setItem('planData', JSON.stringify(this.state.planData));
    //     }
    // }
    

    // displayPlansList = async () => {
    //     try {
    //         let plans = await AsyncStorage.getItem('planListView');
    //         let parsed = JSON.parse(plans)
            
    //         // Test demoData
    //         let display = '';
    //         for(i=0; i < parsed.length; i++) {
    //             display += parsed[i].title + ' | $' + parsed[i].amount + '\n'        
    //         }
    //         alert(display);
    //     }
    //     catch (error) {
    //         alert(error);
    //     }
    // }

    handlePressItem(item) {
        alert(item.title)
    }

    renderItem = (item) => {
        return (
            <TouchableOpacity style={ styles.item } 
                onPress={ this.handlePressItem }>
                <Text style={ styles.itemTitle }>{ item.item.title }</Text>
                <Text style={ styles.itemSubtitle} >{ '$' + item.item.amount + ' | ' + item.item.period }</Text>
            </TouchableOpacity>
        )
    }

    renderHeader = (headerItem) => {
        return <Text style={ styles.header }>{ headerItem.section.type.toUpperCase() }</Text>
    }

    render() {
        
        return (

            <View style={styles.sectionView} >
                <SectionList
                    renderItem={ this.renderItem }
                    renderSectionHeader={ this.renderHeader }
                    sections={ this.state.planData }
                    keyExtractor={ (item) => item.title }/>
            </View>

            // keyExtractor UNIQUE KEY MUST BE UNIQUE NUMBER NOT TITLE 

            // <List style={styles.scene} >
            //     <FlatList
            //         data={this.planData} 
            //         renderItem={({plan}) => (
            //             <Text>{plan.title}</Text>
            //             // <ListItem 
            //             //     title={plan.title}
            //             //     subtitle={plan.amount} 
            //             //     keyExtractor={i => i.num}/>
                    
            //         )}
            //         />
            // </List>

            /** Testing with Buttons */

            // <View style={styles.container}>
            //     <Text>PlansViewList</Text>
            //     <Button
            //         title='Click to see demo data'
            //         onPress={this.displayPlansList}/>
            //     <Text></Text>
            //     <Button 
            //         title='Create Plan'
            //         onPress={() => this.props.navigation.navigate('PlanCreate')}/>
            // </View>
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
    sectionView: {
        marginTop: (Platform.OS) == 'ios' ? 20 : 0
    },
    scene: {
        flex: 1,
        paddingTop: 25,
    },
    header: {
        padding: 5,
        paddingLeft: 17,
        backgroundColor: colors.grey3,
        fontSize: 20,
        fontWeight: 'bold'
    },
    // headerButton: {
    //     fontWeight: 'bold',
    //     // backgroundColor: 'rgba(255, 255, 255, 0.3)'
    // },
    item: {
        width: '98%',
        margin: 3,
        backgroundColor: 'yellow',
        paddingLeft: 25,
        borderRadius: 10,
        // borderBottomWidth: 1,
        borderWidth: 2,
        borderStyle: 'dashed',
        borderColor: 'red'
    },
    itemTitle: {
        fontSize: 20
    }, 
    itemSubtitle: {
        fontSize: 15,
        // color: this.state.planData.type == 'saving' ? 'green' : 'red'
    }

});

//AppRegistry.registerComponent('MyAppName', () => MyRootComponent);
AppRegistry.registerComponent('xbudget', () => App);