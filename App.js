import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import Count from "./Component/Count";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      seconds: 0,
      minutes: 0,
      showCounter: false
    };
  }

  componentDidMount() {
    // setInterval(this.inc, 1000);
  }

  onButtonPress = () => {
    this.setState({ showCounter: true });
    this.secondsInterval = setInterval(this.incSecond, 1000);
    this.minutesInterval = setInterval(this.incMinutes, 2000);
  };

  incSecond = () => {
    this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
  };

  incMinutes = () => {
    this.setState(prevState => ({ minutes: prevState.minutes + 1 }));
  };

  onResetPress = () => {
    this.setState({ showCounter: false, minutes: 0, seconds: 0 });
    clearInterval(this.secondsInterval);
    clearInterval(this.minutesInterval);
  };

  render() {
    if (this.state.showCounter) {
      return (
        <View style={styles.container}>
          <Button title="Reset session" onPress={this.onResetPress} />
          <Count seconds={this.state.seconds} minutes={this.state.minutes} />
        </View>
      );
    }
    return (
      <View style={styles.container}>
        <Button title="Start Session" onPress={this.onButtonPress} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
