import React from 'react' ; 
import {} from 'react-native' ; 
import Layout from '../../components/layout';
import {Text} from 'react-native-ui-lib' ;

class SearchScreen extends React.Component {
    constructor(props){
        super(props) ;
    }

    render(){
        return(            
            <Layout>
                <Text>
                    Search
                </Text>
            </Layout>
        )
    }
} 

export default SearchScreen ; 