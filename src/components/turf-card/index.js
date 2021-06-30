import React from 'react' ; 
import {Card , TouchableOpacity , Text , Button, View , Colors} from 'react-native-ui-lib' ; 
import {MaterialCommunityIcons , FontAwesome , Feather } from '@expo/vector-icons'
import { StyleSheet } from 'react-native';


class TurfCard extends React.Component{
    constructor(props){
        super(props) 
    } 

    render(){
        return(
            <Card
            enableShadow={true}
            borderRadius={5}
            width={'90%'}
            style={{flex:0}}
        >
            <Card.Image style={{height:150}} source={require('../../../assets/turf.jpg')} />
            <Card.Section
            />
                <View padding-20 bg-white>
                    <Text text50 color={Colors.grey10}>
                        High Score FC
                    </Text>
                    <Text text80 color={Colors.grey40}>
                        Rambaug Colony , Pune
                    </Text> 
                </View>
                <View style={{flexDirection:'row' , justifyContent: 'space-evenly',}} paddingL-20 bg-white>
                    <TouchableOpacity>
                        <MaterialCommunityIcons name="google-maps" size={36} color="blue" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <FontAwesome name="whatsapp" size={36} color="green" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="phone-call" size={36} color="green" />
                    </TouchableOpacity>
                </View>
                <View margin-5 padding-10>
                    <Button onPress={this.props.goToTurf} backgroundColor={Colors.green20} borderRadius={5} label="Book Now" />
                </View>
        </Card>
        )
    }
} 


export default TurfCard ; 