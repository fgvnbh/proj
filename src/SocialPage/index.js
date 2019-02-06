import React from 'react'

import {Provider, connect} from 'react-redux'
import Main from './containers/Main'
import appActionCreators from './actions'
import store from './store'

const mapStateToProps = state => ({
    users: state.users.users,
    error: state.users.error,
    fetchingState: state.users.fetchingState,
    isAuthorized: state.user.isAuthorized,
    showModal: state.showModal.showModal,
    childComponent: state.showModal.childComponent
});

const mapDispatchToProps = dispatch => ({
    sendForm: (values) => dispatch(appActionCreators.app.addForm.sendForm({values})),
    logOut: () => dispatch(appActionCreators.app.user.logOut()),
    logIn: (username, password) => {
        dispatch(appActionCreators.app.user.logIn({username, password}));
    },
    showModalForm: (childComponent) => dispatch(appActionCreators.app.showModal({showModal: true, childComponent})),
    hideModalForm: () => dispatch(appActionCreators.app.showModal({showModal: false, childComponent: null})),
    loadData: () => store.dispatch(appActionCreators.app.universities.fetchRequest())
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