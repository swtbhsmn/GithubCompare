import React from 'react';
import HomePage from './homeComponent';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { searchUsername } from '../redux/actionCreator';
const mapStateToProps = state => {

    return {

        search_github_user: state.fetchUsername,
    };

}

const mapDispatchToProps = dispatch => ({

    searchUsername: (username) => dispatch(searchUsername(username)),

})
const MainComponent = (props) => {

    return (

        <Switch>

            <Route  path='/home' component={(() => { return (
                                                    <HomePage search_github_user={props.search_github_user} 
                                                    searchUsername={props.searchUsername} />
                                                    
                                                    ); })} />
            <Redirect to="/home" />

        </Switch>

    );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainComponent));