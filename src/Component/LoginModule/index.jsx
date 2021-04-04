import { useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Grid, Form, Label, Button,  } from 'semantic-ui-react';
import '../../App.css';
import { handleLogin } from '../../Redux/UserReducer';
import Instruction from '../instructions';

const Login = () => {
	const history = useHistory();
	const [emailID, setEmailID] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();

	const handleLoginButtonClick = () => {
		if (emailID !== '' && password !== '') {
			dispatch(handleLogin({ emailID, password }));
			history.push('/home');
		}
	};

	return (
		<>
			<Grid.Column width='2' />
			<Grid.Column width='12'>
				<Grid celled>
					<Grid.Column width='8'>
						<Form>
							<Form.Field>
								<label>E-mail ID/Employee ID</label>
								<input
									placeholder='User Name'
									onChange={(e) => setEmailID(e.target.value)}
								/>
							</Form.Field>
							<Form.Field>
								<label>Password</label>
								<input
									placeholder='Password'
									type='password'
									onChange={(e) =>
										setPassword(e.target.value)
									}
								/>
							</Form.Field>
							<Button
								type='submit'
								primary
								onClick={() => handleLoginButtonClick()}
							>
								Login
							</Button>
							<br />
							<br />
							<Label>Forget/Reset Password</Label>
							<Label
								className='link'
								onClick={() => history.push('/register')}
							>
								Self Registration
							</Label>
						</Form>
					</Grid.Column>
					<Grid.Column
						width='8'
						textAlign='center'
						verticalAlign='middle'
					>
						<Label size='big' color='red'>
							Important points to remember
						</Label>
						<Instruction />
					</Grid.Column>
				</Grid>
			</Grid.Column>
			<Grid.Column width='2' />
		</>
	);
};

export default connect()(Login);
