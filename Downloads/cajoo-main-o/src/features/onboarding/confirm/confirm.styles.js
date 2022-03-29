import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    main: {
        height: height,
        width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    content: {
        marginBottom: 350,
        width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    viewInput: {
        fontSize: 14,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
    },
    inputNumber: {
        borderRadius: 12,
        margin: 5,
        padding: 20,
        backgroundColor: 'rgba(160,160,160,0.20)',
        width: '22%',
        textAlign: 'center',
    },
    title: {
        fontFamily: 'Obviously',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10,
    },
    subtitle: {
        marginBottom: 30,
    },
    link: {
        color: '#FF3637',
        textDecorationLine: 'underline',
        alignSelf: 'center',
    },
});

export default styles;
