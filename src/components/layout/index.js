import React from 'react' ; 
import { render } from 'react-dom';
import { StyleSheet } from 'react-native'; 
import { View } from 'react-native-ui-lib';

const Layout = (props) => {
    return(
        <View style={styles.container}>
            {props.children}
        </View>
    )
} 

const styles = StyleSheet.create({
    container : {
        flex : 1 , 
        alignItems : 'center' , 
        justifyContent: 'center', 
        backgroundColor : 'white', 
     }
}) 

export default Layout