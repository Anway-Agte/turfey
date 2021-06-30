import React from 'react' ;
import { StyleSheet } from 'react-native';
import { Text , View , DateTimePicker , Colors , Button} from 'react-native-ui-lib';
import { connect } from 'react-redux';
import Layout from '../../components/layout';
import NavBar from '../../components/layout/navbar';
import SlotButton from '../../components/slot-button';
import { addSlot, clearSlot, removeSlot, resetDate, setDate, setTurf } from '../../redux/actions/action-creator';

const timings = [6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

class BookingScreen extends React.Component{
    constructor(props){
        super(props) ; 
    } 

    componentDidMount = () => {
        this.props.clearSlot() ; 
        this.props.resetDate() ;
    } 

    componentWillUnmount = () => {
        this.props.clearSlot() ; 
        this.props.resetDate() ; 
    }

    goBack = () => {
        this.props.navigation.goBack() ; 
    } 

    handleDateChange = (value) => {
         this.props.setDate(value) 
    }

    render(){
        return(
            <Layout>
                <NavBar
                    goBack = {this.goBack}
                ></NavBar>
                <View style={styles.container}>
                    <View padding-20>
                        <Text text50 color={Colors.red40}>
                            Search available slots
                        </Text>
                    </View>
                    <View padding-20>
                        <DateTimePicker
                            title='Date'
                            placeholder ='Select a date'
                            minimumDate = { new Date()}
                            containerStyle = {{width:'100%'}}
                            dateFormat = {'DD MMMM ,YYYY'}
                            mode = 'date'
                            onChange = { (value) => this.handleDateChange(value)}
                        />
                    </View>
                    <View paddingT-10 paddingL-20>
                        <Text text60 color={Colors.green40}>
                            Available Slots : 
                        </Text>
                        <View paddingT-20 style = {styles.slot}> 
                            {
                                timings.map((timing) => (
                                    <SlotButton 
                                        timing = {timing}
                                        addSlot = {this.props.addSlot}
                                        removeSlot = {this.props.removeSlot}    
                                        slots = {this.props.slots}
                                    />
                                ))
                            }
                        </View>
                        <Text>{}</Text>
                        {
                            this.props.slots.map((slot) => (
                                <Text>{slot}</Text>
                            ))
                        } 
                        <Button disabled={!this.props.slots.length} borderRadius={5} label="Confirm and Proceed"/>
                    </View>

                </View>

            </Layout>
        )
    }
} 

const styles = StyleSheet.create({
    container : {
        flex : 1 ,
        width : '100%',
    } , 
    slot: {
        flexDirection : 'row' ,
        flexWrap : 'wrap' , 
    } , 

})

const mapStateToProps = (state) => ({
    slots : state.booking.slots , 
    date : state.booking.date
})

export default connect( mapStateToProps ,
     {  addSlot : addSlot , 
        removeSlot : removeSlot ,
        clearSlot : clearSlot , 
        setDate : setDate , 
        resetDate : resetDate})(BookingScreen) ;  