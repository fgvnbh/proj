import React, {PureComponent} from 'react';
import Row from './Row'

class Table extends PureComponent {
    render() {
        const {users, onItemClick} = this.props;
        return (
            users && users.length > 0 ?
                <table>
                    <thead>
                    <tr>
                        <th>USERS</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, i) =>
                        <Row key={user._id} num={i + 1} {...user} onItemClick={onItemClick}/>)}
                    </tbody>
                </table>
                : <img src='https://steemitimages.com/0x0/https://cdn.dribbble.com/users/1129101/screenshots/3513987/404.gif'/>
        );
    }
}

export default Table;
