import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import query from '../queries/currentUser';
import {hashHistory} from 'react-router';


export default (WrappedComponent) => {
    class requireAuth extends Component {
        componentWillUpdate(nextProps) {
            if(!this.props.data.loading && !nextProps.data.user) {
              hashHistory.push('/login');
            }
        }
        render(){
            return <WrappedComponent {...this.props} />
        }
    }  
    return graphql(query)(requireAuth);
}