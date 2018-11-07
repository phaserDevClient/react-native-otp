import React, {Component} from 'react';
import {Dimensions, ImageBackground, StyleSheet, TextInput, View} from 'react-native';

const width = Dimensions.get('window').width;
export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImageBackground source={require('./assets/img/background.jpg')} style={{width: '100%', height: '100%'}}>
                <View style={styles.container}>
                    <TextInput placeholder={"Input"}/>
                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'

    }
});
