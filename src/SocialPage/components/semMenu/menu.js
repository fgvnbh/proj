import React, { Component } from 'react'
import {Menu} from 'semantic-ui-react'
import {Link} from 'react-router-dom';

export default class MenuExampleTabularOnLeft extends Component {
    state = { activeItem: 'home' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Menu pointing secondary horizontal>
                <Menu.Item name='HOME' as={Link} to="/" />
                <Menu.Item
                    name='USERS'
                    as={Link} to="/users"
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