import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { Grid, Header, Button, Form, Checkbox, Modal } from 'semantic-ui-react';
import '../../App.css';
import { handleRegister, setUserRegistered } from '../../Redux/UserReducer';

const Register = () => {
	const history = useHistory();
	const dispatch = useDispatch();

	const isRegistered = useSelector((state) => state.UserReducer.isRegistered);
	useEffect(() => {
		return setUserRegistered(false);
	});

	const [fullName, setFullName] = useState('');
	const [employeeID, setEmployeeID] = useState('');
	const [emailID, setEmailID] = useState('');
	const [password, setPassword] = useState('');
	const [contact, setContact] = useState('');
	const [consent, setConsent] = useState(false);

	const handleRegisterButtonClick = () => {
		if (
			fullName !== '' &&
			employeeID !== '' &&
			emailID !== '' &&
			password !== '' &&
			contact !== '' &&
			consent
		) {
			dispatch(
				handleRegister({
					fullName,
					employeeID,
					emailID,
					password,
					contact,
				})
			);
		}
	};

	const navigateHome = () => {
		dispatch(setUserRegistered(false));
		history.push('/');
	};
	return (
		<>
			<Grid celled>
				<Grid.Column width='6' verticalAlign='middle'>
					<Header as='h1' size='huge'>
						Self
						<br />
						<br />
						Registration
					</Header>
					<br />
					<br />
					<Button onClick={() => history.push('/')}>
						Go to Login Page
					</Button>
				</Grid.Column>
				<Grid.Column width='10'>
					<Form>
						<Form.Field>
							<label>Full Name</label>
							<input
								placeholder='Full Name'
								onChange={(e) => setFullName(e.target.value)}
							/>
						</Form.Field>
						<Form.Field>
							<label>Employee ID</label>
							<input
								placeholder='Employee ID'
								onChange={(e) => setEmployeeID(e.target.value)}
							/>
						</Form.Field>
						<Form.Field>
							<label>E-mail ID</label>
							<input
								placeholder='E-mail ID'
								onChange={(e) => setEmailID(e.target.value)}
							/>
						</Form.Field>
						<Form.Field>
							<label>Password</label>
							<input
								placeholder='Password'
								type='password'
								onChange={(e) => setPassword(e.target.value)}
							/>
						</Form.Field>
						<Form.Field>
							<label>Contact Number</label>
							<input
								placeholder='Contact Number'
								onChange={(e) => setContact(e.target.value)}
							/>
						</Form.Field>
						<Form.Field>
							<Checkbox
								label='I agree to the follow all instructions'
								checked={consent}
								onClick={() => setConsent(!consent)}
							/>
						</Form.Field>
						<Button
							type='submit'
							primary
							onClick={() => handleRegisterButtonClick()}
						>
							Register
						</Button>
					</Form>
				</Grid.Column>
			</Grid>
			<Modal
				centered={false}
				open={isRegistered}
				onClose={() => navigateHome()}
				onOpen={() => {}}
				size='mini'
			>
				<Modal.Header>User Registered</Modal.Header>
				<Modal.Content>
					<Modal.Description>You can now login.</Modal.Description>
				</Modal.Content>
				<Modal.Actions>
					<Button
						onClick={() => (isRegistered ? navigateHome() : null)}
					>
						OK
					</Button>
				</Modal.Actions>
			</Modal>
		</>
	);
};

export default Register;
