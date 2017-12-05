import React, { Component } from 'react';
import { Animated, Easing, Text, View } from 'react-native';
import { LinearGradient } from 'expo';

import { styleConfig } from '../../config';
import logo from '../../../assets/images/logo.png';

class WelcomeScreen extends Component {
    constructor(props) {
        super(props);
        this.spinValue = new Animated.Value(0);
    }

    componentDidMount() {
        this.spin();
    }

    spin() {
        this.spinValue.setValue(0);
        Animated.timing(this.spinValue, {
            toValue: 1,
            duration: 20000,
            easing: Easing.linear
        }).start(() => this.spin());
    }

    render() {
        const {
            codeStyle,
            containerStyle,
            descriptionStyle,
            descriptionViewStyle,
            logoStyle,
            titleStyle,
            welcomeViewStyle
        } = styles;

        const spin = this.spinValue.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        });

        logoStyle.transform = [{ rotate: spin }];

        return (
            <View style={containerStyle}>
                <LinearGradient
                    style={{ flex: 3 }}
                    colors={[styleConfig.primaryDarkColor, styleConfig.primaryLightColor]}>
                    <View style={welcomeViewStyle}>
                        <Animated.Image source={logo} style={logoStyle} />
                        <Text style={titleStyle}>
                            Welcome{'\n'}to{'\n'}React Native
                        </Text>
                    </View>
                </LinearGradient>
                <View style={descriptionViewStyle}>
                    <Text style={descriptionStyle}>
                        To get started, edit
                        <Text style={codeStyle}>
                            {'\n'}src/app/screens/Welcome/Welcome.screen.js{'\n'}
                        </Text>
                        and save to reload.
                    </Text>
                </View>
            </View>
        );
    }
}

export { WelcomeScreen };

const styles = {
    containerStyle: {
        flex: 1,
        flexDirection: 'column'
    },
    welcomeViewStyle: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    },
    logoStyle: {
        height: 98,
        resizeMode: 'contain'
    },
    titleStyle: {
        backgroundColor: 'transparent',
        color: styleConfig.whiteColor,
        fontSize: 32,
        fontWeight: 'bold',
        marginTop: 15,
        textAlign: 'center'
    },
    descriptionViewStyle: {
        alignItems: 'center',
        backgroundColor: styleConfig.whiteColor,
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 15
    },
    descriptionStyle: {
        color: styleConfig.text.primaryColor,
        fontSize: 16,
        textAlign: 'center'
    },
    codeStyle: {
        color: '#bd4147'
    }
};
