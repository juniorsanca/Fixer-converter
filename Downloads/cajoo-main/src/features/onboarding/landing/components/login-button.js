import * as React from 'react';
import { TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';

const LoginButton = ({ text, navigate }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={navigate}>
            <Text style={styles.textButton}>{text}</Text>
        </TouchableOpacity>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    button: {
        marginTop: 15,
        backgroundColor: '#F73435',
        width: '85%',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        borderRadius: 10,
    },
    textButton: {
        color: 'white',
        fontFamily: 'Obviously',
    },
});

export default LoginButton;
