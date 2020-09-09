import React from 'react';
import HomePage from './homeComponent';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { searchUsername } from '../redux/actionCreator';
const mapStateToProps = state => {

    return {

        search_github_user :state.fetchUsername,
    };

}

const mapDispatchToProps = dispatch => ({

    searchUsername: (username) => dispatch(searchUsername(username)),

})
const MainComponent = (props)=>{
    console.log(props);
    return(
        <HomePage search_github_user={props.search_github_user} searchUsername={props.searchUsername}/>
    );
}

export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));