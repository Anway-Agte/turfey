import React from 'react' ; 
import { NavigationContainer } from '@react-navigation/native'; 
import HomeNavigator from './home-navigator';

class AppNavigator extends React.Component {
    constructor(props){
        super(props) ;
    } 

    render(){
        return(
            <NavigationContainer>
                <HomeNavigator/>
            </NavigationContainer>
        )
    }
} 

export default AppNavigator ; 