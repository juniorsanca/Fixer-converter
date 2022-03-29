import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
} from 'react-native';

const Header = props => {
    return (
        <View style={styles.header}>
            <TouchableOpacity style={styles.back} {...props}>
                <Image
                    source={require('../../../../assets/left.png')}
                    style={styles.arrow}
                />
            </TouchableOpacity>
            <Text style={styles.text}>Connexion</Text>
        </View>
    );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#F73435',
        width,
        height: height / 9,
        alignItems: 'flex-start',
    },
    text: {
        color: 'white',
        fontFamily: 'Obviously',
        fontSize: 20,
        alignSelf: 'center',
        marginTop: -30,
    },
    arrow: {
        height: height / 25,
        width: width / 25,
    },
    back: {
        paddingLeft: 20,
        marginTop: 40,
    },
});

export default Header;
