import React from 'react'
import { Text, Colors, TabBar, TouchableOpacity, View, Carousel, Image , Button } from 'react-native-ui-lib';
import Layout from '../../components/layout';
import { Ionicons , MaterialCommunityIcons , FontAwesome , Feather } from '@expo/vector-icons';
import { StyleSheet ,ScrollView } from 'react-native';
import NavBar from '../../components/layout/navbar';
import { BOOKING_PAGE } from '../../constants/route-names';



class Turf extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            IMAGES : [] ,
        }
    }

    componentDidMount =()=>{
        this.setState({
            IMAGES :[
                require('../../../assets/synthetic.jpg'),
                require('../../../assets/futsal.jpg'),
                require('../../../assets/turf.jpg'),
            ]
        }) 
    }

    goBack = () => {
        this.props.navigation.goBack();
    }

    goToBooking = () => {
        this.props.navigation.navigate(BOOKING_PAGE) ; 
    }

    render() {
        return (
            <Layout>
                <NavBar
                    goBack={this.goBack}
                />
                <View style={styles.container}>
                    <Carousel
                        loop
                        containerStyle={{
                            flex: 1
                        }}
                        pageControlPosition={Carousel.pageControlPositions.OVER}
                    >
                        {this.state.IMAGES.map((image, i) => {
                            return (
                                <View flex centerV key={i}>
                                    <Image
                                        style={{ flex: 1 }}
                                        source={image}
                                    ></Image>
                                </View>
                            )
                        })}
                    </Carousel>
                    <ScrollView style={{ flex: 1 }}>
                        <View padding-20>
                            <Text text40 color={Colors.dark20}>High Score</Text>
                        </View>
                        <View paddingL-20>
                            <Text text70 color={Colors.grey40}>Location : {"\n"} Near MIT WPU university , Kothrud , Pune - 38</Text>
                        </View>
                        <View paddingL-20 paddingT-10>
                            <Text text70 color={Colors.grey40}>Rates : {"\n"} 6:00 am to 12:00 pm : 600 per hour 
                            {"\n"} 12:00pm to 4:00 pm : 800 per hour 
                            {"\n"} After 4:00 pm : 1000 per hour 
                            </Text>
                        </View>
                        <View style={{flexDirection:'row' , justifyContent: 'space-evenly',}} padding-20 paddingL-20 bg-white>
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
                        <View padding-20>
                            <Button onPress={this.goToBooking} label="Book a slot" borderRadius={5} backgroundColor={Colors.green20} />
                        </View>
                    </ScrollView>
                </View>
            </Layout>
        )
    }
}

const styles = StyleSheet.create({
    tabStyle: {
        paddingVertical: '3%',
    },
    container: {
        flex: 1,
        width: '100%'
    }
})

export default Turf;