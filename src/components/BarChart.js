/* @flow */

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
  VictoryScatter,
  VictoryTheme,
} from 'victory-native';
import { random, range } from "lodash";

export default class BarChart extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     scrollEnabled: true,
  //     y: this.getYFunction(),
  //     style: this.getStyles(),
  //     transitionData: this.getTransitionData(),
  //     randomData: this.generateRandomData(),
  //     staticRandomData: this.generateRandomData(15),
  //     data: this.getData()
  //   };
  // }
  // getYFunction() {
  //   const n = random(2, 7);
  //   return (data) => Math.exp(-n * data.x) * Math.sin(2 * n * Math.PI * data.x);
  // }
  //
  // generateRandomData(points = 6) {
  //   return range(1, points + 1).map((i) => ({x: i, y: i + random(-1, 2)}));
  // }
  //
  // getData() {
  //   return range(1, 10).map((i) => ({x: i, y: random(1, 10)}));
  // }
  //
  // getStyles() {
  //   const colors = [
  //     "red", "orange", "magenta",
  //     "gold", "blue", "purple"
  //   ];
  //   return {
  //     stroke: colors[random(0, 5)],
  //     strokeWidth: random(1, 5)
  //   };
  // }
  //
  // getTransitionData() {
  //   const n = random(4, 10);
  //   return range(n).map((i) => {
  //     return {
  //       x: i,
  //       y: random(2, 10)
  //     };
  //   });
  // }
  //
  // changeScroll(scrollEnabled) {
  //   this.setState({scrollEnabled});
  // }
  //
  // updateDemoData() {
  //   this.setState({
  //     y: this.getYFunction(),
  //     style: this.getStyles(),
  //     transitionData: this.getTransitionData(),
  //     randomData: this.generateRandomData(),
  //     data: this.getData()
  //   });
  // }
  //
  // componentDidMount() {
  //   setInterval(this.updateDemoData.bind(this), 3000);
  // }

  render() {
    return (
      <View style={styles.container}>
      <VictoryChart polar theme={VictoryTheme.material}>
        <VictoryBar
          style={{ data: { fill: "tomato", opacity: 0.5 } }}
          data={[
            { x: 15, y: 20, label: 1, fill: "red" },
            { x: 25, y: 30, label: 2, fill: "orange" },
            { x: 35, y: 65, label: 3, fill: "gold" },
            { x: 40, y: 50, label: 4, fill: "blue" },
            { x: 45, y: 40, label: 5, fill: "cyan" },
            { x: 50, y: 30, label: 6, fill: "green" }
          ]}
        />
        <VictoryScatter
            style={{ data: { fill: "black" } }}
            data={[
              { x: 15, y: 20 },
              { x: 25, y: 30 },
              { x: 35, y: 65 },
              { x: 40, y: 50 },
              { x: 45, y: 40 },
              { x: 50, y: 30 }
            ]}
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
    backgroundColor: "#e1d7cd",
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
