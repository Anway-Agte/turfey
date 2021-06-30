import React from 'react';
import { StyleSheet } from 'react-native';
import { TouchableOpacity, TabBar } from 'react-native-ui-lib';
import { Ionicons } from '@expo/vector-icons';
import { render } from 'react-dom';

const NavBar = (props) => {
    return (
        <TabBar
            style={styles.tabStyle}
            backgroundColor={'white'}
            height={30}
            enableShadow
        >
            <TabBar.Item width={60} backgroundColor='white'>
                <TouchableOpacity onPress={props.goBack}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </TouchableOpacity>
            </TabBar.Item>
        </TabBar>
    )
}

const styles = StyleSheet.create({
    tabStyle: {
        paddingVertical: '3%',
    },
})

export default NavBar