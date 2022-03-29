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
    title: {
        color: 'black',
        fontFamily: 'Obviously',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 20,
    },
    container: {
        width,
        marginBottom: 200,
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default styles;
