import React, { Component } from 'react';
import { View, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { NavigationActions } from 'react-navigation';
import { Entypo } from '@expo/vector-icons';
import { Input, Button } from '../../components/common';
// Firebase
import firebase from 'firebase';
// Global style
import { styleConfig } from '../../config';

class LoginScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            processing: false
        };
        // Avoiding to bind (this) inside the render function
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onButtonPress = this.onButtonPress.bind(this);
    }

    // Event handler for email TextInput
    onEmailChange(email) {
        // "this" isn't available here unless
        // we bind it to the function (see constructor)
        this.setState({ email });
    }

    // Event handler for password TextInput
    onPasswordChange(password) {
        this.setState({ password });
    }

    // Event handler for "Login button" press action
    onButtonPress() {
        this.setState({ processing: true });
        // Destructuring
        // getting "email" and "password" from state
        const { email, password } = this.state;
        // When working with react-navigation, naviation property is
        // automatically added to the screen components props
        // (the ones declared on AppNavigator, see src/app/config/navigator.js)
        const { navigation } = this.props;
        // Firebase Authentication
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(user => {
                // Redirect to home screen while resetting
                // the root navigation index, avoiding to go back to the Login screen
                const resetNavigation = NavigationActions.reset({
                    index: 0,
                    actions: [
                        NavigationActions.navigate({
                            routeName: 'UserList',
                            params: { user }
                        })
                    ]
                });
                navigation.dispatch(resetNavigation);
            })
            .catch(error => {
                this.setState({ processing: false });
                console.log(error);
            });
    }

    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding">
                <View style={styles.iconWrapper}>
                    <Entypo name="lock" size={128} style={styles.icon} />
                </View>
                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    keyboardType="email-address"
                    iconName="mail"
                    onChange={this.onEmailChange}
                    placeholder="username@email.com"
                    value={this.state.username}
                />
                <Input
                    autoCapitalize="none"
                    autoCorrect={false}
                    iconName="key"
                    onChange={this.onPasswordChange}
                    placeholder="password"
                    secureTextEntry
                    value={this.state.password}
                />
                <Button icon="login" onPress={this.onButtonPress} processing={this.state.processing} text="Login" />
            </KeyboardAvoidingView>
        );
    }
}

export { LoginScreen };

const styles = StyleSheet.create({
    container: {
        backgroundColor: styleConfig.backgroundColor,
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        paddingHorizontal: 20
    },
    iconWrapper: {
        alignItems: 'center',
        marginBottom: 30
    },
    icon: {
        borderWidth: 5,
        borderRadius: 10,
        borderColor: styleConfig.primaryColor,
        color: styleConfig.primaryColor,
        padding: 10
    }
});
