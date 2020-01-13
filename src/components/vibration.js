/** Comments
 * 
 */

import React, { Component } from 'react';
import { StyleSheet, View, Vibration, Button } from 'react-native';

const DURATION = 1000;
//Duration of the vibration

export default class Mynewproject extends Component {

    StartVibrationFunction = () => {
    //Handle the start vibration button click
    Vibration.vibrate(DURATION);
    //To start the vibration for the defined Duration
  };

  StopVibrationFunction = () => {
    //Handle the stop vibration button click
    Vibration.cancel();
    //To STop the vibration
  };

  render() {

    return (
      <View style={styles.MainContainer}>
        <View style={{ margin: 10 }}>
          <Button
            title=" Start Vibration "
            onPress={this.StartVibrationFunction}
          />
        </View>
        <View style={{ margin: 10 }}>
          <Button
            title=" Stop Vibration "
            onPress={this.StopVibrationFunction}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    justifyContent: 'center',
    flex: 1,
    margin: 10,
  },
});