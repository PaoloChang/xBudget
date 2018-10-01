import React, { Component } from 'react';
import { 
    AppRegistry,
    StyleSheet,
    SectionList,
    TouchableOpacity,
    View, 
    Text, 
    // Button,
    Platform,
    AsyncStorage
 } from 'react-native';
 import { List, ListItem, Button, colors } from 'react-native-elements';
 import Icon from 'react-native-vector-icons/FontAwesome';
 import HeaderButtons, { HeaderButton, Item } from 'react-navigation-header-buttons';


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
            { title: 'Snack', amount:5 , period: 'daily' },

            { title: 'Coffee1', amount: 2, period: 'daily' },
            { title: 'Snack1', amount:5 , period: 'daily' },

            { title: 'Coffee2', amount: 2, period: 'daily' },
            { title: 'Snack2', amount:5 , period: 'daily' },

            { title: 'Coffee3', amount: 2, period: 'daily' },
            { title: 'Snack3', amount:5 , period: 'daily' }
        ] 
    }
]

export default class PlansListView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedKey: -1,
            selectedItemType: '',
            plansData: []
        };

        // this.checkData = this.checkData.bind(this);
        this.handlePressItem = this.handlePressItem.bind(this);
    }

    // LOOK FOR expo vector-icons
    // https://expo.github.io/vector-icons/

    static navigationOptions = ({navigation}) => ({
    // header: null,
        title: 'Budget Plans',
        headerRight: (
            <Icon 
                name='plus-square'
                size={30}
                onPress={ () => navigation.navigate('PlanCreate', { handleUpdate: this.handleUpdate.bind(this) }) }                
                backgroundColor= "rgba(0,0,0,0)"
                // color="rgba(0,122,255,1)"
                containerStyle={{margin: 50}}
            />
    )});

    handleUpdate = newData => {

        console.log("handleUpdate() trigger");
        alert(newData);
        this.setState({
            newData
        });
    }
            
            // <Icon
            //     name='plus-square'
            //     size={30}
            //     color='blue'
            //     // onPress={() => alert('Let\'s create plan')}
            //     onPress={ () => this.props.navigation.navigate('PlanCreate')}
            //     // onPress={ () => this.props.navigation.navigate('screen/PlanCreate') }
            //     containerStyle={{margin: 50}}
            //     />

    _emptyData = async () => {
        try {
            AsyncStorage.setItem('plansData', '');
        }
        catch (error) {
            console.log('_emptyData() error: ' + error);
        }
    }

    _loadInitialState = async () => {
        try {
            let data = await AsyncStorage.getItem('plansData');

            alert(data);

            if( data != null ) {
                this.setState({
                    plansData: JSON.parse(data)
                })
            }
            else {
                let demo = await AsyncStorage.setItem('plansData', JSON.stringify(demoData));
                this.setState({
                    plansData: demo
                })
            }
        }
        catch (error) {
            console.log("_loadInitialState() error: " + error);
        }
    }

    componentWillMount() {

        /** Working without AsyncStorage */

        // this.setState({
        //     plansData: demoData
        // })
        
        /** USE _emptyData() to empty AsyncStorage.plansData */

        // this._emptyData().done();

        /** USE _loadInitialState() to check plansData exist */

        this._loadInitialState().done();        
    }

    componentDidMount() {

        // if(!this.state.plansData.length) {
        //     let tmp = AsyncStorage.getItem('plansData');
        //     setState({ planDate: JSON.parse(tmp) });
        // }

        // const planListView = AsyncStorage.planListView;

        // if(planListView) {
        //     this.setState({
        //         plansData: JSON.parse(plansData)
        //     })
        // }

        // Enable demoData
        // AsyncStorage.setItem('planListView', JSON.stringify(demoData));
    }

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
        alert("title: " + item.item.title + "\namount: " + item.item.amount + "\nperiod: " + item.item.period);
    }

    renderItem = (item) => {
        return (
            <TouchableOpacity style={ styles.item } 
                onPress={ (event) => this.handlePressItem(item) }>
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
                    sections={ this.state.plansData }
                    keyExtractor={ (item) => item.title }/>
            </View>

            // keyExtractor UNIQUE KEY MUST BE UNIQUE NUMBER NOT TITLE 

            // <List style={styles.scene} >
            //     <FlatList
            //         data={this.plansData} 
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
    //     margin: 10
    //     // fontWeight: 'bold',
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
        // color: this.state.plansData.type == 'saving' ? 'green' : 'red'
    }

});

//AppRegistry.registerComponent('MyAppName', () => MyRootComponent);
AppRegistry.registerComponent('xbudget', () => App);
//for review