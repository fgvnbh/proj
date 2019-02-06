import React from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
const RawLoginForm = props => {
    // const {logIn,hideModalForm}=props;
    let userName,userPass;
    return (
        <div className='login-form'>
            <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
            <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Header as='h2' color='teal' textAlign='center'>
                        <Image src='/logo.png' /> Log-in to your account
                    </Header>
                    <Form size='large'>
                        <Segment stacked>
                            <Form.Input fluid icon='user' iconPosition='left' placeholder='E-mail address' type="text" name="login" ref={node=>userName=node} required/>
                            <Form.Input fluid icon='lock' iconPosition='left' placeholder='Password' type='password' name="password" ref={node=>userPass=node} required/>
                            <Button color='teal' fluid size='large'>
                                Login
                            </Button>
                        </Segment>
                    </Form>
                    <Message>
                        New to us? <a href='#'>Sign Up</a>
                    </Message>
                </Grid.Column>
            </Grid>
        </div>
        // <form>
        //     <div>
        //         <label >
        //             Login:
        //             <input  type="text" name="login" ref={node=>userName=node} required placeholder="Введіть логін"/>
        //         </label>
        //     </div>
        //     <div>
        //         <label >
        //             Password:
        //             <input type="password" name="password" ref={node=>userPass=node} required placeholder="Введіть паррль"/>
        //         </label>
        //     </div>
        //     <button onClick={(e)=>{e.preventDefault(); logIn(userName.value,userPass.value)}}>Увійти</button>
        //     <button onClick={(e)=>{e.preventDefault(); hideModalForm();}}>Гість</button>
        // </form>
    );
};

export default RawLoginForm;
