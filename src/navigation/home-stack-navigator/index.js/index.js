import React from 'react' ; 
import {createStackNavigator} from '@react-navigation/stack' ;  
import HomeScreen from '../../../screens/home';
import BookingScreen from '../../../screens/booking-screen' ;
import Turf from '../../../screens/turf';
import { BOOKING_PAGE, HOME_PAGE, TURF_PAGE } from '../../../constants/route-names';

const HomeStack = createStackNavigator() ; 

class HomeStackNavigator extends React.Component{
    constructor(props){
        super(props)
    } 
    render(){
        return(
            <HomeStack.Navigator  
                mode='card'
                initialRouteName={HOME_PAGE}
                screenOptions={{
                    animationEnabled:true ,                    
                }}
                
            >
                <HomeStack.Screen options={{headerShown : false}} name={HOME_PAGE} component={HomeScreen} />
                <HomeStack.Screen options={{headerShown : false}} name={TURF_PAGE} component={Turf}/>
                <HomeStack.Screen options={{headerShown : false}} name={BOOKING_PAGE} component={BookingScreen}/>
            </HomeStack.Navigator>
        )
    }
} 

export default HomeStackNavigator ; 