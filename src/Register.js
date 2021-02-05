import Container from "react-bootstrap/Container";
import React,{useState} from 'react';
import Form from 'react-bootstrap/Form';
import {useHistory} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import './Register.css';

function Register(props){
    const {values,submit,change,disabled,errors} = props;

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [primaryemail, setPrimaryEmail] = useState('');
    const [user, setUser] = useState({});
    const history = useHistory();

    function validateForm(){
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(evt){
        evt.preventDefault();
        const newUser= {
            username:username,
            password:password,
            primaryemail:primaryemail
        }

        postNewUser(newUser);
        console.log(newUser);
    }

    const postNewUser = (newUser) => {
        axios
        .post('https://ccorvo-usemytechstufjava2021.herokuapp.com/createnewuser',newUser)
        .then((res)=>{
            setUser([newUser]);
            history.push('/login')
        })
        .catch((err)=>{
            console.log(err);
            debugger;
        })
    }

    return <Container>
		<div className='div_h1'><h1 className='register-title'>Register</h1></div>
		<Form onSubmit={handleSubmit} className='register-form'>
				<Form.Group size='sm' controlId='username'>
					<Form.Label>Username  </Form.Label>
					<Form.Control
						autoFocus
						type='username'
						value={username}
						onChange={(e) => setUsername(e.target.value)}
					/>
				</Form.Group>

				<Form.Group size='sm' controlId='password'>
					<Form.Label>Password  </Form.Label>
					<Form.Control
						type='password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
				</Form.Group>
				<Form.Group size='sm' controlId='primaryemail'>
					<Form.Label>Email  </Form.Label>
					<Form.Control
						type='primaryemail'
						value={primaryemail}
						onChange={(e) => setPrimaryEmail(e.target.value)}
					/>
				</Form.Group>
				

				<Button block size='lg' type='submit' disabled={!validateForm()}>
					Register
				</Button>
			</Form>
		</Container>;
}

export default Register;
