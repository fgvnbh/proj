import React from 'react';
import {Field, reduxForm} from 'redux-form';

const AddUserForm = props => {
    let errDiv,name,birth,description,photo;
    const onClick=()=>{
        if(errDiv)
            errDiv.remove();
    };
    const {handleSubmit, errorMessage} = props;
    return (
        <div onClick={onClick}>
            <form className="ui form" onSubmit={handleSubmit}>
                {errorMessage && <div ref={node => errDiv = node}>
                    {errorMessage}</div>}
                <div className="field">
                    <label>First Name</label>
                    <Field
                        name="name"
                        component="input"
                        type="text"
                        placeholder="Ім'я"
                    />
                </div>
                <div className="field">
                    <label>Date of birth</label>
                    <Field
                        name="birth"
                        component="input"
                        type="date"
                    />
                </div>
                <div className="field">
                    <label>Describe yourself</label>
                    <Field
                        name="description"
                        component="textarea"
                        maxLength="300"
                    />
                </div>
                <div className="field">
                    <label>Photo</label>
                    <Field
                        name="photo"
                        component="input"
                        type="text"
                        placeholder="URL фото"
                    />
                </div>
                <button className="ui button" type="submit" onClick={()=>{window.location.reload()}}>Submit</button>
            </form>
        </div>
    );
};

export default reduxForm({
    form: 'AddUserForm',
})(AddUserForm);
