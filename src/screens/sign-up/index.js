import React from "react" ;
import Layout from "../../components/layout";
import {Text , Button , Colors} from 'react-native-ui-lib' ;
import { LOGIN } from "../../constants/route-names";
import Row from "../../components/row" ; 
import TextInput from "../../components/text-input";
import ModalSelector from "react-native-modal-selector";

const cities = [{"key": 0 , "label" : "Pune"} ,
                {"key": 1 , "label" : "Mumbai"} ,        
                {"key": 2 , "label" : "Bangalore"}
                ] ; 

class SignUpScreen extends React.Component {
    constructor(props){
        super(props) ; 
        this.state  = {
            fname : "",
            lname : "" ,
            mobile_no: "+91 " ,
            city : "" , 
            pincode : "" ,
            error : "" 
        }
    }

    shouldComponentUpdate = (nextProps,nextState) => {
    
        return nextState.mobile_no.substring(0,5) === this.state.mobile_no.substring(0,5) ; 
    }

    getHandler = key => value => {
        this.setState({[key] : value })
    }

    goToLogin = () => {
        this.props.navigation.navigate(LOGIN)
    }

    signUp = () => {

        if(this.validateForm()){
            this.props.navigation.navigate("OTP") ; 
        }
        
    }

    validateForm = () => {
        
        if(
            this.state.fname === "" || this.state.lname === "" || + this.state.fname || +this.state.lname
        ){
            this.setState({error : "Please enter your full name"})
            return false
        }
        else if(
            this.state.city === ""
        ){
            this.setState({error:"Please select a city"}) ; 
            return false
        }
        else if(
            this.state.mobile_no.length !== 14
        ){
            this.setState({error : "Please enter a 10 digit mobile number"}) ; 
            return false
        }
        else if(
            this.state.pincode.length !== 6
        ){
            this.setState({error : "Please enter a valid pincode"}) ; 
            return false ; 
        }
        else{
            this.setState({error : "" })
            return true 
        }

    }

    render(){

        return(
            <Layout>

                <Row>
                    <TextInput
                        placeholder = "First Name"
                        floating={true}
                        onChange = {this.getHandler('fname')}
                        value = {this.state.fname}
                    />
                    <TextInput
                        placeholder = "Last Name"
                        floating={true}
                        onChange = {this.getHandler('lname')}
                        value={this.state.lname}
                    />
                </Row>
                <Row>
                    <TextInput
                        placeholder="Mobile Number"
                        floating={true}
                        onChange={this.getHandler('mobile_no')}
                        isNumeric={true}
                        value={this.state.mobile_no}
                    />
                </Row>
                <Row>
                    <ModalSelector
                        data={cities}
                        initValue="City"
                        style={{flex:1}}
                        onChange={(option)=>{this.setState({"city" : option.label})}}
                    />
                    <TextInput
                        placeholder="Pincode"
                        floating={false}
                        isNumeric={true}
                        onChange={this.getHandler('pincode')}
                        value={this.state.pincode}
                    />
                </Row>
                <Row>
                    <Button 
                        style={{width:'100%'}} 
                        borderRadius={5} 
                        backgroundColor={Colors.blue30} 
                        label="Sign up" 
                        onPress={this.signUp}
                    />
                </Row>
                <Row>
                    <Text style={{marginTop:'2%'}} color={Colors.red20}> {this.state.error} </Text>
                </Row>
                <Row>
                    <Button 
                        link 
                        style={{width:'100%' , marginTop:'2%'}} 
                        borderRadius={5} 
                        backgroundColor={Colors.blue30} 
                        label="Already have an account ?" 
                        onPress={this.goToLogin} 
                    />
                </Row>
            </Layout>
        )  

    }

} 

export default SignUpScreen ;