import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './confirm.styles';
import Header from '../../onboarding/login/components/header';
import { Auth } from 'aws-amplify';

class Confirm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            code: '',
            canGo: false,
            phone: this.props.route.params.phone,
        };
    }

    goBackScreen = () => {
        this.props.navigation.goBack();
    };

    onChangeText = async code => {
    let canGo = false;
    this.setState({
      code,
    });
    if (code.length == 6) {
      console.log(code);
      canGo = true;
      try {
        const response = await Auth.confirmSignUp(
          '+33' + this.state.phone,
          code,
        );
        console.log('response:', JSON.stringify(response));
        this.props.navigation.navigate('confirmed');
      } catch (error) {
        console.log('error confirming sign up', error);
      }
    }
    this.setState({
      canGo,
    });
  };

    render() {
        return (
            <View style={styles.main}>
                <Header onPress={this.goBackScreen} />
                <View style={styles.content}>
                    <Text style={styles.title}>Confirmez votre numéro !</Text>
                    <Text style={styles.subtitle}>
                        Entrez le code envoyé au +33 {this.state.phone}

                    </Text>
                    <View style={styles.viewInput}>
                        <TextInput
                            style={styles.inputNumber}
                            keyboardType="numeric"
                            onChangeText={code => this.onChangeText(code)}
                        />
                    </View>
                    <Text>
                        Vous n'avez pas reçu le code ?{' '}
                        <Text style={styles.link}>Renvoyer</Text>
                    </Text>
                </View>
            </View>
        );
    }
}

export default Confirm;