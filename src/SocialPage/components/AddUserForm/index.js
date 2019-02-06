import React,{Component} from 'react'
import RawAddUserForm from './RawAddUserForm'

class AddUserForm extends Component {
    submit = (values) => {
        this.props.sendForm(values);
    };

    render() {
        return (
            <RawAddUserForm onSubmit={this.submit}
                                  errorMessage={this.errorMessage}/>
        )
    }
}

export default AddUserForm;
