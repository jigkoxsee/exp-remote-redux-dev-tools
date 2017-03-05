import React, {
  Component,
  PropTypes,
} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Counter extends Component {
  render() {
    let { increment, decrement, counter } = this.props;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.counter}>{counter}</Text>
        </View>
        <View>
          <Button
            onPress={increment}
            title="Increment"
            color="darkturquoise"
          />
          <Button
            onPress={decrement}
            title="Decrement"
            color="lightcoral"
            style={styles.button}
          />
        </View>
      </View>
    );
  }
}

Counter.propTypes = {
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  counter: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    fontSize: 100,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Counter;
