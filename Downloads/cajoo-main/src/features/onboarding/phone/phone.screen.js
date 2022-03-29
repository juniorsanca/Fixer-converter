import React from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
} from 'react-native';
import styles from './phone.styles';
import Header from '../login/components/header';
import { Auth } from 'aws-amplify';

class Phone extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            canGo: false,
        };
    }
    goBackScreen = () => {
        this.props.navigation.goBack();
    };
    onChangeText = phone => {
        let canGo = false;
        this.setState({
            phone,
        });
        if (phone.length === 9) {
            canGo = true;
        }
        this.setState({
            canGo,
        });
    };
    //submit = () => {

    submit = async => {
        if (this.state.canGo) {
            this.props.navigation.navigate('confirm');
        } try {
            const { user } = await Auth.signUp({
                username: '+33' + this.state.phone,
                password: 'Azerty1234!',
            });
            console.log('utilisateur créé:', user);
            this.props.navigation.navigate('confirm', {
                phone: this.state.phone,
            });
        } catch (error) {
            console.log('error signing up:', error);
        }
    };
    render() {
        return (
            <View style={styles.main}>
                <Header onPress={this.goBackScreen} />
                <View style={styles.content}>
                    <Text style={styles.title}>Quel est votre numéro ?</Text>
                    <Text style={styles.subtitle}>
                        Pour que notre livreur puisse vous contacter 😄
                    </Text>
                    <View style={styles.inputContainer}>
                        <Image
                            source={require('../../../assets/france.png')}
                            style={styles.icon}
                        />
                        <Image
                            source={require('../../../assets/down.png')}
                            style={styles.iconArrow}
                        />
                        <Text style={styles.textPhone}>+33 </Text>
                        <TextInput
                            style={styles.inputPhone}
                            keyboardType="numeric"
                            onChangeText={phone => this.onChangeText(phone)}
                            value={this.state.phone}
                        />
                    </View>
                </View>
                <View style={styles.footer}>
                    <Text style={styles.textFooter}>
                        En cliquant sur "CONTINUER", vous acceprez la{' '}
                        <Text style={styles.linkFooter}>Politique de Confidentialité,</Text>{' '}
                        les <Text style={styles.linkFooter}>CGU</Text> et les{' '}
                        <Text style={styles.linkFooter}>CGV</Text> de Cajoo.
                    </Text>
                    <TouchableOpacity
                        style={
                            this.state.canGo
                                ? styles.buttonConnect
                                : styles.buttonConnectEnabled
                        }
                        onPress={this.submit}>
                        <Text style={styles.textButton}>Continuer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Phone;
