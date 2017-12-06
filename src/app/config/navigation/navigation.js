import { Platform } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Constants } from 'expo';
// Global style
import { styleConfig } from '../index';
// Application Screens
import { WelcomeScreen, LoginScreen, UserListScreen, UserDetailsScreen } from '../../screens';

const HEADER_STYLE = {
    headerMode: 'float',
    headerStyle: {
        backgroundColor: styleConfig.primaryColor,
        borderBottomColor: styleConfig.primaryColor,
        // workaround for Android navigation header issue
        // with statusBar
        marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0
    },
    headerTintColor: styleConfig.whiteColor,
    headerTitleStyle: {
        alignSelf: 'center',
        fontSize: 20,
        textAlign: 'center'
    }
};

const AppNavigator = StackNavigator(
    // Route config
    {
        Welcome: {
            screen: WelcomeScreen,
            navigationOptions: {
                header: null // Will hide the navigation header
            }
        },
        Login: {
            screen: LoginScreen,
            navigationOptions: {
                header: null
            }
        },
        UserList: {
            screen: UserListScreen,
            navigationOptions: {
                title: 'Users',
                headerBackTitle: null, // Will hide the back title (showing only the back arrow)
                ...HEADER_STYLE,
                ...styleConfig.shadow,
                elevation: 3 // override elevation with 3
            }
        },
        UserDetails: {
            screen: UserDetailsScreen,
            navigationOptions: {
                headerBackTitle: null,
                ...HEADER_STYLE,
                headerStyle: {
                    ...HEADER_STYLE.headerStyle, // apply HEADER_STYLE but...
                    elevation: 0, // override elevation value with 0
                    shadowOpacity: 0 // override shadow opacity with 0
                }
            }
        }
    },
    // Navigator config
    {
        initialRouteName: 'Login'
    }
);

export { AppNavigator };
