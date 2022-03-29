import React from 'react';
import {
    View,
    ImageBackground,
    Text,
    Dimensions,
    Image,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import styles from './landing.styles';
import LoginButton from './components/login-button';

class Landing extends React.Component {
    openLoginScreen = () => {
        this.props.navigation.navigate('login');
    };
    render() {
        return (
            <View style={styles.main}>
                <View style={styles.titleAndLogo}>
                    <Image
                        source={require('../../../assets/logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.title}>Vos courses en 3 clics !</Text>
                </View>

                <View style={styles.buttonBottom}>
                    <LoginButton text="Me connecter 👋🏻" navigate={this.openLoginScreen} />
                    <TouchableOpacity style={styles.link}>
                        <Text style={styles.textLink}>Découvrir l'app</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

export default Landing;
