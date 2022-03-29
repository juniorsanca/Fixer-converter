import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    main: {
        height: height,
        width: width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
    },
    content: {
        width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontFamily: 'Obviously',
        fontWeight: 'bold',
        fontSize: 17,
        marginBottom: 10,
    },
    subtitle: {
        color: '#484969',
        fontSize: 12,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    footer: {
        width,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    textFooter: {
        color: '#484969',
        width: '89%',
        fontSize: 12,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 25,
        textAlign: 'center',
    },
    linkFooter: {
        color: '#FF3637',
        textDecorationLine: 'underline',
        alignSelf: 'center',
    },
    buttonConnect: {
        backgroundColor: '#FF3637',
        width: '90%',
        height: 50,
        alignItems: 'center',
        overflow: 'hidden',
        justifyContent: 'center',
        borderRadius: 12,
        flexDirection: 'row',
        marginBottom: 15,
    },
    buttonConnectEnabled: {
        backgroundColor: '#FF9999',
        width: '90%',
        height: 50,
        alignItems: 'center',
        overflow: 'hidden',
        justifyContent: 'center',
        borderRadius: 12,
        flexDirection: 'row',
        marginBottom: 15,
    },
    textButton: {
        fontFamily: 'Obviously',
        color: 'white',
        fontSize: 15,
    },
    inputPhone: {
        flex: 1,
        color: 'black',
        fontSize: 16,
        fontFamily: 'Obviously',
    },
    inputContainer: {
        backgroundColor: '#eae8e8',
        width: width * 0.9,
        height: 50,
        alignSelf: 'center',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 5,
        marginTop: 15,
    },
    icon: {
        width: 30,
        height: 30,
        marginLeft: 10,
    },
    iconArrow: {
        width: 10,
        height: 10,
        marginLeft: 10,
    },
    textPhone: {
        fontFamily: 'Obviously',
        marginLeft: 10,
    },
});

export default styles;
