import React from 'react';
import redux from 'react-redux'
import {reduxForm} from 'redux-form';

const AddUserForm = props => {
    let errDiv;
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
                    <input type="text" name="name" placeholder="First Name"/>
                </div>
                <div className="field">
                    <label>Date of birth</label>
                    <input type="date" name="birth" placeholder="Date of birth"/>
                </div>
                <div className="field">
                    <label>Describe yourself</label>
                    <input type="text" name="name" placeholder="Description (max 500 symbols)" maxLength="500"/>
                </div>
                <div className="field">
                    <label>Photo</label>
                    <input type="text" name="name" placeholder="Picture URL"/>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
            {/*<form onSubmit={handleSubmit}>*/}
                {/*{errorMessage && <div ref={node => errDiv = node}>*/}
                    {/*{errorMessage}</div>}*/}
                {/*<span>*/}
                    {/*<label>Ім'я: </label>*/}
                        {/*<Field*/}
                            {/*name="name"*/}
                            {/*component="input"*/}
                            {/*type="text"*/}
                            {/*placeholder="Введіть назву вузу"*/}
                        {/*/>*/}
                {/*</span>*/}
                {/*<span>*/}
                    {/*<label>Дата народження: </label>*/}
                        {/*<Field*/}
                            {/*name="birth"*/}
                            {/*component="input"*/}
                            {/*type="date"*/}
                        {/*/>*/}
                {/*</span>*/}
                {/*<span>*/}
                    {/*<label>Про себе: </label>*/}
                        {/*<Field*/}
                            {/*name="description"*/}
                            {/*component="textarea"*/}
                            {/*maxLength="500"*/}
                        {/*/>*/}
                {/*</span>*/}
                {/*<span>*/}
                    {/*<label>Фото: </label>*/}
                        {/*<Field*/}
                            {/*name="photo"*/}
                            {/*component="input"*/}
                            {/*type="text"*/}
                            {/*placeholder="URL фото"*/}
                        {/*/>*/}
                {/*</span>*/}
                {/*<span>*/}
                    {/*<button type="submit" >Додати</button>*/}
                {/*</span>*/}
            {/*</form>*/}
        </div>
    );
};

export default reduxForm({
    form: 'AddUserForm', // a unique identifier for this form
})(AddUserForm);
