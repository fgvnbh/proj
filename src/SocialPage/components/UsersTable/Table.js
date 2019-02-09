import React, {PureComponent} from 'react';
import Row from './Row'
import "semantic-ui-css/semantic.min.css";

class Table extends PureComponent {
    render() {
        const {users} = this.props;
        return (
            users && users.length > 0 ?
                <div className="ui link cards">
                    {users.map((user, i) =>
                        <Row key={user._id} num={i + 1} {...user} />)}
                </div>
                : <img src='https://steemitimages.com/0x0/https://cdn.dribbble.com/users/1129101/screenshots/3513987/404.gif'/>
        );
    }
}

export default Table;
