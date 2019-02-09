import React, { Component } from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class MenuExampleTabularOnLeft extends Component {
    render() {
        return (
            <Menu pointing secondary horizontal>
                {/*<Menu.Item name='ME' as={Link} to="/" />*/}
                <Menu.Item
                    name='USERS'
                    as={Link} to="/users"
                    onClick={()=>{this.props.fetchRequest()}}
                />
                <Menu.Item
                    name='ABOUT'
                    as={Link} to="/About"
                />
                <Menu.Item
                    name='ADD USERS'
                    as={Link} to="/add-user"
                />
            </Menu>
        )
    }
}