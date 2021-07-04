import React from "react" ;
import Layout from "../../components/layout";
import {Text , Button} from 'react-native-ui-lib' ;
import { LOGIN } from "../../constants/route-names";

class SignUpScreen extends React.Component {
    constructor(props){
        super(props) ; 
        this.state  = {
            fname : "",
            lname : "" ,
            mobile_no: "" ,
            city : "" , 
            pincode : "" ,

        }
    }

    goToLogin = () => {
        this.props.navigation.navigate(LOGIN)
    }

    render(){

        return(
            <Layout>
                <Text>
                    Sign Up 
                </Text>
                <Button label="Go to Login" onPress={this.goToLogin} />
            </Layout>
        )  

    }

} 

export default SignUpScreen ;

// Me protecc 
// Me attacc 
// But Most importantly I commit bacc to bacc