import React, {Component} from 'react';
import {About, AddUserForm, Home, LoginForm, UsersTable, NotFound, Comments} from '../components'
import {Route, Link, Switch, Router} from 'react-router-dom';
import ModalForm from '../components/ModalForm'
import {BrowserRouter} from 'react-router-dom';
import StyledSpan from '../components/StyledComponents/span'
import Mainn from '../containers/Main'
import "semantic-ui-css/semantic.min.css";
import MenuExapmle from '../components/semMenu/menu'
import HeaderExample from '../components/semMenu/header'
class Main extends Component {
    componetDidCatch(error, info) {
        console.log(`Err: ${error}, info: ${info}`)
        Router.history.push('/');
    }

    render() {
        const {loadData, isAuthorized, logOut, showModal, childComponent, showModalForm} = this.props;
        return (
            <BrowserRouter>
                <body>
                <div>
                    <HeaderExample/>
                    <MenuExapmle/>
                    <section>
                        {showModal && <ModalForm ChildComponent={childComponent} {...this.props} />}
                        <div>
                            <Switch>
                                <Route path="/" exact component={Home}/>
                                <Route path="/users" render={({history}) => {return <UsersTable {...this.props} history={history}/>}}/>
                                <Route path="/About" component={About}/>
                                <Route path='/add-user' sendForm={this.props.sendForm} component={AddUserForm} />
                                <Route path="/add-account" component={About}/>
                                {/*<Route path="/comments" component={About}/>*/}
                                <Route component={NotFound}/>
                            </Switch>
                        </div>
                    </section>
                </div>
                </body>
            </BrowserRouter>
        );
    }
}

export default Main;
