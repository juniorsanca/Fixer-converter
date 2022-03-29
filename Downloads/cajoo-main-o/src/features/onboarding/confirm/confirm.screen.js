import React from 'react';
import { View, Text, TextInput } from 'react-native';
import styles from './confirm.styles';
import Header from '../../onboarding/login/components/header';

class Confirm extends React.Component {
    goBackScreen = () => {
        this.props.navigation.goBack();
    };
    render() {
        return (
            <View style={styles.main}>
                <Header onPress={this.goBackScreen} />
                <View style={styles.content}>
                    <Text style={styles.title}>Confirmez votre numéro !</Text>
                    <Text style={styles.subtitle}>
                        Entrez le code envoyé au +33 X XX XX XX XX
                    </Text>
                    <View style={styles.viewInput}>
                        <TextInput style={styles.inputNumber} keyboardType="numeric" />
                        <TextInput style={styles.inputNumber} keyboardType="numeric" />
                        <TextInput style={styles.inputNumber} keyboardType="numeric" />
                        <TextInput style={styles.inputNumber} keyboardType="numeric" />
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
