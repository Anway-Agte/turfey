import React from 'react' ; 
import Layout from '../../components/layout';
import TextInput from '../../components/text-input';
import OTPInputView from '@twotalltotems/react-native-otp-input';


class OtpScreen extends React.Component{
    constructor(props){
        super(props)
    } 

    render(){
        return(
            <Layout>
                <OTPInputView
                    style={{width:'90%'}}
                    pinCount={6}
                />

            </Layout>
        )
    }
} 

export default OtpScreen ; 