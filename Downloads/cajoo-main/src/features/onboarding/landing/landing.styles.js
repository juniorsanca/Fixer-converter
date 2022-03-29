import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    main: {
        height: height,
        width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    logo: {
        alignSelf: 'center',
        width: 286,
        height: 130,
        marginBottom: 40,
    },
    title: {
        fontFamily: 'Obviously',
        fontWeight: 'bold',
        fontSize: 17,
    },
    buttonBottom: {
        width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleAndLogo: {
        paddingTop: 260,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textLink: {
        paddingTop: 20,
        color: '#F73435',
        textDecorationLine: 'underline',
    },
});

export default styles;
