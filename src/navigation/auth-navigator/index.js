import React from 'react' ;
import {createStackNavigator} from '@react-navigation/stack' ; 
import { LOGIN, SIGN_UP } from '../../constants/route-names';
import SignUpScreen from '../../screens/sign-up';
import LoginScreen from '../../screens/login';
import Constants  from 'expo-constants';
import OtpScreen from '../../screens/otp';

const AuthStack = createStackNavigator() ;

const AuthNavigator = ({login}) => {
    return(
        <AuthStack.Navigator 
            initialRouteName={SIGN_UP}
            screenOptions={{
                headerShown : false , 
                cardStyle : {
                    marginTop : Constants.statusBarHeight
                }
            }}
        >
            <AuthStack.Screen name={SIGN_UP} component={SignUpScreen}/>
            <AuthStack.Screen name={LOGIN}>
             {props => <LoginScreen {...props} login={login}/>}
            </AuthStack.Screen>
            <AuthStack.Screen name="OTP" component={OtpScreen}/>
        </AuthStack.Navigator>
    )
} 

export default AuthNavigator ;