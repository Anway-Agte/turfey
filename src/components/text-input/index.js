import React from 'react' ;
import { StyleSheet } from 'react-native';
import { TextField } from 'react-native-ui-lib';
import { View } from 'react-native';


const TextInput = (props) => {
    return(
        <View style={styles.input}>
        <TextField
            floatingPlaceholderColor = {
            {focus : 'grey'}
            } 
            floatingPlaceholder={props.floating}
            placeholder = {props.placeholder}
            width='90%'
            value={props.value}
            onChangeText={props.onChange}
            keyboardType={props.isNumeric ? "numeric" :"default"}
        />
        </View>
    )
} 

const styles = StyleSheet.create({
    input: {
        flex :1 , 
        marginHorizontal : '3%' , 
    }
}) 

export default TextInput ; 