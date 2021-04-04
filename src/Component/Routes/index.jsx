import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import { connect } from 'react-redux';
import Login from '../LoginModule';
import Register from '../LoginModule/register';
import { Grid, Header, Segment } from 'semantic-ui-react';

const Routes = () => {
	return (
		<div className='App'>
			<Grid>
				<Grid.Row>
					<Grid.Column>
						<Segment color='orange'>
							<Header as='h1' color='orange'>
								Learning Portal
							</Header>
						</Segment>
					</Grid.Column>
				</Grid.Row>
				<Grid.Row>
					<Grid.Column>
						<Router>
							<Switch>
								<Route exact path='/' component={Login} />
								<Route
									exact
									path='/register'
									component={Register}
								/>
							</Switch>
						</Router>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
};
export default connect()(Routes);
