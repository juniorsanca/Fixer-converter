import React from 'react';
import {
    View,
    ImageBackground,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
    Alert,
} from 'react-native';
import styles from './login.styles';
import Header from './components/header';
import SocialButton from './components/social-button';
import LoginButton from '../landing/components/login-button';

class Login extends React.Component {
    goBackScreen = () => {
        this.props.navigation.goBack();
    };
    openPhoneScreen = () => {
        this.props.navigation.navigate('phone');
    };
    render() {
        return (
            <View style={styles.main}>
                <Header onPress={this.goBackScreen} />
                <View style={styles.container}>
                    <Text style={styles.title}>Connectez vous simplement !</Text>
                    <SocialButton type="apple" style={styles.buttons} />
                    <SocialButton type="facebook" style={styles.buttons} />
                    <SocialButton type="google" style={styles.buttons} />
                    <LoginButton
                        text="📞  Avec votre numéro !"
                        style={styles.buttons}
                        navigate={this.openPhoneScreen}
                    />
                </View>
            </View>
        );
    }
}

export default Login;
