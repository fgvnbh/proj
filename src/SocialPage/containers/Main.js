import React, {Component} from 'react';
import {About, AddUserForm, Home, UsersTable, NotFound, Comments} from '../components'
import {Route, Switch, Router} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import "semantic-ui-css/semantic.min.css";
import MenuExapmle from '../components/semMenu/menu'
import HeaderExample from '../components/semMenu/header'
class Main extends Component {
    componetDidCatch(error, info) {
        console.log(`Err: ${error}, info: ${info}`);
        Router.history.push('/');
    }

    render() {
        const {fetchRequest} = this.props;
        return (
            <BrowserRouter>
                <body>
                <div>
                    <HeaderExample/>
                    <MenuExapmle fetchRequest={fetchRequest}/>
                    <section>
                        <div>
                            <Switch>
                                {/*<Route path="/" exact component={()=><Home logOut={logOut} logIn={logIn}/>}/>*/}
                                <Route path="/users" render={({history}) => {return <UsersTable {...this.props} history={history} />}}/>
                                <Route path="/About" component={About}/>
                                <Route path='/add-user' component={()=><AddUserForm sendForm={this.props.sendForm}/>} />
                                <Route path="/add-account" component={About}/>
                                {/*<Route path="/comments" component={About}/>*/}
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
