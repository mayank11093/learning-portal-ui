import { Grid, Header, Button, Form, Checkbox } from 'semantic-ui-react';
import '../App.css';

const Register = () => {
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
					<Button>Go to Login Page</Button>
				</Grid.Column>
				<Grid.Column width='10'>
					<Form>
						<Form.Field>
							<label>Full Name</label>
							<input placeholder='Full Name' />
						</Form.Field>
						<Form.Field>
							<label>Employee ID</label>
							<input placeholder='Employee ID' />
						</Form.Field>
                        <Form.Field>
							<label>E-mail ID</label>
							<input placeholder='E-mail ID' />
						</Form.Field>
						<Form.Field>
							<label>User Name</label>
							<input placeholder='User Name' />
						</Form.Field>
						<Form.Field>
							<label>Password</label>
							<input placeholder='Password' type='password' />
						</Form.Field>
						<Form.Field>
							<label>Contact Number</label>
							<input placeholder='Contact Number' />
						</Form.Field>
						<Form.Field>
							<Checkbox label='I agree to the follow all instructions' />
						</Form.Field>
						<Button type='submit' primary>
							Register
						</Button>
					</Form>
				</Grid.Column>
			</Grid>
		</>
	);
};

export default Register;
