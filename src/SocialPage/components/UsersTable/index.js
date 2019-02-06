import React, {PureComponent} from 'react';
import Table from './Table'

class WrappedTable extends PureComponent {
    onItemClick=(id)=>{
        console.log("onItemClick2 = "+id);
        this.props.history.push(`/users/${id}`);
    };
    render() {
        return (
            <Table {...this.props} onItemClick={this.onItemClick}/>
        );
    }
};

WrappedTable.propTypes = {};

export default WrappedTable;
