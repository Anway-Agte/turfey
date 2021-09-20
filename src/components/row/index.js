import React from 'react' ; 
import { StyleSheet } from 'react-native';
import { View } from 'react-native-ui-lib';



const Row = (props) => {
    return(
        <View style={styles.row}>
            {props.children}
        </View>
    )
} 

const styles = StyleSheet.create({
    row:  {
        flexDirection : 'row' , 
        paddingHorizontal : '4%' ,
        
    }
}) 

export default Row  ;