import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
} from 'react-native';
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from 'victory-native';
import { random, range } from "lodash";

const data = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
];

export default class BarChart extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is bar with mock</Text>
        <VictoryChart theme={VictoryTheme.material} domainPadding={{ x: 15 }}>
          <VictoryAxis
            // tickValues specifies both the number of ticks and where
            // they are placed on the axis
            tickValues={[1, 2, 3, 4]}
            tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
          />
      
          <VictoryAxis
            dependentAxis
            // tickFormat specifies how ticks should be displayed
            tickFormat={(x) => (`$${x / 1000}k`)}
          />
      
          <VictoryBar
            style={{ data: { fill: "#c43a31" } }}
            data = {data}
            alignment="start"
            x="quarter"
            y="earnings"
          />
          
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 50,
    paddingRight: 50,
    paddingTop: 50,
  },
  text: {
    fontSize: 18,
    // fontFamily: (Platform.OS === "ios") ? "Menlo" : "monospace",
    fontWeight: "bold",
    marginTop: 25,
    marginBottom: 20,
  },
  heading: {
    fontSize: 27,
    // fontFamily: (Platform.OS === "ios") ? "Menlo" : "monospace",
    fontWeight: "bold",
    marginTop: 30,
    marginBottom: 30,
  },
});
