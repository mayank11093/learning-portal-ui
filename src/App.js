import { connect } from 'react-redux';
import './App.css';
import Routes from './Component/Routes';

function App() {
	return (
		<Routes />
		// <div className='App'>
		// 	<Grid>
		// 		<Grid.Row>
		// 			<Grid.Column>
		// 				<Segment color='orange'>
		// 					<Header as='h1' color='orange'>
		// 						Learning Portal
		// 					</Header>
		// 					<Dropdown text='Dropdown' options={options} simple item />
		// 				</Segment>

		// 			</Grid.Column>
		// 		</Grid.Row>
		// 		<Grid.Row>
		// 			<Grid.Column>
		// 				<Segment>
		// 					<Menu attached='top' tabular widths='3'>
		// 						<Menu.Item
		// 							name='Links'
		// 							active={activeItem === 'Links'}
		// 							onClick={handleItemClick}
		// 						/>
		// 						<Menu.Item
		// 							name='POC'
		// 							active={activeItem === 'POC'}
		// 							onClick={handleItemClick}
		// 						/>
		// 						<Menu.Item
		// 							name='Assignments'
		// 							active={activeItem === 'Assignments'}
		// 							onClick={handleItemClick}
		// 						/>
		// 					</Menu>

		// 					<Segment attached='bottom'>
		// 						<Register />
		// 					</Segment>
		// 				</Segment>
		// 			</Grid.Column>
		// 		</Grid.Row>
		// 	</Grid>
		// </div>
	);
}

export default connect()(App);
