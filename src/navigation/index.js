import React from 'react' ; 
import { NavigationContainer } from '@react-navigation/native'; 
import HomeNavigator from './home-navigator';
import AuthNavigator from './auth-navigator';

class AppNavigator extends React.Component {
    constructor(props){
        super(props) ;
        this.state = {
            isLoggedIn : true , 
        }
    } 

    login = () => {
        this.setState({isLoggedIn : true})
    }

    render(){
        return(
            <NavigationContainer>
                {this.state.isLoggedIn ? 
                (<HomeNavigator/>): 
                (<AuthNavigator login={this.login}/>)
                }
            </NavigationContainer>
        )
    }
} 

export default AppNavigator ; 