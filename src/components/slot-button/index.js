import React from 'react' ; 
import { StyleSheet } from 'react-native';
import { Button, Colors} from 'react-native-ui-lib' ; 
import { addSlot, removeSlot } from '../../redux/actions/action-creator';

class SlotButton extends React.Component{
    
    constructor(props){
        super(props) ;
        this.state = {
            isSelected : false, 
            timingStart : this.props.timing + ":00" ,
            timingEnd : this.props.timing + 1
        }
    } 

 

    componentDidUpdate = (prevProps ,prevState , snapshot) => {
        if(this.state.isSelected !== prevState.isSelected){
            if(this.state.isSelected){
                this.props.addSlot(this.props.timing)
            }
            else{
                this.props.removeSlot(this.props.timing)
            }
        }
    }

    handlePress = () => {
            this.setState(prevState => ({isSelected : !prevState.isSelected})) ; 
    } 



    render(){
        return(
            <Button style={styles.button} size='medium' backgroundColor={Colors.green50} outline={!this.state.isSelected} outlineColor={Colors.green50} onPress={this.handlePress} label={this.state.timingStart + "-" + this.state.timingEnd + ":00"} />
        )
    }

}

const styles = StyleSheet.create({
    button : {
        marginHorizontal : '1.5%' , 
        marginVertical : '2%'
    }
}) 

export default SlotButton ; 