import * as React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    Dimensions,
    Image,
} from 'react-native';

const fb = require('../../../../assets/facebook.png');
const apple = require('../../../../assets/apple.png');
const google = require('../../../../assets/google.png');

const SocialButton = ({ type }) => {
    let socialName = 'facebook';
    let socialLogo = fb;
    switch (type) {
        case 'facebook':
            socialLogo = fb;
            break;
        case 'apple':
            socialLogo = apple;
            socialName = 'Apple';
            break;
        case 'google':
            socialLogo = google;
            socialName = 'Google';
            break;
    }

    return (
        <TouchableOpacity style={[styles.button, styles.colorButton(type)]}>
            <Image source={socialLogo} style={styles.icon} />
            <Text style={[styles.textButton, styles.colorText(type)]}>
                Continuer avec {socialName}
            </Text>
        </TouchableOpacity>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        width: '85%',
        height: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 10,
    },
    colorButton: type => {
        if (type === 'facebook') {
            return {
                backgroundColor: '#2579EA',
            };
        }
        if (type === 'apple') {
            return {
                backgroundColor: 'black',
            };
        }
        if (type === 'google') {
            return {
                backgroundColor: 'white',
                borderWidth: 2,
                borderColor: 'black',
            };
        }
    },
    colorText: type => {
        if (type === 'google') {
            return {
                color: 'black',
            };
        }
    },
    icon: {
        width: 30,
        height: 30,
        marginRight: 10,
    },
    textButton: {
        color: 'white',
        fontFamily: 'Obviously',
    },
});

export default SocialButton;
