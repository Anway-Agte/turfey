import React from 'react' ; 
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs' 
import HomeScreen from '../../screens/home' ; 
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';
import HomeStackNavigator from '../home-stack-navigator/index.js';
import {HOME,PROFILE_PAGE,SEARCH_PAGE,TURF_PAGE} from '../../constants/route-names'
import SearchScreen from '../../screens/search';
import ProfileScreen from '../../screens/profile';

const HomeStack = createBottomTabNavigator() ; 

const HomeNavigator = () => {

    return(
        <HomeStack.Navigator 
            sceneContainerStyle={{marginTop : Constants.statusBarHeight}} 
            initialRouteName={HOME}
            tabBarOptions={{
                activeTintColor : '#3c92e8', 
                activeBackgroundColor : 'white',
                inactiveBackgroundColor : 'white',
            }}
        >
            <HomeStack.Screen 
                name={HOME} 
                component={HomeStackNavigator}
                options={{
                    tabBarLabel:"Home" ,
                    tabBarIcon :({color,size})=>
                    (<AntDesign name="home" size={28} color={color} />)
                    
                }} 
            />
            <HomeStack.Screen
                name={SEARCH_PAGE}
                component={SearchScreen}
                options = {{
                    tabBarLabel:"Search",
                    tabBarIcon : ({color,size}) => 
                    (<AntDesign name="search1" size={28} color={color} />)
                    
                }}
                
            /> 
            <HomeStack.Screen 
                name={PROFILE_PAGE}
                component={ProfileScreen}
                options = {{
                    tabBarLabel : "Profile" ,
                    tabBarIcon : ({color}) => 
                    (<AntDesign name="user" size={28} color={color} />)
                }}
            />
        </HomeStack.Navigator>
    )

} 

export default HomeNavigator ; 