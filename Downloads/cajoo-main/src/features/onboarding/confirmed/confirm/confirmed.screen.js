import React from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './confirmed.styles';
import Header from '../../../onboarding/login/components/header';
class Confirmed extends React.Component {
  goBackScreen = () => {
    this.props.navigation.goBack();
  };
  render() {
    return (
      <View style={styles.main}>
        <Header onPress={this.goBackScreen} />
        <View style={styles.content}>
          <Text style={styles.title}>Compte confirmé</Text>
        </View>
      </View>
    );
  }
}

export default Confirmed;
