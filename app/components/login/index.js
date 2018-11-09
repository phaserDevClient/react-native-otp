import React, {Component} from 'react';
import {
    Dimensions,
    Image,
    ImageBackground,
    Platform,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

const {width, height} = Dimensions.get('window');
export default class LoginScreen extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ImageBackground source={require('./assets/img/background.jpg')}
                             style={{width: '100%', height: '100%', flex: 1}}>
                <View style={styles.container}>
                    <View style={styles.inputContainer}>
                        <TextInput placeholder={"Tên đăng nhập"}
                                   style={styles.inputFiled}
                                   autoCorrect={true}
                                   placeholderTextColor={"#7e7e7e"}
                                   returnKeyType={'next'}
                                   underlineColorAndroid={'transparent'}
                                   autoCapitalize={"none"}/>
                        <TextInput placeholder={"Mật khẩu"}
                                   style={styles.inputFiled}
                                   autoCorrect={true}
                                   placeholderTextColor={"#7e7e7e"}
                                   secureTextEntry={true}
                                   returnKeyType={'done'}
                                   underlineColorAndroid={'transparent'}/>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Đăng nhập</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.register}>
                        <TouchableOpacity>
                            <Text style={[styles.text, {
                                marginRight: 50
                            }]}>Đăng ký tài khoản</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[styles.text, {
                                textDecorationLine: 'underline'
                            }]}>Quên mật khẩu?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.footer}>
                        <TouchableOpacity style={styles.button_footer}>
                            <Image style={{width: 22, height: 22, marginLeft: 5}}
                                   source={require('./assets/img/facebook_icon.png')}/>
                            <Text style={styles.text_footer}>Login Facebook</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[
                            styles.button_footer,
                            {
                                backgroundColor: '#df4a32',
                            }
                        ]}>
                            <Image style={{width: 22, height: 22, marginLeft: 5}}
                                   source={require('./assets/img/google_icon.png')}/>
                            <Text style={styles.text_footer}>Login Google</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    inputContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        top: 250,
        ...Platform.select({
            ios: {
                top: 350
            }
        })
    },
    inputFiled: {
        borderRadius: 20,
        backgroundColor: '#dcdcdc',
        width: 350,
        height: 45,
        marginBottom: 15,
        padding: 10,
        fontSize: 16,
        fontWeight: '600',
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: {
            width: -1,
            height: 2
        },
        shadowRadius: 5
    },
    button: {
        backgroundColor: '#129fe4',
        width: 350,
        height: 45,
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: {
            width: -1,
            height: 2
        },
        shadowRadius: 5
    },
    buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
        fontSize: 20
    },
    register: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        ...Platform.select({
            ios: {
                top: 150,
            },
            android: {
                top: 120
            }
        })
    },
    text: {
        color: '#fab657',
        fontSize: 16,
        justifyContent: 'center'
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'center',
        alignItems: 'center',
        top: 80
    },
    button_footer: {
        flexDirection: 'row',
        backgroundColor: '#3c66c4',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        margin: 5,
        width: 150,
        height: 40,
        shadowColor: 'black',
        shadowOpacity: 0.7,
        shadowOffset: {
            width: -1,
            height: 2
        },
        shadowRadius: 5
    },
    text_footer: {
        color: 'white',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: "500",
        justifyContent: 'center',
        marginRight: 10
    }
});
