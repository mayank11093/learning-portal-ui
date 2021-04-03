import { Grid, Form, Label, Button, List, Segment } from 'semantic-ui-react';
import '../App.css';

const Login = () => {
	return (
		<>
			<Grid.Column width='2' />
			<Grid.Column width='12'>
				<Grid celled>
					<Grid.Column width='8'>
						<Form>
							<Form.Field>
								<label>User Name/Employee ID</label>
								<input placeholder='User Name' />
							</Form.Field>
							<Form.Field>
								<label>Password</label>
								<input placeholder='Password' type='password' />
							</Form.Field>
							<Button type='submit' primary>
								Login
							</Button>
							<br />
							<br />
							<Label>Forget/Reset Password</Label>
							<Label>Self Registration</Label>
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
						<Segment textAlign='left'>
							<List bulleted>
								<List.Item>
									Use your personal github only for learning
									purpose.
								</List.Item>
								<List.Item>
									All the hand-on related to learning should
									be done on personal laptops.
								</List.Item>
								<List.Item>
									Do not push any password/token to github.
								</List.Item>
								<List.Item>
									In case of any security voilation, strict
									actions can be taken against you.
								</List.Item>
								<List.Item>
									In case of any query/doubt, please contact
									you respective mentor(s).
								</List.Item>
							</List>
						</Segment>
					</Grid.Column>
				</Grid>
			</Grid.Column>
			<Grid.Column width='2' />
		</>
	);
};

export default Login;
