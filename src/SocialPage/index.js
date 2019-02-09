import React from 'react'

import {Provider, connect} from 'react-redux'
import Main from './containers/Main'
import appActionCreators from './actions'
import store from './store'

const mapStateToProps = state => ({
    users: state.users.users,
    error: state.users.error,
    fetchingState: state.users.fetchingState,
});

const mapDispatchToProps = dispatch => ({
    sendForm: (values) => dispatch(appActionCreators.app.addForm.sendForm({values})),
    fetchRequest: () => store.dispatch(appActionCreators.app.users.fetchRequest()),
});

let ConnectedUsersViewer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

export default () => (
    <Provider store={store}>
        <ConnectedUsersViewer/>
    </Provider>
)