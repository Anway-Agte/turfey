import React from 'react' ; 
import Layout from '../../components/layout' ;
import TurfCard from '../../components/turf-card';
import {TURF_PAGE} from '../../constants/route-names'


class HomeScreen extends React.Component { 
    constructor(props){
        super(props)
    } 

    goToTurf = () => {
        this.props.navigation.navigate(TURF_PAGE) ; 
    }

    render(){
        return(
            <Layout>    
                <TurfCard
                    goToTurf={this.goToTurf}
                />
            </Layout>
        )
    }
} 

export default HomeScreen ; 