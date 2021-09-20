import React from 'react' ; 
import Layout from '../../components/layout'; 
import {Button, Text} from 'react-native-ui-lib' ; 
import { SIGN_UP } from '../../constants/route-names';

class LoginScreen extends React.Component {
    constructor(props){
        super(props) ;
        this.state = {
            mobile_no : ""

        }
        
    } 

    goToSignUp = () => {
        this.props.navigation.navigate(SIGN_UP) ;
    }

    render(){
        return(
            <Layout>
                <Text>
                    Login
                </Text>
                <Button label="Go to Sign up" onPress={this.goToSignUp} />
                <Button label="LOGIN" onPress={this.props.login}/>
            </Layout>
        )
    }
} 

export default LoginScreen